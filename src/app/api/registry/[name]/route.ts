import { NextRequest, NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import { join } from 'path';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ name: string }> }
) {
  try {
    const { name } = await params;
    const registryName = name;

    // Security: Only allow specific registry names
    const allowedNames = [
      'home-page', 'about-page', 'products-page', 'hero-section',
      'values-section', 'speaker-features', 'innovation-section',
      'gallery-section', 'faq-section', 'blog-section'
    ];

    if (!allowedNames.includes(registryName)) {
      return NextResponse.json({ error: 'Registry not found' }, { status: 404 });
    }

    // Read the registry file
    const filePath = join(process.cwd(), 'public', 'r', `${registryName}.json`);
    const content = await readFile(filePath, 'utf-8');
    const registryData = JSON.parse(content);

    // Return with proper CORS headers
    return new NextResponse(JSON.stringify(registryData, null, 2), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    });
  } catch (error) {
    console.error('Error serving registry:', error);
    return NextResponse.json({ error: 'Registry not found' }, { status: 404 });
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}