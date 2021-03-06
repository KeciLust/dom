`use strict`
const rotator = document.querySelector(`.rotator`);

function Rotator(rotator) {
    let i = 0;
    function timerRotator() {
        if (i < rotator.children.length - 1) {
            rotator.children[i].classList.remove(`rotator__case_active`);
            i++;
            rotator.children[i].classList.add(`rotator__case_active`);

        } else {
            rotator.children[i].classList.remove(`rotator__case_active`);
            i = 0;
            rotator.children[i].classList.add(`rotator__case_active`);
        }
        rotator.children[i].style.color = rotator.children[i].dataset.color;
        const timer = rotator.children[i].dataset.speed;
        setTimeout(timerRotator, timer);
    }
    timerRotator();
}

Rotator(rotator);