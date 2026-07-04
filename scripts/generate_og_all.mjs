#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawn } from 'node:child_process';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const POSTS_DIR = path.join(ROOT, '_posts');
const GENERATE = path.join(__dirname, 'generate_og.mjs');

function walkPosts(dir) {
  const files = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...walkPosts(fullPath));
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      files.push(path.relative(ROOT, fullPath));
    }
  }
  return files.sort();
}

function runGenerate(paths) {
  return new Promise((resolve, reject) => {
    const child = spawn(process.execPath, [GENERATE, ...paths], {
      cwd: ROOT,
      stdio: 'inherit',
    });
    child.on('error', reject);
    child.on('close', (code) => {
      if (code === 0) resolve();
      else reject(new Error(`generate_og.mjs exited with code ${code}`));
    });
  });
}

async function main() {
  const posts = walkPosts(POSTS_DIR);
  if (posts.length === 0) {
    console.error('No posts found under _posts/');
    process.exit(1);
  }

  console.log(`Generating OG images for ${posts.length} posts...`);
  await runGenerate(posts);
  console.log(`\nDone. ${posts.length} OG images generated.`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});