# Conditional Code Execution

We can use `if` statement to run code parts based on some boolean value

```JavaScript
var condition = 3 > 2; // true
if (condition) {
  // this code will be executed
} else {
  // this code will not run
}
```

We can use `ternary` (`conditional`) operator to construct an expression
which returns a certain value based on given condition.

```JavaScript
var condition = true;

var x = condition ? 10 : 20; // x === 10
var y = !condition ? 10 : 20; // y === 20
```

> Important!
> We use exclamation mark: `!` to negate boolean value

We can use `switch` statement to combine multiple comparisons
 and run code based on its result.

```JavaScript
var x = 10;
var y;
switch(x) {
  case 1:
    y = 20;
    break;
  case 3:
    y = 22;
    break;
  case 10:
    y = 100;
    break;
  default:
    y = 99999;
}
// y === 100
```

### More

- [Expressions and statements on 2ality.com](http://www.2ality.com/2012/09/expressions-vs-statements.html)