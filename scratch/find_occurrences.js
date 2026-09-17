const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
let idx = 0;
while ((idx = html.indexOf('we_make_that_happen', idx)) !== -1) {
  console.log('At', idx, html.slice(idx, idx + 80));
  idx += 19;
}
