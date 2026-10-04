/**
 * Screenshot per il documento in docs/: serve `npm run preview` attivo (4601).
 *   node scripts/screenshot-doc.mjs
 */
import { launch } from 'chrome-launcher';
import puppeteer from 'puppeteer-core';

const chrome = await launch({ chromeFlags: ['--headless=new', '--no-sandbox', '--disable-gpu'] });
const browser = await puppeteer.connect({ browserURL: `http://127.0.0.1:${chrome.port}` });
try {
  const page = (await browser.pages())[0] ?? (await browser.newPage());
  await page.setViewport({ width: 1440, height: 810, deviceScaleFactor: 1 });
  await page.goto('http://localhost:4601/', { waitUntil: 'networkidle0' });
  await new Promise((r) => setTimeout(r, 3500));
  await page.screenshot({ path: 'docs/img/hero.jpg', type: 'jpeg', quality: 82 });
  await page.evaluate(() => {
    document.getElementById('bozze-toggle').click();
    window.scrollTo({ top: document.getElementById('contatti').offsetTop, behavior: 'instant' });
  });
  await new Promise((r) => setTimeout(r, 2500));
  await page.screenshot({ path: 'docs/img/contatti.jpg', type: 'jpeg', quality: 82 });
  console.log('screenshot scritti in docs/img/');
} finally {
  await browser.disconnect();
  try { await chrome.kill(); } catch { /* cartella temporanea non rimossa */ }
}
