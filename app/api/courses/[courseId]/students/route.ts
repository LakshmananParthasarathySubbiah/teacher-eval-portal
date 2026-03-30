import { NextRequest, NextResponse } from 'next/server';
import { students, courses } from '@/lib/apiData';
import { Student } from '@/types';

export async function GET(request: NextRequest, { params }: { params: Promise<{ courseId: string }> }) {
  const { courseId } = await params;
  const course = courses.find(c => c.id === courseId);
  if (!course) return NextResponse.json({ error: 'Course not found' }, { status: 404 });
  const courseStudents = students.filter(s => s.courseId === courseId);
  return NextResponse.json(courseStudents);
}

export async function POST(request: NextRequest, { params }: { params: Promise<{ courseId: string }> }) {
  try {
    const { courseId } = await params;
    const course = courses.find(c => c.id === courseId);
    if (!course) return NextResponse.json({ error: 'Course not found' }, { status: 404 });
    const body = await request.json();
    const newStudent: Omit<Student, 'id' | 'status' | 'courseId'> = body;
    const student: Student = {
      ...newStudent,
      id: `s${students.length + 1}`,
      status: 'Pending',
      courseId,
    };
    students.push(student);
    return NextResponse.json(student, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}