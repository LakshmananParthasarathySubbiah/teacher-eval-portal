import { NextRequest, NextResponse } from 'next/server';
import { evaluations, scripts } from '@/lib/apiData';

export async function GET(request: NextRequest, { params }: { params: Promise<{ scriptId: string }> }) {
  const { scriptId } = await params;
  const script = scripts.find(s => s.id === scriptId);
  if (!script) return NextResponse.json({ error: 'Script not found' }, { status: 404 });
  const evaluation = evaluations.find(e => e.scriptId === scriptId);
  if (!evaluation) return NextResponse.json({ error: 'Evaluation not found' }, { status: 404 });
  return NextResponse.json(evaluation);
}