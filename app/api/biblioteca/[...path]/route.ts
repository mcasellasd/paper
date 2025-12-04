import { NextRequest, NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import { join } from 'path';
import { existsSync } from 'fs';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  try {
    const { path } = await params;
    const filePath = path.join('/');
    
    // Construir la ruta completa al fitxer
    const fullPath = join(process.cwd(), 'lib', 'biblioteca', filePath);
    
    // Verificar que el fitxer existeix
    if (!existsSync(fullPath)) {
      return new NextResponse('Fitxer no trobat', { status: 404 });
    }
    
    // Llegir el fitxer
    const fileBuffer = await readFile(fullPath);
    
    // Determinar el tipus MIME basat en l'extensió
    const ext = filePath.split('.').pop()?.toLowerCase();
    let contentType = 'application/octet-stream';
    
    if (ext === 'pdf') {
      contentType = 'application/pdf';
    } else if (ext === 'md') {
      contentType = 'text/markdown';
    }
    
    // Convertir Buffer a Uint8Array per compatibilitat amb NextResponse
    const uint8Array = new Uint8Array(fileBuffer);
    
    // Retornar el fitxer amb els headers correctes
    return new NextResponse(uint8Array, {
      headers: {
        'Content-Type': contentType,
        'Content-Disposition': `inline; filename="${path[path.length - 1]}"`,
      },
    });
  } catch (error) {
    console.error('Error servint fitxer:', error);
    return new NextResponse('Error servint el fitxer', { status: 500 });
  }
}

