symbolic.js
===========

Symbolic.js adds invisible text to certain symbols such as some ASCII characters, some ISO-8859-1 and some HTML entity characters that are not read out by screen-readers.

No dependecies, configurable and very light weight.
Available as a JS include or CommonJS or AMD


Symbolic.js has a very simple API
```javascript
  symbolic(selectors, config);
``` 

Where selectors is one or more CSS selectors (same is input to querySelectorAll or JQuery). 
Config is an object that provides properties for adding, removing or completeing overriding symbols used.
```javascript
var config = {
  additions:{},
  removals:[],
  symbols:{}
}
```

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
requirejs(['symbolic'], function(symbolic) {
    symbolic('.math');
});  
```

or with Require
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

