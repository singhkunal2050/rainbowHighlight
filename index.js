const _ = require('lodash');

function rainbowHighlight(text) {
  const rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
  let result = '';
  for (let i = 0; i < text.length; i++) {
    const color = rainbow[i % rainbow.length];
    result += `<span style="background-color: ${color};">${text[i]}</span>`;
  }
  return result;
}

function randomHighlight(text) {
  return _.map(text, char => {
    const randomColor = _.sample(['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']);
    return `<span style="background-color: ${randomColor};">${char}</span>`;
  }).join('');
}

function stripHighlight(highlightedText) {
  return highlightedText.replace(/<span[^>]*>(.*?)<\/span>/g, '$1');
}

module.exports = {
  rainbowHighlight,
  randomHighlight,
  stripHighlight
};