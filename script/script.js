let catalog = document.querySelector('.header__catalog');
let dropdown = document.querySelector('.dropdown');
let burger = document.querySelector('.header__burger');
let burgerBody = document.querySelector('.burger__body');

burger.addEventListener('click', ()=> {
    burgerBody.classList.toggle('show');
})


catalog.addEventListener('click', ()=> {
    dropdown.classList.toggle('active');  
})