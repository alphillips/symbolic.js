symbolic.js
===========

Symbolic.js adds invisible text to symbols currently not available to screen-readers.

No dependecies, configurable and very light weight.
Available as a JS include or CommonJS or AMD

The symbols include are some ASCII characters, some ISO-8859-1 and some HTML entity characters that are not read out by screen-readers.

This issue is not a bug in screen-reader software but rather a difficult area. See http://www.deque.com/dont-screen-readers-read-whats-screen-part-1-punctuation-typographic-symbols

Symbolic.js has a very simple API
```javascript
  symbolic(selector, config);
``` 

Where selector is one or more CSS selectors (same is input to querySelectorAll or JQuery) 

## Example usage

```javascript
  symbolic('.math');
```  

  You can also add, remove any symbols by passing a config object to the second paramater.
```javascript  
    symbolic('.code',{
      additions:{
        '#':'hash',
        '!':'bang'
      },
    removals:[',','_']
  }); 
```  

This example adds or overides # and ! and removes , and _ from being replaced.
You can also completely replace the symbols to be used. 
For example if you only wanted cards symbols you may override it like this:
```javascript  
  symbolic('#deck',{
    symbols:{
      '♠':'spades',
      '♣':'clubs',
      '♥':'hearts',
      '♦':'diamonds',
    }
  }); 
```

No other symbols except these four would be used.

## Install

Basic install or common/require
                 
## Default symbols:
list
