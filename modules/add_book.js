const bookContainer = document.querySelector('.book-container');

const addBookToList = (book) => {
  bookContainer.innerHTML += `
                              
      <li class="book">"${book.title}" by ${book.author} <button type="button" class="remove">Remove</button> <span hidden>${book.id}</span></li>`;
};

export default addBookToList;