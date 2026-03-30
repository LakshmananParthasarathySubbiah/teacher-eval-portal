import { NextRequest, NextResponse } from 'next/server';
import { exams } from '@/lib/apiData';

export async function GET(request: NextRequest, { params }: { params: Promise<{ examId: string }> }) {
  const { examId } = await params;
  const exam = exams.find(e => e.id === examId);
  if (!exam) return NextResponse.json({ error: 'Exam not found' }, { status: 404 });
  return NextResponse.json(exam);
}

export async function PUT(request: NextRequest, { params }: { params: Promise<{ examId: string }> }) {
  try {
    const { examId } = await params;
    const body = await request.json();
    const index = exams.findIndex(e => e.id === examId);
    if (index === -1) return NextResponse.json({ error: 'Exam not found' }, { status: 404 });
    exams[index] = { ...exams[index], ...body };
    return NextResponse.json(exams[index]);
  } catch (error) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}

export async function PATCH(request: NextRequest, { params }: { params: Promise<{ examId: string }> }) {
  try {
    const { examId } = await params;
    const body = await request.json();
    const index = exams.findIndex(e => e.id === examId);
    if (index === -1) return NextResponse.json({ error: 'Exam not found' }, { status: 404 });
    exams[index] = { ...exams[index], ...body };
    return NextResponse.json(exams[index]);
  } catch (error) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}

export async function DELETE(request: NextRequest, { params }: { params: Promise<{ examId: string }> }) {
  const { examId } = await params;
  const index = exams.findIndex(e => e.id === examId);
  if (index === -1) return NextResponse.json({ error: 'Exam not found' }, { status: 404 });
  exams.splice(index, 1);
  return NextResponse.json({ message: 'Exam deleted' });
}