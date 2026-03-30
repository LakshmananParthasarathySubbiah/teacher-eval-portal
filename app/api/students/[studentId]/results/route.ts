import { NextRequest, NextResponse } from 'next/server';
import { students, evaluations, scripts } from '@/lib/apiData';

export async function GET(request: NextRequest, { params }: { params: Promise<{ studentId: string }> }) {
  const { studentId } = await params;
  const student = students.find(s => s.id === studentId);
  if (!student) return NextResponse.json({ error: 'Student not found' }, { status: 404 });

  const studentScripts = scripts.filter(s => s.studentId === studentId);
  const results = studentScripts.map(script => {
    const evaluation = evaluations.find(e => e.scriptId === script.id);
    return {
      scriptId: script.id,
      examId: script.examId,
      evaluation: evaluation || null,
    };
  });
  return NextResponse.json(results);
}