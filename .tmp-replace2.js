import fs from 'fs';

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace background and text colors
  content = content.replace(/bg-\[\#F5F5F7\]/g, "bg-[var(--root-bg)]");
  content = content.replace(/text-\[\#1D1D1F\]/g, "text-[var(--root-fg)]");
  content = content.replace(/bg-white/g, "bg-[var(--panel-bg)]");
  content = content.replace(/text-\[\#86868B\]/g, "text-[var(--text-muted)]");
  content = content.replace(/border-\[\#E5E5EA\]/g, "border-[var(--panel-border)]");
  content = content.replace(/hover:bg-\[\#F5F5F7\]/g, "hover:bg-[var(--button-hover)]");
  content = content.replace(/hover:bg-\[\#E5E5EA\]/g, "hover:bg-[var(--button-hover)]");
  content = content.replace(/bg-\[\#0071E3\]/g, "bg-[var(--accent)]");
  content = content.replace(/text-\[\#0071E3\]/g, "text-[var(--accent)]");
  content = content.replace(/hover:bg-\[\#0077ED\]/g, "hover:bg-[var(--accent-hover)]");
  content = content.replace(/focus:ring-\[\#0071E3\]/g, "focus:ring-[var(--accent)]");
  content = content.replace(/bg-\[\var\(--panel-bg\)\/80\]/g, "bg-[var(--panel-bg-translucent)]"); 
  
  // Header specific fix
  if (filePath.includes('Header.tsx')) {
    content = content.replace(/bg-\[var\(--panel-bg\)\]\/80 backdrop-blur-xl/g, "bg-[var(--panel-bg-translucent)] backdrop-blur-xl");
  }

  // App.tsx body selector
  if (filePath.includes('App.tsx')) {
    content = content.replace(/selection:bg-\[\#0071E3\]\/30/g, "selection:bg-[var(--accent)]/30");
  }

  // PreviewArea specific backgrounds
  if (filePath.includes('PreviewArea.tsx')) {
     content = content.replace(/radial-gradient\(\#e9ecef /g, "radial-gradient(var(--panel-border) ");
     content = content.replace(/backgroundColor: '\#f8f9fa'/g, "backgroundColor: 'var(--root-bg)'");
     content = content.replace(/linear-gradient\(45deg, \#e9ecef/g, "linear-gradient(45deg, var(--panel-border)");
     content = content.replace(/linear-gradient\(-45deg, \#e9ecef/g, "linear-gradient(-45deg, var(--panel-border)");
     content = content.replace(/, \#e9ecef 75%\)/g, ", var(--panel-border) 75%)");
  }

  fs.writeFileSync(filePath, content);
  console.log(`Updated ${filePath}`);
}

replaceInFile('src/App.tsx');
replaceInFile('src/components/Header.tsx');
replaceInFile('src/components/PreviewArea.tsx');
replaceInFile('src/components/CommentForm.tsx');
