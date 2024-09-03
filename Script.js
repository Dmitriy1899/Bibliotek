const books = JSON.parse(localStorage.getItem("books")) || [];

const booklist = document.querySelector('.b1m')

function displayBooks(){
    booklist.innerHTML = ''
    books.forEach(displayBook)
}

function displayBook(book){
    const i = books.indexOf(book);
    booklist.innerHTML += `
    <div class="bk">
    <div class="obl">
        <img src="./img" alt="Обложка">
    </div>
    <div class = "bk1">
        <h2><b>Название книги:</b> ${book.title}</h2>
        <p><b>Автор:</b> ${book.author}</p>
        <p><b>Жанр книги:</b> ${book.ganre}</p>
        <p><b>Год издания:</b> ${book.year}</p>
        <p><b>Статус прочтения:</b> ${book.status}</p>
    </div>
        <div class="bk2">
            <button id="h1b3" onclick="red(${i})">Редактировать книгу</button>
            <button id="h1b2" onclick="del(${i})">Удалить книгу</button>
        </div>
    </div>`
}

function book(){
    const book = {}
    book.title = document.getElementById('ff2b1').value;
    book.author = document.getElementById('ff3b1').value;
    book.ganre = document.getElementById('ff4b1').value;
    book.year = document.getElementById('ff5b1').value;
    book.status = document.getElementById('ff6b1').value;
    books.push(book);
    displayBooks();
    return false;
}
function dbook(){
    books.pop(book);
    displayBooks();
}
function del(i){
    books.splice(i, 1);
    displayBooks();
}
function delall(){
    books.splice(0);
    displayBooks();
}
function red(i){
    book.title = null;
    author = null;
    ganre = null;
    year = null;
    status = null;
    displayBooks()
}