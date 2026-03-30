import { NextRequest, NextResponse } from 'next/server';
import { courses } from '@/lib/apiData';
import { Course } from '@/types';

export async function GET() {
  return NextResponse.json(courses);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const newCourse: Omit<Course, 'id' | 'createdAt'> = body;
    const course: Course = {
      ...newCourse,
      id: `c${courses.length + 1}`,
      createdAt: new Date().toISOString(),
    };
    courses.push(course);
    return NextResponse.json(course, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}