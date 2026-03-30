import { NextRequest, NextResponse } from 'next/server';
import { courses } from '@/lib/apiData';

export async function GET(request: NextRequest, { params }: { params: Promise<{ courseId: string }> }) {
  const { courseId } = await params;
  const course = courses.find(c => c.id === courseId);
  if (!course) return NextResponse.json({ error: 'Course not found' }, { status: 404 });
  return NextResponse.json(course);
}

export async function PUT(request: NextRequest, { params }: { params: Promise<{ courseId: string }> }) {
  try {
    const { courseId } = await params;
    const body = await request.json();
    const index = courses.findIndex(c => c.id === courseId);
    if (index === -1) return NextResponse.json({ error: 'Course not found' }, { status: 404 });
    courses[index] = { ...courses[index], ...body };
    return NextResponse.json(courses[index]);
  } catch (error) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}

export async function PATCH(request: NextRequest, { params }: { params: Promise<{ courseId: string }> }) {
  try {
    const { courseId } = await params;
    const body = await request.json();
    const index = courses.findIndex(c => c.id === courseId);
    if (index === -1) return NextResponse.json({ error: 'Course not found' }, { status: 404 });
    courses[index] = { ...courses[index], ...body };
    return NextResponse.json(courses[index]);
  } catch (error) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}

export async function DELETE(request: NextRequest, { params }: { params: Promise<{ courseId: string }> }) {
  const { courseId } = await params;
  const index = courses.findIndex(c => c.id === courseId);
  if (index === -1) return NextResponse.json({ error: 'Course not found' }, { status: 404 });
  courses.splice(index, 1);
  return NextResponse.json({ message: 'Course deleted' });
}