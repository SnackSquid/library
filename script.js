let bookArray = [
    {
        title: 'The Hobbit',
        author: 'JRR Tolkein',
        pages: '300',
        read: 'yes'
    }
];
let bookCount = 0;

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function addBookToLibrary() {
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;
    const read = document.querySelector('input[name="read"]:checked').value;
    const form = document.querySelector('form');

    const newBook = new Book(title, author, pages, read);

    bookArray.push(newBook);
    makeCard();
    form.reset();
}

function makeCard() {
    const grid = document.querySelector('.bookGrid')

    for (let i = bookCount; i < bookArray.length; i++) {
        const div = document.createElement('div');
        const title = document.createElement('h4');
        const author = document.createElement('h4');
        const pages = document.createElement('p');
        const read = document.createElement('p');

        for (let j = 0; j < 3; j++) {
            title.textContent = bookArray[i].title;
            author.textContent = bookArray[i].author;
            pages.textContent = bookArray[i].pages;
            read.textContent = bookArray[i].read;

            div.classList = 'card';
            div.appendChild(title);
            div.appendChild(author);
            div.appendChild(pages);
            div.appendChild(read);
            grid.appendChild(div);
        }
        bookCount++;
    }
}


function removeCard() {

}

function displayCards() {
    
}


makeCard();
const submit = document.querySelector('#submit');
submit.addEventListener('click', addBookToLibrary);

