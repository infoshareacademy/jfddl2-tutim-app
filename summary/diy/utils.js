/**
 * Performs given action multiple times.
 *
 * Sample call:
 *
 * times(3, function (index) { console.log('hello ' + index); }
 * > "hello 0"
 * > "hello 1"
 * > "hello 2"
 *
 * @param howMany
 * @param action
 */
function times(howMany, action) {
  for (var i = 0; i < howMany; i += 1) {
    action(i);
  }
}

/**
 * Performs given action multiple times, iterating by one,
 * starging from `begin`, ending on `end - 1` value.
 *
 * Sample call:
 *
 * range(2, 5, function (index) { console.log('hello ' + index); }
 * > "hello 2"
 * > "hello 3"
 * > "hello 4"
 *
 * @param begin
 * @param end
 * @param action
 */
function range(begin, end, action) {
  for (var i = begin; i < end; i += 1) {
    action(i);
  }
}
