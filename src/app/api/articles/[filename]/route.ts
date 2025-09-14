import { NextRequest, NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import path from 'path';

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ filename: string }> }
) {
    try {
        const { filename } = await params;
        
        // Security check: ensure filename doesn't contain path traversal
        if (filename.includes('..') || filename.includes('/') || filename.includes('\\')) {
            return NextResponse.json({ error: 'Invalid filename' }, { status: 400 });
        }
        
        // Ensure filename ends with .md
        if (!filename.endsWith('.md')) {
            return NextResponse.json({ error: 'Invalid file type' }, { status: 400 });
        }
        
        const filePath = path.join(process.cwd(), 'src', 'data', 'articles', filename);
        const content = await readFile(filePath, 'utf-8');
        
        return new NextResponse(content, {
            headers: {
                'Content-Type': 'text/plain; charset=utf-8',
                'Cache-Control': 'public, max-age=3600', // Cache for 1 hour
            },
        });
    } catch (error) {
        console.error('Error reading article file:', error);
        return NextResponse.json({ error: 'Article not found' }, { status: 404 });
    }
}
