"use strict";

const $tableElement = $('#pixelCanvas');
const $inputHeight = $('#inputHeight');
const $inputWidth = $('#inputWidth');
const $colorPicker = $('#colorPicker');
// this sets the size of grid
$('#sizePicker').submit( event => {
    event.preventDefault();

    let width = $inputWidth.val();
    let height = $inputHeight.val();

    $tableElement.html(''); //clear

    makeGrid(height, width);
    addCellClickListener();
});
/* JavaScript function to create the grid when submit button is clicked.
 * It takes in height and width of the grid from the html form and creates
 * the grid on the table canvas element in html page.
 */
function makeGrid(height, width) {
    for(let i = 0; i < height; i++) {
        $tableElement.append('<tr></tr>');
    };

    for(let i = 0; i < width; i++) {
        $('tr').append('<td></td>');
    };
};
//Function to change color of pixel when clicked.
function addCellClickListener() {
    $('td').click( event => {
        let color = $colorPicker.val();
        $(event.currentTarget).css("background-color", color)
    });
};