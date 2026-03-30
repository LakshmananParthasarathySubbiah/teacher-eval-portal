import { NextRequest, NextResponse } from 'next/server';
import { exams, courses } from '@/lib/apiData';
import { Exam } from '@/types';

export async function GET(request: NextRequest, { params }: { params: Promise<{ courseId: string }> }) {
  const { courseId } = await params;
  const course = courses.find(c => c.id === courseId);
  if (!course) return NextResponse.json({ error: 'Course not found' }, { status: 404 });
  const courseExams = exams.filter(e => e.courseId === courseId);
  return NextResponse.json(courseExams);
}

export async function POST(request: NextRequest, { params }: { params: Promise<{ courseId: string }> }) {
  try {
    const { courseId } = await params;
    const course = courses.find(c => c.id === courseId);
    if (!course) return NextResponse.json({ error: 'Course not found' }, { status: 404 });
    const body = await request.json();
    const newExam: Omit<Exam, 'id' | 'courseId'> = body;
    const exam: Exam = {
      ...newExam,
      id: `e${exams.length + 1}`,
      courseId,
    };
    exams.push(exam);
    return NextResponse.json(exam, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}