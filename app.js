// Global Query Selectors
import getBooks from './modules/getbooks.js';
import Book from './modules/book.js';
import removeBook from './modules/remove_books.js';
import addBookToList from './modules/add_book.js';
import { DateTime } from './modules/luxon.min.js';
import addBookToLocalStorage from './modules/local_storage.js';

const bookContainer = document.querySelector('.book-container');

// Function to show Books in UI
const displayBooks = () => {
  const books = getBooks();
  books.forEach((book) => {
    addBookToList(book);
  });
};

// Event for Displaying Books in UI
document.addEventListener('DOMContentLoaded', displayBooks);

// Add event to Book list buttons
bookContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('remove')) {
    const currentBook = e.target.closest('.book');
    currentBook.remove();
    const id = currentBook.querySelector('span').textContent;
    removeBook(Number(id));
  }
});

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const titleInput = document.querySelector('.title');
  const authorInput = document.querySelector('.author');

  // Validate inputs
  if (titleInput.value.length > 0 && authorInput.value.length > 0) {
    const newBook = new Book(titleInput.value, authorInput.value);
    addBookToList(newBook);
    addBookToLocalStorage(newBook);
    titleInput.value = '';
    authorInput.value = '';
    titleInput.focus();
  }
});

const list = document.querySelector('.list');
const contact = document.querySelector('.contact');
const add = document.querySelector('.add');

const bookSection = document.querySelector('#book-section');
const contactSection = document.querySelector('#contact-info');
const showSection = document.querySelector('#show-section');

list.addEventListener('click', () => {
  bookSection.classList.add('active');
  contactSection.classList.add('active');
  showSection.classList.remove('active');
  list.classList.add('blue');
  add.classList.remove('blue');
  contact.classList.remove('blue');
});

add.addEventListener('click', () => {
  contactSection.classList.add('active');
  showSection.classList.add('active');
  bookSection.classList.remove('active');
  add.classList.add('blue');
  contact.classList.remove('blue');
  list.classList.remove('blue');
});

contact.addEventListener('click', () => {
  bookSection.classList.add('active');
  showSection.classList.add('active');
  contactSection.classList.remove('active');
  contact.classList.add('blue');
  list.classList.remove('blue');
  add.classList.remove('blue');
});

const date = document.querySelector('.date-now');

date.innerHTML = DateTime.now().toFormat('MMMM dd, yyyy hh:mm:ss a');
