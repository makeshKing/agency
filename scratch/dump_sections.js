const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const s1 = html.indexOf('<section class="we_make_that_happen">');
const s2 = html.indexOf('<section class="section blog">');
const content = html.slice(s1, s2);
fs.writeFileSync('scratch/missing_sections.html', content, 'utf8');
console.log('Wrote', content.length, 'bytes');
