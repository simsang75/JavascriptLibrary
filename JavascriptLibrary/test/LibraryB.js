import {functionA} from './LibraryA.js';

export function FunB() {
    if (Math.random()) {
        functionA();
    }
}

export function testB() {
    console.log("test");
}
export function $(selector) {
    var self = {};
    self.selector = selector;
    if(typeof selector === 'object') {
        self.element = self.selector
    }
    //Some function to use from this library
    // get html of the selector
    self.element = document.querySelector(self.selector);
    self.html = function() {
        return self.element;
    }
    self.text = function(text) {
        if( text == undefined) return self.element.innerText;
        return self.element.innerText = text;
    }
    // get height of the selector
    self.height = function() {
        return self.element.offsetHeight;
    }
    // get width of the selector
    self.width = function() {
        return self.element.offsetWidth;
    }
    // get parent element of the selector
    self.parent = function() {
        self.element = self.element.parentNode;
        return self;
    }
     // get children elements of the selector
    self.children = function(key) {
        if(!key) key = 0;
        self.element = self.element.childNodes[key];
        return self;
    }
    // changing attr 
    self.attr = function(name, value) {
        if(!value) return self.element.getAttribute(name)
        self.element.setAttribute(name, value);
        return self;
    }
    //changing CSS
    self.css = function(name, value) {
        self.element.style[name] = value;
        return self;
    }
    // on click event
    self.on = function(type, callback) {
        self.element['on' + type] = callback;
        return self;
    }
    return self;
}

console.log("IN B");