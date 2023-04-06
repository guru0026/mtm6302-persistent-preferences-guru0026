const shoppingList = document.getElementById(`shoppinglist`);
const shoppingItems = [
    "Milk",
    "Eggs",
    "Bread",
    "Yogurt",
    "Cereal"
];

for (let i = 0; i < shoppingItems.length; i++) {
    const shoppingItem = document.createElement("li");
    shoppingItem.textContent = shoppingItems[i];
    shoppingItem.classList.add("list-group-item")
    shoppingList.appendChild(shoppingItem);
}

const checkNumber = document.getElementById(`inlineCheckbox1`);
const checkCheckbox = document.getElementById(`inlineCheckbox2`);
const checkBadge = document.getElementById(`inlineCheckbox3`);

checkNumber.addEventListener("change", function () {
    if (checkNumber.checked) {
        shoppingList.classList.add("list-group-numbered")
    } else {
        shoppingList.classList.remove("list-group-numbered")
    }
});

checkCheckbox.addEventListener("change", function () {
    if (checkCheckbox.checked) {
        shoppingList.classList.add("list-group-numbered")
    } else {
        shoppingList.classList.remove("list-group-numbered")
    }
});

checkBadge.addEventListener("change", function () {
    if (checkBadge.checked) {
        shoppingList.classList.add("list-group-numbered")
    } else {
        shoppingList.classList.remove("list-group-numbered")
    }
});