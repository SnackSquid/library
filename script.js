let bookArray = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read

    this.info = () => `${title} by ${author}, ${pages} pages, ${read}.`
}

function addBookToLibrary() {
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;
    const read = document.querySelector('input[name="read"]:checked').value;

    const newBook = new Book(title, author, pages, read);

    bookArray.push(newBook);
    console.log(bookArray)
}



const submit = document.querySelector('#submit');
submit.addEventListener('click', addBookToLibrary);

