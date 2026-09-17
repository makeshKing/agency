const fs = require('fs');
const s = fs.readFileSync('index.html', 'utf8');
let idx = s.indexOf('id="homepage"');
console.log(s.slice(Math.max(0, idx - 150), idx + 200));
let idx2 = s.indexOf('id="home"');
console.log('home:', s.slice(Math.max(0, idx2 - 150), idx2 + 200));
