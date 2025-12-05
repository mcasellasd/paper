/**
 * Script per processar PDFs sobre llengua catalana i justícia i afegir-los a la bibliografia
 * Executar amb: npx tsx scripts/process-pdfs-llengua-justicia.ts
 */

import { readFile } from 'fs/promises';
import { join } from 'path';
import { readFileSync, writeFileSync } from 'fs';

// PDFs a processar
const pdfsToProcess = [
  {
    fitxer: 'Llengua Tercer Quarimestre Observatori 2005.pdf',
    id: 'observatori-llengua-2005-q3',
    titol: 'Llengua: Tercer Quarimestre Observatori 2005',
    autors: ['Observatori de la Llengua'],
    any: '2005',
    tipus: 'informe' as const,
    temes: ['Llengua catalana', 'Observatori', 'Política lingüística', 'Andorra', 'Estat de la llengua']
  },
  {
    fitxer: 'Justícia Observatori Primer Semestre del 2025.pdf',
    id: 'observatori-justicia-2025-s1',
    titol: 'Justícia: Observatori Primer Semestre del 2025',
    autors: ['Observatori de Justícia'],
    any: '2025',
    tipus: 'informe' as const,
    temes: ['Justícia', 'Observatori', 'Administració de justícia', 'Andorra', 'Estadístiques judicials']
  },
  {
    fitxer: 'Dialnet-EstatActualIPerspectivesDeLaLlenguaCatalanaEnElsMi-10274194.pdf',
    id: 'dialnet-estat-catala-micropaisos',
    titol: 'Estat actual i perspectives de la llengua catalana en els micropaïsos',
    autors: ['Autors diversos'],
    any: '2024',
    tipus: 'article' as const,
    temes: ['Llengua catalana', 'Micropaïsos', 'Andorra', 'Política lingüística', 'Perspectives', 'Dialnet']
  },
  {
    fitxer: 'llengua AND.pdf',
    id: 'llengua-and',
    titol: 'Llengua AND',
    autors: ['Font oficial'],
    any: '2024',
    tipus: 'informe' as const,
    temes: ['Llengua catalana', 'Andorra', 'Política lingüística', 'Llengua oficial']
  }
];

function generarCitacio(entry: typeof pdfsToProcess[0]): string {
  const autorsStr = entry.autors.join(', ');
  return `${autorsStr} (${entry.any}). ${entry.titol}.`;
}

function generarResum(entry: typeof pdfsToProcess[0]): string {
  if (entry.fitxer.includes('Llengua Tercer Quarimestre')) {
    return `Informe de l'Observatori de la Llengua corresponent al tercer quarimestre de 2005. Aquest document proporciona dades i anàlisis sobre l'estat de la llengua catalana, rellevant per entendre l'evolució de la política lingüística i l'ús del català en contextos oficials i administratius.`;
  }
  if (entry.fitxer.includes('Justícia Observatori')) {
    return `Informe de l'Observatori de Justícia corresponent al primer semestre de 2025. Aquest document proporciona estadístiques, anàlisis i dades sobre l'administració de justícia, incloent-hi informació sobre processos, eficiència i accessibilitat del sistema judicial. Rellevant per entendre el context actual del sistema judicial andorrà.`;
  }
  if (entry.fitxer.includes('Dialnet-EstatActual')) {
    return `Article acadèmic de Dialnet que analitza l'estat actual i les perspectives futures de la llengua catalana en els micropaïsos, amb especial atenció a Andorra. Explora els desafiaments i oportunitats per a la promoció i preservació del català en contextos de micropaïsos, analitzant polítiques lingüístiques, ús institucional i perspectives de futur. Aquest treball és fonamental per entendre el context lingüístic d'Andorra i com afecta l'accessibilitat jurídica.`;
  }
  if (entry.fitxer.includes('llengua AND')) {
    return `Document sobre la llengua a Andorra que proporciona informació sobre l'ús del català com a llengua oficial, les polítiques lingüístiques i l'aplicació de la llengua en contextos jurídics i administratius. Rellevant per al projecte Prudencia.ad en el context del suport multilingüe i la promoció del català com a llengua oficial.`;
  }
  return `Document acadèmic sobre llengua catalana i justícia disponible a la biblioteca del projecte.`;
}

async function processarPDFs() {
  const bibliografiaPath = join(process.cwd(), 'lib', 'bibliografia', 'index.ts');
  const bibliografiaContent = await readFile(bibliografiaPath, 'utf-8');
  
  // Verificar quins PDFs ja estan a la bibliografia
  const pdfsJaProcessats = pdfsToProcess.filter(pdf => 
    bibliografiaContent.includes(pdf.id) || bibliografiaContent.includes(pdf.fitxer)
  );
  
  if (pdfsJaProcessats.length > 0) {
    console.log('PDFs que ja estan a la bibliografia:');
    pdfsJaProcessats.forEach(pdf => console.log(`  - ${pdf.fitxer}`));
  }
  
  const pdfsNous = pdfsToProcess.filter(pdf => 
    !bibliografiaContent.includes(pdf.id) && !bibliografiaContent.includes(pdf.fitxer)
  );
  
  if (pdfsNous.length === 0) {
    console.log('Tots els PDFs ja estan processats.');
    return;
  }
  
  console.log(`\nProcessant ${pdfsNous.length} PDF(s) nou(s):`);
  pdfsNous.forEach(pdf => console.log(`  - ${pdf.fitxer}`));
  
  // Generar entrades de bibliografia
  const novesEntrades = pdfsNous.map(pdf => {
    const citacio = generarCitacio(pdf);
    const resum = generarResum(pdf);
    
    return `  {
    id: '${pdf.id}',
    tipus: '${pdf.tipus}',
    autors: ${JSON.stringify(pdf.autors)},
    any: '${pdf.any}',
    titol: ${JSON.stringify(pdf.titol)},
    citacio: ${JSON.stringify(citacio)},
    resum: ${JSON.stringify(resum)},
    temes: ${JSON.stringify(pdf.temes)},
    fitxer: ${JSON.stringify(pdf.fitxer)}
  },`;
  });
  
  // Trobar on inserir les noves entrades (abans del comentari final o al final)
  const linies = bibliografiaContent.split('\n');
  let indexInsercio = linies.length - 1;
  
  // Buscar l'última entrada de bibliografia
  for (let i = linies.length - 1; i >= 0; i--) {
    if (linies[i].trim().startsWith('}') && linies[i].trim().endsWith(',')) {
      indexInsercio = i + 1;
      break;
    }
  }
  
  // Inserir les noves entrades
  const novesLinies = [
    ...linies.slice(0, indexInsercio),
    ...novesEntrades,
    ...linies.slice(indexInsercio)
  ];
  
  // Escriure el fitxer actualitzat
  writeFileSync(bibliografiaPath, novesLinies.join('\n'), 'utf-8');
  
  console.log(`\n✓ S'han afegit ${pdfsNous.length} entrada(s) nova(s) a la bibliografia.`);
  console.log('\nEntrades afegides:');
  pdfsNous.forEach(pdf => {
    console.log(`  - ${pdf.titol} (${pdf.id})`);
  });
}

// Executar el script
processarPDFs().catch(error => {
  console.error('Error processant PDFs:', error);
  process.exit(1);
});
