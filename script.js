const container = document.querySelector('#container');
const clear = document.querySelector('.clear');

for(let i = 0; i < 16; i++) {
    const div = document.createElement('div');
    div.classList.add('containers');
    for(let j = 0; j < 16; j++) {
        const divRow = document.createElement('div');
        divRow.classList.add('rows');
        div.appendChild(divRow);
    }
    container.appendChild(div);
}

const divHover = document.querySelectorAll('.rows');

divHover.forEach((box) => {
    box.addEventListener('mouseover', () => {
        box.classList.add('rowsHover');
    });
});

clear.addEventListener('click', () => {
    divHover.forEach((box) => {
        box.classList.remove('rowsHover');
    })
});
