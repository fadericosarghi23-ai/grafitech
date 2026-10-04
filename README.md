# Studio Grafitech — sito (bozza)

Studio associato di progettazione architettonica, via Festaz 64, Aosta.
Landing a pagina unica costruita sulla base `base-architettura-pidatella-2`
(Astro 7 + Tailwind v4 + GSAP/Lenis): struttura e animazioni sono quelle della
base, contenuti e palette sono del cliente.

```bash
npm install
npm run dev        # http://localhost:4600
npm run build && npm run preview   # http://localhost:4601
```

## Da dove vengono i contenuti

Il sito attuale del cliente (grafitech.vda.it) è **una pagina sola**: nome,
claim, indirizzo, orari, telefono, email e le tre persone con le loro
specializzazioni. Il crawl completo è in [CRAWL-GRAFITECH.md](CRAWL-GRAFITECH.md).

| Contenuto | Stato |
|---|---|
| Nome, claim (h1), indirizzo, CAP, telefono, email, orari, soci e specializzazioni, servizi della banda scorrevole, meta title/description, testi del footer | **dal sito** (verbatim o composti solo con dati del sito) |
| Palette: rosso mattone #BD2C16 e antracite #1A171C | **dal logo** del cliente, misurata sui pixel |
| Citazione, secondo paragrafo dello studio, intro e 4 fasi del metodo, 4 ambiti, 6 progetti in vetrina + 16 in griglia, aree servite | **BOZZA** scritta per riempire |
| Tutte le foto (hero, metodo, ambiti, progetti, OG) | **BOZZA**: foto di repertorio provvisorie, **non sono lavori dello studio** |
| P. IVA, PEC | **BOZZA** "da comunicare": non si inventano |
| Logo e icone | segno **originale** del cliente (scaricato da grafitech.vda.it, in `media-cliente/`) + scritta GRAFITECH / STUDIO ASSOCIATO composta da noi. Il file del cliente è a bassa risoluzione e senza scritta: serve il vettoriale |
| Ritratto dei soci | placeholder grigio 2304×3456 |

## Il tasto "Bozze"

In basso a sinistra c'è un tasto che **mostra o nasconde tutti i contenuti
non verificati**. Con le bozze visibili sono contornate da un tratteggio ambra;
nascoste, lasciano il loro spazio vuoto, così layout e animazioni non si
spostano. La scelta resta salvata nel browser.

Come funziona: nei file dati ogni testo inventato passa da `bz()`
(`src/data/bozze.ts`); le foto provvisorie hanno l'alt marcato allo stesso
modo; i blocchi interi hanno l'attributo `data-bozza`.
`src/components/BozzeToggle.astro` li trova e li gestisce.

- **Confermare un testo**: togliere `bz(...)` attorno alla stringa.
- **Sostituire una foto**: stesso nome file, stessa misura (vedi
  `scripts/placeholder-slot.json`), e togliere `bz` dall'alt.
- **Prima di pubblicare**: `grep -rn "bz(\|data-bozza" src` deve tornare
  vuoto; poi si cancellano `src/data/bozze.ts`, `BozzeToggle.astro` e la riga
  `<BozzeToggle />` in `BaseLayout.astro`.

## Non pubblicabile così com'è

1. **Foto**: sono di un altro studio (diritti di terzi). Vanno sostituite con
   foto dei lavori di Grafitech.
2. **Progetti**: titoli e luoghi sono inventati.
3. P. IVA e PEC, URL social (se ci sono), endpoint del form (`src/scripts/site.ts`,
   sezione 11: oggi il form non spedisce nulla, di proposito).
4. Logo in vettoriale/alta risoluzione (oggi `src/assets/img/logo.png`, 283×71,
   è ricavato dal 512×512 del sito) e conferma della scritta accanto al segno.
5. Pagine interne (`/chi-siamo/`, `/progetti/`, `/contatti/`,
   `/privacy-policy/`) linkate ma non ancora costruite.

`npm run slot` elenca i segnaposto `[[DA COMPILARE]]` rimasti (5 righe).

## Comandi

| Comando | Cosa fa |
|---|---|
| `npm run dev` | dev server sulla 4600 |
| `npm run build` | build di produzione |
| `npm run preview` | serve la build sulla 4601 |
| `npm run check` | `astro check` + build + controllo link |
| `npm run smoke` | 34 controlli su Chrome vero (con `npm run preview` attivo) |
| `npm run slot` | segnaposto rimasti |
| `node scripts/pdf-doc.mjs` | rigenera `docs/palette-e-interventi.pdf` (4 pagine) da `docs/palette-e-interventi.html` |
| `node scripts/screenshot-doc.mjs` | rifà gli screenshot del documento (con `npm run preview` attivo) |

Su questa macchina Astro 7 gira grazie al fallback WASI di `satteri` estratto a
mano in `node_modules` (Smart App Control blocca il binario nativo): un
`npm install` pulito lo cancella. Su Netlify/CI non serve.
