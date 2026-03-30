import { NextRequest, NextResponse } from 'next/server';
import { evaluations } from '@/lib/apiData';

export async function GET(request: NextRequest, { params }: { params: Promise<{ evaluationId: string }> }) {
  const { evaluationId } = await params;
  const evaluation = evaluations.find(e => e.id === evaluationId);
  if (!evaluation) return NextResponse.json({ error: 'Evaluation not found' }, { status: 404 });
  return NextResponse.json(evaluation);
}

export async function PUT(request: NextRequest, { params }: { params: Promise<{ evaluationId: string }> }) {
  try {
    const { evaluationId } = await params;
    const body = await request.json();
    const index = evaluations.findIndex(e => e.id === evaluationId);
    if (index === -1) return NextResponse.json({ error: 'Evaluation not found' }, { status: 404 });
    evaluations[index] = { ...evaluations[index], ...body };
    return NextResponse.json(evaluations[index]);
  } catch (error) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}

export async function PATCH(request: NextRequest, { params }: { params: Promise<{ evaluationId: string }> }) {
  try {
    const { evaluationId } = await params;
    const body = await request.json();
    const index = evaluations.findIndex(e => e.id === evaluationId);
    if (index === -1) return NextResponse.json({ error: 'Evaluation not found' }, { status: 404 });
    evaluations[index] = { ...evaluations[index], ...body };
    return NextResponse.json(evaluations[index]);
  } catch (error) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}

export async function DELETE(request: NextRequest, { params }: { params: Promise<{ evaluationId: string }> }) {
  const { evaluationId } = await params;
  const index = evaluations.findIndex(e => e.id === evaluationId);
  if (index === -1) return NextResponse.json({ error: 'Evaluation not found' }, { status: 404 });
  evaluations.splice(index, 1);
  return NextResponse.json({ message: 'Evaluation deleted' });
}