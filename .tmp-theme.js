import fs from 'fs';

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Colors mapping to css variables
  
  // App.tsx
  content = content.replace(/bg-\[\#F5F5F7\]/g, "bg-[var(--root-bg)]");
  content = content.replace(/text-\[\#1D1D1F\]/g, "text-[var(--root-fg)]");
  content = content.replace(/bg-\[\#0071E3\]\/30/g, "bg-[var(--accent)]/30");
  content = content.replace(/bg-\[\#86868B\]/g, "bg-[var(--text-muted)]");
  content = content.replace(/text-\[\#86868B\]/g, "text-[var(--text-muted)]");
  content = content.replace(/text-\[\#0071E3\]/g, "text-[var(--accent)]");
  
  // Header.tsx
  content = content.replace(/bg-white\/80/g, "bg-[var(--panel-bg-translucent)]");
  content = content.replace(/border-\[\#E5E5EA\]/g, "border-[var(--panel-border)]");
  content = content.replace(/bg-\[\#0071E3\]/g, "bg-[var(--accent)]");
  content = content.replace(/hover:bg-\[\#E5E5EA\]/g, "hover:bg-[var(--button-hover)]");
  content = content.replace(/bg-white shadow/g, "bg-[var(--button-bg)] shadow");
  
  // PreviewArea.tsx & CommentForm.tsx inside container
  content = content.replace(/bg-white/g, "bg-[var(--panel-bg)]");
  content = content.replace(/bg-\[\#0077ED\]/g, "bg-[var(--accent-hover)]");
  
  fs.writeFileSync(filePath, content);
  console.log(`Updated ${filePath}`);
}

replaceInFile('src/App.tsx');
replaceInFile('src/components/Header.tsx');
replaceInFile('src/components/PreviewArea.tsx');
replaceInFile('src/components/CommentForm.tsx');
