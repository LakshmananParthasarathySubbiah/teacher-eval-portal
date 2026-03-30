import { NextRequest, NextResponse } from 'next/server';
import { scripts } from '@/lib/apiData';

export async function GET(request: NextRequest, { params }: { params: Promise<{ scriptId: string }> }) {
  const { scriptId } = await params;
  const script = scripts.find(s => s.id === scriptId);
  if (!script) return NextResponse.json({ error: 'Script not found' }, { status: 404 });
  return NextResponse.json(script);
}

export async function PUT(request: NextRequest, { params }: { params: Promise<{ scriptId: string }> }) {
  try {
    const { scriptId } = await params;
    const body = await request.json();
    const index = scripts.findIndex(s => s.id === scriptId);
    if (index === -1) return NextResponse.json({ error: 'Script not found' }, { status: 404 });
    scripts[index] = { ...scripts[index], ...body };
    return NextResponse.json(scripts[index]);
  } catch (error) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}

export async function PATCH(request: NextRequest, { params }: { params: Promise<{ scriptId: string }> }) {
  try {
    const { scriptId } = await params;
    const body = await request.json();
    const index = scripts.findIndex(s => s.id === scriptId);
    if (index === -1) return NextResponse.json({ error: 'Script not found' }, { status: 404 });
    scripts[index] = { ...scripts[index], ...body };
    return NextResponse.json(scripts[index]);
  } catch (error) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}

export async function DELETE(request: NextRequest, { params }: { params: Promise<{ scriptId: string }> }) {
  const { scriptId } = await params;
  const index = scripts.findIndex(s => s.id === scriptId);
  if (index === -1) return NextResponse.json({ error: 'Script not found' }, { status: 404 });
  scripts.splice(index, 1);
  return NextResponse.json({ message: 'Script deleted' });
}