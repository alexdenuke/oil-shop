let catalog = document.querySelector('.header__catalog');
let dropdown = document.querySelector('.dropdown');

window.onclick = function (event) {
    if (!event.target.matches('.header__catalog') ){
        let dropContent = document.querySelectorAll(".dropdown");
        let i;
        for (i = 0; i < dropContent.length; i++) {
            let openDrop = dropContent[i];
            if (openDrop.classList.contains('active')) {
                openDrop.classList.remove('active');
            }
        }
    }
}


 catalog.addEventListener('click', ()=> {
    dropdown.classList.toggle('active');  
})



let burger = document.querySelector('.header__burger');
let burgerBody = document.querySelector('.burger__body');
burger.addEventListener('click', ()=> {
    burgerBody.classList.toggle('show');
    document.body.classList.toggle('lock');
    
});