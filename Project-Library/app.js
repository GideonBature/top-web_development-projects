// JavaScript to show/hide the form when the button is clicked
const form = document.getElementById('form');
const addBookBtn = document.getElementById('add-book-btn');
const addBookForm = document.getElementById('add-book-form');
const cancelBtn = document.getElementById('cancel-btn');
const addBtn = document.getElementById('add-btn');
const editBookForm = document.getElementById('edit-book-form');
const updateBookBtn = document.getElementById('update-btn');
const editBookBtn = document.getElementById('edit-btn');
const cancelEditBtn = document.getElementById('cancel-edit-btn');
// reference to table body
const tableBody = document.querySelector('tbody');

addBookBtn.addEventListener('click', () => {
  addBookForm.style.display = 'flex';
});

cancelBtn.addEventListener('click', () => {
  addBookForm.style.display = 'none';
});



addBookForm.addEventListener('submit', (e) => {

  e.preventDefault();

  const title = document.querySelector('#title-input').value;
  const author = document.querySelector('#author-input').value;
  const pages = document.querySelector('#pages-input').value;
  const hasRead = document.querySelector('#completed-input').checked;


  let book = new Book(title, author, pages, hasRead);

  addBookToLibrary(book);

  console.log(myLibrary);

  addAllBooks();
  addBookForm.style.display = 'none';
  form.reset();

});

// the array of object of the book entry
let myLibrary = [

];

// function takes values from form and add to objects

function addAllBooks() {

  tableBody.innerHTML = '';

  // loop through the books array and create new row for each object
  for (let i = 0; i < myLibrary.length; i++) {
    // create a new table row element
    let newRow = document.createElement('tr');
  
    // create new table cell elements
    let snCell = document.createElement('td');
    let titleCell = document.createElement('td');
    let authorCell = document.createElement('td');
    let pagesCell = document.createElement('td');
    let completedCell = document.createElement('td');
    let editBtnCell = document.createElement('button');
    let deleteBtnCell = document.createElement('button');
  
    // set contents from book object
    snCell.textContent = i + 1;
    titleCell.textContent = myLibrary[i].title;
    authorCell.textContent = myLibrary[i].author;
    pagesCell.textContent = myLibrary[i].pages;
    
    // Check if completed is true, then yes, if false, then no
    if (myLibrary[i].completed){
      completedCell.textContent = 'Yes';
    } else {
      completedCell.textContent = 'No';
    }
    editBtnCell.textContent = '';
    deleteBtnCell.textContent = '';

    // create the icon element and add it to button
    let editIcon = document.createElement('i');
    let deleteIcon = document.createElement('i');
    editIcon.classList.add('fas', 'mt-2.5', 'fa-edit', 'mr-4', 'text-white', 'hover:text-blue-400');
    deleteIcon.classList.add('fas', 'delete-btn', 'fa-trash-alt', 'mr-2', 'text-white', 'hover:text-red-500');
    editBtnCell.appendChild(editIcon);
    deleteBtnCell.appendChild(deleteIcon);

    // add style to table's row

    newRow.classList.add('h-9', 'border-b', 'border-gray-500');
  
    // add the new cell to the new row
    newRow.appendChild(snCell);
    newRow.appendChild(titleCell);
    newRow.appendChild(authorCell);
    newRow.appendChild(pagesCell);
    newRow.appendChild(completedCell);
    newRow.appendChild(editBtnCell);
    newRow.appendChild(deleteBtnCell);

    
    // delete function for each of the rows entered
    deleteBtnCell.addEventListener('click', () => {

      // get the closet tr element to the clicked btn
      let row = deleteBtnCell.closest('tr');

      // remove row
      row.remove();

      // recalculate and update sn value for the remaining rows
      const remainingRows = document.querySelectorAll('tbody tr');
      remainingRows.forEach((row, i) => {
        row.firstElementChild.textContent = i + 1;
      })
    });

    editBtnCell.addEventListener('click', () => {
        editBookForm.style.display = 'flex';
    });

    cancelEditBtn.addEventListener('click', () => {
      editBookForm.style.display = 'none';
    });

    updateBookBtn.addEventListener('click', (e) => {
      e.preventDefault();

      // get the 5th row in the table
      let row = editBtnCell.closest('tr');

      // get the cell that you want to update (completedCell in this case)
      const completedCell = row.querySelector('td:nth-child(5)');

      const myInput = document.querySelector('.edit-input');

      if (myInput.checked){
        completedCell.textContent = 'Yes';
        console.log('yes');
      } else {
        completedCell.textContent = 'No';
        console.log('no');
      }

    })
    


  
    // add the new row to the table body
    tableBody.appendChild(newRow);
  
  }
}

function Book(title, author, pages, hasRead) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.completed = hasRead;
}

function addBookToLibrary(book) {
  // do stuff here
  myLibrary.push(book);
}