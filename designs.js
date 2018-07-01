/*
This function builds the grid based on the inputs and it allows the user to
click the cells of the grid to make pixels.
*/
function makeGrid() {
    let gridRowStr, gridColStr, gridColInt, gridRowInt; // Variable declarations of the grid columns and rows

    /*
        Retrieve the values of the width and height of the grid to be built as string
        and parse each of them to an integer
    */
    gridRowStr = $('#inputHeight').val();
    gridRowInt = parseInt(gridRowStr)
    gridColStr = $('#inputWidth').val();
    gridColInt = parseInt(gridColStr);

    let tableElement = $('#pixelCanvas'); // Obtain the jQuery object of the table element
    tableElement.empty(); // Clean the children elements of table if there is any
    let count = 0; // This variable will increase in a nested loop
    /*
        Loop through the column value and append tr element
    */
    for (let col = 0; col < gridColInt; col++) {
        let t_col = "<tr></tr>";
        tableElement.append(t_col); // <table><tr></tr></table>
        /*
            Loop through the row value and append td element to the last
            tr element
        */
        for (let row = 0; row < gridRowInt; row++) {
            let t_row = "<td id=td" + count + "></td>"; //
            $('tr').last().append(t_row);  // <table><tr><td></td></tr></table>

            let t_data = "#td" + count; // This create an id used to identify each cells
            /*
                Register a click event to the current cell (td element) and change
                the background to the currently selected picker.
            */
            $(t_data).on('click', function () {
              console.log("td" + row);
              $(this).css('background-color', $('#colorPicker').val());
            })
            count = count + 1; // Increment the count
        }

    }

}

/* This function register a change event to the color picker input which
    updates the value of the color input anytime its value changes.
*/
function selectColor() {
    $('#colorPicker').on('change', function (event) {
        // console.log(event.target.value);
        let colorValue = event.target.value; // Obtain the value of the selected color via the event object
        $('#colorPicker').val(colorValue); // Update the color input based on the selected color
    })
}

/*
  This line kicks off after the document is fully loaded.
*/
$(document).ready(function() {
    selectColor(); // Call the function that register a change event to the color picker input
    /*
      Register a click event to the submit button of the form.
    */
    $('#submit').click(function (event) {
        event.preventDefault(); // Prevent the default action of the submit button
        makeGrid(); // Call the function that builds the grid
    });
});





