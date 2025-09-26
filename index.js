// Wait for the HTML document to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});

function fetchBooks() {
  // Return the fetch promise chain to satisfy the lab's testing requirements
  return fetch("https://anapioficeandfire.com/api/books")
    .then(res => res.json())
    .then(books => renderBooks(books));
}

function renderBooks(books) {
  // Get the <main> element from the DOM
  const main = document.querySelector('main');
  
  // Loop through each book object in the array
  books.forEach(book => {
    // Create a new <h2> element
    const h2 = document.createElement('h2');
    
    // Set the text of the <h2> to the book's name
    h2.textContent = book.name;
    
    // Append the <h2> to the <main> element, making it visible on the page
    main.appendChild(h2);
  });
}
