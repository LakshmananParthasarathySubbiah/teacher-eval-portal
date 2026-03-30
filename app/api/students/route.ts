import { NextRequest, NextResponse } from 'next/server';
import { students } from '@/lib/apiData';
import { Student } from '@/types';

export async function GET() {
  return NextResponse.json(students);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const newStudent: Omit<Student, 'id' | 'status'> = body;
    const student: Student = {
      ...newStudent,
      id: `s${students.length + 1}`,
      status: 'Pending',
    };
    students.push(student);
    return NextResponse.json(student, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}