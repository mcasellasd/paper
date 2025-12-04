// Biblioteca de Documentació - Índex de documents

export interface DocumentBiblioteca {
  id: string;
  titol: string;
  descripcio: string;
  data: string;
  tema: string[];
  font: string;
  fitxer: string;
  contingut?: string;
}

export const documentsBiblioteca: DocumentBiblioteca[] = [
  {
    id: '01-crisi-accessibilitat-juridica',
    titol: 'Quadre Resum: La Crisi d\'Accessibilitat Jurídica i les seves Solucions Estratègiques',
    descripcio: 'Anàlisi comparativa de problemes i solucions sobre opacitat jurídica, llenguatge clar, disseny jurídic i intel·ligència artificial.',
    data: '2024',
    tema: ['Accessibilitat jurídica', 'Llenguatge clar', 'Disseny jurídic', 'Intel·ligència artificial'],
    font: 'Notebook LM',
    fitxer: '01-crisi-accessibilitat-juridica.md'
  },
  {
    id: '02-disseny-ia-interpretacio-legal',
    titol: 'Disseny d\'Intel·ligència Artificial per a Interpretació Legal: Marc de Risc Mínim, Verificació Obligatòria i Claredat Màxima',
    descripcio: 'Marc teòric per al disseny d\'una IA per interpretar lleis, doctrina o jurisprudència sota principis de risc mínim, verificació obligatòria i claredat màxima, fusionant tecnologia amb Llenguatge Clar i Disseny Legal.',
    data: '2024',
    tema: ['Intel·ligència artificial', 'Disseny jurídic', 'Llenguatge clar', 'Ètica legal', 'Accessibilitat jurídica'],
    font: 'Document de treball intern',
    fitxer: '02-disseny-ia-interpretacio-legal.md'
  },
  {
    id: 'tamanaha-2004',
    titol: 'On the Rule of Law: History, Politics, Theory',
    descripcio: 'Obra clàssica que explora el concepte d\'estat de dret des de perspectives històriques, polítiques i teòriques. Tamanaha analitza les múltiples definicions i implementacions de l\'estat de dret, proporcionant una base teòrica sòlida per a la comprensió de la legitimitat dels sistemes legals i la necessitat que les lleis siguin accessibles i comprensibles pels ciutadans. L\'autor destaca com tant Plató com Aristòtil afirmaven que la llei hauria de promoure el bé de la comunitat i millorar el desenvolupament de la virtut moral de tots els ciutadans, una idea fonamental que connecta la funció de la llei amb l\'accessibilitat jurídica.',
    data: '2004',
    tema: ['Teoria jurídica', 'Estat de dret', 'Filosofia del dret', 'Legitimitat legal', 'Accessibilitat jurídica', 'Filosofia clàssica'],
    font: 'Cambridge University Press',
    fitxer: 'On-The-Rule-of-Law.pdf'
  },
  {
    id: 'hadfield-2017-microfoundations',
    titol: 'Microfoundations of the Rule of Law',
    descripcio: 'Article acadèmic que explora els fonaments microeconòmics i sociològics de l\'estat de dret. Hadfield analitza com les institucions legals emergeixen i es mantenen a través de mecanismes de coordinació social i confiança, proporcionant una perspectiva única sobre la construcció de sistemes legals accessibles i legítims.',
    data: '2017',
    tema: ['Teoria jurídica', 'Estat de dret', 'Microeconomia', 'Institucions legals', 'Legitimitat legal'],
    font: 'SSRN',
    fitxer: 'MicrofoundationsoftheRuleofLaw.pdf'
  },
  {
    id: 'sandefur-ssrn-1599887',
    titol: 'Access to Justice: Classical Approaches and New Directions',
    descripcio: 'Article acadèmic que revisa les aproximacions clàssiques i noves direccions en l\'estudi de l\'accés a la justícia. Sandefur analitza les barreres sistèmiques, les desigualtats estructurals i les noves estratègies per millorar l\'accessibilitat jurídica, amb especial atenció a les poblacions marginades i vulnerables.',
    data: '2010',
    tema: ['Accessibilitat jurídica', 'Justícia social', 'Dret i societat', 'Desigualtat legal'],
    font: 'SSRN',
    fitxer: 'ssrn-1599887.pdf'
  },
  {
    id: 'ai-act-2024',
    titol: 'Reglament (UE) 2024/1689 sobre la Intel·ligència Artificial (AI Act)',
    descripcio: 'Primer marc regulatori integral de la Unió Europea sobre intel·ligència artificial. Classifica els sistemes d\'IA destinats a l\'Administració de Justícia com d\'Alt Risc (Annex III), imposant obligacions estrictes incloent-hi supervisió humana ("human-in-the-loop"), explicabilitat, transparència, gestió de riscos i avaluació de conformitat. Estableix un precedent global per a la regulació de la IA en àmbits crítics.',
    data: '2024',
    tema: ['IA', 'Regulació', 'Unió Europea', 'Alt risc', 'Supervisió humana', 'Dret europeu'],
    font: 'Diari Oficial de la Unió Europea',
    fitxer: 'OJ_L_202401689_ES_TXT.pdf'
  },
  {
    id: 'digitalisation-regulation-2023',
    titol: 'Reglament (UE) 2023/2844 sobre la digitalització de la cooperació judicial transfronterera',
    descripcio: 'Regulació europea que promou la digitalització de la cooperació judicial entre estats membres de la UE. Estableix estàndards per a la transmissió electrònica de documents, comunicacions digitals i processos judicials en línia, amb l\'objectiu de millorar l\'eficiència i l\'accés a la justícia en un context transfronterer. Rellevant per al projecte Prudencia.ad en el context de la digitalització de l\'accés al dret.',
    data: '2023',
    tema: ['Digitalització', 'Cooperació judicial', 'Unió Europea', 'Accés a la justícia', 'Dret europeu'],
    font: 'Diari Oficial de la Unió Europea',
    fitxer: 'REGLAMENT_UE_2023_2844_cat.pdf'
  },
  {
    id: 'lopez-mantaras-futuro-ia',
    titol: 'El futuro de la IA: hacia inteligencias artificiales realmente inteligentes',
    descripcio: 'Article del reconegut investigador català Ramon López de Mántaras que explora el futur de la intel·ligència artificial i les perspectives per desenvolupar sistemes d\'IA realment intel·ligents. López de Mántaras analitza les limitacions dels models actuals i proposa direccions per al desenvolupament de sistemes d\'IA més avançats i capaços de raonament real. Aquest treball complementa les seves idees sobre IA especialitzada i proporciona una visió de futur per al desenvolupament de sistemes d\'IA en dominis específics com el dret.',
    data: '2024',
    tema: ['IA', 'Futur de la IA', 'Raonament artificial', 'IA especialitzada', 'Investigació en IA'],
    font: 'Ramon López de Mántaras',
    fitxer: 'El-futuro-de-la-IA-hacia-inteligencias-artificiales-realmente-inteligentes.pdf'
  },
  {
    id: 'colina-paradigma-derecho',
    titol: 'Inteligencia artificial: otro cambio de paradigma en el derecho',
    descripcio: 'Article acadèmic d\'Edgar Iván Colina que analitza la intel·ligència artificial com un canvi de paradigma en el dret. Colina explora com la IA està transformant els processos legals, la interpretació jurídica i la pràctica del dret, argumentant que representa un canvi paradigmàtic similar a altres revolucions tecnològiques que han impactat el sistema legal. Aquest treball proporciona una perspectiva teòrica sobre com la IA està redefinint les pràctiques legals i les implicacions per al futur del dret.',
    data: '2024',
    tema: ['IA', 'Canvi de paradigma', 'Teoria jurídica', 'Transformació legal', 'LegalTech'],
    font: 'Edgar Iván Colina',
    fitxer: 'inteligencia-artficial-otro-cambio-de-paradigma-en-el-derech.pdf'
  },
  {
    id: 'codi-etic-ia',
    titol: 'Codi Ètic d\'Intel·ligència Artificial',
    descripcio: 'Document que estableix els principis ètics i les directrius per al desenvolupament i ús responsable de la intel·ligència artificial. Rellevant per al projecte Prudencia.ad en el context de garantir que l\'ús de la IA en l\'àmbit legal compleixi amb estàndards ètics i de responsabilitat.',
    data: '2024',
    tema: ['IA', 'Ètica', 'Responsabilitat', 'Regulació', 'Governança'],
    font: 'Font oficial',
    fitxer: 'codi etic IA.pdf'
  },
  {
    id: 'dialnet-que-es-ia',
    titol: 'Què és la Intel·ligència Artificial',
    descripcio: 'Article acadèmic de Dialnet que explora els conceptes fonamentals de la intel·ligència artificial, les seves aplicacions i implicacions. Proporciona una base teòrica per comprendre els sistemes d\'IA i el seu ús en diversos dominis, incloent-hi el dret.',
    data: '2024',
    tema: ['IA', 'Teoria', 'Conceptes fonamentals', 'Aplicacions'],
    font: 'Dialnet',
    fitxer: 'Dialnet-QueEsLaInteligenciaArtificial-9287111.pdf'
  },
  {
    id: 'dialnet-enriquecimiento-sin-causa',
    titol: 'L\'acció general d\'enriquiment sense causa',
    descripcio: 'Article acadèmic de Dialnet sobre l\'acció general d\'enriquiment sense causa en dret civil. Analitza els fonaments jurídics, els requisits i l\'aplicació d\'aquesta figura legal en la jurisprudència.',
    data: '2024',
    tema: ['Dret civil', 'Enriquiment sense causa', 'Obligacions', 'Jurisprudència'],
    font: 'Dialnet',
    fitxer: 'Dialnet-LaAccionGeneralDeEnriquecimientoSinCausa-7792825.pdf'
  },
  {
    id: 'llms-applications-law',
    titol: 'Exploring LLMs Applications in Law: A Literature Review on Current Legal NLP Approaches',
    descripcio: 'Revisió bibliogràfica exhaustiva sobre les aplicacions de models de llenguatge gran (LLMs) en el dret. Analitza les aproximacions actuals de processament de llenguatge natural legal, les seves capacitats, limitacions i futures direccions de recerca. Rellevant per al projecte Prudencia.ad en el context de l\'ús de LLMs per a la interpretació legal.',
    data: '2024',
    tema: ['IA', 'LLMs', 'NLP legal', 'LegalTech', 'Revisió bibliogràfica'],
    font: 'Article acadèmic',
    fitxer: 'Exploring_LLMs_Applications_in_Law_A_Literature_Review_on_Current_Legal_NLP_Approaches.pdf'
  },
  {
    id: 'legal-hallucinations-llms',
    titol: 'Large Legal Fictions: Profiling Legal Hallucinations in Large Language Models',
    descripcio: 'Article acadèmic que analitza el fenomen de les al·lucinacions legals en models de llenguatge gran. Identifica patrons, causes i estratègies per mitigar les al·lucinacions quan els LLMs s\'utilitzen per a tasques legals. Crític per al projecte Prudencia.ad per garantir la fiabilitat de les interpretacions generades per IA.',
    data: '2024',
    tema: ['IA', 'LLMs', 'Al·lucinacions', 'Fiabilitat', 'LegalTech', 'Qualitat'],
    font: 'Article acadèmic',
    fitxer: 'Large Legal Fictions- Profiling Legal Hallucinations in Large Language Models.pdf'
  },
  {
    id: 'nlp-legal-domain-survey',
    titol: 'Natural Language Processing for the Legal Domain: A Survey of Tasks, Datasets, Models and Challenges',
    descripcio: 'Revisió completa sobre el processament de llenguatge natural aplicat al domini legal. Cobreix tasques, conjunts de dades, models i desafiaments específics del domini legal. Proporciona una visió general de l\'estat de l\'art en NLP legal.',
    data: '2024',
    tema: ['NLP', 'LegalTech', 'IA', 'Revisió bibliogràfica', 'Datasets', 'Models'],
    font: 'Article acadèmic',
    fitxer: 'Natural Language Processing for the Legal Domain- A Survey of Tasks, Datasets, Models and Challenges.pdf'
  },
  {
    id: 'legal-language-concept',
    titol: 'The Concept of Legal Language: What Makes Legal Language \'Legal\'?',
    descripcio: 'Article acadèmic que explora el concepte de llenguatge legal i les característiques que el diferencien del llenguatge ordinari. Analitza la terminologia, l\'estructura i les funcions del llenguatge jurídic, rellevant per a la comprensió de les dificultats d\'accessibilitat jurídica.',
    data: '2024',
    tema: ['Llenguatge legal', 'Terminologia jurídica', 'Accessibilitat jurídica', 'Lingüística jurídica'],
    font: 'Article acadèmic',
    fitxer: 'The Concept of Legal Language- What Makes Legal Language \'Legal\'?.pdf'
  },
  {
    id: 'uniform-legal-language-blockchain',
    titol: 'The Possibility of a Uniform Legal Language at the Interplay of Legal Discourse, Semiotics and Blockchain Networks',
    descripcio: 'Article acadèmic que explora la possibilitat d\'un llenguatge legal uniforme a través de la intersecció del discurs legal, la semiótica i les xarxes blockchain. Analitza com les tecnologies emergents poden facilitar la creació de sistemes legals més accessibles i estandarditzats.',
    data: '2024',
    tema: ['Llenguatge legal', 'Blockchain', 'Semiótica', 'Uniformitat legal', 'Tecnologia'],
    font: 'Article acadèmic',
    fitxer: 'The Possibility of a Uniform Legal Language at the Interplay of Legal Discourse, Semiotics and Blockchain Networks.pdf'
  },
  {
    id: 'mel-legal-spanish-model',
    titol: 'MEL: Legal Spanish Language Model',
    descripcio: 'Article sobre MEL, un model de llenguatge especialitzat en dret espanyol. Descrit el desenvolupament, entrenament i avaluació d\'aquest model legal especialitzat, proporcionant insights sobre com crear models d\'IA adaptats a dominis legals específics.',
    data: '2024',
    tema: ['IA', 'Models de llenguatge', 'Dret espanyol', 'IA especialitzada', 'LegalTech'],
    font: 'Article acadèmic',
    fitxer: 'MEL- LEGAL SPANISH LANGUAGE MODEL.pdf'
  },
  {
    id: 'mel-paper',
    titol: 'MEL Paper',
    descripcio: 'Article relacionat amb el model MEL (Legal Spanish Language Model) que explora aspectes addicionals del desenvolupament i aplicació de models de llenguatge especialitzats en dret.',
    data: '2024',
    tema: ['IA', 'Models de llenguatge', 'Dret espanyol', 'IA especialitzada'],
    font: 'Article acadèmic',
    fitxer: 'mel paper.pdf'
  },
  {
    id: 'ia-responsabilidad-civil',
    titol: 'Capítol 1: La intel·ligència artificial i responsabilitat civil',
    descripcio: 'Capítol d\'un llibre que analitza la responsabilitat civil en el context de la intel·ligència artificial. Explora les implicacions legals de l\'ús de sistemes d\'IA, els criteris d\'atribució de responsabilitat i els mecanismes de compensació per danys causats per IA.',
    data: '2024',
    tema: ['IA', 'Responsabilitat civil', 'Dret de danys', 'Regulació', 'Liability'],
    font: 'Llibre acadèmic',
    fitxer: 'captulo-1-la-inteligencia-artificial-y-responsabilidad-civil_es.pdf'
  },
  {
    id: 'potestades-ia',
    titol: 'L\'exercici de potestats mitjançant intel·ligència artificial',
    descripcio: 'Article que analitza les implicacions legals i administratives de l\'exercici de potestats públiques mitjançant sistemes d\'intel·ligència artificial. Explora els límits, garanties i controls necessaris per a l\'ús de IA en l\'administració pública.',
    data: '2024',
    tema: ['IA', 'Administració pública', 'Potestats administratives', 'Dret administratiu', 'Governança'],
    font: 'Article acadèmic',
    fitxer: 'el-ejercicio-de-potestades-mediante-inteligencia-artificial-_es.pdf'
  },
  {
    id: 'derechos-autor-ia',
    titol: 'Drets d\'autor i entrenament de sistemes d\'IA generativa',
    descripcio: 'Article que analitza les qüestions de propietat intel·lectual relacionades amb l\'entrenament de sistemes d\'IA generativa. Explora els conflictes entre els drets d\'autor i l\'ús de continguts per a l\'entrenament de models d\'IA, i les implicacions legals i ètiques.',
    data: '2024',
    tema: ['IA', 'Propietat intel·lectual', 'Drets d\'autor', 'IA generativa', 'Regulació'],
    font: 'Article acadèmic',
    fitxer: 'derechos-de-autor-y-entrenamiento-de-sistemas-de-ia-generati_es.pdf'
  },
  {
    id: 'ia-privacidad-regulacion',
    titol: 'IA i privacitat: harmonització normativa i reptes regulatoris',
    descripcio: 'Article que analitza la intersecció entre intel·ligència artificial i privacitat, explorant els reptes de l\'harmonització normativa i les necessitats de regulació. Examina com equilibrar la innovació en IA amb la protecció de dades personals.',
    data: '2024',
    tema: ['IA', 'Privacitat', 'Protecció de dades', 'Regulació', 'GDPR', 'Harmonització'],
    font: 'Article acadèmic',
    fitxer: 'ia-y-privacidad-armonizacin-normativa-y-retos-regulatorios-e_es.pdf'
  },
  {
    id: 'blockchain-sistema-judicial',
    titol: 'Implementació de blockchain en el sistema judicial públic i privat',
    descripcio: 'Article que explora les aplicacions de la tecnologia blockchain en sistemes judicials tant públics com privats. Analitza els beneficis, desafiaments i casos d\'ús de blockchain per a millorar la transparència, seguretat i eficiència en sistemes legals.',
    data: '2024',
    tema: ['Blockchain', 'Sistemes judicials', 'Tecnologia legal', 'Transparència', 'Seguretat'],
    font: 'Article acadèmic',
    fitxer: 'implementacin-de-blockchain-en-el-sistema-judicial-pblico-y-_es.pdf'
  },
  {
    id: 'responsabilidad-civil-ia',
    titol: 'Responsabilitat civil extracontractual en matèria d\'IA especialment en vehicles autònoms',
    descripcio: 'Article que analitza la responsabilitat civil extracontractual específicament en el context de la intel·ligència artificial, amb especial atenció als vehicles autònoms. Explora els criteris d\'atribució de responsabilitat, la causalitat i els mecanismes de compensació.',
    data: '2024',
    tema: ['IA', 'Responsabilitat civil', 'Vehicles autònoms', 'Dret de danys', 'Liability'],
    font: 'Article acadèmic',
    fitxer: 'responsabilidad-civil-extracontractual-en-materia-de-ia-espe_es.pdf'
  },
  {
    id: 'modelo-hibrido-mediacion',
    titol: 'Proposta de model híbrid iteratiu per a la mediació de conflictes',
    descripcio: 'Article que proposa un model híbrid iteratiu per a la mediació de conflictes, possiblement incorporant elements d\'IA o tecnologia per millorar els processos de resolució de conflictes.',
    data: '2024',
    tema: ['Mediació', 'Resolució de conflictes', 'ADR', 'Tecnologia legal'],
    font: 'Article acadèmic',
    fitxer: 'propuesta-de-modelo-hbrido-iterativo-para-la-mediacin-de-con_es.pdf'
  },
  {
    id: 'metavers-nft-imposicio',
    titol: 'Metavers i NFT: nous reptes tecnològics en la imposició indirecta',
    descripcio: 'Article que analitza els reptes fiscals i tributaris plantejats pel metavers i els NFT (tokens no fungibles) en el context de la imposició indirecta. Explora com les noves tecnologies digitals desafien els marcs fiscals tradicionals.',
    data: '2024',
    tema: ['Metavers', 'NFT', 'Dret fiscal', 'Imposició indirecta', 'Tecnologia'],
    font: 'Article acadèmic',
    fitxer: 'metavers-i-nft-nous-reptes-tecnolgics-en-la-imposici-indirec.pdf'
  },
  {
    id: 'geopolitica-era-digital',
    titol: 'Geopolítica en l\'era digital: la competència entre EE.UU. i Xina',
    descripcio: 'Article que analitza la dimensió geopolítica de la competència tecnològica entre els Estats Units i Xina en l\'era digital. Explora les implicacions per a la regulació, la seguretat i la sobirania tecnològica.',
    data: '2024',
    tema: ['Geopolítica', 'Tecnologia', 'Competència internacional', 'Seguretat', 'Sobirania'],
    font: 'Article acadèmic',
    fitxer: 'geopoltica-en-la-era-digital-la-competencia-entre-ee-uu-y-ch_es.pdf'
  },
  {
    id: 'internet-contrapoder-acceso',
    titol: 'Capítol XVIII: Internet com a contrapoder, el dret d\'accés',
    descripcio: 'Capítol d\'un llibre que analitza Internet com a eina de contrapoder i el dret d\'accés a la informació. Explora com les tecnologies digitals poden facilitar l\'accés a la justícia i la transparència en sistemes legals.',
    data: '2024',
    tema: ['Internet', 'Accés a la informació', 'Transparència', 'Dret d\'accés', 'Tecnologia'],
    font: 'Llibre acadèmic',
    fitxer: 'captulo-xviii-internet-como-contrapoder-el-derecho-de-acceso_es.pdf'
  },
  {
    id: 'acceso-justicia-demandas-electronicas',
    titol: 'Accés a la justícia a través de demandes electròniques a Mèxic',
    descripcio: 'Article que analitza l\'experiència mexicana en l\'implementació de sistemes de demandes electròniques per millorar l\'accés a la justícia. Explora els beneficis, desafiaments i lliçons apreses de la digitalització de processos judicials.',
    data: '2024',
    tema: ['Accés a la justícia', 'Digitalització', 'Demandes electròniques', 'Justícia electrònica', 'Mèxic'],
    font: 'Article acadèmic',
    fitxer: 'acceso-a-la-justicia-a-travs-de-demandas-electrnicas-en-mxic.pdf'
  },
  {
    id: 'discurso-interpretacion-derecho',
    titol: 'Discurs sobre la interpretació i aplicació del dret',
    descripcio: 'Article que explora els fonaments teòrics de la interpretació i aplicació del dret. Analitza les diferents escoles d\'interpretació jurídica i els mètodes per aplicar la llei a casos concrets, rellevant per a la comprensió de com els sistemes d\'IA poden ajudar en la interpretació legal.',
    data: '2024',
    tema: ['Interpretació jurídica', 'Teoria jurídica', 'Hermenèutica', 'Aplicació del dret'],
    font: 'Article acadèmic',
    fitxer: 'discurso-sobre-la-interpretacinaplicacin-del-derecho-interpr.pdf'
  },
  {
    id: 'andorra-llengues-identitats',
    titol: 'Andorra: Llengües i Identitats',
    descripcio: 'Article que analitza la situació lingüística i identitària d\'Andorra, explorant el multilingüisme i les seves implicacions legals i socials. Rellevant per al projecte Prudencia.ad en el context del suport multilingüe (català, castellà, francès).',
    data: '2024',
    tema: ['Andorra', 'Multilingüisme', 'Llengües', 'Identitat', 'Dret andorrà'],
    font: 'Article acadèmic',
    fitxer: 'Andorra_Llengues_Identitats.pdf'
  },
  {
    id: 'nou-marc-mercats-financers',
    titol: 'Nou Marc de Mercats Financers - Llei 6/2023',
    descripcio: 'Llei andorrana que estableix el nou marc regulatori per als mercats financers. Rellevant per al context legal andorrà i per entendre l\'evolució de la regulació financera al Principat.',
    data: '2023',
    tema: ['Dret andorrà', 'Mercats financers', 'Regulació financera', 'Llei'],
    font: 'Butlletí Oficial del Principat d\'Andorra',
    fitxer: 'Nou_Marc_de_Mercats_Financers_Llei_6_2023.pdf'
  },
  {
    id: 'compravenda-habitatge-horitzontal',
    titol: 'Compravenda d\'habitatge en règim de propietat horitzontal',
    descripcio: 'Document sobre la compravenda d\'habitatge en règim de propietat horitzontal, possiblement un cas pràctic o guia sobre aquesta figura del dret immobiliari.',
    data: '2024',
    tema: ['Dret immobiliari', 'Propietat horitzontal', 'Compravenda', 'Dret civil'],
    font: 'Document legal',
    fitxer: '1055_compravenda-habitatge-regim-prop-horitzontal.docx'
  },
  {
    id: 'ssrn-4335905',
    titol: 'Article SSRN 4335905',
    descripcio: 'Article acadèmic de SSRN (Social Science Research Network) sobre temes relacionats amb dret, justícia o tecnologia legal.',
    data: '2024',
    tema: ['Dret', 'Article acadèmic', 'SSRN'],
    font: 'SSRN',
    fitxer: 'ssrn-4335905.pdf'
  },
  {
    id: 'ssrn-4389233',
    titol: 'Article SSRN 4389233',
    descripcio: 'Article acadèmic de SSRN (Social Science Research Network) sobre temes relacionats amb dret, justícia o tecnologia legal.',
    data: '2024',
    tema: ['Dret', 'Article acadèmic', 'SSRN'],
    font: 'SSRN',
    fitxer: 'ssrn-4389233.pdf'
  },
  {
    id: 'fphy-09-671882',
    titol: 'Article FPHY 09-671882',
    descripcio: 'Article acadèmic publicat en revista científica sobre temes relacionats amb filosofia, dret o ciències socials.',
    data: '2024',
    tema: ['Article acadèmic', 'Filosofia', 'Dret'],
    font: 'Revista acadèmica',
    fitxer: 'fphy-09-671882.pdf'
  },
  {
    id: '32613-1235-PB',
    titol: 'Article 32613-1235-PB',
    descripcio: 'Article acadèmic sobre temes relacionats amb dret, justícia o ciències socials.',
    data: '2024',
    tema: ['Article acadèmic', 'Dret'],
    font: 'Revista acadèmica',
    fitxer: '32613-1235-PB.pdf'
  },
  {
    id: '9788490425459',
    titol: 'Llibre ISBN 9788490425459',
    descripcio: 'Llibre acadèmic identificat per ISBN sobre temes relacionats amb dret, justícia o ciències socials.',
    data: '2024',
    tema: ['Llibre', 'Dret'],
    font: 'Editorial',
    fitxer: '9788490425459.pdf'
  },
  {
    id: 'adminRACO-00000057',
    titol: 'Article RACO 00000057',
    descripcio: 'Article acadèmic publicat a RACO (Repositori d\'Articles Catalans en Obert) sobre temes relacionats amb dret, justícia o ciències socials.',
    data: '2024',
    tema: ['Article acadèmic', 'RACO', 'Dret'],
    font: 'RACO',
    fitxer: 'adminRACO,+00000057.pdf'
  },
  {
    id: 'af-csj-manual',
    titol: 'Manual del Consell Superior de Justícia',
    descripcio: 'Manual o document del Consell Superior de Justícia sobre procediments, normativa o guies relacionades amb l\'administració de justícia.',
    data: '2024',
    tema: ['Administració de justícia', 'Manual', 'Procediments'],
    font: 'Consell Superior de Justícia',
    fitxer: 'af_csj-manual_d.pdf'
  },
  {
    id: 'compendium',
    titol: 'Compendi',
    descripcio: 'Compendi o recopilació de documents, normativa o materials relacionats amb dret o justícia.',
    data: '2024',
    tema: ['Compendi', 'Dret'],
    font: 'Font diverses',
    fitxer: 'compendium.pdf'
  },
  {
    id: 'im-1-3-877017005-in1-487-544',
    titol: 'Article Im 1-3 877017005',
    descripcio: 'Article acadèmic sobre temes relacionats amb dret, justícia o ciències socials.',
    data: '2024',
    tema: ['Article acadèmic', 'Dret'],
    font: 'Revista acadèmica',
    fitxer: 'Im_1_3_877017005_in1_487_544.pdf'
  },
  {
    id: 'im-1-3-877017005-in1-487-544-1',
    titol: 'Article Im 1-3 877017005 (còpia)',
    descripcio: 'Article acadèmic sobre temes relacionats amb dret, justícia o ciències socials (còpia duplicada).',
    data: '2024',
    tema: ['Article acadèmic', 'Dret'],
    font: 'Revista acadèmica',
    fitxer: 'Im_1_3_877017005_in1_487_544 (1).pdf'
  },
  {
    id: 'im-1-3-938536385-in1-51-94',
    titol: 'Article Im 1-3 938536385',
    descripcio: 'Article acadèmic sobre temes relacionats amb dret, justícia o ciències socials.',
    data: '2024',
    tema: ['Article acadèmic', 'Dret'],
    font: 'Revista acadèmica',
    fitxer: 'Im_1_3_938536385_in1_51_94.pdf'
  },
  {
    id: 'n82-arnall-domenech-queralt',
    titol: 'Article N82 - Arnall, Domènech, Queralt',
    descripcio: 'Article acadèmic dels autors Arnall, Domènech i Queralt sobre temes relacionats amb dret o ciències socials.',
    data: '2024',
    tema: ['Article acadèmic', 'Dret'],
    font: 'Revista acadèmica',
    fitxer: 'n82_arnall_domenech_queralt_ca.pdf'
  },
  {
    id: 'n82-montolio-bayes',
    titol: 'Article N82 - Montolio Bayes',
    descripcio: 'Article acadèmic de Montolio Bayes sobre temes relacionats amb dret o ciències socials.',
    data: '2024',
    tema: ['Article acadèmic', 'Dret'],
    font: 'Revista acadèmica',
    fitxer: 'n82_montolio_bayes_ca.epub'
  },
  {
    id: 'n82-carretero',
    titol: 'Article N82 - Carretero',
    descripcio: 'Article acadèmic de Carretero sobre temes relacionats amb dret o ciències socials.',
    data: '2024',
    tema: ['Article acadèmic', 'Dret'],
    font: 'Revista acadèmica',
    fitxer: 'n82_carretero_es.epub'
  },
  {
    id: 'n82-pujol-gabernet',
    titol: 'Article N82 - Pujol Gabernet',
    descripcio: 'Article acadèmic de Pujol Gabernet sobre temes relacionats amb dret o ciències socials.',
    data: '2024',
    tema: ['Article acadèmic', 'Dret'],
    font: 'Revista acadèmica',
    fitxer: 'n82_pujol_gabernet_ca.epub'
  },
  {
    id: 'introduccio-apendice-interpretacion-negativa',
    titol: 'Apèndix II: La interpretació negativa, interpretació i aplicació',
    descripcio: 'Apèndix que explora la interpretació negativa del dret, analitzant com la interpretació i aplicació del dret poden incloure elements de negació o exclusió de significats. Rellevant per a la comprensió de les tècniques d\'interpretació jurídica.',
    data: '2024',
    tema: ['Interpretació jurídica', 'Hermenèutica', 'Aplicació del dret', 'Teoria jurídica'],
    font: 'Llibre acadèmic',
    fitxer: 'introduccio/apndice-ii-la-interpretacin-negativa-interpretacin-y-aplicac.pdf'
  },
  {
    id: 'introduccio-dialnet-geopolitica',
    titol: 'Geopolítica en l\'era digital',
    descripcio: 'Article de Dialnet que analitza la geopolítica en l\'era digital, explorant les dimensions internacionals de la competència tecnològica i les seves implicacions per a la regulació i la sobirania.',
    data: '2024',
    tema: ['Geopolítica', 'Tecnologia', 'Competència internacional', 'Seguretat'],
    font: 'Dialnet',
    fitxer: 'introduccio/Dialnet-GeopoliticaEnLeraDigital-10259644.pdf'
  },
  {
    id: 'introduccio-ensayo-interpretacion',
    titol: 'Assaig sobre la interpretació i aplicació del dret',
    descripcio: 'Assaig acadèmic que explora els fonaments teòrics i pràctics de la interpretació i aplicació del dret. Analitza diferents escoles d\'interpretació i els mètodes per aplicar la llei a casos concrets.',
    data: '2024',
    tema: ['Interpretació jurídica', 'Teoria jurídica', 'Hermenèutica', 'Aplicació del dret'],
    font: 'Assaig acadèmic',
    fitxer: 'introduccio/ensayo-sobre-la-interpretacinaplicacin-del-derecho-interpret.pdf'
  },
  {
    id: 'introduccio-im-1-3-40953890',
    titol: 'Article Im 1-3 40953890',
    descripcio: 'Article acadèmic sobre temes relacionats amb dret, justícia o ciències socials.',
    data: '2024',
    tema: ['Article acadèmic', 'Dret'],
    font: 'Revista acadèmica',
    fitxer: 'introduccio/Im_1_3_40953890_in1.pdf'
  },
  {
    id: 'introduccio-discurso-interpretacion',
    titol: 'Discurs sobre la interpretació i aplicació del dret (introducció)',
    descripcio: 'Versió del discurs sobre la interpretació i aplicació del dret ubicada a la carpeta d\'introducció. Explora els fonaments teòrics de la interpretació jurídica i els mètodes d\'aplicació del dret.',
    data: '2024',
    tema: ['Interpretació jurídica', 'Teoria jurídica', 'Hermenèutica', 'Aplicació del dret'],
    font: 'Article acadèmic',
    fitxer: 'introduccio/discurso-sobre-la-interpretacinaplicacin-del-derecho-interpr.pdf'
  }
];

export function obtenirDocument(id: string): DocumentBiblioteca | undefined {
  return documentsBiblioteca.find(doc => doc.id === id);
}

export function obtenirDocumentsPerTema(tema: string): DocumentBiblioteca[] {
  return documentsBiblioteca.filter(doc => doc.tema.includes(tema));
}

