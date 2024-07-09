//
let btn = document.getElementById ('send1');
btn.addEventListener ('click', function () {
    alert('Thanks')
})

//
let navigaation = document.getElementById ('navBar');
let burger = document.getElementById ('burgerBar');

burger.addEventListener ('click', function () {
    navigaation.classList.toggle('newNavigation')
})