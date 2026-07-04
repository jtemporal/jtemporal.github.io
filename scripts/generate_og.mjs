#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import matter from 'gray-matter';
import puppeteer from 'puppeteer';
import { cardFileUrl } from './og_card_url.mjs';
import { optimizePng } from './optimize_png.mjs';
import { postSlugFromPath } from './og_theme.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const OG_DIR = path.join(ROOT, 'images', 'og');

async function renderCard(page, meta, outputPath) {
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  await page.goto(cardFileUrl(meta), { waitUntil: 'networkidle0' });
  await page.evaluate(() => document.fonts.ready);
  await new Promise((resolve) => setTimeout(resolve, 400));
  await page.screenshot({ path: outputPath, type: 'png' });
  await optimizePng(outputPath);
}

async function main() {
  const inputs = process.argv.slice(2).filter((arg) => arg !== '--');
  if (inputs.length === 0) {
    console.error('Usage: node scripts/generate_og.mjs <post.md> [more-posts.md]');
    process.exit(1);
  }

  const jobs = [];
  for (const input of inputs) {
    const filePath = path.resolve(ROOT, input);
    if (!fs.existsSync(filePath)) {
      console.error(`File not found: ${filePath}`);
      process.exit(1);
    }

    let meta;
    try {
      ({ data: meta } = matter(fs.readFileSync(filePath, 'utf8')));
    } catch (error) {
      console.warn(`Skipping ${path.relative(ROOT, filePath)}: ${error.message}`);
      continue;
    }

    const slug = postSlugFromPath(filePath);
    jobs.push({ meta, outputPath: path.join(OG_DIR, `${slug}.png`) });
  }

  if (jobs.length === 0) {
    console.error('No posts to generate.');
    process.exit(1);
  }

  const browser = await puppeteer.launch({ headless: true });
  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 1 });

    for (const job of jobs) {
      await renderCard(page, job.meta, job.outputPath);
      console.log(`Generated ${path.relative(ROOT, job.outputPath)}`);
    }
  } finally {
    await browser.close();
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});