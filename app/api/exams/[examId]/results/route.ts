import { NextRequest, NextResponse } from 'next/server';
import { exams, evaluations, scripts, students } from '@/lib/apiData';

export async function GET(request: NextRequest, { params }: { params: Promise<{ examId: string }> }) {
  const { examId } = await params;
  const exam = exams.find(e => e.id === examId);
  if (!exam) return NextResponse.json({ error: 'Exam not found' }, { status: 404 });

  const examScripts = scripts.filter(s => s.examId === examId);
  const results = examScripts.map(script => {
    const student = students.find(s => s.id === script.studentId);
    const evaluation = evaluations.find(e => e.scriptId === script.id);
    return {
      studentId: script.studentId,
      studentName: student?.name || 'Unknown',
      scriptId: script.id,
      evaluation: evaluation || null,
    };
  });
  return NextResponse.json(results);
}