/**
 * Script per processar PDFs sobre llenguatge jurídic i afegir-los a la bibliografia
 * Executar amb: npm run process:pdfs
 */

import { readFile } from 'fs/promises';
import { join } from 'path';
import { readFileSync, writeFileSync } from 'fs';

// PDFs a processar
const pdfsToProcess = [
  {
    fitxer: 'Manual_llenguatge_juridic.pdf',
    id: 'manual-llenguatge-juridic',
    titol: 'Manual de Llenguatge Jurídic',
    autors: ['Font oficial'],
    any: '2024',
    tipus: 'manual' as const,
    temes: ['Llenguatge jurídic', 'Manual', 'Terminologia jurídica', 'Llenguatge clar', 'Accessibilitat jurídica']
  },
  {
    fitxer: 'Català_Jurídic.pdf',
    id: 'catala-juridic',
    titol: 'Català Jurídic',
    autors: ['Font oficial'],
    any: '2024',
    tipus: 'manual' as const,
    temes: ['Llenguatge jurídic', 'Català', 'Terminologia jurídica', 'Llenguatge clar', 'Accessibilitat jurídica', 'Andorra']
  },
  {
    fitxer: 'The Concept of Legal Language- What Makes Legal Language \'Legal\'?.pdf',
    id: 'legal-language-concept-detailed',
    titol: 'The Concept of Legal Language: What Makes Legal Language \'Legal\'?',
    autors: ['Autors diversos'],
    any: '2024',
    tipus: 'article' as const,
    temes: ['Llenguatge legal', 'Terminologia jurídica', 'Accessibilitat jurídica', 'Lingüística jurídica', 'Llenguatge clar']
  }
];

function generarCitacio(entry: typeof pdfsToProcess[0]): string {
  const autorsStr = entry.autors.join(', ');
  return `${autorsStr} (${entry.any}). ${entry.titol}.`;
}

function generarResum(entry: typeof pdfsToProcess[0]): string {
  if (entry.fitxer.includes('Manual')) {
    return `Manual sobre llenguatge jurídic que proporciona guies i directrius per a l\'ús correcte del llenguatge legal. Aquest manual és essencial per entendre les convencions, la terminologia i les pràctiques del llenguatge jurídic, contribuint a la millora de l\'accessibilitat i la comprensió del dret.`;
  }
  if (entry.fitxer.includes('Català')) {
    return `Document sobre l\'ús del català en contextos jurídics. Proporciona orientacions sobre terminologia jurídica en català, rellevant especialment per al context andorrà on el català és l\'única llengua oficial. Aquest document contribueix a la comprensió de com el llenguatge jurídic s\'adapta a contextos lingüístics específics.`;
  }
  if (entry.fitxer.includes('Concept')) {
    return `Article acadèmic que explora en profunditat el concepte de llenguatge legal i les característiques que el diferencien del llenguatge ordinari. Analitza la terminologia, l\'estructura i les funcions del llenguatge jurídic, proporcionant una base teòrica sòlida per entendre per què el llenguatge jurídic és complex i com aquesta complexitat afecta l\'accés a la justícia. Aquest treball fonamenta teòricament les dificultats d\'accessibilitat jurídica.`;
  }
  return `Document acadèmic sobre llenguatge jurídic disponible a la biblioteca del projecte.`;
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
