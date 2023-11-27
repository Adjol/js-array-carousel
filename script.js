

const items = document.getElementsByClassName('item');

console.log(items);

let activeItem = 0;

const arrowDown = document.querySelector(".fa-arrow-down");

const arrowUp = document.querySelector(".fa-arrow-up");

arrowDown.addEventListener("click", function() {

    if (activeItem < items.length - 1) {

        
        items[activeItem].classList.remove('active');

        activeItem++;

        items[activeItem].classList.add('active');

    } else if (activeItem === items.length - 1) {
        items[activeItem].classList.remove('active');

        activeItem = 0;
        items[activeItem].classList.add('active');
    }



});

arrowUp.addEventListener("click", function() {

    items[activeItem].classList.remove('active')

    if (activeItem === 0) {

        activeItem = items.length -1;



        items[activeItem].classList.add('active');
    } else {

        activeItem--;

        items[activeItem].classList.add('active');
    }
}); 