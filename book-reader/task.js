`use strict`;
const book = document.getElementById(`book`);
const bookSize = document.querySelectorAll(`.font-size`);
const bookColor = document.querySelectorAll(`.book__control_color a.color`);
const bookFon = document.querySelectorAll(`.book__control_background a.color`);

bookSize.forEach((el) => {
    el.addEventListener(`click`, (e) => {
        bookSize.forEach((el) => {
            el.classList.remove(`font-size_active`)
        });
        el.classList.add(`font-size_active`);
        book.classList.remove(`book_fs-big`, `book_fs-small`);
        if (el.classList.contains(`font-size_small`) || el.classList.contains(`font-size_big`)) {
            book.classList.add(`book_fs-${el.getAttribute(`data-size`)}`);
        }
        e.preventDefault();
    });
});
bookColor.forEach((el) => {
    el.addEventListener(`click`, (e) => {
        bookColor.forEach((el) => {
            el.classList.remove(`color_active`);
        });
        el.classList.add(`color_active`);
        book.classList.remove(`book_color-black`, `book_color-gray`, `book_color-whitesmoke`);
        book.classList.add(`book_color-${el.getAttribute(`data-text-color`)}`);
        e.preventDefault();
    });
});
bookFon.forEach((el) => {
    el.addEventListener(`click`, (e) => {
        bookFon.forEach((el) => {
            el.classList.remove(`color_active`);
        });
        el.classList.add(`color_active`);
        book.classList.remove(`book_bg-black`, `book_bg-gray`, `book_bg-white`);
        book.classList.add(`book_bg-${el.getAttribute(`data-bg-color`)}`);
        e.preventDefault();
    });
});