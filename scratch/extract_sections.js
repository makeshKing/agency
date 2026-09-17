const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

const start1 = html.indexOf('<section class="we_make_that_happen">');
const end1 = html.indexOf('</section><section class="section"><div class="section_group left_mob">');
const sec1 = html.slice(start1, end1 + 10);

const start2 = html.indexOf('<section class="section"><div class="section_group left_mob">');
const end2 = html.indexOf('</section><section class="section blog">');
const sec2 = html.slice(start2, end2 + 10);

fs.writeFileSync('scratch/extracted_sections.html', sec1 + '\n\n' + sec2, 'utf8');
console.log('Saved extracted sections, length:', (sec1 + sec2).length);
