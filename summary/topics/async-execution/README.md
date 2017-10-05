## Async execution

Compare result of given code fragments:

```javascript
function fooLong() {
  var x = 10;
  
  setTimeout(function () {
    x += 1;
  }, 1000);
  
  return x;
}

fooLong(); // -> 10
```

```javascript
function fooShort() {
  var x = 10;
  
  setTimeout(function () {
    x += 1;
  }, 0);
  
  return x;
}

fooShort(); // -> 10
```

And how about comparing those loops:

```javascript
for (var i = 0; i < 10; i += 1) {
  setTimeout(function () {
    console.log(i)
  }, 1)
}
```

```javascript
for (var i = 0; i < 10; i += 1) {
  setTimeout(function (j) {
    console.log(j)
  }, 1, i)
}
```
