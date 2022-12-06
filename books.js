const dataContainer = document.querySelector('.dataContainer');
const formSubmision = document.querySelector('.formSubmission');
const titleInput = document.querySelector('.title');
const authorInput = document.querySelector('.author');

const books = JSON.parse(localStorage.getItem('books')) || [];

const addBooks = (title, author) => {
  books.push({
    title,
    author,
  });

  localStorage.setItem('books', JSON.stringify(books));
  return { title, author };
};

const displayBooks = ({ title, author }) => {
  const elementContainer = document.createElement('div');
  elementContainer.classList.add('element-container');
  const titleContainer = document.createElement('p');
  const authorContainer = document.createElement('p');
  const removeButton = document.createElement('button');
  removeButton.classList.add('removebtn');
  removeButton.type = 'button';

  titleContainer.innerText = `${title} by`;
  authorContainer.innerText = author;
  removeButton.innerText = 'Remove';
  removeButton.onclick = () => {
    dataContainer.removeChild(elementContainer);
    const index = '';
    const ind = books.indexOf(books[index]);
    books.splice(ind, 1);
    localStorage.setItem('books', JSON.stringify(books));
  };
  elementContainer.append(titleContainer, authorContainer, removeButton);
  dataContainer.appendChild(elementContainer);
};

books.forEach(displayBooks);

formSubmision.onsubmit = (e) => {
  e.preventDefault();

  const newBook = addBooks(
    titleInput.value,
    authorInput.value,
  );
  displayBooks(newBook);

  titleInput.value = '';
  authorInput.value = '';
};
