const container = document.getElementById('container');
const btn = document.querySelector('button');


function createDefaultGrid() {
    let colsNum = 16;
    let rowsNum = 16;

    let grid = document.createElement('div');
    grid.className = "grid";
    
    for (let c = 0; c < colsNum; c++) {
        let cols = document.createElement('div');
        cols.className = "column"
    
        for (let r = 0; r < rowsNum; r++) {
            let rows = document.createElement('div');
            rows.className = "row"
            cols.appendChild(rows);
        }
    
        grid.appendChild(cols);
    }
    
    container.appendChild(grid);

    drawGrid();
}
createDefaultGrid()


function randomColor() {
    let randColor = Math.floor(Math.random()*255 + 1);
    return randColor;

}

function drawGrid () {
    let draw = document.querySelectorAll(".row");
    
    for (let draws of draw) {
        draws.addEventListener('mouseover', () => {
                draws.style.backgroundColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()} )`;
        } )
    }
}


    let btnClick = btn.addEventListener('click', ()=> {
    
        let removeGrid = document.querySelector('.grid');
        removeGrid.remove();

        createCustomGrid();
    
    })
    
    function createCustomGrid() {
        let colsNum = parseInt(prompt("enter number of columns"));
        let rowsNum = parseInt(prompt('enter number of rows'));
        if(colsNum <= 100 || rowsNum <= 100) {

            let grid = document.createElement('div');
            grid.className = "grid";
            
            for (let c = 0; c < colsNum; c++) {
                let cols = document.createElement('div');
                cols.className = "column"
            
                for (let r = 0; r < rowsNum; r++) {
                    let rows = document.createElement('div');
                    rows.className = "row"
                    cols.appendChild(rows);
                }
            
                grid.appendChild(cols);
            }
            
            container.appendChild(grid);
        } else {
            createDefaultGrid();
        }
    
        drawGrid();
    
    }