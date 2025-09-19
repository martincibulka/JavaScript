let table;
let columns = 5; // the default number of columns
let rows = 3; // the default number of rows
let activeCell;

function createDefaultTable() {
    table = document.createElement("table");
    document.body.appendChild(table);
}

function createDefaultTable() {
    table = document.createElement("table");
    document.body.appendChild(table);

    for (let y = 0; y < rows; y++) {
        let tr = document.createElement("tr");
        table.appendChild(tr);

        for (let x = 0; x < columns; x++) {
            tr.appendChild(createCell());
        }
    }
}

function createCell() {
    let td = document.createElement("td");
    let tdInput = document.createElement("input");
    tdInput.type = "text"; // we set the input element as a text field
    tdInput.onfocus = function() {
        activeCell = this;  // when the input is active, we save the reference to that cell
    };
    td.appendChild(tdInput);
    return td;  // we return the created cell
}

window.onload = function () {
    createDefaultTable();
}

function createButton(label) {
    let btn = document.createElement("button");
    btn.textContent = label;
    document.body.appendChild(btn);
    return btn;
}

function createControlButtons() {
    createButton("Insert row below").onclick = function () {
        addRow(false);
        };
    createButton("Insert row above").onclick = function () {
        addRow(true);
        };
    createButton("Insert column to left").onclick=function () {
    addColumn(true);
        };

    createButton("Insert column to right").onclick=function () {
        addColumn(false);
        };
    createButton("Remove row").onclick = removeRow;
    createButton("Remove column").onclick = removeColumn;
}

window.onload = function () {
    createControlButtons(); // we added this line
    createDefaultTable();
}

let firstRowCellsCount = table.firstElementChild.querySelectorAll("td").length;

function createRow() {
    let newRow = document.createElement("tr");
    let firstRowCellsCount = table.firstElementChild.querySelectorAll("td").length;

    for (let i = 0; i < firstRowCellsCount; i++) { // the loop will have the same number of iterations as the first row cells
        newRow.appendChild(createCell()); // we add one new cell to every new row
    }
    return newRow;
}

function activeCellRowIndex() {
    let tableNodes = table.childNodes;
    let foundRow = activeCell.parentElement.parentElement;

    return Array.prototype.indexOf.call(tableNodes, foundRow);
}

function activeCellColumnIndex() {
    let rowNodes = activeCell.parentElement.parentElement.childNodes;
    let foundCell = activeCell.parentElement;

    return Array.prototype.indexOf.call(rowNodes, foundCell);
}

function addRow(top) {
    let newRow = createRow();
    let selectedIndex = activeCellRowIndex();

    if (top) {
        table.insertBefore(newRow, table.childNodes[selectedIndex]); // inserts a new row above the row with the active cell
    } else {
        if (table.lastChild == table.childNodes[selectedIndex]) {
            table.appendChild(newRow); // if the selected row is the last one, we use the appendChild() method
        } else {
            table.insertBefore(newRow, table.childNodes[selectedIndex + 1]); // unless the selected row is not the last row, we use the insertBefore() method
        }
    }
}

function addColumn(left) {
    let selectedIndex = activeCellColumnIndex();

    for (let i = 0; i < table.childNodes.length; i++) {
        let newCell = createCell();

        if (left) {
            table.childNodes[i].insertBefore(newCell, table.childNodes[i].childNodes[selectedIndex]);
        } else {
            if (table.childNodes[i].childNodes[selectedIndex] == table.childNodes[i].lastElementChild) {
                table.childNodes[i].appendChild(newCell);
            } else {
                table.childNodes[i].insertBefore(newCell, table.childNodes[i].childNodes[selectedIndex+ 1]);
            }
        }
    }
}

function removeRow() {
    let selectedRow = activeCellRowIndex();
    table.removeChild(table.childNodes[selectedRow]); // deletes the row with the given index
}

function removeColumn() {
    let selectedIndex = activeCellColumnIndex();
    for (let i = 0; i < table.childNodes.length; i++) {
        table.childNodes[i].removeChild(table.childNodes[i].childNodes[selectedIndex]); // deletes the cell with the given index in all rows
    }
}


