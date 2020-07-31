
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
    <div class="card">
    <a href="author01.html" class="a-header">
        <img class="card-img-top" src="${book.img}" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">${book.title}</h5>
            <p>${book.author}</p>
        </div>
    </a>
    </div>
    
    `;

    layoutRoot.appendChild(bookDiv);
}

function addCategory(layoutRoot, books, category) {
    console.log(layoutRoot);
    // Get books of the current category
    const categoryBooks = books.filter(b => b.category === category);

    // Create root for current category
    const categoryRoot = document.createElement('div');
    categoryRoot.className = "container";
    categoryRoot.id = `${category.toLowerCase()}`;
    layoutRoot.appendChild(categoryRoot);

    const hrDotted = categoryRoot.appendChild(document.createElement("hr"));
    hrDotted.className = "dotted";

    // Add category header
    const header = document.createElement('h2');
    header.className = "container";
    header.id = categoryRoot.id
    header.innerText = category;
    categoryRoot.appendChild(header);

    // Add Category Body
    const categoryBody = document.createElement('div');
    categoryBody.className = "blog-grid container";
    categoryRoot.appendChild(categoryBody);

    // Add category books
    categoryBooks.forEach(book => addBook(categoryBody, book));
}


function addNavBar(navBarRoot, categories) {
    categories.forEach(category => {
        const item = document.createElement('a');

        item.text = category;
        item.href = `books.html#${category.toLowerCase()}`;
        item.className = "dropdown-item";
        navBarRoot.appendChild(item);
    });
}

window.onload = () => {
    const layoutRoot = document.getElementById('books-page');
    const navBarRoot = document.getElementById('navbarDropdownCategories');
    console.log(navBarRoot);

    loadJSON('books.json', data => {
        const books = JSON.parse(data);
        const categories = new Set(books.map(b => b.category));

        addNavBar(navBarRoot, categories);
        if (layoutRoot) {
            categories.forEach(category => {
                addCategory(layoutRoot, books, category);
            });
        }
    });
};