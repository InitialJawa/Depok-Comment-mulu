import fs from 'fs';

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // PreviewArea specific replacements
  content = content.replace(/bg-\[\#141414\]/g, "bg-white"); // outer container
  content = content.replace(/bg-\[\#0A0A0A\]/g, "bg-[#F5F5F7]"); // inside container / bottom 
  content = content.replace(/border-\[\#2D2D2D\]/g, "border-[#E5E5EA]");
  
  content = content.replace(/text-gray-500/g, "text-[#86868B]");
  content = content.replace(/text-gray-400/g, "text-[#86868B]");
  content = content.replace(/text-white/g, "text-[#1D1D1F]");
  
  content = content.replace(/bg-\[\#2D2D2D\]/g, "bg-white shadow-[0_1px_3px_rgba(0,0,0,0.1)]"); // Selected theme toggle
  
  // checkerboard to lighter
  content = content.replace(/radial-gradient\(\#222 /g, "radial-gradient(#e9ecef ");
  content = content.replace(/backgroundColor: '\#0c0c0c'/g, "backgroundColor: '#f8f9fa'");

  // the linear gradient
  content = content.replace(/linear-gradient\(45deg, \#1f1f1f/g, "linear-gradient(45deg, #e9ecef");
  content = content.replace(/linear-gradient\(-45deg, \#1f1f1f/g, "linear-gradient(-45deg, #e9ecef");
  content = content.replace(/, \#1f1f1f 75%\)/g, ", #e9ecef 75%)");
  
  content = content.replace(/bg-\[\#22C55E\] hover:bg-\[\#1eb054\] text-\[\#1D1D1F\]/g, "bg-[#0071E3] hover:bg-[#0077ED] text-white");
  
  // button
  content = content.replace(/bg-\[\#22C55E\] hover:bg-\[\#1eb054\] text-white/g, "bg-[#0071E3] hover:bg-[#0077ED] text-white shadow-md");

  // padding & rounding
  content = content.replace(/rounded-2xl/g, "rounded-[20px] shadow-[0_4px_24px_rgba(0,0,0,0.04)]");
  content = content.replace(/rounded-xl/g, "rounded-[14px]");

  fs.writeFileSync(filePath, content);
  console.log(`Updated ${filePath}`);
}

replaceInFile('src/components/PreviewArea.tsx');
