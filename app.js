// DOM Variables
// const filter = document.querySelector("#filter");
const aLink = document.querySelector("a");

// Event Listeners
aLink.addEventListener("click", check);

// filter.addEventListener("keyup", filterTasks);

function check() {
    console.log("hi");
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