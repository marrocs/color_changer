// Background color change
//var a = document.getElementById('area');
//var butance1 = document.getElementsById('btn1');
let backArea = document.querySelector('#area')
let buttonOne = document.querySelector('#btn1')


function clicar() {
    var randomColor = Math.floor(Math.random()*16777215).toString(16);

    backArea.style.backgroundColor = '#' + randomColor;
};

backArea.addEventListener('click', clicar);
//a.addEventListener('click',()=>{};

// Buttons actions
// Btn1 - Flash
function click_btn1() {
    //var butance1 = document.getElementsById('btn1');

    var randomColor = Math.floor(Math.random()*16777215).toString(16);

    backArea.style.backgroundColor = '#' + randomColor;

    setTimeout(click_btn1, 1000)
};

buttonOne.addEventListener('click', click_btn1);

