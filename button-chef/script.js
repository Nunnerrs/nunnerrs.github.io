var ordersList = document.getElementById("orders-list");
var ingredients = document.getElementById("ingredients");
var ingSearch = document.getElementById("ing-search");
var ingSearchError = document.getElementById("ing-search-error");
var makeFoodButton = document.getElementById("make-food");
var customers = 0;
var maxCustomers = 3;

const ingredientsList = {
    bread: "🍞",
    flour: "🌾",
    lettuce: "🥬",
    milk: "🥛",
    potato: "🥔",
    rice: "🍚",
};

const foodList = {
    rice: [],
}

function findIng() {
    if (ingredientsList[ingSearch.value]) {
        return ingredientsList[ingSearch.value];
    } else {
        return null;
    };
};

function makeFood() {

};

ingSearch.onkeydown = function(e) {
    if (e.key == "Enter") {
        let ing = findIng();
        if (ing != null) {
            if (ingredients.innerHTML == "Empty") {
                ingredients.innerHTML = "";

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
makeFood.onclick = 
setInterval(function() {
    if (customers < maxCustomers) {
        customers++;
    };
}, 15000);