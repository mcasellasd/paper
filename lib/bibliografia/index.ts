// Bibliografia - Índex de referències bibliogràfiques

export interface ReferenciaBibliografica {
  id: string;
  tipus: 'llibre' | 'article' | 'web' | 'paper' | 'informe' | 'llei' | 'altres';
  autors: string[];
  any: string;
  titol: string;
  subtitol?: string;
  editorial?: string;
  revista?: string;
  volum?: string;
  numero?: string;
  pagines?: string;
  url?: string;
  doi?: string;
  isbn?: string;
  citacio: string; // Citació completa formatejada
  notes?: string;
  resum?: string; // Resum del contingut i contribució del recurs
  temes: string[];
  fitxer?: string; // Ruta al fitxer PDF o document
}

export const bibliografia: ReferenciaBibliografica[] = [
  {
    id: 'choi-2023',
    tipus: 'article',
    autors: ['Choi, J. H.', 'Monahan, A.', 'Schwarcz, D.'],
    any: '2023',
    titol: 'ChatGPT Goes to Law School',
    revista: 'SSRN Electronic Journal',
    url: 'https://ssrn.com/abstract=4335905',
    citacio: 'Choi, J. H., Monahan, A., & Schwarcz, D. (2023). ChatGPT Goes to Law School. SSRN Electronic Journal.',
    resum: 'Estudi empíric pioner que avalua exhaustivament les capacitats de ChatGPT (GPT-3.5) en tasques acadèmiques típiques de l\'escola de dret. Els autors van avaluar el model en múltiples tipus d\'exercicis legals, incloent-hi exàmens de múltiple opció, preguntes obertes, redacció de memos legals i anàlisi de casos. Els resultats mostren que ChatGPT va obtenir una puntuació de C+ en un exàmen de dret real, demostrant competència però amb limitacions significatives en raonament legal complex, citació precisa i anàlisi jurídica profunda. El treball identifica les àrees on la IA pot ser útil (generació de primers esborranys, brainstorming) i on requereix supervisió humana estricta (citació de fonts, anàlisi jurídica precisa). Aquest estudi estableix una línia base important per a la comprensió de les capacitats i limitacions dels LLMs en l\'educació i pràctica legal.',
    temes: ['LegalTech', 'IA generativa', 'Educació legal'],
    fitxer: 'ssrn-4335905.pdf'
  },
  {
    id: 'hadfield-2017',
    tipus: 'llibre',
    autors: ['Hadfield, G. K.'],
    any: '2017',
    titol: 'Rules for a Flat World: Why Humans Invented Law and How to Reinvent It for a Complex Global Economy',
    editorial: 'Oxford University Press',
    isbn: '978-0199916528',
    citacio: 'Hadfield, G. K. (2017). Rules for a Flat World: Why Humans Invented Law and How to Reinvent It for a Complex Global Economy. Oxford University Press.',
    resum: 'Obra fonamental que analitza la necessitat de reinventar el dret per adaptar-se a l\'economia global moderna. Hadfield argumenta que els sistemes legals tradicionals són inadequats per a la complexitat del món actual i proposa noves formes de regulació i accessibilitat jurídica.',
    temes: ['Teoria jurídica', 'Innovació legal', 'Economia global']
  },
  {
    id: 'hadfield-2017-microfoundations',
    tipus: 'article',
    autors: ['Hadfield, G. K.'],
    any: '2017',
    titol: 'Microfoundations of the Rule of Law',
    revista: 'SSRN Electronic Journal',
    url: 'https://ssrn.com/abstract=',
    citacio: 'Hadfield, G. K. (2017). Microfoundations of the Rule of Law. SSRN Electronic Journal.',
    resum: 'Article acadèmic que explora els fonaments microeconòmics i sociològics de l\'estat de dret. Hadfield analitza com les institucions legals emergeixen i es mantenen a través de mecanismes de coordinació social i confiança, proporcionant una perspectiva única sobre la construcció de sistemes legals accessibles i legítims. Aquest treball complementa la seva obra sobre la necessitat de reinventar el dret per a l\'era moderna.',
    temes: ['Teoria jurídica', 'Estat de dret', 'Microeconomia', 'Institucions legals', 'Legitimitat legal'],
    fitxer: 'MicrofoundationsoftheRuleofLaw.pdf'
  },
  {
    id: 'ji-2023',
    tipus: 'article',
    autors: ['Ji, Z.', 'Lee, N.', 'Frieske, R.', 'Yu, T.', 'Su, D.', 'Xu, Y.', 'Ishii, E.', 'Bang, Y. J.', 'Madotto, A.', 'Fung, P.'],
    any: '2023',
    titol: 'Survey of Hallucination in Natural Language Generation',
    revista: 'ACM Computing Surveys',
    volum: '55',
    numero: '12',
    doi: '10.1145/3571730',
    citacio: 'Ji, Z., Lee, N., Frieske, R., et al. (2023). Survey of Hallucination in Natural Language Generation. ACM Computing Surveys, 55(12). https://doi.org/10.1145/3571730',
    resum: 'Revisió exhaustiva del fenomen de l\'al·lucinació en la generació de llenguatge natural. L\'article classifica diferents tipus d\'al·lucinacions, analitza les causes i proposa estratègies de mitigació, essencial per entendre els riscos de la IA en aplicacions legals.',
    temes: ['IA generativa', 'Al·lucinació', 'Processament de llenguatge natural']
  },
  {
    id: 'katz-2023',
    tipus: 'article',
    autors: ['Katz, D. M.', 'Bommarito, M. J.', 'Gao, S.', 'Arredondo, P.'],
    any: '2023',
    titol: 'GPT-4 Passes the Bar Exam',
    revista: 'SSRN Electronic Journal',
    url: 'https://ssrn.com/abstract=4389233',
    citacio: 'Katz, D. M., Bommarito, M. J., Gao, S., & Arredondo, P. (2023). GPT-4 Passes the Bar Exam. SSRN Electronic Journal.',
    resum: 'Estudi que demostra que GPT-4 és capaç de superar l\'examen de barra dels Estats Units, assolint una puntuació superior al 90% dels candidats humans. Aquest treball posa de manifest les capacitats dels LLMs en raonament jurídic complex.',
    temes: ['LegalTech', 'IA generativa', 'Avaluació legal']
  },
  {
    id: 'sandefur-2009',
    tipus: 'article',
    autors: ['Sandefur, R. L.'],
    any: '2009',
    titol: 'Access to Justice',
    revista: 'Annual Review of Law and Social Science',
    volum: '5',
    pagines: '339-358',
    doi: '10.1146/annurev.lawsocsci.4.110707.172303',
    citacio: 'Sandefur, R. L. (2009). Access to Justice. Annual Review of Law and Social Science, 5, 339-358. https://doi.org/10.1146/annurev.lawsocsci.4.110707.172303',
    resum: 'Revisió acadèmica que examina les barreres sistèmiques per a l\'accés a la justícia, incloent-hi la complexitat del llenguatge jurídic, les desigualtats econòmiques i les limitacions d\'infraestructura. Fonamental per entendre el context de l\'accessibilitat jurídica.',
    temes: ['Accessibilitat jurídica', 'Justícia social', 'Dret i societat']
  },
  {
    id: 'sandefur-ssrn-1599887',
    tipus: 'article',
    autors: ['Sandefur, R. L.'],
    any: '2010',
    titol: 'Access to Justice: Classical Approaches and New Directions',
    revista: 'SSRN Electronic Journal',
    url: 'https://ssrn.com/abstract=1599887',
    citacio: 'Sandefur, R. L. (2010). Access to Justice: Classical Approaches and New Directions. SSRN Electronic Journal. https://ssrn.com/abstract=1599887',
    resum: 'Article acadèmic que revisa les aproximacions clàssiques i noves direccions en l\'estudi de l\'accés a la justícia. Sandefur analitza les barreres sistèmiques, les desigualtats estructurals i les noves estratègies per millorar l\'accessibilitat jurídica, amb especial atenció a les poblacions marginades i vulnerables. Aquest treball expandeix i actualitza les idees presentades en la seva revisió de 2009.',
    temes: ['Accessibilitat jurídica', 'Justícia social', 'Dret i societat', 'Desigualtat legal'],
    fitxer: 'ssrn-1599887.pdf'
  },
  {
    id: 'tamanaha-2004',
    tipus: 'llibre',
    autors: ['Tamanaha, B. Z.'],
    any: '2004',
    titol: 'On the Rule of Law: History, Politics, Theory',
    editorial: 'Cambridge University Press',
    isbn: '978-0521848427',
    citacio: 'Tamanaha, B. Z. (2004). On the Rule of Law: History, Politics, Theory. Cambridge University Press.',
    resum: 'Obra clàssica que explora el concepte d\'estat de dret des de perspectives històriques, polítiques i teòriques. Tamanaha analitza les múltiples definicions i implementacions de l\'estat de dret, proporcionant una base teòrica sòlida per a la comprensió de la legitimitat dels sistemes legals. L\'autor destaca com tant Plató com Aristòtil afirmaven que la llei hauria de promoure el bé de la comunitat i millorar el desenvolupament de la virtut moral de tots els ciutadans, una idea fonamental que connecta la funció de la llei amb l\'accessibilitat jurídica. Tamanaha argumenta que l\'estat de dret requereix que les lleis siguin accessibles, comprensibles i previsibles pels ciutadans, establint una connexió directa entre accessibilitat jurídica i legitimitat democràtica. Aquesta obra fonamenta teòricament la necessitat d\'eines que facilitin la comprensió del dret com a requisit per a l\'efectivitat de l\'estat de dret.',
    temes: ['Teoria jurídica', 'Estat de dret', 'Filosofia del dret', 'Legitimitat legal', 'Accessibilitat jurídica'],
    fitxer: 'On-The-Rule-of-Law.pdf'
  },
  {
    id: 'lopez-mantaras-2023',
    tipus: 'article',
    autors: ['López de Mántaras, R.'],
    any: '2023',
    titol: 'Why specialized AI can triumph in natural language',
    revista: 'Nature Machine Intelligence',
    url: 'https://www.nature.com/articles/s42256-023-00688-4',
    citacio: 'López de Mántaras, R. (2023). Why specialized AI can triumph in natural language. Nature Machine Intelligence.',
    resum: 'Article fonamental de l\'investigador català Ramon López de Mántaras que argumenta que les intel·ligències artificials especialitzades poden triomfar en el processament de llenguatge natural en dominis específics. López de Mántaras sosté que, en lloc de buscar sistemes d\'IA generals que intentin abastar tots els dominis, les IA especialitzades entrenades específicament per a dominis concrets (com el dret, la medicina o altres àrees tècniques) poden assolir millors resultats en comprensió, generació i interpretació de llenguatge natural especialitzat. Aquesta perspectiva és especialment rellevant per al LegalTech, on els sistemes d\'IA especialitzats en dret poden superar les limitacions dels models generals en tasques de comprensió i simplificació de llenguatge jurídic.',
    temes: ['IA especialitzada', 'Llenguatge natural', 'LegalTech', 'Processament de llenguatge natural', 'IA aplicada'],
    notes: 'Article clau que fonamenta l\'aproximació de desenvolupar models d\'IA especialitzats per al dret en lloc de confiar exclusivament en models generals.'
  },
  {
    id: 'lopez-mantaras-futuro-ia',
    tipus: 'article',
    autors: ['López de Mántaras, R.'],
    any: '2024',
    titol: 'El futuro de la IA: hacia inteligencias artificiales realmente inteligentes',
    revista: 'Document acadèmic',
    citacio: 'López de Mántaras, R. (2024). El futuro de la IA: hacia inteligencias artificiales realmente inteligentes.',
    resum: 'Article del reconegut investigador català Ramon López de Mántaras que explora el futur de la intel·ligència artificial i les perspectives per desenvolupar sistemes d\'IA realment intel·ligents. López de Mántaras analitza les limitacions dels models actuals i proposa direccions per al desenvolupament de sistemes d\'IA més avançats i capaços de raonament real. Aquest treball complementa les seves idees sobre IA especialitzada i proporciona una visió de futur per al desenvolupament de sistemes d\'IA en dominis específics com el dret.',
    temes: ['IA', 'Futur de la IA', 'Raonament artificial', 'IA especialitzada', 'Investigació en IA'],
    fitxer: 'El-futuro-de-la-IA-hacia-inteligencias-artificiales-realmente-inteligentes.pdf'
  },
  {
    id: 'colina-paradigma-derecho',
    tipus: 'article',
    autors: ['Colina, E. I.'],
    any: '2024',
    titol: 'Inteligencia artificial: otro cambio de paradigma en el derecho',
    revista: 'Document acadèmic',
    citacio: 'Colina, E. I. (2024). Inteligencia artificial: otro cambio de paradigma en el derecho.',
    resum: 'Article acadèmic d\'Edgar Iván Colina que analitza la intel·ligència artificial com un canvi de paradigma en el dret. Colina explora com la IA està transformant els processos legals, la interpretació jurídica i la pràctica del dret, argumentant que representa un canvi paradigmàtic similar a altres revolucions tecnològiques que han impactat el sistema legal. Aquest treball proporciona una perspectiva teòrica sobre com la IA està redefinint les pràctiques legals i les implicacions per al futur del dret.',
    temes: ['IA', 'Canvi de paradigma', 'Teoria jurídica', 'Transformació legal', 'LegalTech'],
    fitxer: 'inteligencia-artficial-otro-cambio-de-paradigma-en-el-derech.pdf'
  },
  {
    id: 'plain-writing-act-2010',
    tipus: 'llei',
    autors: ['Congrés dels Estats Units'],
    any: '2010',
    titol: 'Plain Writing Act of 2010',
    subtitol: 'Public Law 111-274, 124 Stat. 2861',
    citacio: 'Plain Writing Act of 2010, Public Law 111-274, 124 Stat. 2861 (Estats Units).',
    resum: 'Llei federal dels Estats Units que requereix que les agències federals utilitzin llenguatge clar en la comunicació amb el públic. Aquesta llei estableix un precedent important per a la promoció del llenguatge clar en documents governamentals i legals.',
    temes: ['Llenguatge clar', 'Legislació', 'Accessibilitat jurídica']
  },
  {
    id: 'institut-estudis-andorrans-2023',
    tipus: 'informe',
    autors: ['Institut d\'Estudis Andorrans'],
    any: '2023',
    titol: 'Dades demogràfiques i poblacionals',
    citacio: 'Institut d\'Estudis Andorrans (2023). Dades demogràfiques i poblacionals.',
    resum: 'Informe estadístic que proporciona dades demogràfiques actualitzades sobre la població d\'Andorra, incloent-hi informació sobre la composició per origen, distribució geogràfica i característiques poblacionals rellevants per a l\'anàlisi del context jurídic.',
    temes: ['Demografia', 'Andorra', 'Estadístiques']
  },
  {
    id: 'ministeri-afers-socials-2023',
    tipus: 'informe',
    autors: ['Servei d\'Estudis del Ministeri d\'Afers Socials, Justícia i Interior'],
    any: '2023',
    titol: 'Estadístiques poblacionals d\'Andorra',
    citacio: 'Servei d\'Estudis del Ministeri d\'Afers Socials, Justícia i Interior (2023). Estadístiques poblacionals d\'Andorra.',
    resum: 'Document oficial que recull estadístiques detallades sobre la població andorrana, incloent-hi dades sobre immigració, distribució per nacionalitat i característiques sociodemogràfiques. Essencial per entendre el context multilingüe i multicultural d\'Andorra.',
    temes: ['Demografia', 'Andorra', 'Estadístiques']
  },
  // Referències basades en documents PDF de la biblioteca
  {
    id: 'derechos-autor-entrenamiento-ia',
    tipus: 'article',
    autors: ['Autors diversos'],
    any: '2024',
    titol: 'Derechos de autor y entrenamiento de sistemas de IA generativa',
    revista: 'Artículo académico',
    citacio: 'Derechos de autor y entrenamiento de sistemas de IA generativa. (2024). Document disponible a la biblioteca del projecte.',
    resum: 'Anàlisi de les qüestions legals relacionades amb l\'ús de contingut amb drets d\'autor per entrenar sistemes d\'IA generativa. Examina els conflictes entre la propietat intel·lectual i el desenvolupament de tecnologies d\'IA, incloent-hi aspectes de fair use i excepcions legals.',
    temes: ['Propietat intel·lectual', 'IA generativa', 'Dret d\'autor'],
    fitxer: 'derechos-de-autor-y-entrenamiento-de-sistemas-de-ia-generati_es.pdf'
  },
  {
    id: 'ia-privacidad-armonizacion',
    tipus: 'article',
    autors: ['Autors diversos'],
    any: '2024',
    titol: 'IA y privacidad: armonización normativa y retos regulatorios',
    revista: 'Artículo académico',
    citacio: 'IA y privacidad: armonización normativa y retos regulatorios. (2024). Document disponible a la biblioteca del projecte.',
    resum: 'Estudi sobre els desafiaments de la regulació de la privacitat en l\'era de la IA, analitzant la necessitat d\'harmonització normativa entre diferents jurisdiccions i els reptes específics que presenta la protecció de dades en sistemes d\'IA.',
    temes: ['Privacitat', 'IA', 'Regulació', 'Dret de protecció de dades'],
    fitxer: 'ia-y-privacidad-armonizacin-normativa-y-retos-regulatorios-e_es.pdf'
  },
  {
    id: 'blockchain-sistema-judicial',
    tipus: 'article',
    autors: ['Autors diversos'],
    any: '2024',
    titol: 'Implementación de blockchain en el sistema judicial público',
    revista: 'Artículo académico',
    citacio: 'Implementación de blockchain en el sistema judicial público. (2024). Document disponible a la biblioteca del projecte.',
    resum: 'Anàlisi de les possibilitats i limitacions de la implementació de tecnologia blockchain en sistemes judicials públics. Examina casos d\'ús com la gestió de documents legals, la traçabilitat de processos i la garantia d\'integritat de la informació judicial.',
    temes: ['Blockchain', 'Sistema judicial', 'Tecnologia jurídica', 'Innovació legal'],
    fitxer: 'implementacin-de-blockchain-en-el-sistema-judicial-pblico-y-_es.pdf'
  },
  {
    id: 'modelo-hibrido-mediacion',
    tipus: 'article',
    autors: ['Autors diversos'],
    any: '2024',
    titol: 'Propuesta de modelo híbrido iterativo para la mediación de conflictos',
    revista: 'Artículo académico',
    citacio: 'Propuesta de modelo híbrido iterativo para la mediación de conflictos. (2024). Document disponible a la biblioteca del projecte.',
    resum: 'Proposta teòrica i pràctica per a un model de mediació de conflictes que combina elements presencials i digitals en un procés iteratiu. Analitza com la tecnologia pot millorar l\'accés a la resolució alternativa de conflictes.',
    temes: ['Mediació', 'Resolució de conflictes', 'Dret processal'],
    fitxer: 'propuesta-de-modelo-hbrido-iterativo-para-la-mediacin-de-con_es.pdf'
  },
  {
    id: 'responsabilidad-civil-ia',
    tipus: 'article',
    autors: ['Autors diversos'],
    any: '2024',
    titol: 'Responsabilidad civil extracontractual en materia de IA',
    revista: 'Artículo académic',
    citacio: 'Responsabilidad civil extracontractual en materia de IA. (2024). Document disponible a la biblioteca del projecte.',
    resum: 'Estudi sobre la responsabilitat civil derivada de danys causats per sistemes d\'IA, analitzant els reptes legals de l\'atribució de responsabilitat quan hi ha múltiples actors (desenvolupadors, usuaris, operadors) i la necessitat d\'adaptar el dret de danys a la realitat de la IA.',
    temes: ['Responsabilitat civil', 'IA', 'Dret civil', 'Dret de danys'],
    fitxer: 'responsabilidad-civil-extracontractual-en-materia-de-ia-espe_es.pdf'
  },
  {
    id: 'interpretacion-negativa',
    tipus: 'article',
    autors: ['Autors diversos'],
    any: '2024',
    titol: 'La interpretación negativa: interpretación y aplicación del derecho',
    revista: 'Artículo académico',
    citacio: 'La interpretación negativa: interpretación y aplicación del derecho. (2024). Document disponible a la biblioteca del projecte.',
    resum: 'Anàlisi teòrica sobre la interpretació negativa del dret, explorant com els intèrprets identifiquen allò que la llei no diu explícitament. Fonamental per entendre les limitacions i possibilitats de la interpretació jurídica assistida per IA.',
    temes: ['Interpretació jurídica', 'Teoria del dret', 'Hermenèutica jurídica'],
    fitxer: 'introduccio/apndice-ii-la-interpretacin-negativa-interpretacin-y-aplicac.pdf'
  },
  {
    id: 'geopolitica-era-digital',
    tipus: 'article',
    autors: ['Autors diversos'],
    any: '2024',
    titol: 'Geopolítica en la era digital',
    revista: 'Dialnet',
    citacio: 'Geopolítica en la era digital. (2024). Dialnet. Document disponible a la biblioteca del projecte.',
    resum: 'Anàlisi de les implicacions geopolítiques de la transformació digital, incloent-hi aspectes de sobirania digital, regulació transfronterera i competència entre potències tecnològiques. Rellevant per entendre el context internacional de la regulació de la IA.',
    temes: ['Geopolítica', 'Era digital', 'Dret internacional'],
    fitxer: 'introduccio/Dialnet-GeopoliticaEnLeraDigital-10259644.pdf'
  },
  {
    id: 'discurso-interpretacion-derecho',
    tipus: 'article',
    autors: ['Autors diversos'],
    any: '2024',
    titol: 'Discurso sobre la interpretación y aplicación del derecho',
    revista: 'Artículo académico',
    citacio: 'Discurso sobre la interpretación y aplicación del derecho. (2024). Document disponible a la biblioteca del projecte.',
    resum: 'Reflexió teòrica sobre els processos d\'interpretació i aplicació del dret, explorant les relacions entre text legal, context i aplicació pràctica. Contribueix a la comprensió de com els sistemes d\'IA poden assistir en aquests processos.',
    temes: ['Interpretació jurídica', 'Teoria del dret', 'Filosofia del dret'],
    fitxer: 'introduccio/discurso-sobre-la-interpretacinaplicacin-del-derecho-interpr.pdf'
  },
  {
    id: 'ensayo-interpretacion-derecho',
    tipus: 'article',
    autors: ['Autors diversos'],
    any: '2024',
    titol: 'Ensayo sobre la interpretación y aplicación del derecho',
    revista: 'Artículo académico',
    citacio: 'Ensayo sobre la interpretación y aplicación del derecho. (2024). Document disponible a la biblioteca del projecte.',
    resum: 'Assaig acadèmic que explora les metodologies i tècniques d\'interpretació jurídica, analitzant diferents escoles de pensament i les seves implicacions pràctiques. Útil per a la comprensió de com la IA pot replicar o millorar processos d\'interpretació humana.',
    temes: ['Interpretació jurídica', 'Teoria del dret', 'Metodologia jurídica'],
    fitxer: 'introduccio/ensayo-sobre-la-interpretacinaplicacin-del-derecho-interpr.pdf'
  },
  {
    id: 'compendium',
    tipus: 'informe',
    autors: ['Autors diversos'],
    any: '2024',
    titol: 'Compendium de documents jurídics',
    citacio: 'Compendium de documents jurídics. (2024). Document disponible a la biblioteca del projecte.',
    resum: 'Recopilació de documents jurídics rellevants per al projecte, incloent-hi normatives, jurisprudència i documents acadèmics relacionats amb l\'aplicació de la IA en sistemes legals.',
    temes: ['Compendi', 'Documents jurídics', 'Recopilació'],
    fitxer: 'compendium.pdf'
  },
  // Informes i Documents Normatius Internacionals i Europeus
  {
    id: 'satterthwaite-2025',
    tipus: 'informe',
    autors: ['Satterthwaite, M.'],
    any: '2025',
    titol: 'AI in judicial systems: promises and pitfalls',
    subtitol: 'Report of the Special Rapporteur on Independence of Judges and Lawyers',
    citacio: 'Satterthwaite, M. (2025). AI in judicial systems: promises and pitfalls. Report of the Special Rapporteur on Independence of Judges and Lawyers (A/80/169). Office of the High Commissioner for Human Rights (OHCHR).',
    resum: 'Informe crític de l\'ONU que examina les promeses i perills de la IA en sistemes judicials. Adverteix contra el "tecno-solucionisme" i subratlla la necessitat imperativa d\'accés a un jutge i un advocat humans. Analitza els riscos per als drets humans, la independència judicial i l\'equitat processal.',
    temes: ['IA judicial', 'Ètica legal', 'Drets humans', 'Independència judicial'],
    notes: 'Informe fonamental que adverteix contra el "tecno-solucionisme" i subratlla la necessitat d\'accés a un jutge i un advocat humans.'
  },
  {
    id: 'cepej-2018',
    tipus: 'informe',
    autors: ['Comissió Europea per a l\'Eficàcia de la Justícia (CEPEJ)'],
    any: '2018',
    titol: 'Carta Ètica Europea sobre l\'ús de la Intel·ligència Artificial en els sistemes judicials i el seu entorn',
    citacio: 'Comissió Europea per a l\'Eficàcia de la Justícia (CEPEJ). (2018). Carta Ètica Europea sobre l\'ús de la Intel·ligència Artificial en els sistemes judicials i el seu entorn.',
    resum: 'Document pioner que estableix els principis ètics fonamentals per a l\'ús de la IA en sistemes judicials europeus. Defineix cinc principis clau: respecte dels drets fonamentals, no-discriminació, qualitat i seguretat, transparència, imparcialitat i equitat, i control per l\'usuari. Serveix com a referència per al desenvolupament de sistemes d\'IA judicials ètics.',
    temes: ['IA judicial', 'Ètica legal', 'Transparència', 'No-discriminació', 'Imparcialitat'],
    notes: 'Estableix principis ètics clau com la transparència, la imparcialitat, la justícia i la no-discriminació en els sistemes d\'IA judicials.'
  },
  {
    id: 'ai-act-2024',
    tipus: 'llei',
    autors: ['Parlament Europeu i Consell de la Unió Europea'],
    any: '2024',
    titol: 'Reglament (UE) 2024/1689 sobre la Intel·ligència Artificial',
    subtitol: 'AI Act',
    citacio: 'Reglament (UE) 2024/1689 del Parlament Europeu i del Consell, de 13 de juny de 2024, sobre la Intel·ligència Artificial i per la qual s\'modifiquen determinats actes legislatius de la Unió.',
    resum: 'Primer marc regulatori integral de la Unió Europea sobre intel·ligència artificial. Classifica els sistemes d\'IA destinats a l\'Administració de Justícia com d\'Alt Risc (Annex III), imposant obligacions estrictes incloent-hi supervisió humana ("human-in-the-loop"), explicabilitat, transparència, gestió de riscos i avaluació de conformitat. Estableix un precedent global per a la regulació de la IA en àmbits crítics.',
    temes: ['IA', 'Regulació', 'Unió Europea', 'Alt risc', 'Supervisió humana'],
    notes: 'Primer marc legal integral de la UE sobre IA. Classifica els sistemes d\'IA destinats a l\'Administració de Justícia com d\'Alt Risc (Annex III), imposant obligacions estrictes com la supervisió humana i l\'explicabilitat.',
    fitxer: 'OJ_L_202401689_ES_TXT.pdf'
  },
  {
    id: 'digitalisation-regulation-2023',
    tipus: 'llei',
    autors: ['Parlament Europeu i Consell de la Unió Europea'],
    any: '2023',
    titol: 'Reglament (UE) 2023/2844 sobre la digitalització de la cooperació judicial transfronterera',
    citacio: 'Reglament (UE) 2023/2844 del Parlament Europeu i del Consell, de 13 de desembre de 2023, sobre la digitalització de la cooperació judicial transfronterera.',
    resum: 'Regulació europea que promou la digitalització de la cooperació judicial entre estats membres de la UE. Estableix estàndards per a la transmissió electrònica de documents, comunicacions digitals i processos judicials en línia, amb l\'objectiu de millorar l\'eficiència i l\'accés a la justícia en un context transfronterer.',
    temes: ['Digitalització', 'Cooperació judicial', 'Unió Europea', 'Accés a la justícia'],
    notes: 'Té com a objectiu millorar l\'eficiència de la cooperació judicial transfronterera i l\'accés a la justícia mitjançant canals digitals.',
    fitxer: 'REGLAMENT_UE_2023_2844_cat.pdf'
  },
  {
    id: 'oecd-2024',
    tipus: 'informe',
    autors: ['Organització per a la Cooperació i el Desenvolupament Econòmic (OECD)'],
    any: '2024',
    titol: 'Recommendation of the Council on Artificial Intelligence',
    citacio: 'OECD. (2024). Recommendation of the Council on Artificial Intelligence.',
    resum: 'Recomanació internacional de l\'OECD que estableix principis per a una IA fiable, centrada en l\'ésser humà i orientada al benestar. Inclou principis sobre creixement inclusiu, benestar humà, valors i drets humans, transparència i explicabilitat, robustesa i seguretat, i responsabilitat. Serveix com a marc de referència per a polítiques públiques sobre IA.',
    temes: ['IA', 'Governança', 'Polítiques públiques', 'Cooperació internacional'],
    notes: 'Document rellevant per la governança de la IA a nivell internacional.'
  },
  {
    id: 'unesco-2025',
    tipus: 'informe',
    autors: ['Organització de les Nacions Unides per a l\'Educació, la Ciència i la Cultura (UNESCO)'],
    any: '2025',
    titol: 'Artificial Intelligence and the Rule of Law',
    citacio: 'UNESCO. (2025). Artificial Intelligence and the Rule of Law.',
    resum: 'Document de l\'UNESCO que explora la intersecció entre la IA i l\'estat de dret, amb èmfasi en la creació de capacitats per als sistemes judicials. Analitza com la IA pot reforçar o debilitar l\'estat de dret, i proporciona orientacions per a la implementació responsable de tecnologies d\'IA en sistemes legals.',
    temes: ['IA', 'Estat de dret', 'Sistemes judicials', 'Creació de capacitats'],
    notes: 'Document relacionat amb la creació de capacitats per als sistemes judicials.'
  },
  // Casos Judicials
  {
    id: 'mata-v-avianca-2023',
    tipus: 'altres',
    autors: ['Tribunal de Districte del Districte Sud de Nova York'],
    any: '2023',
    titol: 'Mata v. Avianca, Inc.',
    subtitol: '2023 WL 4114965 (S.D.N.Y. June 22, 2023)',
    citacio: 'Mata v. Avianca, Inc., 2023 WL 4114965 (S.D.N.Y. June 22, 2023).',
    resum: 'Cas judicial històric on els advocats van ser sancionats per citar casos jurídics completament ficticis generats per ChatGPT. El tribunal va descobrir que sis casos citats no existien i va imposar sancions als advocats per falta de verificació. Aquest cas il·lustra els perills de l\'al·lucinació de la IA en aplicacions legals i la necessitat de supervisió humana estricta.',
    temes: ['Al·lucinació IA', 'Ètica legal', 'Responsabilitat professional', 'Casos judicials'],
    notes: 'Cas àmpliament difós on els advocats van ser sancionats per citar casos inexistents generats per IA.'
  },
  {
    id: 'park-v-kim-2023',
    tipus: 'altres',
    autors: ['Tribunal de Districte del Districte Est de Nova York'],
    any: '2023',
    titol: 'Park v. Kim',
    subtitol: 'No. 22-cv-1543 (E.D.N.Y. Nov. 27, 2023)',
    citacio: 'Park v. Kim, No. 22-cv-1543 (E.D.N.Y. Nov. 27, 2023).',
    resum: 'Cas addicional que exemplifica el problema de l\'al·lucinació de la IA en documents legals. El tribunal va identificar cites i precedents generats per IA que no existien, destacant la necessitat de protocols de verificació quan s\'utilitza IA en la pràctica legal.',
    temes: ['Al·lucinació IA', 'Ètica legal', 'Responsabilitat professional', 'Casos judicials']
  },
  {
    id: 'us-v-cohen-2024',
    tipus: 'altres',
    autors: ['Tribunal de Districte del Districte Sud de Nova York'],
    any: '2024',
    titol: 'United States v. Cohen',
    subtitol: 'No. 20-CR-108 (S.D.N.Y. July 17, 2024)',
    citacio: 'United States v. Cohen, No. 20-CR-108 (S.D.N.Y. July 17, 2024).',
    resum: 'Cas criminal on es van identificar problemes amb contingut generat per IA en documents legals. Il·lustra com l\'ús no supervisat de IA pot comprometre la integritat del procés judicial i la necessitat de responsabilitat professional en l\'ús de tecnologies d\'IA.',
    temes: ['Al·lucinació IA', 'Ètica legal', 'Responsabilitat professional', 'Casos judicials']
  },
  {
    id: 'state-v-loomis-2016',
    tipus: 'altres',
    autors: ['Tribunal Suprem de Wisconsin'],
    any: '2016',
    titol: 'State v. Loomis',
    subtitol: '881 N.W.2d 749 (Wis. 2016)',
    citacio: 'State v. Loomis, 881 N.W.2d 749 (Wis. 2016).',
    resum: 'Decisió històrica del Tribunal Suprem de Wisconsin que va validar l\'ús del sistema COMPAS (avaluació algorítmica de risc) en decisions de sentència, però va ordenar que els jutges rebin advertències escrites sobre les limitacions i possibles inconvenients de la tecnologia. Aquest cas estableix un precedent important sobre l\'ús d\'algoritmes en decisions judicials i la necessitat de transparència.',
    temes: ['Avaluació de risc algorítmic', 'Biaix algorítmic', 'Sentència', 'COMPAS', 'Casos judicials'],
    notes: 'Decisió clau que va validar l\'ús de les avaluacions algorítmiques de risc en la sentència (utilitzant el sistema COMPAS), però va ordenar una advertència escrita sobre els possibles inconvenients de la tecnologia.'
  },
  // Estudis Acadèmics
  {
    id: 'stern-2021',
    tipus: 'article',
    autors: ['Stern, R. E.', 'Liebman, B. L.', 'Roberts, M.', 'Wang, A. Z.'],
    any: '2021',
    titol: 'Automating Fairness? Artificial Intelligence in the Chinese Court',
    revista: 'Columbia Journal of Transnational Law',
    volum: '59',
    pagines: '515',
    citacio: 'Stern, R. E., Liebman, B. L., Roberts, M., & Wang, A. Z. (2021). Automating Fairness? Artificial Intelligence in the Chinese Court. Columbia Journal of Transnational Law, 59, 515.',
    resum: 'Estudi exhaustiu sobre l\'implementació de sistemes d\'IA ("Smart Courts") als tribunals xinesos. Analitza com la Xina ha adoptat la IA per millorar l\'eficiència judicial, però també examina els desafiaments de compliment i les implicacions per a l\'autoritat judicial i la independència dels jutges. Proporciona una perspectiva única sobre l\'escalabilitat de la IA en sistemes judicials de gran volum.',
    temes: ['IA judicial', 'Xina', 'Smart Courts', 'Autoritat judicial', 'Compliment'],
    notes: 'Anàlisi acadèmica cabdal sobre l\'adopció de la IA ("Smart Courts") a la Xina, els seus desafiaments de compliment i les implicacions per a l\'autoritat judicial.'
  },
  {
    id: 'angwin-2016',
    tipus: 'article',
    autors: ['Angwin, J.', 'Larson, J.', 'Mattu, S.', 'Kirchner, L.'],
    any: '2016',
    titol: 'Machine Bias',
    revista: 'ProPublica',
    citacio: 'Angwin, J., Larson, J., Mattu, S., & Kirchner, L. (2016). Machine Bias. ProPublica.',
    resum: 'Investigació periodística pionera que va revelar biaix racial sistemàtic en el sistema COMPAS d\'avaluació de risc de reincidència. L\'estudi va trobar que els delinqüents negres eren classificats incorrectament com a alt risc amb major freqüència que els blancs. Aquest treball va obrir el debat públic sobre biaix algorítmic i transparència en sistemes d\'IA judicials.',
    temes: ['Biaix algorítmic', 'Avaluació de risc penal', 'Biaix racial', 'COMPAS'],
    notes: 'Report influent que va examinar l\'ús dels avaluadors de risc penal i la persistència del biaix racial.'
  },
  {
    id: 'fine-2025',
    tipus: 'article',
    autors: ['Fine, A.', 'Berthelot, E. R.', 'Marsh, S.'],
    any: '2025',
    titol: 'Public Perceptions of Judges\' Use of AI Tools in Courtroom Decision-Making: An Examination of Legitimacy, Fairness, Trust, and Procedural Justice',
    citacio: 'Fine, A., Berthelot, E. R., & Marsh, S. (2025). Public Perceptions of Judges\' Use of AI Tools in Courtroom Decision-Making: An Examination of Legitimacy, Fairness, Trust, and Procedural Justice.',
    resum: 'Estudi experimental que examina com el públic percep la legitimitat, equitat, confiança i justícia processal quan els jutges utilitzen eines d\'IA en decisions judicials. Troba diferències significatives segons l\'origen ètnic: els participants negres mostraven més confiança en decisions augmentades per IA en comparació amb participants blancs i hispans, suggerint que la IA pot ser percebuda com a més objectiva per a grups històricament marginats.',
    temes: ['IA judicial', 'Percepció pública', 'Legitimitat judicial', 'Confiança', 'Justícia processal'],
    notes: 'Estudi experimental que analitza la percepció pública de la legitimitat judicial quan s\'utilitza la IA en decisions de llibertat sota fiança i sentències, assenyalant que els participants negres mostraven més confiança en decisions augmentades per IA.'
  },
  {
    id: 'simshaw-2025',
    tipus: 'article',
    autors: ['Simshaw, D.'],
    any: '2025',
    titol: 'Interoperable Legal AI for Access to Justice',
    revista: 'Yale Law Journal Forum',
    volum: '134',
    citacio: 'Simshaw, D. (2025). Interoperable Legal AI for Access to Justice. Yale Law Journal Forum, 134.',
    resum: 'Assaig que argumenta que la interoperabilitat tecnològica i processal és essencial per tancar la bretxa d\'accés a la justícia mitjançant la IA. Pren com a model d\'èxit el sistema PJe (Processo Judicial Eletrônico) del Brasil, que ha millorat significativament l\'accés a la justícia mitjançant estàndards comuns i integració de sistemes. Proposa un marc per a la interoperabilitat de sistemes d\'IA legal.',
    temes: ['IA legal', 'Accés a la justícia', 'Interoperabilitat', 'Brasil', 'PJe'],
    notes: 'Assaig que destaca la importància de la interoperabilitat tecnològica i processal per tancar la bretxa d\'accés a la justícia mitjançant la IA, prenent com a model l\'experiència del Brasil (PJe).'
  },
  {
    id: 'ho-2023',
    tipus: 'article',
    autors: ['Ho, Y.', 'Jabr, W.', 'Zhang, Y.'],
    any: '2023',
    titol: 'AI enforcement: Examining the impact of AI on judicial fairness and public safety',
    citacio: 'Ho, Y., Jabr, W., & Zhang, Y. (2023). AI enforcement: Examining the impact of AI on judicial fairness and public safety.',
    resum: 'Estudi empíric que examina l\'impacte de l\'ús d\'IA en decisions de sentència al sistema judicial de Virgínia. Troba que les recomanacions de l\'IA van reduir les condemnes per als delinqüents de baix risc i van disminuir les taxes de reincidència, millorant tant la justícia com la seguretat pública. No obstant això, també identifica que el biaix racial va persistir, destacant la necessitat de mesures addicionals per abordar la discriminació algorítmica.',
    temes: ['IA judicial', 'Sentència', 'Justícia', 'Seguretat pública', 'Reincidència', 'Biaix racial'],
    notes: 'Recerca que va examinar l\'ús d\'IA en sentències a Virgínia, trobant que les recomanacions de l\'IA van reduir la condemna per als delinqüents de baix risc i van disminuir la reincidència, tot i que el biaix racial va persistir.'
  },
  // Sistemes d'IA
  {
    id: 'compas',
    tipus: 'altres',
    autors: ['Northpointe (ara Equivant)'],
    any: '2016',
    titol: 'COMPAS (Correctional Offender Management Profiling for Alternative Sanctions)',
    citacio: 'COMPAS (Correctional Offender Management Profiling for Alternative Sanctions). Sistema d\'avaluació de risc de propietat privada als Estats Units.',
    resum: 'Sistema algorítmic propietari utilitzat àmpliament als Estats Units per avaluar la probabilitat de reincidència criminal. Ha estat objecte de controvèrsia significativa per la seva naturalesa de "caixa negra" (algoritme no transparent), el seu nivell d\'exactitud del 68%, i les acusacions de biaix racial. El cas State v. Loomis va validar el seu ús però va requerir advertències sobre les seves limitacions.',
    temes: ['Avaluació de risc', 'Reincidència', 'Biaix algorítmic', 'Caixa negra', 'Sistemes d\'IA'],
    notes: 'Eina de propietat privada als Estats Units que avalua la probabilitat de reincidència, i que ha generat qüestions ètiques per la seva "caixa negra" i nivell d\'exactitud (68%).'
  },
  {
    id: 'pretoria-colombia',
    tipus: 'altres',
    autors: ['Tribunal Constitucional de Colòmbia'],
    any: '2020',
    titol: 'PretorIA',
    citacio: 'PretorIA. Sistema que assisteix el Tribunal Constitucional de Colòmbia en la gestió del gran volum de casos de tutela.',
    resum: 'Sistema d\'IA desenvolupat pel Tribunal Constitucional de Colòmbia per gestionar el gran volum de casos de tutela (accions legals per protegir drets fonamentals). El sistema va ser redissenyat per utilitzar models de temes interpretables en lloc de xarxes neuronals opaques, prioritzant la transparència i l\'explicabilitat. PretorIA exemplifica com la IA pot millorar l\'eficiència judicial mentre manté la responsabilitat i la comprensió humana del procés.',
    temes: ['IA judicial', 'Colòmbia', 'Tutela', 'Drets humans', 'Sistemes d\'IA', 'Models interpretables'],
    notes: 'Sistema que assisteix el Tribunal Constitucional en la gestió del gran volum de casos de tutela (accions legals per protegir drets humans), redissenyat per utilitzar models de temes interpretables en lloc de xarxes neuronals opaques.'
  },
  {
    id: 'prometea-argentina',
    tipus: 'altres',
    autors: ['Ministeri de Justícia i Drets Humans d\'Argentina'],
    any: '2017',
    titol: 'Prometea',
    citacio: 'Prometea. Sistema desenvolupat el 2017 per automatitzar tasques judicials repetitives a Argentina.',
    resum: 'Sistema d\'IA desenvolupat pel Ministeri de Justícia d\'Argentina per automatitzar tasques judicials repetitives i de baixa complexitat. El sistema va demostrar una eficàcia del 90% en les prediccions i va ser instrumental en la resolució de 658 casos, millorant significativament l\'eficiència del sistema judicial. Prometea exemplifica com la IA pot alliberar recursos judicials per a casos més complexos.',
    temes: ['IA judicial', 'Argentina', 'Automatització', 'Sistemes d\'IA'],
    notes: 'Sistema desenvolupat el 2017 per automatitzar tasques judicials repetitives, que va ser instrumental en la resolució de 658 casos amb un 90% d\'exactitud en les prediccions.'
  },
  {
    id: 'viogen-espanya',
    tipus: 'altres',
    autors: ['Ministeri de l\'Interior d\'Espanya'],
    any: '2007',
    titol: 'VioGén',
    subtitol: 'Sistema d\'avaluació de risc de violència domèstica',
    citacio: 'VioGén. Sistema d\'avaluació de risc de violència domèstica d\'Espanya.',
    resum: 'Sistema informatitzat espanyol utilitzat per avaluar el risc de violència domèstica i coordinar la resposta policial i judicial. Desenvolupat el 2007, ha estat objecte de crítiques per la seva opacitat ("caixa negra") i la manca de transparència en els criteris d\'avaluació. Il·lustra els desafiaments de l\'ús d\'algoritmes en àmbits crítics de protecció de víctimes.',
    temes: ['IA judicial', 'Espanya', 'Violència domèstica', 'Avaluació de risc', 'Caixa negra', 'Sistemes d\'IA'],
    notes: 'Sistema d\'avaluació de risc de violència domèstica que ha generat preocupacions sobre la seva opacitat ("caixa negra").'
  },
  {
    id: 'proyecto-206-shanghai',
    tipus: 'altres',
    autors: ['Tribunal Suprem Popular de la Xina'],
    any: '2016',
    titol: 'Projecte 206',
    subtitol: 'Sistema d\'IA per a recomanació de sentències',
    citacio: 'Projecte 206 (Shanghai). Iniciativa insígnia de la Xina per analitzar casos anteriors i recomanar sentències als jutges.',
    resum: 'Iniciativa pionera del sistema judicial xinès que utilitza IA per analitzar casos històrics i proporcionar recomanacions de sentències als jutges. El sistema analitza milions de casos anteriors per identificar patrons i suggerir sentències adequades. Aquest projecte exemplifica l\'ambició de la Xina de crear "Smart Courts" completament automatitzats, però també planteja qüestions sobre la independència judicial i la uniformitat de les sentències.',
    temes: ['IA judicial', 'Xina', 'Smart Courts', 'Recomanació de sentències', 'Sistemes d\'IA'],
    notes: 'Iniciativa insígnia de la Xina per analitzar casos anteriors i recomanar sentències als jutges.'
  }
];

export function obtenirReferencia(id: string): ReferenciaBibliografica | undefined {
  return bibliografia.find(ref => ref.id === id);
}

export function obtenirReferenciesPerTema(tema: string): ReferenciaBibliografica[] {
  return bibliografia.filter(ref => ref.temes.includes(tema));
}

export function obtenirReferenciesPerTipus(tipus: ReferenciaBibliografica['tipus']): ReferenciaBibliografica[] {
  return bibliografia.filter(ref => ref.tipus === tipus);
}

export function obtenirReferenciesPerAny(any: string): ReferenciaBibliografica[] {
  return bibliografia.filter(ref => ref.any === any);
}

