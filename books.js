/* eslint-disable no-restricted-globals */
const dataContainer = document.querySelector('.dataContainer');
const formSubmision = document.querySelector('.formSubmission');
const titleInput = document.querySelector('.title');
const authorInput = document.querySelector('.author');
class BookShelv {
  books = JSON.parse(localStorage.getItem('books')) || [];

  addBooks() {
    const addedBook = {
      title: titleInput.value,
      author: authorInput.value,
    };
    this.books.push(addedBook);

    localStorage.setItem('books', JSON.stringify(this.books));
  }

  displayBooks() {
    this.books.forEach((hold) => {
      const elementContainer = document.createElement('div');
      elementContainer.classList.add('element-container');
      const infoContainer = document.createElement('p');
      const removeButton = document.createElement('button');
      removeButton.classList.add('removebtn');
      removeButton.type = 'button';

      infoContainer.innerText = `"${hold.title}" by ${hold.author}`;
      removeButton.innerText = 'Remove';
      elementContainer.append(infoContainer, removeButton);
      dataContainer.appendChild(elementContainer);
    });
  }

  removeBook(removeButton, index) {
    dataContainer.removeChild(removeButton.parentElement);
    this.books.splice(index, 1);
    localStorage.setItem('books', JSON.stringify(this.books));
    location.reload();
  }
}

const bookshelv = new BookShelv();
bookshelv.displayBooks();
const removeBtns = document.querySelectorAll('.removebtn');
removeBtns.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    bookshelv.removeBook(btn, index);
  });
});

if (dataContainer.childElementCount === 0) {
  dataContainer.classList.add('hidden');
}

formSubmision.addEventListener('submit', (e) => {
  e.preventDefault();
  bookshelv.addBooks();
  location.reload();

  titleInput.value = '';
  authorInput.value = '';
});
