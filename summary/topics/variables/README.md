# Variables

## Variable statement

There are multiple ways of making variables in JS.
The important part is to differentiate between
variable **declaration** 
and **definition** (**initialization**, **assignment**).

Declaration is the fact of putting 
the variable in certain scope.

Initialization is the fact of giving the variable
its first value. Further variable modifications are
called assignments.

## Multiple ways of creating variables

```JavaScript
var x; // declaration
var y; 
 
x = 10; // definition
y = 10; 
 
x = y + 2; // assignment
```

```JavaScript
var x = 10; // declaration with initialization
```

```JavaScript
var x = 10, 
    y = 10; 
```

```JavaScript
var x = 10
  , y = 10
  ;
```

```JavaScript
var x = y = 10;
```

```JavaScript
var x = 10, y;

y = 10;
```

```JavaScript
var x, y = 10;

x = 10;
```

## Assignment operator

```JavaScript
var x = 10;
var y;
var z;

y = x + 1;
y += 1;
y += y;
```

> Warning!
> Never increment a variable without making sure that it
> has proper value type.

```javascript
var x;

x += 1; // NaN, because undefined + 1 === NaN
```

# More

- [Variables on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var)
- [Assignment on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Assignment_Operators)