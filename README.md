symbolic.js
===========

Symbolic.js adds invisible text to certain symbols such as some ASCII characters, some ISO-8859-1 and some HTML entity characters that are not read out by screen-readers.

No dependecies, configurable and very light weight. Even works on IE8.

For example `1 + 1 = 2` is read as `1 1 2`. By applying Symbolic it is read as `1 plus 1 equals 2`

Symbolic.js has a very simple API
```javascript
  symbolic(selectors, config);
``` 

`Selectors` is one or more CSS selectors (same is input to querySelectorAll or JQuery) that will replace any symbols within the target elements.
`Config` is an object that provides properties for adding, removing or completeing overriding symbols.
```javascript
var config = {
  additions:{},
  removals:[],
  symbols:{}
}
```

Note to self: consider defaulting selector to *[role="math"] if not selector is passed

## Example usage

```javascript
  // add to any element with a class of 'math'
  symbolic('.math');
```  

  
```javascript  
  // Add (or override the description) the '#' and '!' and remove ',' and '_'
  symbolic('.code',{
    additions:{'#':'hash','!':'bang'},
    removals:[',','_']
  }); 
```  

```javascript
  // override all symbols with the 'symbols' property. 
  // No other symbols are used except for these four
  symbolic('#deck',{
    symbols:{
      '♠':'spades',
      '♣':'clubs',
      '♥':'hearts',
      '♦':'diamonds',
    }
  }); 
```


## Install

Just include symbolic-min.js and call symbolic() on DOM load   
```html
<script src="symbolic-min.js"></script>
<script>
document.addEventListener("DOMContentLoaded", function () {
  symbolic('.math');
});
</script>
```

or with AMD
```javascript
require(['symbolic'], function(symbolic) {
    symbolic('.math');
});  
```

or with Common
```javascript
var symbolic = require('symbolic');
symbolic('.math'); 
```


                 
## Default symbols:
```javascript
      defaultSymbols = {
        '~':'tilde',
        '`':'backtick',
        '!':'exclamation mark',
        '¡':'inverted exclamation mark',
        '#':'pound sign',
        '^':'caret',
        '*':'asterisk',
        '(':'left parenthesis',
        ')':'right parenthesis',
        '-':'dash',
        '—':'m dash',
        '--':'double dash',
        '–':'n dash',
        '_':'underscore',
        ',':'comma',
        '.':'period',
        '…':'ellipses',
        '\\':'backslash',
        '|':'vertical bar',
        '?':'question mark',
        '¿':'inverted question mark',
        ';':'semi-colon',
        ':':'colon',
        '"':'quotation mark',
        '”':'left double quotation mark',
        '“':'right double quotation mark',
        '«':'left double angle bracket',
        '»':'right double angle bracket',
        '‹':'left single angle bracket',
        '›':'right single angle bracket',
        "'":'single quote',
        '’':'right single quote',
        '‘':'left single quote',
        '{':'left brace',
        '}':'right brace',
        '[':'left bracket',
        ']':'right bracket',
        '§':'section',
        '·':'small bullet',
        '†':'dagger',
        '‡':'double dagger',
        '→':'right arrow',
        '←':'left arrow',
        '↑':'up arrow',
        '↓':'down arrow',
        '↔':'horizontal arrow',
        '⇐':'left double arrow',
        '⇒':'right double arrow',
        '⇑':'up double arrow',
        '⇓':'down double arrow',
        '⇔':'horizontal double arrow',
        '♠':'spades',
        '♣':'clubs',
        '♥':'hearts',
        '♦':'diamonds',
        '+':'plus',
        '−':'minus',
        '±':'plus or minus',
        '÷':'divided by',
        '×':'multiplied by',
        '=':'equals',
        '≠':'not equals',
        '≈':'approximately equals',
        '‰':'per mil',
        '<':'less than',
        '>':'greater than',
        '≤':'less than or equal to',
        '≥':'greater than or equal to',
        '′':'prime',
        '″':'double prime',
        '∑':'sum'
      };
```      
## How does it work
Symbolic will change this
```javascript
1 + 1 = 2
````
to
```html
1 
  <span class="symbolic-sr-only">plus</span>
  <span aria-hidden="true">+</span>
1  
  <span class="symbolic-sr-only">equals</span>
  <span aria-hidden="true">=</span>
2  
```
And add this CSS to the page, so this text is visually hidden.
```css
.symbolic-sr-only {
    border: 0 none;
    clip: rect(0px, 0px, 0px, 0px);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}
```

## Feedback
Pull requests or feedback welcome alphillips101@gmail.com or @alphillips101
