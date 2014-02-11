/**
* Symbolic.js: Adds text for symbols that are avaiable to screen-readers but invisible to sighted users.
*              No dependecies, configurable and very light weight.  
* MIT license http: //opensource.org/licenses/MIT
* @author Al Phillips alphillips101@gmail.com
*/

;(function(global, document) {
  
  'use strict';
  
  /** working copy of object mapping symbols to descriptive text */
  var symbols,

  /** static object mapping symbols to descriptive text */ 
  // check http://www.freeformatter.com/html-entities.html#misc-html-entities
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



  /**  Add screen-reader only style to document */
  (function() {
    var cssText = '.symbolic-sr-only{border: 0 none;clip: rect(0px, 0px, 0px, 0px);height: 1px;margin: -1px;overflow: hidden;padding: 0;position: absolute;width: 1px;}';
    var p = document.createElement('p'),
    parent = document.getElementsByTagName('head')[0] || document.documentElement;
    p.innerHTML = 'x<style>' + cssText + '</style>';
    parent.insertBefore(p.lastChild, parent.firstChild);
  }());


  /** Polyfill for Array.prototype.forEach based on https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach */
  Array.prototype.forEach = Array.prototype.forEach || (function (fn, scope) {
      var i, len;
      for (i = 0, len = this.length; i < len; ++i) {
        if (i in this) {
          fn.call(scope, this[i], i, this);
        }
      }
    });


  /**
   * Steps through a node tree and replaces any symbols found on text nodes (Node.nodeType == 3) with screen-reader friendly text
   * @private
   * @param {NodeList} nodes Nodelist to be traversed
   */
  function traverse(nodes){
    var array;
    Array.prototype.forEach.call(nodes, function(node){
      if(node.nodeType === 3){
        array = symbolise((node.textContent || node.nodeValue).split(''));
        if(array){
          node.parentNode.replaceChild(toElement(array), node);
        }
      } else {
        traverse(node.childNodes);
      }
    });
  }

  /**
   * Creates an array of strings containing a screen-reader friendly description in place of a symbol for each character from the input array 
   * @private
   * @param {Array} array Array of characters.
   * @returns {*} Array of characters which is the same as the input expect that any symbols found will be replaced. Returns false if no symbols were found in the input array.
   */
  function symbolise(array){
    var symbolFound = false;
    array.forEach(function(key, i){
      if(symbols.hasOwnProperty(key)){
        symbolFound = true;
        array[i] = createSnippet(key);
      }
    });
    return (symbolFound) ? array : false;
  }

  /**
   * Returns an HTML snippet encoded marked-up with appropriate tags to provide a screen-reader friendly description of the symbol.
   * @private
   * @param {String} symbol.
   * @returns {String} HTML snippet encoded marked-up with appropriate tags to provide a screen-reader friendly description of the symbol.
   */
  function createSnippet(symbol){
    return '<span class="symbolic-sr-only">'+symbols[symbol]+'</span><span aria-hidden="true">'+symbol+'</span>';
  }

  /**
   * Returns a span HTMLElement created from the contents of an array
   * @private
   * @param {Array} array Array of characters representing the contents of a text node.
   * @returns {HTMLELement} An HTMLElement <span> containing the a DOM structure of the contents of the 'join'ed array.
   */
  function toElement(array){
    var span = document.createElement('span');
    span.innerHTML = array.join('');
    return span;
  }


  /**
   * The main function exposed as global
   * @public
   * @param {String} selectors Containing one or more CSS selectors (same is input to querySelectorAll)
   * @returns {Object} An object containg the config.
   */
  function symbolic(selectors, config){
    
    var prop;

    // overide symbols with default
    symbols = defaultSymbols;

    // check for config object
    if(config && isObject(config)){
      
      // add objects from config.additions object
      if(config.additions && isObject(config.additions)){
        for(prop in config.additions) {
          symbols[prop] = config.additions[prop];
        }
      }

      // removal symbols from config.removals array
      if(config.removals && isArray(config.removals)){
        config.removals.forEach(function(key){
          delete symbols[key];
        });
      }

      // override symbols object with config.symbols object
      if(config.symbols && isObject(config.symbols)){
        symbols = config.symbols;
      }

    }

    // private utility isObject and isArray functions
    function isObject(obj){return Object.prototype.toString.call(obj) == '[object Object]'};

    function isArray(obj){return Object.prototype.toString.call(obj) == '[object Array]'};


    // traverse DOM based on selectors
    traverse(document.querySelectorAll(selectors));

    // return the current working symbols
    return symbols;
  }

  // export common
  if(typeof module != "undefined" && module.exports){
    module.exports = symbolic;
  }
  // export to AMD
  if (typeof define === "function" && define.amd) {
    define( "symbolic", [], function() {
        return symbolic;
    });
  }
  // export to global
  global.symbolic = symbolic;

}(this, document));
