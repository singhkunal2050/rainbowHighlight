const { rainbowHighlight, randomHighlight, stripHighlight } = require('./index');

console.log('Rainbow Highlight:');
console.log(rainbowHighlight('Hello, World!'));

console.log('\nRandom Highlight:');
console.log(randomHighlight('Random colors!'));

const highlighted = rainbowHighlight('Strip me!');
console.log('\nStrip Highlight:');
console.log('Before:', highlighted);
console.log('After:', stripHighlight(highlighted));