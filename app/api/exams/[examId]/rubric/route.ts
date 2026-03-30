import { NextRequest, NextResponse } from 'next/server';
import { rubrics, exams } from '@/lib/apiData';
import fs from 'fs';
import path from 'path';

export async function GET(request: NextRequest, { params }: { params: Promise<{ examId: string }> }) {
  const { examId } = await params;
  const exam = exams.find(e => e.id === examId);
  if (!exam) return NextResponse.json({ error: 'Exam not found' }, { status: 404 });
  const rubricUrl = rubrics.get(examId);
  if (!rubricUrl) return NextResponse.json({ error: 'Rubric not found' }, { status: 404 });
  return NextResponse.json({ rubricUrl });
}

export async function POST(request: NextRequest, { params }: { params: Promise<{ examId: string }> }) {
  try {
    const { examId } = await params;
    const exam = exams.find(e => e.id === examId);
    if (!exam) return NextResponse.json({ error: 'Exam not found' }, { status: 404 });

    const formData = await request.formData();
    const file = formData.get('file') as File;
    if (!file) return NextResponse.json({ error: 'File required' }, { status: 400 });

    // Create uploads directory if it doesn't exist
    const uploadsDir = path.join(process.cwd(), 'public', 'uploads', 'rubrics');
    if (!fs.existsSync(uploadsDir)) {
      fs.mkdirSync(uploadsDir, { recursive: true });
    }

    const fileName = `${Date.now()}-${file.name}`;
    const filePath = path.join(uploadsDir, fileName);
    const buffer = Buffer.from(await file.arrayBuffer());
    fs.writeFileSync(filePath, buffer);

    const rubricUrl = `/uploads/rubrics/${fileName}`;
    rubrics.set(examId, rubricUrl);
    return NextResponse.json({ rubricUrl }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}

export async function PUT(request: NextRequest, { params }: { params: Promise<{ examId: string }> }) {
  // Same as POST, replace
  return POST(request, { params });
}

export async function DELETE(request: NextRequest, { params }: { params: Promise<{ examId: string }> }) {
  const { examId } = await params;
  const exam = exams.find(e => e.id === examId);
  if (!exam) return NextResponse.json({ error: 'Exam not found' }, { status: 404 });
  rubrics.delete(examId);
  return NextResponse.json({ message: 'Rubric deleted' });
}