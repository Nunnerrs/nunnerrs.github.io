var v = "v" + "1.3.5.5";
var version = document.getElementById("version");
version.innerHTML = v;
var money = 10;
var moneyDisplay = document.getElementById("money");
if (localStorage.getItem("money") != null) {
    money = Number(localStorage.getItem("money"));
};
moneyDisplay.innerHTML = money;
var notifContainer = document.getElementById("notif-container");
var ordersList = document.getElementById("orders-list");
var customers = 0;
var maxCustomers = 3;
if (localStorage.getItem("maxCustomers") != null) {
    maxCustomers = Number(localStorage.getItem("maxCustomers"));
};
var customerRate = 15000; // milliseconds
if (localStorage.getItem("customerRate") != null) {
    customerRate = Number(localStorage.getItem("customerRate"));
};
var ingredients = document.getElementById("ingredients");
var ingSearch = document.getElementById("ing-search");
var ingSearchError = document.getElementById("ing-search-error");
var makeFoodButton = document.getElementById("make-food");
var clearIng = document.getElementById("clear-ing");
var page = 0;
var recipeName = document.getElementById("recipe-name");
var recipeIng = document.getElementById("recipe-ing");
var pageL = document.getElementById("pageL");
var pageR = document.getElementById("pageR");
var stock = 25;
var stockDisplay = document.getElementById("stock");
if (localStorage.getItem("stock") != null) {
    stock = Number(localStorage.getItem("stock"));
};
stockDisplay.innerHTML = stock;
var storage = 25;
var storageDisplay = document.getElementById("max-storage");
if (localStorage.getItem("storage") != null) {
    storage = Number(localStorage.getItem("storage"));
};
storageDisplay.innerHTML = storage;
var buyStock5 = document.getElementById("buy-stock-5");
var buyStock10 = document.getElementById("buy-stock-10");
var buyStock20 = document.getElementById("buy-stock-20");
var buyStock50 = document.getElementById("buy-stock-50");
var buyRecipeButton = document.getElementById("buy-recipe");
var recipePrice = 25;
var buyStorage = document.getElementById("buy-storage");
var storagePrice = 15;
var buySeating = document.getElementById("buy-seating");
var seatingPrice = 30;
var buyAd = document.getElementById("buy-ad");
var adPrice = 45;
var saveButton = document.getElementById("save-button");
var eraseDataButton = document.getElementById("erase-data-button");

const customerNames = [
    "Nunners", "Kayleigh", "Lianna", "Skylar", "Yeen Yeen", "Jin", "Jaelle", "Chelsey", "Ethan", "Anton", "Jeanne", "Aya", "Samantha",
    "Mr. Wedgehead", "Wide Racoon", "Albert", "Amongus", "War Noodle", "The Sun", "Princess Sherk", "Patricia", "Dummy", "Jules", "Zack",
    "Azalea", "Malo", "Billy Bob Joe",
    "Jack", "Holly",
    "Tae Hanazono", "Michelle", "Moca Aoba", "Nanami Hiromachi", "Kasumi Toyama", "Arisa Ichigaya", "Rimi Ushigome", "Kaoru Seta", "Sayo Hikawa", "Hina Hikawa", "Ran Mitake", "Himari Uehara", "Kokoro Tsurumaki", "Yukina Minato", "Lisa Imai", "Mashiro Kurata", "Rui Yashio", "CHU²", "LAYER", "LOCKE", "MASKING", "PAREO",
    "Nene Yashiro", "Hanako", "Kou Minamoto", "Aoi Akane", "Akane Aoi", "Teru Minamoto", "Lemon Yamabuki", "Sousuke Mitsuba", "Tsukasa", "Sakura Nanamine", "Natsuhiko Hyuuga", "Yako", "Tsuchigomori",
    "Evilyn", "b a c h a n", "Sebastian", "Mina", "Liam", "Valerie", "Karmynnah", "Colette",
];
const ingredientsList = {
    apple: "🍎",
    "🍎": "🍎",
    beans: "🫘",
    "🫘": "🫘",
    bread: "🍞",
    "🍞": "🍞",
    butter: "🧈",
    "🧈": "🧈",
    cheese: "🧀",
    "🧀": "🧀",
    chocolate: "🍫",
    "🍫": "🍫",
    cucumber: "🥒",
    "🥒": "🥒",
    egg: "🥚",
    "🥚": "🥚",
    fish: "🐟",
    "🐟": "🐟",
    flour: "🌾",
    "🌾": "🌾",
    ice: "🧊",
    "🧊": "🧊",
    lettuce: "🥬",
    "🥬": "🥬",
    meat: "🥩",
    "🥩": "🥩",
    milk: "🥛",
    "🥛": "🥛",
    noodle: "🍜",
    noodles: "🍜",
    "🍜": "🍜",
    onion: "🧅",
    "🧅": "🧅",
    potato: "🥔",
    "🥔": "🥔",
    rice: "🍚",
    "🍚": "🍚",
    shrimp: "🦐",
    "🦐": "🦐",
    tomato: "🍅",
    "🍅": "🍅",
    water: "💧",
    "💧": "💧",
};

// Profits are calculated by (# ing × 2)
const foodList = [ // {emoji: "", ing: "", ingList: "", name: "FOODNAME", profit: 1.5, unlocked: false},
    {emoji: "🍰", ing: "🌾🥚🧈🥛🧀", ingList: "Flour,Egg,Butter,Milk,Cheese", name: "Cheesecake", profit: 10, unlocked: false},
    {emoji: "🍔", ing: "🍞🥬🧀🥩🍞", ingList: "Bread,Lettuce,Cheese,Meat,Bread", name: "Burger", profit: 9.5, unlocked: false},
    {emoji: "🌯", ing: "🌾🫘🍚🥩🧅", ingList: "Flour,Beans,Rice,Meat,Onion", name: "Burrito", profit: 9.5, unlocked: false},
    {emoji: "🥪", ing: "🍞🧀🍅🥬🍞", ingList: "Bread,Cheese,Tomato,Lettuce,Bread", name: "Sandwich", profit: 9, unlocked: false},
    {emoji: "🍕", ing: "🍞🍅🧀🥩", ingList: "Bread,Tomato,Cheese,Meat", name: "Pizza", profit: 8.5, unlocked: false},
    {emoji: "🍲", ing: "💧🍜🥩🧅", ingList: "Water,Noodles,Meat,Onion", name: "Pho", profit: 8.5, unlocked: false},
    {emoji: "🥗", ing: "🥬🍅🥒🧅", ingList: "Lettuce,Tomato,Cucumber,Onion", name: "Salad", profit: 8, unlocked: false},
    {emoji: "🥧", ing: "🍎🌾🥚🧈", ingList: "Apple,Flour,Egg,Butter", name: "Apple Pie", profit: 8, unlocked: false},
    {emoji: "🌮", ing: "🌾🥩🥬🧅", ingList: "Flour,Meat,Lettuce,Onion", name: "Taco", profit: 7.5, unlocked: false},
    {emoji: "🧇", ing: "🌾🥚🧈", ingList: "Flour,Egg,Butter", name: "Waffles", profit: 6, unlocked: false},
    {emoji: "🍨", ing: "🧊🥛", ingList: "Ice,Milk", name: "Ice Cream", profit: 4.5, unlocked: false},
    {emoji: "🌭", ing: "🍞🥩", ingList: "Bread,Meat", name: "Hot Dog", profit: 4.5, unlocked: false},
    {emoji: "🥯", ing: "🍞🧀", ingList: "Bread,Cheese", name: "Bagel", profit: 4, unlocked: false},
    {emoji: "🍝", ing: "🍜🍅", ingList: "Noodles,Tomato", name: "Spaghetti", profit: 4.5, unlocked: false},
    {emoji: "🥐", ing: "🍞🧈", ingList: "Bread,Butter", name: "Croissant", profit: 4, unlocked: false},
    {emoji: "🥞", ing: "🌾🥚", ingList: "Flour,Egg", name: "Pancakes", profit: 4, unlocked: false},
    {emoji: "🍣", ing: "🍚🐟", ingList: "Rice,Fish", name: "Sushi", profit: 3.5, unlocked: false},
    {emoji: "🍪", ing: "🌾🍫", ingList: "Flour,Chocolate", name: "Cookie", profit: 2, unlocked: false},
    {emoji: "🍗", ing: "🥩", ingList: "Meat", name: "Chicken Leg", profit: 3.5, unlocked: false},
    {emoji: "🍧", ing: "🧊", ingList: "Ice", name: "Shaved Ice", profit: 3, unlocked: false},
    {emoji: "🍳", ing: "🥚", ingList: "Egg", name: "Fried Egg", profit: 3, unlocked: false},
    {emoji: "🥨", ing: "🍞", ingList: "Bread", name: "Pretzel", profit: 2.5, unlocked: false},
    {emoji: "🍤", ing: "🦐", ingList: "Shrimp", name: "Fried Shrimp", profit: 2.5, unlocked: false},
    {emoji: "🍟", ing: "🥔", ingList: "Potato", name: "French Fries", profit: 2, unlocked: true},
    {emoji: "🍙", ing: "🍚", ingList: "Rice", name: "Rice Ball", profit: 1.5, unlocked: true},
];
for (let i = 0; i < foodList.length - 2; i++) {
    let splitName = foodList[i]["name"].toLowerCase().split(" ");
    let name = "";
    for (let i2 = 0; i2 < splitName.length; i2++) {
        name = name + splitName[i2];
    };
    if (localStorage.getItem(name) != null) {
        if (localStorage.getItem(name) == "true" || localStorage.getItem(name) == true) {
            foodList[i]["unlocked"] = true;
        };
    };
};
//const currentIng = [];
const recipes = [...foodList].reverse();
const unlocked = [];
recipeName.innerHTML = recipes[page]["name"] + " " + (recipes[page]["unlocked"] == true ? "✅" : "❎") + "<br> Profit: $" + recipes[page]["profit"];
recipeIng.innerHTML = "";
let ing = recipes[page]["ingList"].split(",");
for (let i = 0; i < ing.length; i++) {
    recipeIng.innerHTML = recipeIng.innerHTML + "<li>" + ing[i] + "</li>";
};

function customer() {
    if (customers < maxCustomers) {
        customers++;
        let customer = document.createElement("li");
        let customerName = customerNames[Math.floor(Math.random() * customerNames.length)];
        let maxNames = customerNames.length;
        let names = 0;
        if (ordersList.innerHTML.match(customerName)) {
            while (ordersList.innerHTML.match(customerName) && names < maxNames) {
                customerName = customerNames[Math.floor(Math.random() * customerNames.length)];
                names++;
            };
            if (names >= maxNames) {
                customerName = customerNames[Math.floor(Math.random() * customerNames.length)];
            };
        };
        let order = randomFood();
        unlocked.length = 0;
        customer.innerHTML = order["emoji"] + " ~ $" + order["profit"] + " ~ " + customerName;
        customer.dataset.order = order;
        customer.dataset.name = customerName;
        let button = document.createElement("button");
        let gap = document.createElement("gap");
        gap.innerHTML = ".";
        customer.appendChild(gap);
        button.innerHTML = "Serve";
        button.classList.add("blue");
        button.onclick = function(){serveCustomer(order, customer)};
        customer.appendChild(button);
        ordersList.appendChild(customer);
    };
};

function randomFood() {
    for (let i = 0; i < foodList.length; i++) {
        if (foodList[i]["unlocked"] == true) {
            unlocked.push(foodList[i]);
        };
    };
    //unlocked.unshift(foodList[foodList.length - 1]);
    return unlocked[Math.floor(Math.random() * unlocked.length)];
};

function serveCustomer(order, customer) {
    if (ingredients.innerHTML == order["emoji"]) {
        customers -= 1;
        ingredients.innerHTML = "Empty";
        makeFoodButton.disabled = true;
        makeFoodButton.style.color = "rgb(150, 150, 150)";
        clearIng.disabled = true;
        clearIng.style.color = "rgb(150, 150, 150)";
        money += order["profit"];
        moneyDisplay.innerHTML = money;
        let unlockedAll = true;
        for (let i = 0; i < foodList.length - 1; i++) {
            if (foodList[i]["unlocked"] == false) {
                unlockedAll = false;
                break;
            };
        };
        let rng = Math.floor(Math.random() * 25);
        if (rng == 0 && unlockedAll == false) {
            unlockRecipe(false);
        } else if (rng >= 0 && rng < 10 && unlockedAll == true) {
            let tip = Math.round(order["profit"] / 2)
            if (customer.order["name"] != "Rice Ball" && rng >= 0 && rng <= 2) {
                tip += 0.5;
            };
            money += tip;
            moneyDisplay.innerHTML = money;
            let notif = document.createElement("p");
            notif.innerHTML = customer.dataset.name + " tipped you $" + tip + "!";
            notifContainer.appendChild(notif);
            setTimeout(function(){notif.remove()}, 5000);
        };
        customer.remove();
    };
};

function findIng() {
    if (ingredientsList[ingSearch.value.toLowerCase()]) {
        return ingredientsList[ingSearch.value.toLowerCase()];
    } else if (ingSeach.value == "⬆️⬆️⬇️⬇️⬅️➡️⬅️➡️🅱️🅰️") {
        return ingSeach.value;
    } else {
        return null;
    };
};

function addIng(e) {
    if (e.key == "Enter") {
        let ing = findIng();
        if (ing != null && stock > 0) {
            if (ing == "⬆️⬆️⬇️⬇️⬅️➡️⬅️➡️🅱️🅰️") {
                moneyDisplay.innerHTML = "∞";
                stockDisplay.innerHTML = "∞";
                let notif = document.createElement("p");
                notif.innerHTML = "HOW?!? YOU HACKER!!";
                notifContainer.appendChild(notif);
                setTimeout(function(){notif.remove()}, 7500);
                moneyDisplay.innerHTML = money;
                stockDisplay.innerHTML = stock;
                notif = document.createElement("p");
                notif.innerHTML = "jk you ain't getting that XD";
                notifContainer.appendChild(notif);
                setTimeout(function(){notif.remove()}, 5000);
            } else {
                if (ingredients.innerHTML == "Empty") {
                    ingredients.innerHTML = "";
                    makeFoodButton.disabled = false;
                    makeFoodButton.style.color = "rgb(0, 0, 0)";
                    clearIng.disabled = false;
                    clearIng.style.color = "rgb(0, 0, 0)";
                };
                ingSearch.value = "";
                if (window.orientation > 1) {
                    //ingSearch.blur();
                };
                ingredients.innerHTML = ingredients.innerHTML + ing;
                stock -= 1;
                stockDisplay.innerHTML = stock;
            };
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

function makeFood() {
    for (let i = 0; i < foodList.length; i++) {
        //console.log(ingredients.innerHTML + " " + foodList[i]["ing"]);
        if (ingredients.innerHTML == foodList[i]["ing"]) {
            ingredients.innerHTML = foodList[i]["emoji"];
            //console.log("found food: " + foodList[i]["emoji"]);
            break;
        /*} else {
            for (let i2 = 0; i2 < ingredients.innerHTML.length - 1; i2++) {
                for (let i3 = 0; i3 < foodList[i]["ing"].length - 1; i3++) {
                    if (ingredients.innerHTML.charAt(i2) == foodList[i]["ing"].charAt(i3)) {
                        currentIng.push("yes");
                        console.log(ingredients.innerHTML.charAt(i2) + " matches " + foodList[i]["ing"].charAt(i3));
                    } else {
                        console.log(ingredients.innerHTML.charAt(i2) + " doesn't match " + foodList[i]["ing"].charAt(i3));
                    };
                };
            };
            if (currentIng.length == foodList[i]["ing"].length) {
                ingredients.innerHTML = foodList[i]["emoji"];
                currentIng.length = 0;
                break;
            } else {
                //console.log(currentIng.toString());
            };*/
        };
    };
    if (ingredients.innerHTML == "🍫") {
        ingredients.innerHTML = "💝";
        let notif = document.createElement("p");
        notif.innerHTML = "Happy Valentines Day!";
        notifContainer.appendChild(notif);
        setTimeout(function(){notif.remove()}, 10000);
    };
    if (ingredients.innerHTML.match("🐶")) {
        ingredients.innerHTML = "🍖";
        ingSearchError.innerHTML = "ｗｈａｔ　ｈａｖｅ　ｙｏｕ　ｄｏｎｅ　ｙｏｕ　ｍｏｎｓｔｅｒ";
        setTimeout(function(){ingSearchError.innerHTML = ""}, 5000);
    };
};

function clear() {
    if (stock + ingredients.innerHTML.length < storage) {
        stock += ingredients.innerHTML.length;
        stockDisplay.innerHTML = stock;
    } else {
        stock = storage;
        stockDisplay.innerHTML = stock;
    };
    ingredients.innerHTML = "Empty"
    makeFoodButton.disabled = true;
    makeFoodButton.style.color = "rgb(150, 150, 150)";
    clearIng.disabled = true;
    clearIng.style.color = "rgb(150, 150, 150)";
};

function backPage() {
    if (page > 0) {
        page -= 1;
        recipeName.innerHTML = recipes[page]["name"] + " " + (recipes[page]["unlocked"] == true ? "✅" : "❎") + "<br> Profit: $" + recipes[page]["profit"];
        recipeIng.innerHTML = "";
        let ing = recipes[page]["ingList"].split(",");
        for (let i = 0; i < ing.length; i++) {
            recipeIng.innerHTML = recipeIng.innerHTML + "<li>" + ing[i] + "</li>";
        };
    };
};

function nextPage() {
    if (page < recipes.length - 1) {
        page++;
        recipeName.innerHTML = recipes[page]["name"] + " " + (recipes[page]["unlocked"] == true ? "✅" : "❎") + "<br> Profit: $" + recipes[page]["profit"];
        recipeIng.innerHTML = "";
        let ing = recipes[page]["ingList"].split(",");
        for (let i = 0; i < ing.length; i++) {
            recipeIng.innerHTML = recipeIng.innerHTML + "<li>" + ing[i] + "</li>";
        };
    };
};

function addStock(ing) {
    let confirmation = confirm("Buy " + ing + " ingredients for $" + ing/2 + "?");
    if (confirmation == true && money >= ing/2 && stock + ing < storage) {
        money -= ing/2;
        moneyDisplay.innerHTML = money;
        stock += ing;
        stockDisplay.innerHTML = stock;
    } else if (confirmation == true && money >= ing/2 && stock == storage) {
        alert("You're already at max stock! (no money was lost)");
    } else if (confirmation == true && money >= ing/2 && stock + ing > storage) {
        let confirmation = confirm("Are you sure? Buying this will set your stock to " + storage + ", not " + (stock + ing) + "!");
        if (confirmation == true) {
            money -= ing/2;
            moneyDisplay.innerHTML = money;
            stock = storage;
            stockDisplay.innerHTML = stock;
        };
    } else if (confirmation == true && money < ing/2) {
        alert("You don't have enough money to buy this! (Price: " + ing/2 + ")");
    };
};

function addStorage() {
    let confirmation = confirm("Buy 5 extra storage for $" + storagePrice + "?");
    if (confirmation == true && money >= storagePrice) {
        money -= storagePrice;
        moneyDisplay.innerHTML = money;
        storage += 5;
        storageDisplay.innerHTML = storage;
    } else if (confirmation == true && money < storagePrice) {
        alert("You don't have enough money to buy this! (Price: " + storagePrice + ")");
    };
};

function unlockRecipe(loseMoney) {
    let paid = false
    if (loseMoney == true && money >= recipePrice) {
        money -= recipePrice;
        moneyDisplay.innerHTML = money;
        paid = true
    } else {
        paid = true;
    };
    if (paid == true) {
        let unlocked = false;
        for (let i = 0; i < foodList.length - 1; i++) {
            let f = Math.floor(Math.random() * foodList.length);
            if (foodList[f]["unlocked"] == false) {
                foodList[f]["unlocked"] = true;
                unlocked = true;
                saveData();
                let notif = document.createElement("p");
                notif.innerHTML = "You unlocked the recipe for " + foodList[f]["name"] + "!";
                notifContainer.appendChild(notif);
                setTimeout(function(){notif.remove()}, 5000);
                break;
            };
        };
        if (unlocked == false) {
            alert("You have already unlocked all " + foodList.length + " recipes!");
        };
    } else {
        alert("You don't have enough money to buy this! (Price: " + recipePrice + ")");
    };
};

function buyRecipe() {
    let confirmation = confirm("Buy a random recipe for $" + recipePrice + "?");
    if (confirmation == true) {
        unlockRecipe(true);
    };
};

function addSeating() {
    let confirmation = confirm("Buy seating (+ 1 max customers) for $" + seatingPrice + "?");
    if (confirmation == true && money >= seatingPrice) {
        money -= seatingPrice;
        moneyDisplay.innerHTML = money;
        maxCustomers++;
    } else if (confirmation == true && money < seatingPrice) {
        alert("You don't have enough money to buy this! (Price: " + seatingPrice + ")");
    };
};

function addAd() {
    let confirmation = confirm("Buy ad (customers arrive faster) for $" + adPrice + "?");
    if (confirmation == true && money >= adPrice) {
        if (customerRate > 3000) {
            money -= adPrice;
            moneyDisplay.innerHTML = money;
            customerRate -= 3000;
        } else {
            let notif = document.createElement("p");
            notif.innerHTML = "You can't buy any more ads!";
            notifContainer.appendChild(notif);
            setTimeout(function(){notif.remove()}, 5000);
        };
    } else if (confirmation == true && money < adPrice) {
        alert("You don't have enough money to buy this! (Price: " + adPrice + ")");
    };
};

function saveData() {
    localStorage.setItem("money", money);
    localStorage.setItem("maxCustomers", maxCustomers);
    localStorage.setItem("stock", stock);
    localStorage.setItem("storage", storage);
    for (let i = 0; i < foodList.length - 2; i++) {
        let splitName = foodList[i]["name"].toLowerCase().split(" ");
        let name = "";
        for (let i2 = 0; i2 < splitName.length; i2++) {
            name = name + splitName[i2];
        };
        localStorage.setItem(name, foodList[i]["unlocked"].toString());
    };
    saveButton.disabled = true;
    saveButton.style.color = "rgb(150, 150, 150)";
    let notif = document.createElement("p");
    notif.innerHTML = "Data saved!";
    notifContainer.appendChild(notif);
    setTimeout(function(){notif.remove(); saveButton.disabled = false; saveButton.style.color = "rgb(0, 0, 0)";}, 2500);
};

function eraseData() {
    let confirmation = confirm("Are you sure you want to erase all your data? (THIS ACTION CANNOT BE UNDONE IF YOU CLICK OK)");
    if (confirmation == true) {
        money = 10;
        moneyDisplay.innerHTML = money;
        localStorage.setItem("money", money);
        maxCustomers = 3;
        localStorage.setItem("maxCustomers", maxCustomers);
        stock = 25;
        stockDisplay.innerHTML = stock;
        localStorage.setItem("stock", stock);
        storage = 25;
        storageDisplay.innerHTML = storage;
        localStorage.setItem("storage", storage);
        for (let i = 0; i < foodList.length - 1; i++) {
            let splitName = foodList[i]["name"].toLowerCase().split(" ");
            let name = "";
            for (let i2 = 0; i2 < splitName.length - 1; i2++) {
                name = name + splitName[i2];
            };
            if (foodList[i]["name"] != "Rice Ball" && foodList[i]["name"] != "French Fries") {
                foodList[i]["unlocked"] = false;
                localStorage.setItem(name, false);
            };
        };
        let notif = document.createElement("p");
        notif.innerHTML = "Data erased!";
        notifContainer.appendChild(notif);
        setTimeout(function(){notif.remove()}, 5000);
    };
};

ingSearch.onkeydown = addIng;
makeFoodButton.onclick = makeFood;
clearIng.onclick = clear;
pageL.onclick = backPage;
pageR.onclick = nextPage;
buyStock5.onclick = function(){addStock(5)};
buyStock10.onclick = function(){addStock(10)};
buyStock20.onclick = function(){addStock(20)};
buyStock50.onclick = function(){addStock(50)};
buyRecipeButton.onclick = buyRecipe;
buyStorage.onclick = addStorage;
buySeating.onclick = addSeating;
buyAd.onclick = addAd;
saveButton.onclick = saveData;
eraseDataButton.onclick = eraseData;
setTimeout(customer, 1000);
setInterval(customer, customerRate);
setInterval(function(){
    if (stock == 0 && money < 5) {
        money += 5;
        moneyDisplay.innerHTML = money;
        let notif = document.createElement("p");
        notif.innerHTML = "You found $5 on the floor!";
        notifContainer.appendChild(notif);
        setTimeout(function(){notif.remove()}, 6250);
    };
}, 5000);
setInterval(saveData, 60000);
