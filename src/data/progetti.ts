/**
 * I 16 progetti della griglia — Studio Grafitech.
 *
 * BOZZA INTEGRALE: il sito del cliente non pubblica progetti. Titoli, luoghi,
 * categorie e foto sono provvisori (le foto sono di repertorio, non lavori
 * dello studio) e passano tutti da bz(): il tasto "Bozze" li nasconde.
 *
 * Le categorie usano le costanti CATEGORIE di landing.ts: cosi' combaciano
 * carattere per carattere con gli ambiti e il filtro funziona.
 */
import { bz } from './bozze';
import { CATEGORIE } from './landing';

export const progettiTutti = [
  {
    titolo: bz("Appartamento per vacanze"),
    localita: bz("Courmayeur, AO"),
    categorie: [CATEGORIE.ricettivo],
    href: '/progetti/progetto-01/',
    img: 'progetto-01.jpg',
    alt: bz("Foto provvisoria: camera con parete verde scuro e grande specchio circolare"),
  },
  {
    titolo: bz("Casa con piscina"),
    localita: bz("Sarre, AO"),
    categorie: [CATEGORIE.residenziale],
    href: '/progetti/progetto-02/',
    img: 'progetto-02.jpg',
    alt: bz("Foto provvisoria: villa con facciata a listelli e dehors sotto la pergola"),
  },
  {
    titolo: bz("Villa sulla collina"),
    localita: bz("Gressan, AO"),
    categorie: [CATEGORIE.residenziale],
    href: '/progetti/progetto-03/',
    img: 'progetto-03.jpg',
    alt: bz("Foto provvisoria: cucina bianca con isola in pietra in un open space"),
  },
  {
    titolo: bz("Casa unifamiliare"),
    localita: bz("Saint-Christophe, AO"),
    categorie: [CATEGORIE.residenziale],
    href: '/progetti/progetto-04/',
    img: 'progetto-04.jpg',
    alt: bz("Foto provvisoria: sala da pranzo chiara con tavolo rotondo e sedie nere"),
  },
  {
    titolo: bz("Appartamento in centro"),
    localita: bz("Aosta"),
    categorie: [CATEGORIE.ristrutturazioni],
    href: '/progetti/progetto-05/',
    img: 'progetto-05.jpg',
    alt: bz("Foto provvisoria: spigolo fra una parete bianca e un volume blu notte"),
  },
  {
    titolo: bz("Casa con camino"),
    localita: bz("Cogne, AO"),
    categorie: [CATEGORIE.ristrutturazioni],
    href: '/progetti/progetto-06/',
    img: 'progetto-06.jpg',
    alt: bz("Foto provvisoria: soggiorno con camino passante rivestito in pietra chiara"),
  },
  {
    titolo: bz("Negozio sportivo"),
    localita: bz("Aosta"),
    categorie: [CATEGORIE.commerciale],
    href: '/progetti/progetto-07/',
    img: 'progetto-07.jpg',
    alt: bz("Foto provvisoria: parete a pois verde acqua con grafica di lettere"),
  },
  {
    titolo: bz("Appartamento in condominio"),
    localita: bz("Châtillon, AO"),
    categorie: [CATEGORIE.ristrutturazioni],
    href: '/progetti/progetto-08/',
    img: 'progetto-08.jpg',
    alt: bz("Foto provvisoria: zona pranzo con tavolo tondo e bancone con sgabelli"),
  },
  {
    titolo: bz("Bed & breakfast"),
    localita: bz("La Thuile, AO"),
    categorie: [CATEGORIE.ricettivo],
    href: '/progetti/progetto-09/',
    img: 'progetto-09.jpg',
    alt: bz("Foto provvisoria: camera da letto con parete bordeaux ad arco"),
  },
  {
    titolo: bz("Recupero di casa storica"),
    localita: bz("Fénis, AO"),
    categorie: [CATEGORIE.residenziale],
    href: '/progetti/progetto-10/',
    img: 'progetto-10.jpg',
    alt: bz("Foto provvisoria: finestra con cornice in pietra su intonaco rosso mattone"),
  },
  {
    titolo: bz("Mansarda"),
    localita: bz("Saint-Vincent, AO"),
    categorie: [CATEGORIE.ristrutturazioni],
    href: '/progetti/progetto-11/',
    img: 'progetto-11.jpg',
    alt: bz("Foto provvisoria: lampada a sospensione sotto un soffitto con luce a led"),
  },
  {
    titolo: bz("Appartamento con libreria"),
    localita: bz("Aosta"),
    categorie: [CATEGORIE.ristrutturazioni],
    href: '/progetti/progetto-12/',
    img: 'progetto-12.jpg',
    alt: bz("Foto provvisoria: zona pranzo con libreria bianca a tutta altezza"),
  },
  {
    titolo: bz("Rifugio in pietra"),
    localita: bz("Valtournenche, AO"),
    categorie: [CATEGORIE.ricettivo],
    href: '/progetti/progetto-13/',
    img: 'progetto-13.jpg',
    alt: bz("Foto provvisoria: esterno con muro in pietra, tavolo e sedie sotto i pini"),
  },
  {
    titolo: bz("Zona giorno su misura"),
    localita: bz("Quart, AO"),
    categorie: [CATEGORIE.ristrutturazioni],
    href: '/progetti/progetto-14/',
    img: 'progetto-14.jpg',
    alt: bz("Foto provvisoria: parete attrezzata bianca con lampade nere a sospensione"),
  },
  {
    titolo: bz("Pied-à-terre"),
    localita: bz("Pila, AO"),
    categorie: [CATEGORIE.ristrutturazioni],
    href: '/progetti/progetto-15/',
    img: 'progetto-15.jpg',
    alt: bz("Foto provvisoria: tavolo tondo nero dalle gambe sottili contro una parete bianca"),
  },
  {
    titolo: bz("Casa a schiera"),
    localita: bz("Nus, AO"),
    categorie: [CATEGORIE.residenziale],
    href: '/progetti/progetto-16/',
    img: 'progetto-16.jpg',
    alt: bz("Foto provvisoria: ingresso con muro chiaro e volume in mattoni forati"),
  },
];

/** Le quattro categorie del filtro, nello stesso ordine degli ambiti. */
export const categorie = [
  CATEGORIE.residenziale,
  CATEGORIE.ristrutturazioni,
  CATEGORIE.ricettivo,
  CATEGORIE.commerciale,
];
