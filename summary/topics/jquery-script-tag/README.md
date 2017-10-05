# jQuery Script Tag

## Script tag order matters

```HTML
<script src="jquery.js"></script>
<script>
  // You can use jQuery here
  $(document).ready(function () {
    console.log('jQuery works!')
  })
</script>
```

```HTML
<script>
  // You can NOT use jQuery here
</script>
<script src="jquery.js"></script>
```

## Where to find jQuery?

- [Docs](http://api.jquery.com/)
- [https://code.jquery.com](https://code.jquery.com/)
  - [Latest version download (2016-11-28)](https://code.jquery.com/jquery-3.1.1.js)
