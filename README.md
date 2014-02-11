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

Basic install or common/require
                 
## Default symbols:
list
