// // Dropdown menu
// function dropDownToggle() {
//     document.getElementById("recipesDropdown").classList.toggle("show");
// }

// // Close the dropdown menu if the user clicks outside of it
// window.onclick = function (event) {
//     if (!event.target.matches('.dropbtn')) {
//         let dropdowns = document.getElementsByClassName("dropdown-content");
//         let i;
//         for (i = 0; i < dropdowns.length; i++) {
//             let openDropdown = dropdowns[i];
//             if (openDropdown.classList.contains('show')) {
//                 openDropdown.classList.remove('show');
//             }
//         }
//     }
// }

// DOM Variables
const filter = document.querySelector("#filter");
const card = document.querySelectorAll(".card")

// Load all event listeners
loadEventListeners();

function loadEventListeners() {
    // Filter tasks
    // filter.addEventListener("keyup", filterTasks);
    card.addEventListener("click", writeSth);
}

function whiteSth() {
    console.log(card.values);
}




// function filterTasks(e) {
//     const text = e.target.value.toLowerCase();
//     console.log(text);
//     // quertselector returns node list and that is why we can use foreach loop
//     document.querySelectorAll(".card").forEach(function (task) {
//         const item = task.firstChild.textContent;
//         if (item.toLowerCase().indexOf(text) != -1) {
//             card.style.display = "block";
//         } else {
//             card.style.display = "none";
//         }
//     });
// }