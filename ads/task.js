`use strict`
const rotator = document.querySelector(`.rotator`);

function Rotator(rotator) {
    
    let i = 0;
    let timer = Number(rotator.children[i].dataset.speed);
    setInterval(() => {
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
        timer = Number(rotator.children[i].dataset.speed);
    
        
    }, timer);
}

Rotator(rotator);