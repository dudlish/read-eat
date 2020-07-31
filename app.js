
// https://codepen.io/KryptoniteDove/post/load-json-file-locally-using-pure-javascript
function loadJSON(path, callback) {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType('application/json');
    xobj.open('GET', path, true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == '200') {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}

function addBook(layoutRoot, book) {
    const bookDiv = document.createElement('div');
    bookDiv.className = 'card';
    bookDiv.id = `book${book.id}`;

    bookDiv.innerHTML = `
    <a href="author01.html" class="a-header">
        <div class="card">
            <img class="card-img-top" src="${book.img}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${book.title}</h5>
                <p>${book.author}</p>
            </div>
        </div>
    </a>
    `;

    layoutRoot.appendChild(bookDiv);
}

window.onload = () => {
    const layoutRoot = document.getElementById('books-container');

    // const header = document.createElement('h1');
    // header.innerText = "My Books";
    // layoutRoot.appendChild(header);

    loadJSON('books.json', data => {
        const books = JSON.parse(data);
        console.log(books);
        books.forEach(book => {
            addBook(layoutRoot, book);
        });
    });
};



// DOM Variables
// const filter = document.querySelector("#filter");
// const card = document.querySelectorAll(".card");

// Event Listeners
// aLink.addEventListener("click", check);
// cardA.addEventListener("click", myFunc);

// filter.addEventListener("keyup", filterBooks);

// function myFunc() {
//     console.log(cardA.length);
// }

// document.querySelectorAll('.card').forEach(item => {
//     item.addEventListener('click', event => {
//         console.log(item);
//     })
// })

// function filterBooks(e) {
//     const text = e.target.value.toLowerCase();
//     console.log(text);


    // queryselector returns node list and that is why we can use foreach loop
    // document.querySelectorAll(".card").forEach(function (book) {
    //     const item = book.firstChild.textContent;

    //     if (item.toLowerCase().indexOf(text) != -1) {
    //         card.style.display = "block";
    //     } else {
    //         card.style.display = "none";
    //     }
    // });
// }