


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

let squares = document.createElement('div');
squares.classList = 'grid';

//container.appendChild(squares);

function makeGrid(size) {
    size = 256;
    for(s = 1; s < size; s++) {
        let square = document.createElement('div');
        square.classList = 'grid';
        container.appendChild(square);
    }

};
makeGrid()
