# JavaScript and DOM

## How to create a DOM node?

With vanilla JS

```JavaScript
var domNode = document.createElement('div');
```

With jQuery

```JavaScript
var $domNode = $('<div>');
```

## How to add DOM node to the DOM?

With vanilla JS

```JavaScript
var domNode = document.createElement('div');
document.body.appendChild(domNode);
```

With jQuery

```JavaScript
var $domNode = $('<div>');
$('body').append($domNode);
```

## How to find node in the DOM?

Let's assume we are looking for `<div id="container"></div>`
With vanilla JS

```JavaScript
var domNode = document.getElementById('container');
```

With jQuery

```JavaScript
var $domNode = $('#container');
```

## How to modify existing DOM node?

With vanilla JS

```JavaScript
var domNode = document.getElementById('container');
domNode.style.backgroundColor = 'blue';
```

With jQuery

```JavaScript
var $domNode = $('#container');
$domNode.css({
  backgroundColor: 'blue'
});
```

## How to add event listener to given DOM node?

With vanilla JS

```JavaScript
var domNode = document.getElementById('container');
domNode.addEventListener('click', function (event) {
  console.log(event);
});
```

With jQuery

```javascript
var $domNode = $('#container');
$domNode.click(function (event) {
  console.log(event);
});

// alternative way
$domNode.on('click', function (event) {
  console.log(event);
});
```

### More

- [Document Object Model on MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)