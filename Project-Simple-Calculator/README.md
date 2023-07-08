# Simple Calculator

The Simple Calculator is a basic calculator application built using HTML, CSS, and JavaScript. It allows users to perform arithmetic operations such as addition, subtraction, multiplication, division, and exponentiation.

## Usage

To use the calculator, simply open the `index.html` file in a web browser. The calculator interface will be displayed, and users can click on the buttons to input numbers and perform calculations.

### Calculator Interface

The calculator interface consists of the following elements:

- **Screen**: Displays the current input and calculated result.
- **Number Buttons**: Buttons for entering numeric values (0-9).
- **Operator Buttons**: Buttons for selecting arithmetic operations (+, -, *, /, ^).
- **Clear Button**: Resets the calculator to its initial state.
- **Percentage Button**: Calculates the percentage of the current value.
- **Delete Button**: Removes the last entered digit.
- **Point Button**: Adds a decimal point for decimal numbers.
- **Equals Button**: Calculates the result of the arithmetic operation.

## JavaScript Logic

The calculator functionality is implemented using JavaScript. The JavaScript code handles button clicks, performs calculations, and updates the screen with the result.

- The `click` event listeners are attached to the number buttons, operator buttons, clear button, percentage button, delete button, point button, and equals button.
- The calculator maintains two variables, `num1` and `num2`, to store the entered numbers and an `operator` variable to store the selected arithmetic operation.
- When a number button is clicked, the corresponding value is added to `num1` and displayed on the screen.
- When an operator button is clicked, the current value of `num1` is assigned to `num2`, and `num1` is reset to an empty string. The selected operator is stored in the `operator` variable.
- When the equals button is clicked, the `calculate()` function is called to perform the arithmetic operation based on the stored values of `num1`, `num2`, and `operator`. The result is displayed on the screen.
- Other buttons, such as clear, delete, point, and percentage, perform their respective actions and update the screen accordingly.

## CSS Styling

The calculator interface is styled using CSS. The main styles are defined in the `style.css` file. Here are some key styling properties:

- The calculator component has a black background color and white text color.
- The screen section is aligned to the right and has a fixed font size.
- The buttons are styled with appropriate dimensions, background colors, and text colors.
- The last button (equals button) has a different background color to highlight it.
- Various button variations (double, triple) are used to adjust the width of the buttons in different rows.

## Files

The calculator consists of the following files:

- `index.html`: The main HTML file that displays the calculator interface.
- `style.css`: The CSS file that defines the styles for the calculator interface.
- `index.js`: The JavaScript file that contains the calculator logic.

Feel free to modify and customize the Simple Calculator as needed!


