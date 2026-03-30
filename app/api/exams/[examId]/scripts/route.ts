import { NextRequest, NextResponse } from 'next/server';
import { scripts, exams } from '@/lib/apiData';

export async function GET(request: NextRequest, { params }: { params: Promise<{ examId: string }> }) {
  const { examId } = await params;
  const exam = exams.find(e => e.id === examId);
  if (!exam) return NextResponse.json({ error: 'Exam not found' }, { status: 404 });
  const examScripts = scripts.filter(s => s.examId === examId);
  return NextResponse.json(examScripts);
}