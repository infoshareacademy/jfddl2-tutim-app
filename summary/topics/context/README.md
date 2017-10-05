# Context

Context of a function call is being set in the exact moment of a function call.

```javascript
var john = {
  name: 'John',
  sayHi: function () {
    return 'My name is ' + this.name
  }
};

var mike = {
  name: 'Mike'
};

var sayHi = john.sayHi;

sayHi();

john.sayHi();

mike.sayHello = john.sayHi;
mike.sayHello();

john.sayHi.apply(mike);
john.sayHi.call(mike);
```

The only exception from that rule is the use of `Function.prototype.bind`

```javascript
var john = {
  name: 'John'
};
var mike = {
  name: 'Mike'
};

function sayHi() {
  return 'My name is ' + this.name
}

var boundSayHi = sayHi.bind(john);

sayHi.call(john);
sayHi.call(mike);

boundSayHi.call(john);
boundSayHi.call(mike);
```



