## Using JS in HTML

### Longer form

```HTML
<!doctype html>
<html>
  <head>
    <title>My website</title>
  </head>

  <body>
    <h1>My website</h1>
    <script type="javascript">
      function sum(a, b) {
        return a + b;
      }
    </script>
  </body>
</html>
```

### Shortcut

```HTML
<h1>My website</h1>
<script>
function sum(a, b) {
  return a + b;
}
</script>
```

### Linking external script

```HTML
<script src="main.js"></script>
<script>
  // here you can use functions from main.js
</script>
```

```HTML
<script>
  // here you CANNOT use functions from main.js
</script>
<script src="main.js"></script>
```