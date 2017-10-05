$(function () {
    console.log('Document ready 1');
});

$(document).ready(function () {
    console.log('Document ready 2');
});

console.log('Hello');

$(function () {
    console.log('Document ready 3');
});


function handleClickA() {
    console.log('a: ', this);
}

// document.getElementById('btn').addEventListener(
//     'click',
//     function handleClickB() {
//         console.log('b: ', this);
//     }
// );
//
$(function () {
    $('#btn').on('click', function handleClickC() {
        console.log('c: ', this);
    });
});

$('#btn').on('click', function handleClickD() {
    console.log('d: ', this);
});