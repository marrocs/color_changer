// Background color change
var a = document.getElementById('area');

function clicar() {
    var randomColor = Math.floor(Math.random()*16777215).toString(16);

    a.style.backgroundColor = '#' + randomColor;
};

a.addEventListener('click', clicar);

// Buttons actions
// Btn1 - Flash
var butance1 = document.getElementsById('btn1');

function click_btn() {
    var randomColor = Math.floor(Math.random()*16777215).toString(16);

    a.style.backgroundColor = '#' + randomColor;

    setTimeout(click_btn, 1);
};

butance1.addEventListener('click', click_btn);

