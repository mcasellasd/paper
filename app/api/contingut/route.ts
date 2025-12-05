import { NextRequest, NextResponse } from 'next/server';
import { readFile, writeFile, mkdir } from 'fs/promises';
import { join } from 'path';
import { existsSync } from 'fs';

// Llista de pàgines editables
const paginesEditables = [
  { id: 'introduccio', ruta: 'app/[locale]/introduccio', fitxer: 'page.tsx' },
  { id: 'estat-art', ruta: 'app/[locale]/estat-art', fitxer: 'page.tsx' },
  { id: 'marc-regulatori', ruta: 'app/[locale]/marc-regulatori', fitxer: 'page.tsx' },
  { id: 'ia-accessibilitat', ruta: 'app/[locale]/ia-accessibilitat', fitxer: 'page.tsx' },
  { id: 'casos-estudi', ruta: 'app/[locale]/casos-estudi', fitxer: 'page.tsx' },
  { id: 'beneficis-desafiaments', ruta: 'app/[locale]/beneficis-desafiaments', fitxer: 'page.tsx' },
  { id: 'conclusions', ruta: 'app/[locale]/conclusions', fitxer: 'page.tsx' },
];

// Funció per extreure text del JSX (millorada)
function extreureTextDelJSX(jsxContent: string): string {
  let text = '';
  
  // Extreure títols (h1, h2, h3, etc.) - millorat per capturar text amb elements dins
  // Utilitzar [\s\S] en lloc de . amb flag s per compatibilitat amb ES2017
  const titolsRegex = /<h([1-6])[^>]*>([\s\S]*?)<\/h[1-6]>/g;
  let match;
  while ((match = titolsRegex.exec(jsxContent)) !== null) {
    const nivell = match[1];
    const contingut = match[2]
      .replace(/<[^>]+>/g, '') // Eliminar tags
      .replace(/&nbsp;/g, ' ')
      .trim();
    if (contingut && contingut.length > 0) {
      text += '#'.repeat(parseInt(nivell)) + ' ' + contingut + '\n\n';
    }
  }
  
  // Extreure paràgrafs - millorat per capturar text amb elements dins (strong, em, etc.)
  // Utilitzar regex més flexible per capturar paràgrafs que poden tenir múltiples línies
  const paragrafsRegex = /<p[^>]*>([\s\S]*?)<\/p>/g;
  while ((match = paragrafsRegex.exec(jsxContent)) !== null) {
    let textParagraf = match[1]
      .replace(/<strong[^>]*>([\s\S]*?)<\/strong>/g, '**$1**') // Convertir strong a markdown
      .replace(/<em[^>]*>([\s\S]*?)<\/em>/g, '*$1*') // Convertir em a markdown
      .replace(/<[^>]+>/g, '') // Eliminar altres tags
      .replace(/&nbsp;/g, ' ')
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/\s+/g, ' ') // Normalitzar espais
      .trim();
    
    if (textParagraf && textParagraf.length > 10) {
      text += textParagraf + '\n\n';
    }
  }
  
  // També intentar extreure text directe de les línies que no són tags
  // Això ajuda a capturar text que pot estar en múltiples línies dins d'un paràgraf
  const textDirecte = jsxContent
    .split('\n')
    .map(line => {
      // Si la línia conté text però no és un tag complet, potser és part d'un paràgraf multilínia
      const trimmed = line.trim();
      if (trimmed && 
          !trimmed.startsWith('<') && 
          !trimmed.startsWith('import') && 
          !trimmed.startsWith('export') &&
          !trimmed.startsWith('const') &&
          !trimmed.startsWith('function') &&
          !trimmed.startsWith('return') &&
          !trimmed.startsWith('{') &&
          !trimmed.startsWith('}') &&
          !trimmed.startsWith('//') &&
          trimmed.length > 20 &&
          !text.includes(trimmed.substring(0, 50))) { // Evitar duplicats
        return trimmed;
      }
      return null;
    })
    .filter(line => line !== null)
    .join('\n\n');
  
  // Afegir text directe si no s'ha trobat en paràgrafs
  if (textDirecte && text.length < 100) {
    text += textDirecte;
  }
  
  // Extreure llistes (ul/ol)
  const llistesRegex = /<li[^>]*>([\s\S]*?)<\/li>/g;
  while ((match = llistesRegex.exec(jsxContent)) !== null) {
    let textItem = match[1]
      .replace(/<strong[^>]*>([\s\S]*?)<\/strong>/g, '**$1**')
      .replace(/<em[^>]*>([\s\S]*?)<\/em>/g, '*$1*')
      .replace(/<[^>]+>/g, '')
      .replace(/&nbsp;/g, ' ')
      .trim();
    
    if (textItem) {
      text += '- ' + textItem + '\n';
    }
  }
  
  if (text.trim()) {
    text += '\n';
  }
  
  // Si no s'ha extret res útil, retornar un missatge
  return text.trim() || '# Contingut de la pàgina\n\nEl contingut s\'ha extret del fitxer JSX. Pots editar aquest text.\n';
}

// GET: Llegir contingut d'una pàgina
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const paginaId = searchParams.get('pagina');
    
    if (!paginaId) {
      return NextResponse.json(
        { error: 'Paràmetre "pagina" requerit' },
        { status: 400 }
      );
    }

    const pagina = paginesEditables.find(p => p.id === paginaId);
    if (!pagina) {
      return NextResponse.json(
        { error: `Pàgina "${paginaId}" no trobada` },
        { status: 404 }
      );
    }

    // Primer intentar llegir el fitxer markdown del directori content/
    const markdownPath = join(process.cwd(), 'content', `${paginaId}.md`);
    
    try {
      if (existsSync(markdownPath)) {
        // Si existeix el fitxer markdown, llegir-lo
        const contingut = await readFile(markdownPath, 'utf-8');
        console.log(`Llegint fitxer markdown per ${paginaId}: ${contingut.length} caràcters`);
        
        if (!contingut || contingut.trim().length === 0) {
          console.warn(`El fitxer markdown per ${paginaId} està buit`);
        }
        
        return NextResponse.json({
          pagina: paginaId,
          contingut,
          ruta: pagina.ruta,
          fitxer: pagina.fitxer,
          tipus: 'markdown'
        });
      }
    } catch (readError) {
      // Si no es pot llegir, continuar intentant extreure del JSX
      console.warn('No s\'ha pogut llegir el fitxer markdown, intentant extreure del JSX:', readError);
    }
    
    // Si no existeix o no es pot llegir, intentar extreure el text del JSX
    try {
      const jsxPath = join(process.cwd(), pagina.ruta, pagina.fitxer);
      
      if (!existsSync(jsxPath)) {
        return NextResponse.json(
          { error: 'Fitxer no trobat' },
          { status: 404 }
        );
      }

      const jsxContent = await readFile(jsxPath, 'utf-8');
      const contingutExtret = extreureTextDelJSX(jsxContent);
      
      // Assegurar que el directori content/ existeix
      try {
        const contentDir = join(process.cwd(), 'content');
        if (!existsSync(contentDir)) {
          await mkdir(contentDir, { recursive: true });
        }
        
        // Crear el fitxer markdown amb el contingut extret
        // Nota: A Vercel/serverless, els fitxers no persisteixen entre invocacions
        // Això només funcionarà durant l'execució actual
        await writeFile(markdownPath, contingutExtret, 'utf-8');
      } catch (writeError) {
        // Si no es pot escriure (com a Vercel), continuar sense crear el fitxer
        console.warn('No s\'ha pogut crear el fitxer markdown (potser estem en un entorn serverless):', writeError);
      }
      
      return NextResponse.json({
        pagina: paginaId,
        contingut: contingutExtret,
        ruta: pagina.ruta,
        fitxer: pagina.fitxer,
        tipus: 'markdown',
        creat: true
      });
    } catch (jsxError) {
      console.error('Error llegint fitxer JSX:', jsxError);
      throw jsxError; // Re-lanzar per ser capturat pel catch general
    }
  } catch (error) {
    console.error('Error llegint contingut:', error);
    const errorMessage = error instanceof Error ? error.message : 'Error desconegut';
    return NextResponse.json(
      { 
        error: 'Error llegint el contingut',
        details: process.env.NODE_ENV === 'development' ? errorMessage : undefined
      },
      { status: 500 }
    );
  }
}

// POST: Guardar contingut d'una pàgina
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { pagina, contingut } = body;

    if (!pagina || contingut === undefined || contingut === null) {
      return NextResponse.json(
        { error: 'Paràmetres "pagina" i "contingut" requerits' },
        { status: 400 }
      );
    }

    const paginaInfo = paginesEditables.find(p => p.id === pagina);
    if (!paginaInfo) {
      return NextResponse.json(
        { error: `Pàgina "${pagina}" no trobada` },
        { status: 404 }
      );
    }

    // Guardar el contingut al fitxer markdown
    const markdownPath = join(process.cwd(), 'content', `${pagina}.md`);
    
    // Assegurar que el directori existeix
    try {
      const contentDir = join(process.cwd(), 'content');
      if (!existsSync(contentDir)) {
        await mkdir(contentDir, { recursive: true });
      }
      
      // Guardar el contingut markdown
      // Nota: A Vercel/serverless, els fitxers no persisteixen entre invocacions
      // Per producció, hauríem d'usar una base de dades o servei d'emmagatzematge
      await writeFile(markdownPath, contingut, 'utf-8');
    } catch (writeError) {
      // Si no es pot escriure (com a Vercel), retornar error
      console.error('Error escrivint fitxer:', writeError);
      return NextResponse.json(
        { 
          error: 'No es pot guardar el contingut. En entorns serverless (com Vercel), els fitxers no persisteixen. Considera usar una base de dades.',
          details: process.env.NODE_ENV === 'development' ? (writeError instanceof Error ? writeError.message : 'Error desconegut') : undefined
        },
        { status: 500 }
      );
    }
    
    return NextResponse.json({
      success: true,
      pagina,
      message: 'Contingut guardat correctament',
      ruta: markdownPath
    });
  } catch (error) {
    console.error('Error guardant contingut:', error);
    const errorMessage = error instanceof Error ? error.message : 'Error desconegut';
    return NextResponse.json(
      { 
        error: 'Error guardant el contingut',
        details: process.env.NODE_ENV === 'development' ? errorMessage : undefined
      },
      { status: 500 }
    );
  }
}

// GET: Llistar totes les pàgines editables
export async function PUT(request: NextRequest) {
  return NextResponse.json({
    pagines: paginesEditables.map(p => ({
      id: p.id,
      ruta: p.ruta,
      fitxer: p.fitxer
    }))
  });
}

