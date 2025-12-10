


//let btn = document.createElement('button');
//container.appendChild(btn);
//btn.textContent = 'hello';
//btn.addEventListener('click', (e) =>{
//    alert('its something ehh')
//});


//squares.style.border = 'solid 1px red';
//squares.style.width = '16px';
//squares.style.height = '16px';
//squares.style.margin = '8px';

// other option for style is :
//squares.style.cssText = `
//    border: solid 1px blue;
//    width: 24px;
//    height: 24px;
//    margin: 8px;
//`;

let container = document.querySelector('#container');


//container.appendChild(squares);

function makeGrid(num) {
    for(s = 0; s < num; s++) {
        let square = document.createElement('div');
        square.classList = 'grid';
        container.appendChild(square);
    }

};
makeGrid(16*16)



let squaredgrid = document.querySelector('.squaredgrid');
squaredgrid.addEventListener('click', (e) => {
    let msg = prompt('how many squares per line ?')
    makeGrid(0)
    makeGrid(Number(msg)**2)
});
