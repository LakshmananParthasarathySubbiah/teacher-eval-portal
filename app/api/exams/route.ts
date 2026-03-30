import { NextRequest, NextResponse } from 'next/server';
import { exams } from '@/lib/apiData';
import { Exam } from '@/types';

export async function GET() {
  return NextResponse.json(exams);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const newExam: Omit<Exam, 'id'> = body;
    const exam: Exam = {
      ...newExam,
      id: `e${exams.length + 1}`,
    };
    exams.push(exam);
    return NextResponse.json(exam, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}