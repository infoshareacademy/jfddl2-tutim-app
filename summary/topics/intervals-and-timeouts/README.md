## Intervals and Timeouts

We can postpone code execution in time.

```javascript
var timeoutId = setTimeout(function() {
  console.log('hello');
}, 3000);

clearTimeout(timeoutId);
```

```javascript
var intervalId = setInterval(function() {
  console.log('hello');
}, 3000);

clearInterval(intervalId);
```

### More

- [Understanding timers](http://javascript.info/tutorial/settimeout-setinterval)