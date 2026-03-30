import { NextRequest, NextResponse } from 'next/server';
import { scripts, students } from '@/lib/apiData';

export async function GET(request: NextRequest, { params }: { params: Promise<{ studentId: string }> }) {
  const { studentId } = await params;
  const student = students.find(s => s.id === studentId);
  if (!student) return NextResponse.json({ error: 'Student not found' }, { status: 404 });
  const studentScripts = scripts.filter(s => s.studentId === studentId);
  return NextResponse.json(studentScripts);
}