let bookArray = [
    {
        title: 'The Hobbit',
        author: 'JRR Tolkein',
        pages: 304,
        read: true,
        index: 0
    },
    {
        title: 'The Hobbit2',
        author: 'JRR Tolkein',
        pages: 304,
        read: true,
        index: 1
    },
    {
        title: 'The Hobbit3',
        author: 'JRR Tolkein',
        pages: 304,
        read: true,
        index: 2
    }
];

let bookCount = 0;

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

Book.prototype.changeRead = function() {
    
    if (this.read === true) this.read = false;
    else this.read = true;
}

function makeSlider() {
    const div = document.createElement('div');
    const title = document.createElement('p')
    const label = document.createElement('label');
    const input = document.createElement('input');
    const span = document.createElement('span');

    label.classList.add('switch');
    title.textContent = 'Read?'
    span.classList.add('slider');
    input.type = 'checkbox';
    
    div.classList.add('toggle')

    label.appendChild(input);
    label.appendChild(span);
    div.appendChild(label);

    return input;
}

function makeCard() {
    const grid = document.querySelector('.bookGrid');
    // loop through the array of books, starting at the current book count
    // so the same books aren't created each time
    for (let i = bookCount; i < bookArray.length; i++) {
        // get the book we want from the array
        const book = bookArray[i];
        // create all the html elements needed to render the book
        const div = document.createElement('div');
        const closeBook = document.createElement('button');
        const title = document.createElement('h4');
        const author = document.createElement('h5');
        const divider = document.createElement('hr');
        const pages = document.createElement('p');
        const read = document.createElement('p');
        console.log(slider)
        const slider = makeSlider();
        // loop through each element of the book, adding the information to the
        // created book card
        for (let j = 0; j < 3; j++) {
            // get each field of the book object and create a close button
            title.textContent = book.title;
            author.textContent = `by ${bookauthor}`;
            pages.textContent = `${book.pages} pages long`;
            read.textContent = book.read;
            closeBook.innerHTML = '&times;';

            if (book.read === true) {
                slider.value = 'true';
                slider.checked = true;
            }
            else {
                slider.value = 'false';
            }

            // add the card to the DOM
            div.classList = 'card';
            closeBook.classList = 'close';
            div.appendChild(closeBook);
            div.appendChild(title);
            div.appendChild(author);
            div.appendChild(divider);
            div.appendChild(pages);
            div.appendChild(read);
            div.appendChild(slider);

            grid.appendChild(div);
        }
        
        // iterate the book count to make sure we're not rendering the same books every time
        bookCount++;
    }
}

function makeAddButtonCard() {
    const grid = document.querySelector('.bookGrid');
    const div = document.createElement('div');
    const button = document.createElement('button');

    button.textContent = 'Click to Add New Book'
    div.classList = 'card';
    button.id = 'addBook';
    div.appendChild(button);
    grid.appendChild(div);
    const openInput = document.querySelector('#addBook');
    openInput.addEventListener('click', showInput);
}

function addBookToLibrary(click) {
    click.preventDefault();
    // select the entered values from the input fields
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;
    const read = document.querySelector('input[name="read"]:checked').value;
    const form = document.querySelector('form');
    // create the new book object
    const newBook = new Book(title, author, pages, read);
    // add book to the array
    bookArray.push(newBook);
    // make the card and fill the values
    makeCard();
    // add event listener to new book card
    const closeBook = document.querySelectorAll('.close');
    closeBook.forEach(button => button.addEventListener('click', removeBookFromLibrary, {capture: false}));
    // reset the form
    form.reset();
}

function removeBookFromLibrary(click) {
    // stop bubbling
    click.stopPropagation();
    // select the card div
    const card = this.parentElement;
    // get the current card index within the grid element
    const cardNumber = Array.from(card.parentElement.children).indexOf(card);
    // remove the book from the array using the index of the current card
    bookArray.splice(cardNumber, 1)
    // delete a book count to prevent recreating already displayed books
    bookCount--;
    // remove the display from the DOM
    card.remove()
}

function hideInput(click) {
    click.preventDefault();
    const inputDiv = document.querySelector('.inputWrapper');
    inputDiv.style.display = 'none';
    makeAddButtonCard();
}

function showInput(click) {
    click.preventDefault();
    click.stopPropagation(); 
    const inputDiv = document.querySelector('.inputWrapper');
    inputDiv.style.display = 'block';
    const card = this.parentElement;
    card.remove()
}

function slider(click) {
    
    // select the card div
    const toggle = this.parentElement;
    const card = toggle.parentElement;
    const checkbox = document.querySelector('.switch')
    // get the current card index within the grid element
    const cardNumber = Array.from(card.parentElement.children).indexOf(card);
    const currentBook = bookArray[cardNumber];
    // callfunction
    currentBook.changeRead;
    console.log(currentBook.read)
}

makeCard();

const submit = document.querySelector('#submit');
submit.addEventListener('click', addBookToLibrary);

const closeBook = document.querySelectorAll('.close');
closeBook.forEach(button => button.addEventListener('click', removeBookFromLibrary, {capture: false}));

const slideButton = document.querySelectorAll('.switch');
slideButton.forEach(slideButton => slideButton.addEventListener('click', slider));

const closeInput = document.querySelector('#closeInput');
closeInput.addEventListener('click', hideInput);