/**
 * Contenuti della landing — Studio Grafitech (Aosta).
 *
 * Fonte: grafitech.vda.it (crawl del 03/10/2026, vedi ../grafitech-crawl.md).
 * Il sito del cliente e' una pagina sola: nome, claim, indirizzo, orari,
 * telefono, email e le tre persone con le loro specializzazioni. Questi dati
 * sono scritti in chiaro.
 *
 * Tutto il resto (racconto dello studio, metodo, ambiti, progetti, foto) NON
 * c'e' sul sito ed e' stato scritto per riempire la pagina: passa da `bz()` ed
 * e' una BOZZA da far confermare al cliente. Il tasto "Bozze" in basso a
 * sinistra lo mostra o lo nasconde. Le foto sono provvisorie, di repertorio:
 * non sono lavori dello studio e vanno sostituite prima di pubblicare.
 */
import { bz } from './bozze';

export const site = {
  nome: 'Studio Grafitech',
  // Host di produzione. Va cambiato qui E in astro.config.mjs, netlify.toml e
  // public/robots.txt: sono i quattro punti che formano canonical, Open Graph,
  // JSON-LD e sitemap.
  dominio: 'https://grafitech.vda.it',
  email: 'info@grafitech.vda.it',
  telefono: '0165.238229',
  telefonoE164: '+390165238229',
  indirizzo: 'Via Festaz 64, 11100 Aosta (AO)',
  via: 'Via Festaz 64',
  citta: 'Aosta',
  cap: '11100',
  provincia: 'AO',
  // Verbatim dal sito.
  orari: 'Dal lunedì al venerdì, indicativamente 9.00/12.30 e 14.00/18.00',
  areeServite: [bz('Aosta'), bz("Valle d'Aosta")],
  social: {
    // Il cliente non ha profili social collegati al sito: la colonna "Seguici"
    // del footer e' marcata come bozza.
    instagram: '[[DA COMPILARE: URL profilo Instagram]]',
    facebook: '[[DA COMPILARE: URL pagina Facebook]]',
  },
};

/**
 * Dati legali: il sito non li riporta. Non si inventano: restano "da
 * comunicare" e sono marcati come bozza.
 */
export const legale = {
  ragioneSociale: 'Studio Grafitech',
  piva: bz('da comunicare'),
  pec: bz('da comunicare'),
};

export const navLinks = [
  { label: 'Studio', hash: '#mission' },
  { label: 'Metodo', hash: '#metodo' },
  { label: 'Ambiti', hash: '#ambiti' },
  { label: 'Progetti', hash: '#portfolio' },
  { label: 'Contatti', hash: '#contatti' },
];

export const hero = {
  eyebrow: 'Studio Grafitech',
  // Verbatim: e' il titolo/claim del sito del cliente.
  h1: 'Studio associato di progettazione architettonica',
  // Composto solo da dati del sito (servizi delle tre persone + indirizzo).
  kicker: 'Progettazione, direzione lavori, rilievi e pratiche tecniche. Ad Aosta, in via Festaz 64.',
  ctaLabel: 'Scopri i progetti',
};

export const mission = {
  label: 'Lo studio',
  quote: bz(
    'Un progetto ben fatto nasce da un rilievo accurato e arriva fino all’ultimo dettaglio di cantiere: per questo lo seguiamo in tre, ognuno nella sua competenza.'
  ),
  autore: 'M. Tropiano · M. Zavattaro · R. Tresca',
  ruolo: 'Geometra e architetti associati',
  corpo: [
    // Solo dati del sito: chi sono e di cosa si occupa ciascuno.
    'Studio Grafitech è uno studio associato di progettazione architettonica con sede ad Aosta, in via Festaz 64. Lo compongono il geometra Marco Tropiano, specializzato in rilievi, sicurezza, direzione lavori e pratiche catastali; l’architetto Marco Zavattaro, specializzato in progettazione, direzione lavori, antincendio e acustica; l’architetto Rassel Tresca, specializzato in modellazione tridimensionale, allestimenti e segnaletica.',
    bz(
      'Tre competenze diverse sotto lo stesso tetto permettono di seguire un intervento dall’inizio alla fine senza passaggi di mano: dal rilievo dell’esistente al progetto, dalle pratiche autorizzative alla sicurezza, fino alla direzione dei lavori in cantiere. Lavoriamo su case, ristrutturazioni, strutture ricettive e spazi commerciali, ad Aosta e in tutta la Valle.'
    ),
  ],
  ctaLabel: 'Chi siamo',
};

/**
 * Le 4 fasi: il sito non descrive un processo. Sono ricavate dai servizi delle
 * tre persone, ma l'ordine e i testi sono bozza.
 */
export const fasi = [
  {
    n: '01',
    titolo: bz('Rilievo e analisi'),
    testo: bz('Rilievo dell’esistente, verifiche catastali e urbanistiche, primi schizzi e studio delle soluzioni possibili per l’intervento.'),
    img: 'fase-01.jpg',
    alt: bz('Foto provvisoria: render esterno di una villa su due livelli con facciata a listelli, giardino e piscina'),
  },
  {
    n: '02',
    titolo: bz('Progetto architettonico'),
    testo: bz('Progetto definitivo ed esecutivo, con modelli 3D per vedere gli spazi prima di costruirli.'),
    img: 'fase-02.jpg',
    alt: bz('Foto provvisoria: mani di un progettista che disegna su una planimetria, con tavole e matite sul tavolo'),
  },
  {
    n: '03',
    titolo: bz('Pratiche e sicurezza'),
    testo: bz('Titoli edilizi, pratiche catastali, antincendio, acustica e piano di sicurezza del cantiere.'),
    img: 'fase-03.jpg',
    alt: bz('Foto provvisoria: dettaglio di un angolo bianco con binario di illuminazione a soffitto e a parete'),
  },
  {
    n: '04',
    titolo: bz('Direzione lavori'),
    testo: bz('Direzione lavori e contabilità di cantiere, fino al collaudo e alla consegna.'),
    img: 'fase-04.jpg',
    alt: bz('Foto provvisoria: zona giorno finita e arredata, con tavolo da pranzo e lampada ad arco'),
  },
];

/** Banda scorrevole: i servizi dichiarati sul sito dalle tre persone. */
export const specializzazioni = [
  'Progettazione architettonica',
  'Direzione lavori',
  'Rilievi e pratiche catastali',
  'Sicurezza e antincendio',
  'Modellazione 3D e allestimenti',
];

/**
 * Ambiti = categorie del portfolio e filtri della griglia. BOZZA: il sito non
 * dichiara una tassonomia. Le stesse stringhe (stesso bz) sono in progetti.ts.
 */
export const CATEGORIE = {
  residenziale: bz('Residenziale'),
  ristrutturazioni: bz('Ristrutturazioni'),
  ricettivo: bz('Ricettivo'),
  commerciale: bz('Commerciale e allestimenti'),
};

export const ambiti = [
  {
    titolo: CATEGORIE.residenziale,
    testo: bz('Case unifamiliari e ville, dal progetto nuovo all’ampliamento dell’esistente.'),
    href: '/progetti/#ambito-01',
    img: 'ambito-01.jpg',
    alt: bz('Foto provvisoria: esterno di una villa bianca su due livelli con piscina e deck in legno'),
  },
  {
    titolo: CATEGORIE.ristrutturazioni,
    testo: bz('Appartamenti e case da ripensare: distribuzione, impianti, finiture e pratiche.'),
    href: '/progetti/#ambito-02',
    img: 'ambito-02.jpg',
    alt: bz('Foto provvisoria: cucina bianca con isola in pietra e ante in legno chiaro'),
  },
  {
    titolo: CATEGORIE.ricettivo,
    testo: bz('Case vacanza, B&B e rifugi: spazi pensati per chi arriva in montagna.'),
    href: '/progetti/#ambito-03',
    img: 'ambito-03.jpg',
    alt: bz('Foto provvisoria: camera da letto con testiera in legno e tende chiare'),
  },
  {
    titolo: CATEGORIE.commerciale,
    testo: bz('Negozi, locali, allestimenti e segnaletica, dall’idea al dettaglio costruttivo.'),
    href: '/progetti/#ambito-04',
    img: 'ambito-04.jpg',
    alt: bz('Foto provvisoria: parete a pois verde acqua con una grande grafica di lettere'),
  },
];

/**
 * 6 progetti in vetrina (carosello hero + binario della landing). BOZZA: il
 * sito non ha progetti. Titoli, luoghi e foto sono provvisori.
 *
 *  - `img` e' lo slot della vetrina (progetto-01..06.jpg in src/assets/img/);
 *  - `href` punta alla scheda nella griglia, che ha un ordine suo (progetti.ts).
 */
export const progetti = [
  {
    titolo: bz('Casa con piscina'),
    localita: bz('Sarre, AO'),
    categoria: CATEGORIE.residenziale,
    nota: bz('2024'),
    href: '/progetti/progetto-02/',
    img: 'progetto-01.jpg',
    alt: bz('Foto provvisoria: casa unifamiliare con volume a listelli, pergolato, piscina e ulivo nel patio'),
  },
  {
    titolo: bz('Villa sulla collina'),
    localita: bz('Gressan, AO'),
    categoria: CATEGORIE.residenziale,
    nota: bz('2024'),
    href: '/progetti/progetto-03/',
    img: 'progetto-02.jpg',
    alt: bz('Foto provvisoria: villa bianca su due livelli con piscina, deck in legno e salotto esterno'),
  },
  {
    titolo: bz('Appartamento per vacanze'),
    localita: bz('Courmayeur, AO'),
    categoria: CATEGORIE.ricettivo,
    nota: bz('2023'),
    href: '/progetti/progetto-01/',
    img: 'progetto-03.jpg',
    alt: bz('Foto provvisoria: interno con pareti verde salvia, aperture ad arco e specchio tondo'),
  },
  {
    titolo: bz('Appartamento in condominio'),
    localita: bz('Châtillon, AO'),
    categoria: CATEGORIE.ristrutturazioni,
    nota: bz('2023'),
    href: '/progetti/progetto-08/',
    img: 'progetto-04.jpg',
    alt: bz('Foto provvisoria: zona pranzo con tavolo tondo nero, cucina con isola sullo sfondo'),
  },
  {
    titolo: bz('Rifugio in pietra'),
    localita: bz('Valtournenche, AO'),
    categoria: CATEGORIE.ricettivo,
    nota: bz('2022'),
    href: '/progetti/progetto-13/',
    img: 'progetto-05.jpg',
    alt: bz('Foto provvisoria: casa in pietra fra i pini, con tavolo e sedie in legno davanti'),
  },
  {
    titolo: bz('Negozio sportivo'),
    localita: bz('Aosta'),
    categoria: CATEGORIE.commerciale,
    nota: bz('2022'),
    href: '/progetti/progetto-07/',
    img: 'progetto-06.jpg',
    alt: bz('Foto provvisoria: interno di un negozio sportivo con grande grafica verde acqua alle pareti'),
  },
];

export const footerMenu = [
  { label: 'Progetti', href: '/progetti/' },
  { label: 'Studio', href: '/chi-siamo/' },
  { label: 'Contatti', href: '/contatti/' },
];
