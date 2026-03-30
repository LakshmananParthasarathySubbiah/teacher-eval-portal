import { NextRequest, NextResponse } from 'next/server';
import { evaluations, scripts } from '@/lib/apiData';
import { EvaluationResult } from '@/types';

export async function GET() {
  return NextResponse.json(evaluations);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { scriptId } = body;
    if (!scriptId) return NextResponse.json({ error: 'scriptId required' }, { status: 400 });
    const script = scripts.find(s => s.id === scriptId);
    if (!script) return NextResponse.json({ error: 'Script not found' }, { status: 404 });

    // Simulate AI evaluation
    const evaluation: EvaluationResult = {
      id: `ev${evaluations.length + 1}`,
      scriptId,
      totalMarks: Math.floor(Math.random() * 100), // Random for demo
      maxMarks: 100,
      confidence: Math.random(),
      evaluatedAt: new Date().toISOString(),
      evaluatedBy: 'ai',
      comments: 'AI evaluation completed',
    };
    evaluations.push(evaluation);
    return NextResponse.json(evaluation, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}