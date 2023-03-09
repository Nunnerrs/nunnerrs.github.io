var v = "v" + "1.6.8.5";
var version = document.getElementById("version");
version.innerHTML = v;
var tutorialCompleted = false;
if (localStorage.getItem("tutorialCompleted") != null) {
    tutorialCompleted = true;
};
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
var recipeNum = document.getElementById("recipe-number");
var recipeTotal = document.getElementById("recipe-total");
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
var tutorialButton = document.getElementById("tutorial-button");

const customerNames = [
    /*Me & my friends*/	"Nunners", "Kayleigh", "Lianna", "Skylar", "Yeen Yeen", "Jin", "Jaelle", "Chelsey", "Ethan", "Anton", "Jeanne", "Aya", "Samantha", "Jayden",
    /*RM NPCs*/			"Mr. Wedgehead", "Wide Racoon", "Albert", "Amongus", "War Noodle", "The Sun", "Princess Sherk", "Patricia", "Dummy", "Jules", "Zack", "Burbspernge", "Pumkin",
    /*PGS NPCs*/		"Azalea", "Malo", "Billy Bob Joe",
    /*CGT NPCs*/		"Jack", "Holly",
    /*Bandori*/			"Tae Hanazono", "Michelle", "Moca Aoba", "Nanami Hiromachi", "Kasumi Toyama", "Arisa Ichigaya", "Rimi Ushigome", "Kaoru Seta", "Sayo Hikawa", "Hina Hikawa", "Ran Mitake", "Himari Uehara", "Kokoro Tsurumaki", "Yukina Minato", "Lisa Imai", "Mashiro Kurata", "Rui Yashio", "CHU²", "LAYER", "LOCKE", "MASKING", "PAREO", "Misaki Okusawa",
    /*TBHK*/			"Nene Yashiro", "Hanako", "Kou Minamoto", "Aoi Akane", "Akane Aoi", "Teru Minamoto", "Lemon Yamabuki", "Sousuke Mitsuba", "Tsukasa", "Sakura Nanamine", "Natsuhiko Hyuuga", "Yako", "Tsuchigomori",
    /*Yeen's friends*/	"Evilyn", "b a c h a n", "Sebastian", "Mina", "Liam", "Valerie", "Karmynnah", "Colette", "Makayla",
    /*NunnerLibrary*/	"Pinky", "Mint", "Hope", "Noah", "Richard", "Marcus", "Sasha", "Billy", "Bob", "Joe", "Liva", "Cory",
    /*Pokémon*/			"Shuckle", "Ash Ketchum", "Satoshi", "Misty", "Brock", "May", "Dawn", "Iris", "Cilan", "Serena", "Clement", "Bonnie", "Lana", "Mao", "Kaki", "Lilie", "Sophocles", "Goh", "Chloe",
    /*Comic book*/		"Bill", "Roski", "Ginny", "Emily", "Rebecca", "Joey", "Charlyy", "Pippi", "Althea", "Derek", "Collin",
    /*Mochi Squishies*/	"Marshmallow", "Ginger", "Vered", "Snowy", "Blossom", "Melody", "Peep", "Piper", "Sunny", "Honey", "Gummy", "Snoopy", "Mrs. Polar", "Sharpie",
];
const ingredientsList = {
    alcohol: "🍷",
    apple: "🍎",
    "🍎": "🍎",
    bean: "🫘",
    beans: "🫘",
    "🫘": "🫘",
    beef: "🥩",
    brandy: "🍷",
    bread: "🍞",
    "🍞": "🍞",
    butter: "🧈",
    "🧈": "🧈",
    cheese: "🧀",
    "🧀": "🧀",
    chicken: "🥩",
    chocolate: "🍫",
    "🍫": "🍫",
    cognac: "🍷",
    cucumber: "🥒",
    "🥒": "🥒",
    egg: "🥚",
    "🥚": "🥚",
    fish: "🐟",
    "🐟": "🐟",
    flour: "🌾",
    "🌾": "🌾",
    honey: "🍯",
    ice: "🧊",
    "🧊": "🧊",
    lemon: "🍋",
    lemons: "🍋",
    "🍋": "🍋",
    lettuce: "🥬",
    "🥬": "🥬",
    "maple syrup": "🍯",
    meat: "🥩",
    "🥩": "🥩",
    milk: "🥛",
    "🥛": "🥛",
    noodle: "🍜",
    noodles: "🍜",
    "🍜": "🍜",
    onion: "🧅",
    "🧅": "🧅",
    pinap: "🍍",
    pinapple: "🍍",
    pineapple: "🍍",
    "🍍": "🍍",
    pork: "🥩",
    potato: "🥔",
    "🥔": "🥔",
    ppap: "🍍",
    "red wine": "🍷",
    rice: "🍚",
    "🍚": "🍚",
    rum: "🍷",
    salt: "🧂",
    "🧂": "🧂",
    shrimp: "🦐",
    "🦐": "🦐",
    syrup: "🍯",
    "🍯": "🍯",
    tomato: "🍅",
    "🍅": "🍅",
    water: "💧",
    "💧": "💧",
    wine: "🍷",
    "🍷": "🍷",
};

// Initial profits are calculated by (# ing × 2)
const foodList = [ // {emoji: "", ing: "", ingList: "", name: "FOODNAME", profit: 1.5, unlocked: false},
    {emoji: "🍹", ing: "🍷🍍🍋💧🍯🧊", ingList: "Wine,Pineapple,Lemon,Water,Syrup,Ice", name: "Tropical Cocktail", profit: 14, unlocked: false},
    {emoji: "🍰", ing: "🌾🥚🧈🥛🧀", ingList: "Flour,Egg,Butter,Milk,Cheese", name: "Cheesecake", profit: 10, unlocked: false},
    {emoji: "🌯", ing: "🌾🫘🍚🥩🧅", ingList: "Flour,Beans,Rice,Meat,Onion", name: "Burrito", profit: 9.5, unlocked: false},
    {emoji: "🥘", ing: "💧🥩🥬🫘🍋", ingList: "Water,Meat,Lettuce,Beans,Lemon", name: "Stew", profit: 9, unlocked: false},
    {emoji: "🍔", ing: "🍞🧀🥩🥬🍞", ingList: "Bread,Cheese,Meat,Lettuce,Bread", name: "Burger", profit: 9, unlocked: false},
    {emoji: "🍲", ing: "💧🍜🥩🧅", ingList: "Water,Noodles,Meat,Onion", name: "Pho", profit: 8.5, unlocked: false},
    {emoji: "🥪", ing: "🍞🧀🍅🥬🍞", ingList: "Bread,Cheese,Tomato,Lettuce,Bread", name: "Sandwich", profit: 8, unlocked: false},
    {emoji: "🥧", ing: "🍎🌾🥚🧈", ingList: "Apple,Flour,Egg,Butter", name: "Apple Pie", profit: 8, unlocked: false},
    {emoji: "🍕", ing: "🍞🍅🧀🥩", ingList: "Bread,Tomato,Cheese,Meat", name: "Pizza", profit: 7, unlocked: false},
    {emoji: "🌮", ing: "🌾🥩🥬🧅", ingList: "Flour,Meat,Lettuce,Onion", name: "Taco", profit: 6.5, unlocked: false},
    {emoji: "🥗", ing: "🥬🍅🥒🧅", ingList: "Lettuce,Tomato,Cucumber,Onion", name: "Salad", profit: 6, unlocked: false},
    {emoji: "🧇", ing: "🌾🥚🧈", ingList: "Flour,Egg,Butter", name: "Waffles", profit: 5, unlocked: false},
    {emoji: "🍝", ing: "🍜🍅", ingList: "Noodles,Tomato", name: "Spaghetti", profit: 5, unlocked: false},
    {emoji: "🍮", ing: "🥚🥛🍯", ingList: "Egg,Milk,Syrup", name: "Flan", profit: 5, unlocked: false},
    {emoji: "🥞", ing: "🌾🥚🍯", ingList: "Flour,Egg,Syrup", name: "Pancakes", profit: 4.5, unlocked: false},
    {emoji: "🌭", ing: "🍞🥩", ingList: "Bread,Meat", name: "Hot Dog", profit: 4.5, unlocked: false},
    {emoji: "☕️", ing: "🫘💧🥛", ingList: "Beans,Water,Milk", name: "Coffee", profit: 4.5, unlocked: false},
    {emoji: "🍨", ing: "🧊🥛", ingList: "Ice,Milk", name: "Ice Cream", profit: 4, unlocked: false},
    {emoji: "🥐", ing: "🍞🧈", ingList: "Bread,Butter", name: "Croissant", profit: 4, unlocked: false},
    {emoji: "🥯", ing: "🍞🧀", ingList: "Bread,Cheese", name: "Bagel", profit: 4, unlocked: false},
    {emoji: "🍣", ing: "🍚🐟", ingList: "Rice,Fish", name: "Sushi", profit: 3.5, unlocked: false},
    {emoji: "🍧", ing: "🧊🍯", ingList: "Ice,Syrup", name: "Shaved Ice", profit: 3.5, unlocked: false},
    {emoji: "🍸", ing: "🍷", ingList: "Wine", name: "Cocktail", profit: 3.5, unlocked: false},
    {emoji: "🫕", ing: "🧀🍷", ingList: "Cheese,Wine", name: "Fondue", profit: 3.5, unlocked: false},
    {emoji: "🥨", ing: "🍞🧂", ingList: "Bread,Salt", name: "Pretzel", profit: 3, unlocked: false},
    {emoji: "🍳", ing: "🥚", ingList: "Egg", name: "Fried Egg", profit: 3, unlocked: false},
    {emoji: "🍗", ing: "🥩", ingList: "Meat", name: "Chicken Leg", profit: 3, unlocked: false},
    {emoji: "🥖", ing: "🍞", ingList: "Bread", name: "Baguette", profit: 3, unlocked: false},
    {emoji: "🍤", ing: "🦐", ingList: "Shrimp", name: "Fried Shrimp", profit: 2.5, unlocked: false},
    {emoji: "🍪", ing: "🌾🍫", ingList: "Flour,Chocolate", name: "Cookie", profit: 2.5, unlocked: false},
    {emoji: "🧃", ing: "💧🍎", ingList: "Water,Apple", name: "Apple Juice", profit: 2.5, unlocked: false},
    {emoji: "🍟", ing: "🥔", ingList: "Potato", name: "French Fries", profit: 2, unlocked: true},
    {emoji: "🍙", ing: "🍚", ingList: "Rice", name: "Rice Ball", profit: 1.5, unlocked: true},
];

recipeTotal.innerHTML = foodList.length;
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

const achievements = [ // {name: "ACHIEVEMENT", desc: "BRIEFDESCRIPTION", unlocked: false},
    {id: 1, name: "Master Chef", desc: "Unlock all " + foodList.length + " recipes", unlocked: false},
    {id: 2, name: "Bread For Life", desc: "Serve a baguette to Moca Aoba", unlocked: false},
    {id: 3, name: "Plants Only", desc: "Serve a salad to Holly or Malo", unlocked: false},
    {id: 4, name: "Caprisun!!", desc: "Serve apple juice to Skylar", unlocked: false},
    {id: 5, name: "Mmm…fries", desc: "Serve French fries to Hina or Sayo Hikawa", unlocked: false},
    {id: 6, name: "Jelly-filled Donuts", desc: "Serve a rice ball to Brock", unlocked: false},
    {id: 7, name: "Cake…", desc: "Serve cheesecake to Rebecca", unlocked: false},
    {id: 8, name: "Hollup—", desc: "Serve a fried egg to either Peep, Piper, or Sunny", unlocked: false},
    {id: 9, name: "Broke", desc: "Have 0 stock and not enough money to buy ingredients (less than $5)", unlocked: false},
    {id: 10, name: "I ❤️ Web Chef", desc: "Cook a certain food for Valentine's Day (secret #1)(unobtainable)", unlocked: false},
    {id: 11, name: "U HAXOR!1!!", desc: "\"Hack\" the game (discover secret #2)", unlocked: false},
    {id: 12, name: "NO. JUST NO.", desc: "Attempt to cook something terrible (discover secret #3)", unlocked: false},
    {id: 13, name: "Free Advertisment", desc: "Try to cook a certain \"phrase\" (discover secret #4)", unlocked: false},
    {id: 14, name: "Top Secret", desc: "Discover the easiest secret of all time (#5)", unlocked: false},
    {id: 15, name: "Overachiever", desc: "Achieve all above achievements", unlocked: false},
];
achievements[achievements.length - 1]["desc"] = "Achieve all above achievements (total of " + achievements.length + ")";
for (let i = 0; i < achievements.length; i++) {
    let a = achievements[i]["id"].toString();
    if (localStorage.getItem("achievement" + a) != null) {
        if (localStorage.getItem("achievement" + a) == "true" || localStorage.getItem("achievement" + a) == true) {
            achievements[i]["unlocked"] = true;
        };
    };
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
        if (customer.dataset.name.match("Moca") != null && order["emoji"] == "🥖") {
            award(2);
        };
        if ((customer.dataset.name.match("Holly") != null || customer.dataset.name.match("Malo") != null) && order["emoji"] == "🥗") {
            award(3);
        };
        if (customer.dataset.name.match("Skylar") != null && order["emoji"] == "🧃") {
            award(4);
        };
        if ((customer.dataset.name.match("Hina") != null || customer.dataset.name.match("Sayo") != null) && order["emoji"] == "🍟") {
            award(5);
        };
        if (customer.dataset.name.match("Brock") != null && order["emoji"] == "🍙") {
            award(6);
        };
        if (customer.dataset.name.match("Rebecca") != null && order["emoji"] == "🍰") {
            award(7);
        };
        if ((customer.dataset.name.match("Peep") != null || customer.dataset.name.match("Piper") != null || customer.dataset.name.match("Sunny") != null) && order["emoji"] == "🍳") {
            award(8);
        };
        customer.remove();
    };
};

function findIng() {
    let i = ingSearch.value.toLowerCase().trim();
    if (ingredientsList[i]) {
        return ingredientsList[i];
    } else if (i == "⬆️⬆️⬇️⬇️⬅️➡️⬅️➡️🅱️🅰️" || i == "dog" || i == "🐶" || i == "🐕" || i == "baby" || i == "babies" || i == "👶" || i == "girl" || i == "👧" || i == "child" || i == "children" || i == "🧒" || i == "boy" || i == "👦"
              || i == "https://nunnerrs.github.io" || i == "https://nunnerrs.github.io/" || i == "nunnerrs.github.io"
              || i == "secret" || i == "sus" || i == "sussy" || i == "sussy baka") {
        return i;
    } else {
        return null;
    };
};

function addIng(e) {
    if (e.key == "Enter") {
        let ing = findIng();
        if (ing != null && stock > 0) {
            if (ing == "⬆️⬆️⬇️⬇️⬅️➡️⬅️➡️🅱️🅰️") {
                ingSearch.value = "";
                moneyDisplay.innerHTML = "∞";
                stockDisplay.innerHTML = "∞";
                let notif = document.createElement("p");
                notif.innerHTML = "HOW?!? YOU HACKER!! (Secret #2)";
                notifContainer.appendChild(notif);
                award(11);
                setTimeout(function(){
                    notif.remove();
                    moneyDisplay.innerHTML = money;
                    stockDisplay.innerHTML = stock;
                    notif = document.createElement("p");
                    notif.innerHTML = "jk it ain't real XD";
                    notifContainer.appendChild(notif);
                    setTimeout(function(){notif.remove()}, 5000);
                }, 7500);
            } else if (ing == "dog" || ing == "🐶" || ing == "🐕" || ing == "baby" || ing == "babies" || ing == "👶" || ing == "girl" || ing == "👧" || ing == "child" || ing == "children" || ing == "🧒" || ing == "boy" || ing == "👦") {
                ingSearch.value = "";
                ingSearchError.innerHTML = "NO. JUST NO. (Secret #3)";
                setTimeout(function(){ingSearchError.innerHTML = ""}, 5000);
                award(12);
            } else if (ing == "https://nunnerrs.github.io" || ing == "https://nunnerrs.github.io/" || ing == "nunnerrs.github.io") {
                ingSearch.value = "";
                ingSearchError.innerHTML = "umm are you trying to cook my website?? (Secret #4)";
                setTimeout(function(){ingSearchError.innerHTML = ""}, 5000);
                award(13);
            } else if (ing == "secret" || ing == "sus" || ing == "sussy" || ing == "sussy baka") {
                ingSearch.value = "";
                ingSearchError.innerHTML = "omg you uncovered the easiest secret ever!! (Secret #5)";
                setTimeout(function(){ingSearchError.innerHTML = ""}, 5000);
                award(14);
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
            setTimeout(function() {ingSearchError.innerHTML = "";}, 2500);
        } else {
            ingSearchError.innerHTML = "Invalid ingredient \"" + ingSearch.value + "\"! Check your spelling";
            setTimeout(function() {ingSearchError.innerHTML = "";}, 2500);
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
    
    // Valentine's Day secret
    /*if (ingredients.innerHTML == "🍫") {
        ingredients.innerHTML = "💝";
        let notif = document.createElement("p");
        notif.innerHTML = "Happy Valentines Day! (Secret #1)";
        notifContainer.appendChild(notif);
        setTimeout(function(){notif.remove()}, 10000);
        award(10);
    };*/
};

function clear() {
    if (stock + ingredients.innerHTML.length < storage) {
        stock += ingredients.innerHTML.length / 2;
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
        recipeNum.innerHTML = page + 1;
        recipeName.innerHTML = recipes[page]["emoji"] + " " + recipes[page]["name"] + "<br>Unlocked: " + (recipes[page]["unlocked"] == true ? "✅" : "❎") + "<br> Profit: $" + recipes[page]["profit"];
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
        recipeNum.innerHTML = page + 1;
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
    } else {
        alert("Error #1: Could not process request; If you see this message, screenshot it and show it to Nunners so she can fix this error. Data: money is " + money + ", ing is " + ing + ", stock is " + stock + ", storage is " + storage + ", confirmation is " + confirmation + ", money >= ing/2 is " + money >= ing/2 + ", stock + ing < storage is " + (stock + ing < storage));
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
    } else {
        alert("Error #2: Could not process request; If you see this message, screenshot it and show it to Nunners so she can fix this error. Data: money is " + money + ", storagePrice is " + storagePrice + ", confirmation is " + confirmation + ", money >= storagePrice is " + money >= storagePrice);
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
                let unlockedAll = true;
                for (let i = 0; i < foodList.length - 1; i++) {
                    if (foodList[i]["unlocked"] == false) {
                        unlockedAll = false;
                        break;
                    };
                };
                if (unlockedAll == true) {
                    award(1);
                };
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
    } else {
        alert("Error #3: Could not process request; If you see this message, screenshot it and show it to Nunners so she can fix this error. Data: money is " + money + ", seatingPrice is " + seatingPrice + ", confirmation is " + confirmation + ", money >= seatingPrice is " + money >= seatingPrice);
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
    } else {
        alert("Error #4: Could not process request; If you see this message, screenshot it and show it to Nunners so she can fix this error. Data: money is " + money + ", adPrice is " + adPrice + ", confirmation is " + confirmation + ", money >= adPrice is " + money >= adPrice);
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
    for (let i = 0; i < achievements.length - 1; i++) {
        let a = achievements[i];
        localStorage.setItem("achievement" + a["id"].toString(), a["unlocked"].toString());
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
        for (let i = 0; i < achievements.length - 1; i++) {
            let a = achievements[i];
            achievements[i]["unlocked"] = false;
            localStorage.setItem("achievement" + a["id"].toString(), false);
        };
        let notif = document.createElement("p");
        notif.innerHTML = "Data erased!";
        notifContainer.appendChild(notif);
        setTimeout(function(){notif.remove()}, 5000);
    };
};

function tutorial() {
    let confirmation = confirm("Would you like to begin the tutorial? (Recommended for those new to Web Chef since you may not understand how things work)");
    if (confirmation == true) {
        alert("Welcome to Web Chef! This is a simple restaurant game where you prepare food for customers. Best played on a PC or tablet. [Click OK to continue]");
        setTimeout(alert("Looks like there's a customer! To prepare their order, enter the names of the ingredients required to make the food."), 5500);
        setTimeout(alert("For example, if their order is \"🍙\" you would type \"rice\" into the textbox & hit \"go\"/\"enter\". If you want to view the ingredients for a certain food, click through the pages of the Recipes book."), 11500);
        setTimeout(alert("Once you add all the required ingredients to the Table, click the \"" + makeFoodButton.innerHTML + "\" button to fuse! Then, click the Serve button to give the food."), 22500);
        setTimeout(alert("You earn money from serving food to customers! Use it to buy upgrades like seating or stock, since you don't have unlimited ingredients."), 35000);
        setTimeout(alert("Click on the \"" + clearIng.innerHTML + "\" button if you ever need to restart making food (stock is refunded). Click on the button in the bottom right corner to go through the tutorial again anytime. Enjoy!"), 4500);
    };
    localStorage.setItem("tutorialCompleted", "true");
};

function award(a) {
    let ach = null;
    for (let i = 0; i < achievements.length - 1; i++) {
        if (achievements[i]["id"] == a) {
            ach = achievements[i];
        };
    };
    if (ach != null) {
        if (ach["unlocked"] == false) {
            ach["unlocked"] = true;
            let notif = document.createElement("p");
            notif.innerHTML = "You unlocked the achievement \"" + ach["name"] + "\"!";
            notifContainer.appendChild(notif);
            setTimeout(function(){notif.remove()}, 5000);
        };
    };
};

function showAchievements() {
    let achievementsList = "Achievements:";
    for (let i = 0; i < achievements.length - 1; i++) {
        let a = achievements[i];
        achievementsList = achievementsList + "\n" + (a["unlocked"] == true ? "✅" : "❎") + " " + a["name"] + " ~ " + a["desc"];
    };
    alert(achievementsList);
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
tutorialButton.onclick = tutorial;
setTimeout(customer, 1000);
setTimeout(function(){
    if (localStorage.getItem("tutorialCompleted") == "false" || localStorage.getItem("tutorialCompleted") == null) {
        tutorial();
    };
}, 1500);
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
