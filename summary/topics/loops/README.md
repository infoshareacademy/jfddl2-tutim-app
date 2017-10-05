# Loops

## How to run some code multiple times?

```javascript
var i;
for (i = 0; i < 10; i += 1) {
  console.log('hello ' + i);
}
```

```javascript
var i = 0;
while (i < 10) {
  console.log('hello ' + i);
  i += 1;
}
```

```javascript
var i = 0;
do {
  console.log('hello ' + i);
  i += 1;
} while (i < 10)
```

> Warning! The `do ... while ()` loop runs at least once
> even if the condition is not `true`


## DRY way
```javascript
function times(n, callback) {
  for (var i = 0; i < n; i += 1) {
    callback(i);
  }
}
 
times(10, function (index) {
  console.log('hello ' + index);
})
```