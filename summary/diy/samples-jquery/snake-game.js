$(function () {
    var $board = $('.board');
    var $table = $('<table>');
    for (var y = 0; y < 10; y += 1) {
        var $tr = $('<tr>');
        for (var x = 0; x < 10; x += 1) {
            var $td = $('<td>').addClass('cell');
            $tr.append($td);
        }
        $table.append($tr);
    }
    $board.append($table);

    var snakeCells = $('td').slice(0, 4).toArray();

    $(snakeCells).addClass('snake');
    drawApple();

    var moves = {
        38: function up($node) {
            return $node.parent().prev().find('.cell').eq($node.index());
        },
        40: function down($node) {
            return $node.parent().next().find('.cell').eq($node.index());
        },
        37: function left($node) {
            return $node.prev();
        },
        39: function right($node) {
            return $node.next();
        }
    };

    var direction = moves[40];

    $(window).on('keydown', function (event) {
        direction = moves[event.keyCode] || direction
    });

    function drawApple() {
        var $emptyCells = $('td:not(".snake")');

        $emptyCells.eq(Math.floor(Math.random() * $emptyCells.length)).addClass('apple')
    }

    var points = 0;
    var interval = setInterval(function () {

        var tail = snakeCells[0];
        var head = snakeCells[snakeCells.length - 1];

        $(head).removeClass('head');

        var $nextHead = direction($(head));

        if ($nextHead.hasClass('snake') || $nextHead.length === 0) {
            clearInterval(interval);
            alert('GAME OVER');
            return;
        }

        if ($nextHead.hasClass('apple') === false) {
            $(tail).removeClass('snake');
            snakeCells = snakeCells.slice(1);
        } else {
            $nextHead.removeClass('apple');
            points += 1;
            drawApple()
        }

        $('.score').text(points);



        snakeCells = snakeCells.concat($nextHead.get(0));
        $nextHead.addClass('head snake');

    }, 200)
});