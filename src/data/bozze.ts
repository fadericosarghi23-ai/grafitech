/**
 * Contenuti "non sicuri" (bozze).
 *
 * Tutto cio' che NON viene dal sito del cliente (grafitech.vda.it) ed e' stato
 * scritto per riempire la pagina passa da `bz()`: il testo viene racchiuso fra
 * due caratteri invisibili (U+2063 ... U+2064). Nel browser BozzeToggle.astro
 * li trova, avvolge il testo in <span data-bozza> e il tasto in basso a
 * sinistra lo mostra o lo nasconde.
 *
 * Per confermare un testo col cliente basta togliere `bz(...)` attorno alla
 * stringa. Quando non c'e' piu' nessun `bz(` nel progetto, si possono
 * cancellare questo file e il componente BozzeToggle.
 */
export const INIZIO = '⁣';
export const FINE = '⁤';

/** Marca un testo come bozza (non verificato col cliente). */
export const bz = (s: string) => `${INIZIO}${s}${FINE}`;

/** Toglie i marcatori: per meta, JSON-LD e ovunque il testo non sia a video. */
export const pulito = (s: string) => s.replace(/[⁣⁤]/g, '');
