# Arrays

## Creating arrays

There are multiple ways of creating an array. 
However the one presented below is the most common
and the most powerful.

```javascript
var x;
x = []; // an empty array
x = [1, 2, 3]; // an array with three numbers
x = [1, 'a', true, {}, undefined, []]; // an array with values of different type
```

## Reading values stored within array

```javascript
var x = ['a', 'b', 'c'];

console.log(x[0]); // -> 'a' (first element)
console.log(x[x.length - 1]); // -> 'c' (last element)
```

## Most common array methods (functions)

### Pure

Those always return new arrays / values based on an input
array. They do not modify the source array.

- slice
- map
- filter
- reduce
- concat
- find
- forEach
- join
- indexOf

### Impure

Those operate on arrays "in place" - they modify the source
array.

- splice
- sort
- reverse
- push
- pop

### More

- [Array on MDN](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array)
