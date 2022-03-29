# BOOK STORING APP WITH OOP JAVASCRIPT & SKELETON UI

# TECHNOLOGIES
- OOP JavaScript
- Skeleton UI (A minimalistic HTML-CSS Boilerplate)

# APP STRUCTURE
> Create the book constructor -- The book constructor takes in three parameters (Author of the book, title, & ISBN)

> Create the UI constructor -- A set of prototype constructor methods to do things like 'add book', 'Deleting book', 'show alert', etc. Methods that have to do with the UI

> Add event listeners to the DOM objects (The form, buttons, etc). The event listener added to the form returns a function that creates a new object.

> When the form is submitted, a new book object is created from the Book constructor. With 'title', 'author', and 'isbn' as the object properties.

> The UI object takes care of the DOM manipulation. A UI object is created from the UI constructor each time an event is called to handle any DOM manipulation. Deletion, addition, Local storage, etc.

> When the form is filled and submitted, the UI object is called to create a new book object, we then append the book object with the required data using the corresponding prototype function (In this case, addBook()). To add a book, we create a list and a row, then append the row with table data containing the book title, author, ISBN, and the delete button. The object is then pushed into a 'books' array and parsed in local storage as a string.

> When the app is opened, we check localstorage to see if 'books' array exist, this is done by the 'fetchbooks' function. If not, we create a new books array, but if so, we loop through and create tables row for each itreation (Each row contain data of individual books).

> When a book is deleted, we remove it from the DOM with the '.remove()' DOM method, and call the 'delteFromLs()' function, then we call the 'fetchbooks' function. The 'fetchbooks' function returns the books array storing all data of the books we added previosly. We loop through using 'forEach()', using parameters such as 'index' and 'book'. The book parameter serves as a placeholder for each book object in the array. 
> If a book object has thesame ISBN as the one in the deleted book, that book is removed from the DOM and removed from the array by its index. We then push the array back into local storage.
