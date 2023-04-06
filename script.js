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


const light = document.getElementById(`light`);
const dark = document.getElementById(`dark`);
const blue = document.getElementById(`blue`);
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



function saveThemePreference() {
    const preference = {
      theme: document.querySelector('input[name="theme"]:checked').value
    };
    localStorage.setItem("themePreference", JSON.stringify(preference));
}

function applyThemePreference() {
    const preference = JSON.parse(localStorage.getItem("themePreference"));

    if (preference) {
        document.getElementById(preference.theme).checked = true;
        html.setAttribute("data-bs-theme", preference.theme.value);
    }
}
  

const checkNumber = document.getElementById(`inlineCheckbox1`);
const checkCheckbox = document.getElementById(`inlineCheckbox2`);
const checkBadge = document.getElementById(`inlineCheckbox3`);

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
        // const isChecked = checkbox.checked;
        // const key = checkbox.id;
        // localStorage.setItem(key, isChecked);
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
        shoppingList.classList.add("list-group-horizontal");
        const isChecked = checkbox.checked;
        const key = checkbox.id;
        localStorage.setItem(key, isChecked);
    } else {
        shoppingList.classList.remove("list-group-horizontal")
    }
});

const settings = JSON.parse(localstorage.getItem('settings')) || 'dark';