import { NextRequest, NextResponse } from 'next/server';
import { scripts } from '@/lib/apiData';
import { AnswerScript } from '@/types';
import fs from 'fs';
import path from 'path';

export async function GET() {
  return NextResponse.json(scripts);
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    const studentId = formData.get('studentId') as string;
    const examId = formData.get('examId') as string;

    if (!file || !studentId || !examId) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Create uploads directory if it doesn't exist
    const uploadsDir = path.join(process.cwd(), 'public', 'uploads', 'scripts');
    if (!fs.existsSync(uploadsDir)) {
      fs.mkdirSync(uploadsDir, { recursive: true });
    }

    const fileName = `${Date.now()}-${file.name}`;
    const filePath = path.join(uploadsDir, fileName);
    const buffer = Buffer.from(await file.arrayBuffer());
    fs.writeFileSync(filePath, buffer);

    const script: AnswerScript = {
      id: `sc${scripts.length + 1}`,
      studentId,
      examId,
      pdfUrl: `/uploads/scripts/${fileName}`,
      uploadedAt: new Date().toISOString(),
      status: 'pending',
      fileName: file.name,
      fileSize: file.size,
    };
    scripts.push(script);
    return NextResponse.json(script, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}