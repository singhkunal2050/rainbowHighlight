# Rainbow Highlight

A package to add colorful highlights to text, with additional utilities.

## Installation

```bash
npm install @singhkunal2050/rainbow-highlight

```

## Usage

```javascript
const {
  rainbowHighlight,
  randomHighlight,
  stripHighlight,
} = require('@singhkunal2050/rainbow-highlight');

// Rainbow highlight
const rainbowText = rainbowHighlight('Hello, World!');
console.log(rainbowText);

// Random highlight
const randomText = randomHighlight('Random colors!');
console.log(randomText);

// Strip highlight
const strippedText = stripHighlight(rainbowText);
console.log(strippedText);
```

## This package provides three main functions:

- rainbowHighlight: Adds a rainbow color effect to the text.
- randomHighlight: Adds random color highlights to each character.
- stripHighlight: Removes highlight spans from the text.
