const shoppingList = document.getElementById(`shoppinglist`);
const shoppingItems = [
    "Milk",
    "Eggs",
    "Bread",
    "Yogurt",
    "Cereal"
];

const listRow = document.querySelectorAll(`row`);

for (let i = 0; i < shoppingItems.length; i++) {
    const shoppingItem = document.createElement("li");
    shoppingItem.textContent = shoppingItems[i];
    shoppingItem.classList.add("list-group-item")
    shoppingList.appendChild(shoppingItem);
}

const light = document.getElementById(`inlineRadio1`);
const dark = document.getElementById(`inlineRadio2`);
const blue = document.getElementById(`inlineRadio3`);
const html = document.querySelector(`html`);

light.addEventListener("change", function () {
    if (light.checked) {
        html.setAttribute("data-bs-theme","light");
    }
});

dark.addEventListener("change", function () {
    if (dark.checked) {
        html.setAttribute("data-bs-theme","dark");
    }
});

blue.addEventListener("change", function () {
    if (blue.checked) {
        html.setAttribute("data-bs-theme","blue");
    }
});

const checkNumber = document.getElementById(`inlineCheckbox1`);
const checkCheckbox = document.getElementById(`inlineCheckbox2`);
const checkBadge = document.getElementById(`inlineCheckbox3`);
let span = document.createElement("span");

checkNumber.addEventListener("change", function () {
    if (checkNumber.checked) {
        shoppingList.classList.add("list-group-numbered");
        const isChecked = checkbox.checked;
        const key = checkbox.id;
        localStorage.setItem(key, isChecked);
    } else {
        shoppingList.classList.remove("list-group-numbered")
    }
});

checkCheckbox.addEventListener("change", function () {
    if (checkCheckbox.checked) {
        shoppingList.classList.add("list-group-flush");
        const isChecked = checkbox.checked;
        const key = checkbox.id;
        localStorage.setItem(key, isChecked);
    } else {
        shoppingList.classList.remove("list-group-flush")
    }
});

checkBadge.addEventListener("change", function () {
    if (checkBadge.checked) {
        // span.classList.add("badge bg-primary rounded-pill");
        // span.textContent = "Span text";
        // shoppingItem.appendChild(span);
        shoppingList.classList.add("list-group-horizontal");
        const isChecked = checkbox.checked;
        const key = checkbox.id;
        localStorage.setItem(key, isChecked);
    } else {
        shoppingList.classList.remove("list-group-horizontal")
    }
});