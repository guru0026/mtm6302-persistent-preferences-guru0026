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
    shoppingList.appendChild(shoppingItem);
}

const radioLight = document.getElementById(`inlineRadio1`);
const radioDark = document.getElementById(`inlineRadio2`);
const radioBlue = document.getElementById(`inlineRadio3`);

radio1.addEventListener("change", function () {
    if (radioBlue.checked) {
        shoppingList.classList.add("")
    }
})