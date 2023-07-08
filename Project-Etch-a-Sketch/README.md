# Etch a Sketch

This is a simple Etch a Sketch application built using HTML, CSS, and JavaScript. It allows you to create a grid and draw by hovering over the cells with the mouse.

## Usage

To use the application, simply open the `index.html` file in a web browser. The grid will be displayed, and you can start drawing by hovering over the cells.

### Creating a New Grid

- Click the "New Grid" button to create a new grid.
- A prompt will appear asking for the number of columns and rows in the new grid.
- Enter the desired number of columns and rows and click "OK".
- If the entered values are less than or equal to 100, a new grid with the specified dimensions will be created.
- If the entered values are greater than 100, the default grid with a size of 16x16 will be created.

### Drawing

- Move the mouse cursor over the cells in the grid to draw.
- Each cell will change its background color to a random RGB value when hovered over.

## CSS Styling

The application is styled using CSS. The main styles are defined in the `style.css` file. Here are some key styling properties:

- The background color of the body is set to mint cream (`background-color: mintcream;`).
- The grid and cells are displayed using flexbox to align them in a centered manner.
- The cells have a height and width of 20 pixels and a gray solid border.

## Files

The application consists of the following files:

- `index.html`: The main HTML file that displays the application.
- `style.css`: The CSS file that defines the styles for the application.
- `index.js`: The JavaScript file that contains the logic for creating and drawing on the grid.

Feel free to modify and customize the application as needed!


