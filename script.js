const container = document.querySelector('#container');
const clear = document.querySelector('.clear');
const amtButton = document.querySelector('.amt');

function createBoxes(num) {
    for(let i = 0; i < num; i++) {
        const div = document.createElement('div');
        div.classList.add('containers');
        for(let j = 0; j < num; j++) {
            const divRow = document.createElement('div');
            divRow.classList.add('rows');
            div.appendChild(divRow);
        }
        container.appendChild(div);
    }
    hover();
};

function hover() {
    const divHover = document.querySelectorAll('.rows');

    divHover.forEach((box) => {
        box.addEventListener('mouseover', () => {
            box.classList.add('rowsHover');
        });
        clear.addEventListener('click', () => {
            box.classList.remove('rowsHover');
        });
    });
};

amtButton.addEventListener('click', () => {
    let num = prompt("How many boxes?");
    removeBoxes();
    createBoxes(num);
});
