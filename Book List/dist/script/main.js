// Book Constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI Constructor
function UI() {}

UI.prototype.addBookToList = (book) => {
  const list = document.getElementById("book-list");

  // Create tr element
  const row = document.createElement("tr");
  // Insert cols
  row.innerHTML = `<td>${book.title}</td>
  <td>${book.author}</td>
  <td>${book.isbn}</td>
  <td><a href="#" class="delete"> <i class="fas fa-times"></i></a></td>`;

  list.appendChild(row);
};

UI.prototype.clearFields = () => {
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("isbn").value = "";
};

// Evet Listeners
document.getElementById("book-form").addEventListener("submit", (e) => {
  // Get form Values
  const title = document.getElementById("title").value,
    author = document.getElementById("author").value,
    isbn = document.getElementById("isbn").value;

  //  Instantiate book
  const book = new Book(title, author, isbn);

  //  Instantiate book
  const ui = new UI();

  // Add book to list
  ui.addBookToList(book);
  // Clear fields
  ui.clearFields();
  e.preventDefault();
});
