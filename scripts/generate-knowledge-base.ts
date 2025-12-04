#!/usr/bin/env ts-node

/**
 * Script per generar automàticament el fitxer de coneixement de la bibliografia
 * Executar amb: npx ts-node scripts/generate-knowledge-base.ts
 */

import { writeFile } from 'fs/promises';
import { join } from 'path';
import { bibliografia, type ReferenciaBibliografica } from '../lib/bibliografia/index';

function formatarReferencia(ref: ReferenciaBibliografica): string {
  let output = `#### ${ref.autors.join(', ')} (${ref.any}) - ${ref.titol}\n`;
  output += `- **ID**: ${ref.id}\n`;
  output += `- **Tipus**: ${ref.tipus}\n`;
  output += `- **Autors**: ${ref.autors.join(', ')}\n`;
  output += `- **Any**: ${ref.any}\n`;
  output += `- **Títol**: ${ref.titol}\n`;
  
  if (ref.subtitol) {
    output += `- **Subtítol**: ${ref.subtitol}\n`;
  }
  
  if (ref.editorial) {
    output += `- **Editorial**: ${ref.editorial}\n`;
  }
  
  if (ref.revista) {
    output += `- **Revista**: ${ref.revista}\n`;
  }
  
  if (ref.volum) {
    output += `- **Volum**: ${ref.volum}\n`;
  }
  
  if (ref.numero) {
    output += `- **Número**: ${ref.numero}\n`;
  }
  
  if (ref.pagines) {
    output += `- **Pàgines**: ${ref.pagines}\n`;
  }
  
  if (ref.url) {
    output += `- **URL**: ${ref.url}\n`;
  }
  
  if (ref.doi) {
    output += `- **DOI**: ${ref.doi}\n`;
  }
  
  if (ref.isbn) {
    output += `- **ISBN**: ${ref.isbn}\n`;
  }
  
  output += `- **Citació**: ${ref.citacio}\n`;
  
  if (ref.resum) {
    output += `- **Resum**: ${ref.resum}\n`;
  }
  
  if (ref.temes && ref.temes.length > 0) {
    output += `- **Temes**: ${ref.temes.join(', ')}\n`;
  }
  
  if (ref.notes) {
    output += `- **Notes**: ${ref.notes}\n`;
  }
  
  if (ref.fitxer) {
    output += `- **Fitxer**: ${ref.fitxer}\n`;
  }
  
  output += '\n';
  
  return output;
}

function agruparPerTema(bibliografia: ReferenciaBibliografica[]): Map<string, ReferenciaBibliografica[]> {
  const grups = new Map<string, ReferenciaBibliografica[]>();
  
  bibliografia.forEach(ref => {
    ref.temes.forEach(tema => {
      if (!grups.has(tema)) {
        grups.set(tema, []);
      }
      grups.get(tema)!.push(ref);
    });
  });
  
  return grups;
}

async function generarKnowledgeBase() {
  const header = `# Base de Coneixement: Bibliografia del Projecte Prudencia.ad

Aquest document conté tota la bibliografia del projecte Prudencia.ad per a referència i consulta. Utilitza aquesta informació quan responguis preguntes sobre el projecte, les seves referències acadèmiques i el context teòric.

**Data de generació**: ${new Date().toISOString().split('T')[0]}
**Total de referències**: ${bibliografia.length}

---

## Índex de Referències Bibliogràfiques

`;

  let contingut = header;
  
  // Agrupar per temes principals
  const temesPrincipals = [
    'IA generativa',
    'LegalTech',
    'Teoria jurídica',
    'Estat de dret',
    'Accessibilitat jurídica',
    'IA especialitzada',
    'IA judicial',
    'Ètica legal',
    'Llenguatge clar',
    'Regulació',
    'Biaix algorítmic',
    'Interpretació jurídica',
  ];
  
  const grupsPerTema = agruparPerTema(bibliografia);
  
  // Afegir referències per tema
  temesPrincipals.forEach((tema, index) => {
    const referencies = grupsPerTema.get(tema) || [];
    if (referencies.length > 0) {
      contingut += `### ${index + 1}. ${tema}\n\n`;
      
      // Eliminar duplicats
      const referenciesUniques = Array.from(
        new Map(referencies.map(ref => [ref.id, ref])).values()
      );
      
      referenciesUniques.forEach(ref => {
        contingut += formatarReferencia(ref);
      });
      
      contingut += '\n';
    }
  });
  
  // Afegir referències que no estan en cap tema principal
  const referenciesRestants = bibliografia.filter(ref => 
    !ref.temes.some(tema => temesPrincipals.includes(tema))
  );
  
  if (referenciesRestants.length > 0) {
    contingut += `### Altres Referències\n\n`;
    referenciesRestants.forEach(ref => {
      contingut += formatarReferencia(ref);
    });
  }
  
  // Afegir resum per temes clau
  contingut += `\n---\n\n## Resum per Temes Clau\n\n`;
  
  temesPrincipals.forEach(tema => {
    const referencies = grupsPerTema.get(tema) || [];
    if (referencies.length > 0) {
      const referenciesUniques = Array.from(
        new Map(referencies.map(ref => [ref.id, ref])).values()
      );
      
      contingut += `### ${tema}\n`;
      referenciesUniques.forEach(ref => {
        contingut += `- **${ref.autors[0]} (${ref.any})**: ${ref.titol}\n`;
        if (ref.resum) {
          contingut += `  - ${ref.resum.substring(0, 150)}...\n`;
        }
      });
      contingut += '\n';
    }
  });
  
  // Afegir notes d'ús
  contingut += `\n---\n\n## Notes Importants per a l'Ús d'aquesta Base de Coneixement\n\n`;
  contingut += `1. **Quan responguis preguntes sobre el projecte Prudencia.ad**, utilitza aquestes referències per donar context acadèmic i teòric.\n\n`;
  contingut += `2. **Quan es mencionin conceptes específics**, consulta les referències rellevants de la secció corresponent.\n\n`;
  contingut += `3. **Quan es demanin cites o referències**, utilitza les citacions completes proporcionades.\n\n`;
  contingut += `4. **Quan es parli de sistemes d'IA concrets**, consulta les referències específiques sobre aquests sistemes.\n\n`;
  contingut += `5. **Quan es parli de regulació**, consulta les referències sobre marcs regulatoris (AI Act, CEPEJ, OECD, etc.).\n\n`;
  
  contingut += `\n---\n\n*Aquest document es genera automàticament des de \`lib/bibliografia/index.ts\` i s'actualitza quan es modifica la bibliografia del projecte.*\n`;
  
  const outputPath = join(process.cwd(), 'lib', 'knowledge-base', 'bibliografia-knowledge.md');
  await writeFile(outputPath, contingut, 'utf-8');
  
  console.log(`✅ Fitxer de coneixement generat: ${outputPath}`);
  console.log(`📚 Total de referències processades: ${bibliografia.length}`);
}

// Executar si es crida directament
if (require.main === module) {
  generarKnowledgeBase().catch(console.error);
}

export { generarKnowledgeBase };

