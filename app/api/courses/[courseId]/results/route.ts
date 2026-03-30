import { NextRequest, NextResponse } from 'next/server';
import { courses, exams, evaluations, scripts, students } from '@/lib/apiData';

export async function GET(request: NextRequest, { params }: { params: Promise<{ courseId: string }> }) {
  const { courseId } = await params;
  const course = courses.find(c => c.id === courseId);
  if (!course) return NextResponse.json({ error: 'Course not found' }, { status: 404 });

  const courseExams = exams.filter(e => e.courseId === courseId);
  const results = courseExams.map(exam => {
    const examScripts = scripts.filter(s => s.examId === exam.id);
    const examResults = examScripts.map(script => {
      const student = students.find(s => s.id === script.studentId);
      const evaluation = evaluations.find(e => e.scriptId === script.id);
      return {
        studentId: script.studentId,
        studentName: student?.name || 'Unknown',
        scriptId: script.id,
        evaluation: evaluation || null,
      };
    });
    return {
      examId: exam.id,
      examTitle: exam.title,
      results: examResults,
    };
  });
  return NextResponse.json(results);
}