var ordersList = document.getElementById("orders-list");
var ingredients = document.getElementById("ingredients");
var ingSearch = document.getElementById("ing-search");
var ingSearchError = document.getElementById("ing-search-error");
var makeFoodButton = document.getElementById("make-food");
var stock = 25;
var maxStorage = 25;
var stockDisplay = document.getElementById("stock");
var maxDisplay = document.getElementById("max-storage");
var customers = 0;
var maxCustomers = 3;

const currentIng = [];

const ingredientsList = {
    bread: "🍞",
    egg: "🥚",
    flour: "🌾",
    lettuce: "🥬",
    meat: "🥩",
    milk: "🥛",
    potato: "🥔",
    rice: "🍚",
};

const foodList = [
    {emoji: "🍔", ing: "🍞🥬🧀🥩🍞", unlocked: false},
    {emoji: "🌭", ing: "🍞🥩", unlocked: false},
    {emoji: "🥞", ing: "🌾🥚", unlocked: true},
    {emoji: "🍙", ing: "🍚", unlocked: true},
];

function findIng() {
    if (ingredientsList[ingSearch.value.toLowerCase()]) {
        return ingredientsList[ingSearch.value.toLowerCase()];
    } else {
        return null;
    };
};

function makeFood() {
    for (let i = 0; i < foodList.length - 1; i++) {
        if (ingredients.innerHTML == foodList[i]["ing"]) {
            ingredients.innerHTML = foodList[i]["emoji"];
            break;
        } else {
            for (let i2 = 0; i2 < ingSearch.length - 1; i2++;) {
                for (let i3 = 0; i3 < foodList[i]["ing"]; i3++) {
                    if (ingSearch.charAt(i2) == foodList[i]["ing"].charAt(i3)) {
                        currentIng.push(true);
                    };
                };
            };
            if (currentIng.length == foodList[i]["ing"].length) {
                ingredients.innerHTML = foodList[i]["emoji"];
                break;
            };
        };
    };
};

ingSearch.onkeydown = function(e) {
    if (e.key == "Enter") {
        let ing = findIng();
        if (ing != null) {
            if (ingredients.innerHTML == "Empty") {
                ingredients.innerHTML = "";
                makeFoodButton.disabled = false;
            };
            ingSearch.value = "";
            ingSearch.blur();
            ingredients.innerHTML = ingredients.innerHTML + ing;
        } else {
            ingSearchError.innerHTML = "Could not find ingredient \"" + ingSearch.value + "\"!";
            ingSearchError.style.visibility = "visible";
            setTimeout(function() {ingSearchError.style.visibility = "hidden"; ingSearchError.innerHTML = "Could not find ingredient \"\"!";}, 2500);
        };
    };
};
makeFood.onclick = makeFood;
setInterval(function() {
    if (customers < maxCustomers) {
        customers++;
    };
}, 15000);
