import fs from 'fs';
import { startFlow } from 'lighthouse';
import open from 'open';
import puppeteer from 'puppeteer';

async function captureReport() {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();

  const flow = await startFlow(page, {name: 'Single Navigation'});
  await flow.navigate('https://www.chotot.com');

  await browser.close();

  const report = await flow.generateReport();
  fs.writeFileSync('flow.report.html', report);
  open('flow.report.html', {wait: false});
}

captureReport();
