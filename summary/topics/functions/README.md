# Functions

### Function declaration
```JavaScript
function sum(a, b) {
  return a + b;
}
// -> undefined
```

### Function expression
```JavaScript
var sum = function(a, b) {
  return a + b;
}
// -> undefined
```

### Function call

```JavaScript
sum(3, 5)
// -> 8
```

## Passing function to a function as an execution argument

```JavaScript
function foo(f) { 
  return f(); 
}

function bar() { 
  return "hello"; 
}

foo(bar)
// -> "hello"
```

```JavaScript
function foo(f, value) { 
  return f(value); 
}

function bar(x) { 
  return "hello" + x; 
}

foo(bar, 10)
// -> "hello10"
```

### More

- [Function declaration vs function expression](https://javascriptweblog.wordpress.com/2010/07/06/function-declarations-vs-function-expressions/)

