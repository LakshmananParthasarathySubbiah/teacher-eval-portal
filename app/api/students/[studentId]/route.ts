import { NextRequest, NextResponse } from 'next/server';
import { students } from '@/lib/apiData';

export async function GET(request: NextRequest, { params }: { params: Promise<{ studentId: string }> }) {
  const { studentId } = await params;
  const student = students.find(s => s.id === studentId);
  if (!student) return NextResponse.json({ error: 'Student not found' }, { status: 404 });
  return NextResponse.json(student);
}

export async function PUT(request: NextRequest, { params }: { params: Promise<{ studentId: string }> }) {
  try {
    const { studentId } = await params;
    const body = await request.json();
    const index = students.findIndex(s => s.id === studentId);
    if (index === -1) return NextResponse.json({ error: 'Student not found' }, { status: 404 });
    students[index] = { ...students[index], ...body };
    return NextResponse.json(students[index]);
  } catch (error) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}

export async function PATCH(request: NextRequest, { params }: { params: Promise<{ studentId: string }> }) {
  try {
    const { studentId } = await params;
    const body = await request.json();
    const index = students.findIndex(s => s.id === studentId);
    if (index === -1) return NextResponse.json({ error: 'Student not found' }, { status: 404 });
    students[index] = { ...students[index], ...body };
    return NextResponse.json(students[index]);
  } catch (error) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}

export async function DELETE(request: NextRequest, { params }: { params: Promise<{ studentId: string }> }) {
  const { studentId } = await params;
  const index = students.findIndex(s => s.id === studentId);
  if (index === -1) return NextResponse.json({ error: 'Student not found' }, { status: 404 });
  students.splice(index, 1);
  return NextResponse.json({ message: 'Student deleted' });
}