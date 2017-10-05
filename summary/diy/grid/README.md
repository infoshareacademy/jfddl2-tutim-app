# Grid

Make a HTML table with 10 rows and 10 columns using jQuery.

Requirements:

- each `td` should have a `cell` class
- use `for` loop (or any other form of iteration)
- use given jQuery methods:
  - `.append`
  - `.addClass`
  - DOM node creation using `$`
  - DOM node finding using `$`
- use `.addClass` selectively to color the grid like a chessboard with 
  `negative` and `positive` class names
- add click event listener using `.on('click', function () {...})`
  and `.toggleClass('negative')`
- use `setInterval`, `Math.random` and `Math.round` to
  toggle `positive` class on randomly selected cell every second