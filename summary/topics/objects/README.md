# Objects

## Working with objects

```javascript
var x = {};
x.a = 10;
x.b = 20;
x.c = x.a + x.b; // 30

x['a'] === 10; // true
x.a === 10; // true

x[1] = 5;
x[1] === 5; // true

x.1 = 15; // ERROR!
```

> Warning!
> We cannot use dynamic attribute access for attributes named
> using numbers. 

## Most common methods (functions)

- Object.create
- Object.assign
- Object.keys
- Object.values

## Object Oriented Programming

- [Crockford on OOP in JS - video](https://www.youtube.com/watch?v=bo36MrBfTk4#t=28m50s)
- [Prototypal Inheritance in JS](http://javascript.crockford.com/prototypal.html)
- [Parasitic Inheritance in JS](http://www.breck-mckye.com/blog/2014/05/why-i-prefer-parasitic-inheritance/)

### SOLID

- [SOLID by UncleBob](http://butunclebob.com/ArticleS.UncleBob.PrinciplesOfOod)
- [SOLID explained in easy way](https://scotch.io/bar-talk/s-o-l-i-d-the-first-five-principles-of-object-oriented-design)
- [SOLID on Wikipedia](https://en.wikipedia.org/wiki/SOLID_(object-oriented_design))

### More

- [OOP by Crockford](http://www.crockford.com/javascript/private.html)
- [Delegation vs Inheritance in JavaScript](https://javascriptweblog.wordpress.com/2010/12/22/delegation-vs-inheritance-in-javascript/)
- [Prototype-based programming](https://en.wikipedia.org/wiki/Prototype-based_programming)
- [Replace Inheritance with Delegation](https://sourcemaking.com/refactoring/replace-inheritance-with-delegation)
- [Inheritance and the prototype chain](https://developer.mozilla.org/en/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
- [Object.prototype](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype)
- [Common Misconceptions About Inheritance in JavaScript](https://medium.com/javascript-scene/common-misconceptions-about-inheritance-in-javascript-d5d9bab29b0a#.5t4hqr8d0)
- [Why Learn Functional Programming in JavaScript](https://medium.com/javascript-scene/why-learn-functional-programming-in-javascript-composing-software-ea13afc7a257#.1h0vuluvx)
- [The Two Pillars Of JavaScript (Part 1)](https://medium.com/javascript-scene/the-two-pillars-of-javascript-ee6f3281e7f3#.jg1e9xt7d)
- [You Don't Know JavaScript](https://github.com/getify/You-Dont-Know-JS#you-dont-know-js-book-series)