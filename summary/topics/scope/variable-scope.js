QUnit.test('Variable scope', function (assert) {

  var _ = 'FILL THE GAP',
      eq = assert.equal.bind(assert),
      throws = assert.throws.bind(assert);

  /**
   * A globally-scoped variable example
   */
  var a1 = 1;
  function one() {
    eq(a1, _);
  }
  eq(a1, _);
  one();
  eq(a1, _);

  /**
   * A local scope example
   */
  var a2 = 1;
  function two(a2) {
    eq(a2, _);
  };
  eq(a2, _);
  two(5);
  eq(a2, _);

  /**
   * Another local scope example
   */
  function three() {
    var a3 = 3;
    eq(a3, _);
  }
  three();
  eq(typeof(a3), _); // typeof does not throw reference exception

  /**
   * Intermediate: No such thing as block scope in JavaScript (ES5; ES6 introduces let)
   */
  var a4 = 1;

  function four() {
    if (true) {
      var a4 = 4;
      eq(a4, _);
    }
    var zet;
    eq(a4, _);
  }
  eq(a4, _);
  four();
  eq(a4, _);

  /**
   * Intermediate: Object properties
   */
  var a5 = 1;

  function Five() {
    this.a5 = 5;
    eq(a5, _);
  }

  eq(a5, _);
  eq(typeof new Five().a5, _);
  eq(a5, _);
  eq(typeof Five(), _);
  // throws(
  //   function () {
  //     console.log(Five().a5);
  //   }
  // );
  eq(a5, _);
  eq(window.a5, _);

  /**
   * Advanced: Closure
   */
  var a6 = 1;

  var six = function foo() {
    var a6 = 6;
    var dummy = function dummy() {
      a6 += 4;
      return a6;
    };
    eq(a6, _);
    return dummy;
  }();
  eq(a6, _);
  // six === dummy
  eq(six(), _);
  eq(six(), _);
  eq(six(), _);

  /**
   * Advanced: Prototype-based scope resolution
   */
  var a7 = 1;

  function Seven() {
    this.a7 = 7;
    eq(a7, _);
  }

  Seven.prototype.a7 = -1;
  Seven.prototype.b7 = 8;

  eq(a7, _);
  var seven = new Seven();
  eq(a7, _);
  eq(seven.a7, _);
  eq(seven.b7, _);

  /**
   * Global+Local: An extra complex Case introducing 'hoisting'.
   */
  var x1 = 5;

  (function (undefined) {
    eq(x1, _); // because we override undefined by 10
    var x1 = 10;
    eq(x1, _);
  })(10);

  var x2 = 5;

  (function () {
    var x2;
    eq(x2, _);
    x2 = 10;
    eq(x2, _);
  })();

  /**
   * Catch clause-scoped variable
   */
  var e = 5;
  eq(e, _);
  try {
    throw 6;
  } catch (e) {
    eq(e, _);
  }
  eq(e, _);

  var e2 = 5;
  eq(e2, _);
  eq(f2, _);
  try {
    throw 6;
  } catch (e2) {
    var f2 = 10;
    eq(e2, _);
    eq(f2, _);
  }
  eq(e2, _);
  eq(f2, _);

  /**
   * Eval cheating on lexical scoping
   */
  var a8 = 10;
  eq(a8, _);

  function eight(code) {
    eval(code);
    eq(a8, _);
  }
  eight('var a8 = 4;');
  eq(a8, _);
  var tmp = eight;
  var eight = function(code) {
    eval(code);
    eq(a8, _);
  };
  eight('a8 = 55;');
  eq(a8, _);


  $('.fail table').hide();
  $('.fail .test-message').each(function () {
    var text = $(this).siblings('table').find('.test-source').text();
    $(this).append(' at: ' + text.match(/variable-scope\.js:\d+:\d+/));
  });

  $('.pass').css({
    opacity: 0,
    position: 'absolute'
  });


});
