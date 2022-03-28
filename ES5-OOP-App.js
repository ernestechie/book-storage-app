// BOOK CONSTRUCTOR
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI CONSTRUCTOR
function UI() { };

// DOM VARIABLES
let books;
const alert = document.querySelector('.alert');
const title = document.getElementById('title'),
      author = document.getElementById('author'),
      isbn = document.getElementById('isbn');  

UI.prototype.addBook = function (book) {
  const list = document.getElementById('book-list');
  const row = document.createElement('tr');

  row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href='#' class='delete'>X</td>
    `;
    // <td><i class="fa-solid fa-trash delete"></i></td>
    list.appendChild(row);
}

// Book PROTOTYPE FUNCTIONS
UI.prototype.fetchBooks = function () {
  if (localStorage.getItem('books') === null) {
    books = [];
  } else {
    books = JSON.parse(localStorage.getItem('books'));
  }
  return books;
}

// FUNCTION TO SHOW BOOKS ON LOADING OF THE DOM
UI.prototype.showBooks = function () {
  books = UI.prototype.fetchBooks();
  books.forEach(function(book) {
    const ui = new UI;
     ui.addBook(book);
  });
}

// FUNCTION TO DELETE BOOK FROM LOCAL STORAGE
UI.prototype.deleteFromLS = function (isbn) {
  books = UI.prototype.fetchBooks();
  books.forEach(function (book, index) {
    if (book.isbn === isbn) {
      books.splice(index, 1);
    }
  });
  localStorage.setItem('books', JSON.stringify(books));
}

// FUNCTION TO CLEAR FIELD AFTER A BOOK IS ADDED
UI.prototype.clearFields = function () {
  title.value = '';
  author.value = '';
  isbn.value = '';
}

// FUNCTION TO TOGGLE ALERT --- ERROR ALERT AND SUCCESS ALERT
UI.prototype.showAlert = function (alertType, alertMessage) {
  alert.classList.add('show-alert');
  alert.classList.add(alertType);
  alert.innerHTML = `<p>${alertMessage}</p>`;

  setTimeout(function () {
    alert.classList.remove(`show-alert`);
    alert.classList.remove(alertType);
  }, 2000);
}

// FETCH BOOK -- EVENT LISTENER
document.addEventListener('DOMContentLoaded', function () {
  const ui = new UI;
  ui.showBooks();
});

// ADDING A BOOK TO THE DOM  -- EVENT LISTENER
document.getElementById('book-form').addEventListener('submit', function (e) {
  const book = new Book(title.value, author.value, isbn.value);
  const ui = new UI();
  
  if (title.value == '' || author.value == '' || isbn.value == '') {
    ui.showAlert('error-alert', 'Please add book information');
  }
  else {
    ui.addBook(book);
    ui.showAlert('success-alert', 'Book successfully added');
    ui.clearFields();

    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
    }
  e.preventDefault();
});

// DELETE BOOK -- EVENT LISTENER
document.getElementById('book-list').addEventListener('click', function (e) {
  if (e.target.classList.contains('delete')) {
    if (confirm('Proceed to delete this book? This action cannot be undone')) {
      e.target.parentElement.parentElement.remove();
      const ui = new UI;
      ui.deleteFromLS(e.target.parentElement.previousElementSibling.textContent);
      ui.showAlert('success-alert', 'Deleted book successfully');
    }
  }
  e.preventDefault();
});