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
    {emoji: "🍔", ing: "🍞🥬🧀🥩🍞", profit: 7.5, unlocked: false},
    {emoji: "🌭", ing: "🍞🥩", profit: 3, unlocked: false},
    {emoji: "🥞", ing: "🌾🥚", profit: 3, unlocked: true},
    {emoji: "🍙", ing: "🍚", profit: 1.5, unlocked: true},
];

function randomFood() {
    let randomItem = Math.floor(Math.random() * (foodList.length - 1))
    if (randomItem["unlocked"] == true) {
        return foodList[randomItem];
    } else {
        return foodList[foodList.length - 1];
    };
};

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
                for (let i3 = 0; i3 < foodList[i]["ing"].length - 1; i3++) {
                    if (ingSearch.charAt(i2) == foodList[i]["ing"].charAt(i3)) {
                        currentIng.push(true);
                    };
                };
            };
            if (currentIng.length == foodList[i]["ing"].length) {
                ingredients.innerHTML = foodList[i]["emoji"];
                currentIng.length = 0;
                break;
            };
        };
    };
};

ingSearch.onkeydown = function(e) {
    if (e.key == "Enter") {
        let ing = findIng();
        if (ing != null && stock > 0) {
            if (ingredients.innerHTML == "Empty") {
                ingredients.innerHTML = "";
                makeFoodButton.disabled = false;
            };
            ingSearch.value = "";
            ingSearch.blur();
            ingredients.innerHTML = ingredients.innerHTML + ing;
            stock -= 1;
        } else if (ing != null && stock < 1) {
            ingSearchError.innerHTML = "You don't have enough ingredients!";
            ingSearchError.style.visibility = "visible";
            setTimeout(function() {ingSearchError.style.visibility = "hidden"; ingSearchError.innerHTML = "";}, 2500);
        } else {
            ingSearchError.innerHTML = "Could not find ingredient \"" + ingSearch.value + "\"!";
            ingSearchError.style.visibility = "visible";
            setTimeout(function() {ingSearchError.style.visibility = "hidden"; ingSearchError.innerHTML = "";}, 2500);
        };
    };
};
makeFood.onclick = makeFood;
setInterval(function() {
    const customerNames = [
        "Nunners", "Kayleigh", "Lianna", "Skylar", "Yeen Yeen", "Jin", "Jaelle", "Chelsey", "Ethan", "Anton", "Jeanne", "Aya", "Samantha",
        "Mr. Wedgehead", "Wide Racoon", "Albert", "War Noodle", "The Sun", "Princess Sherk", "Patricia", "Dummy", "Jules", "Zack",
        "Azalea", "Malo", "Billy Bob Joe",
        "Jack", "Holly",
        "Tae Hanazono", "Michelle",
        "Nene Yashiro", "Hanako", "Kou Minamoto", "Aoi Akane", "Akane Aoi", "Teru Minamoto", "Lemon Yamabuki", "Sousuke Mitsuba", "Tsukasa", "Sakura Nanamine", "Natsuhiko Hyuuga", "Yako", "Tsuchigomori",
    ];
    if (customers < maxCustomers) {
        customers++;
        let customer = document.createElement("li");
        let customerName = customerNames[Math.floor(Math.random() * (foodList.length - 1))];
        customer.innerHTML = "1 " + randomFood()["emoji"] + " ~ " + customerName;
        orderList.appendChild(customer);
    };
}, 15000);
