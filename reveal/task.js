const reveal = document.querySelectorAll(`.reveal`);

reveal.forEach((el) => {
    
    document.addEventListener(`scroll`, () => {
        if(el.getBoundingClientRect().top > 0 && el.getBoundingClientRect().bottom < window.innerHeight ) {
            el.classList.add(`reveal_active`);
        }else {
            el.classList.remove(`reveal_active`);
        }

    });
});