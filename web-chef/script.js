var v = "v" + "1.6.3.4";
var version = document.getElementById("version");
version.innerHTML = v;
var updateLink = "https://github.com/Nunnerrs/nunnerrs.github.io/commit/";
var commitId = "cc38037163afa5339cf1d327a2287b8f840ae811";
updateLink = updateLink + commitId;
// make a new line to display as new line
// NO " OR '
var updateSummary = `• tips can now be earned without needing all recipes unlocked (smaller chance though)
• more customers (names)
• changed Surprise! achievement to Oops I Meant The Other One (too hard I guess)
• slightly more efficient code!!
`;


/*`• view game stats with the new stats button (📊)!
• new bento box and doughnut recipes & updated stew (now paella) and cookie recipe
• 5 new achievements for donuts, max ads, total customer milestones, and getting all achievements
• web chef icon
• version summary can be viewed by clicking on notif (like what you did c:)`;*/
// the `; SHOULD NOT be on its own line

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
var totalMoney = 10;
if (localStorage.getItem("totalMoney") != null) {
    totalMoney = Number(localStorage.getItem("totalMoney"));
};
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
var totalCustomers = 0;
if (localStorage.getItem("totalCustomers") != null) {
    totalCustomers = Number(localStorage.getItem("totalCustomers"));
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
//var hireRestocker = document.getElementById("hire-restocker");
var restockerPrice = 60;
var restockers = 0;
if (localStorage.getItem("restockers") != null) {
    restockers = Number(localStorage.getItem("restockers"));
};
var saveButton = document.getElementById("save-button");
var eraseDataButton = document.getElementById("erase-data-button");
var statsButton = document.getElementById("stats-button");
var achievementsButton = document.getElementById("achievements-button");
var emojiButton = document.getElementById("emoji-button");
var notoEmoji = false;
var tutorialButton = document.getElementById("tutorial-button");

const customerNames = [
    /*Me & my friends*/	"Nunners", "Kayleigh", "Lianna", "Skylar", "Yeen Yeen", "Jin", "Jaelle", "Chelsey", "Ethan", "Anton", "Jeanne", "Tiffany", "Sai", "Aya", "Samantha", "Jaedyn",
    /*RM NPCs*/			"Mr. Wedgehead", "Wide Racoon", "Albert", "Amongus", "War Noodle", "The Sun", "Princess Sherk", "Patricia", "Dummy", "Jules", "Zack", "Burbspernge", "Pumkin",
    /*PGS NPCs*/		"Azalea", "Malo", "Billy Bob Joe",
    /*CGT NPCs*/		"Jack", "Holly", "Jake",
    /*Bandori*/			"Tae Hanazono", "Michelle", "Moca Aoba", "Nanami Hiromachi", "Kasumi Toyama", "Arisa Ichigaya", "Rimi Ushigome", "Kaoru Seta", "Sayo Hikawa", "Hina Hikawa", "Ran Mitake", "Himari Uehara", "Kokoro Tsurumaki", "Yukina Minato", "Lisa Imai", "Mashiro Kurata", "Rui Yashio", "CHU²", "LAYER", "LOCKE", "MASKING", "PAREO", "Misaki Okusawa",
    /*TBHK*/			"Nene Yashiro", "Hanako", "Kou Minamoto", "Aoi Akane", "Akane Aoi", "Teru Minamoto", "Lemon Yamabuki", "Sousuke Mitsuba", "Tsukasa", "Sakura Nanamine", "Natsuhiko Hyuuga", "Yako", "Tsuchigomori",
    /*Yeen's friends*/	"Evilyn", "b a c h a n", "Sebastian", "Mina", "Liam", "Valerie", "Karmynnah", "Colette", "Makayla", "Kimora",
    /*NunnerLibrary*/	"Pinky", "Mint", "Hope", "Noah", "Richard", "Marcus", "Sasha", "Billy", "Bob", "Joe", "Liva", "Cory",
    /*Pokémon*/			"Shuckle", "Ash Ketchum", "Satoshi", "Misty", "Brock", "May", "Dawn", "Iris", "Cilan", "Serena", "Clement", "Bonnie", "Lana", "Mao", "Kaki", "Lilie", "Sophocles", "Goh", "Chloe", "Koharu",
    /*Comic book*/		"Bill", "Roski", "Ginny", "Emily", "Rebecca", "Joey", "Charlyy", "Bobby", "Sally", "Pippi", "Althea", "Derek", "Alford", "Steven", "Collin",
    /*Mochi Squishies*/	"Marshmallow", "Ginger", "Vered", "Snowy", "Blossom", "Melody", "Peep", "Piper", "Sunny", "Honey", "Gummy", "Snoopy", "Mrs. Polar", "Sharpie",
    /*Roblox Youtubers*/"Flamingo", "Denis", "Leah Ashe", "Kreek", "Kevin", "Sketch", "ItsFunneh", "LankyBox", "Laughability",
    /*Roblox*/          "Carl", "Builderman", "David Baszucki", "Barry",
    /*Random*/          "You", "Your Mom", "Your Dad", "Nobody", "???",
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
    choco: "🍫",
    chocolate: "🍫",
    "🍫": "🍫",
    cognac: "🍷",
    cream: "🥛",
    creme: "🥛",
    cucumber: "🥒",
    "🥒": "🥒",
    egg: "🥚",
    "🥚": "🥚",
    fish: "🐟",
    "🐟": "🐟",
    flour: "🌾",
    flower: "🌾",
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
    pepperoni: "🥩",
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
    {emoji: "🥘", ing: "🍚🥩🦐🍅🍋", ingList: "Rice,Meat,Shrimp,Tomato,Lemon", name: "Paella", profit: 9, unlocked: false},
    {emoji: "🍔", ing: "🍞🧀🥩🥬🍞", ingList: "Bread,Cheese,Meat,Lettuce,Bread", name: "Burger", profit: 9, unlocked: false},
    {emoji: "🍲", ing: "💧🍜🥩🧅", ingList: "Water,Noodles,Meat,Onion", name: "Pho", profit: 8.5, unlocked: false},
    {emoji: "🥪", ing: "🍞🧀🍅🥬🍞", ingList: "Bread,Cheese,Tomato,Lettuce,Bread", name: "Sandwich", profit: 8, unlocked: false},
    {emoji: "🥧", ing: "🍎🌾🥚🧈", ingList: "Apple,Flour,Egg,Butter", name: "Apple Pie", profit: 8, unlocked: false},
    {emoji: "🍱", ing: "🍚🐟🦐🥒", ingList: "Rice,Fish,Shrimp,Cucumber", name: "Bento Box", profit: 7.5, unlocked: false},
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
    {emoji: "🍪", ing: "🌾🥚🍫", ingList: "Flour,Egg,Chocolate", name: "Cookie", profit: 4, unlocked: false},
    {emoji: "🥯", ing: "🍞🧀", ingList: "Bread,Cheese", name: "Bagel", profit: 4, unlocked: false},
    {emoji: "🍣", ing: "🍚🐟", ingList: "Rice,Fish", name: "Sushi", profit: 3.5, unlocked: false},
    {emoji: "🍧", ing: "🧊🍯", ingList: "Ice,Syrup", name: "Shaved Ice", profit: 3.5, unlocked: false},
    {emoji: "🍸", ing: "🍷", ingList: "Wine", name: "Cocktail", profit: 3.5, unlocked: false},
    {emoji: "🫕", ing: "🧀🍷", ingList: "Cheese,Wine", name: "Fondue", profit: 3.5, unlocked: false},
    {emoji: "🥨", ing: "🍞🧂", ingList: "Bread,Salt", name: "Pretzel", profit: 3, unlocked: false},
    {emoji: "🍳", ing: "🥚", ingList: "Egg", name: "Fried Egg", profit: 3, unlocked: false},
    {emoji: "🍩", ing: "🍞🍫", ingList: "Bread,Chocolate", name: "Doughnut", profit: 3, unlocked: false},
    {emoji: "🍗", ing: "🥩", ingList: "Meat", name: "Chicken Leg", profit: 3, unlocked: false},
    {emoji: "🥖", ing: "🍞", ingList: "Bread", name: "Baguette", profit: 3, unlocked: false},
    {emoji: "🍤", ing: "🦐", ingList: "Shrimp", name: "Fried Shrimp", profit: 2.5, unlocked: false},
    {emoji: "🧃", ing: "🍎", ingList: "Apple", name: "Apple Juice", profit: 2.5, unlocked: false},
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
const recipes = [...foodList].reverse();
const unlocked = [];
recipeName.innerHTML = recipes[page]["emoji"] + " " + recipes[page]["name"] + "<br>Unlocked: " + (recipes[page]["unlocked"] == true ? "✅" : "❎") + "<br> Profit: $" + recipes[page]["profit"];
recipeIng.innerHTML = "";
let ing = recipes[page]["ingList"].split(",");
for (let i = 0; i < ing.length; i++) {
    recipeIng.innerHTML = recipeIng.innerHTML + "<li>" + ing[i] + "</li>";
};

const achievements = [ // {id: NUMBER, name: "ACHIEVEMENT", desc: "BRIEFDESCRIPTION", unlocked: false},
    {id: 1, name: "Master Chef", desc: "Unlock all " + foodList.length + " recipes", unlocked: false},
    {id: 16, name: "Publicized", desc: "Buy 4 advertisements", unlocked: false},
    {id: 17, name: "Popular", desc: "Serve 100 customers all-time", unlocked: false},
    {id: 18, name: "Culinary Feat", desc: "Serve 500 customers all-time", unlocked: false},
    {id: 19, name: "Nationwide Cuisine", desc: "Serve 1,000 customers all-time", unlocked: false},
    {id: 20, name: "How Do Ya Like Them Donuts?!", desc: "Serve a doughnut to Hanako or Tsukasa", unlocked: false},
    {id: 2, name: "Bread 4 Life", desc: "Serve a baguette to Moca Aoba", unlocked: false},
    {id: 3, name: "Plants Only", desc: "Serve a salad to Holly or Malo", unlocked: false},
    {id: 4, name: "Caprisun!!", desc: "Serve apple juice to Skylar", unlocked: false},
    {id: 5, name: "Mmm…fries", desc: "Serve French fries to Hina or Sayo Hikawa", unlocked: false},
    {id: 6, name: "Jelly-filled Donuts", desc: "Serve a rice ball to Brock", unlocked: false},
    {id: 7, name: "Cake…", desc: "Serve cheesecake to Rebecca", unlocked: false},
    {id: 8, name: "Hollup—", desc: "Serve a fried egg to either Peep, Piper, or Sunny", unlocked: false},
    {id: 21, name: "Cannabalism?!", desc: "Serve pizza to Pippi", unlocked: false},
    {id: 9, name: "Spare Change…", desc: "Find money the floor (run out of money & stock first)", unlocked: false},
    {id: 10, name: "I ❤️ Web Chef", desc: "Cook a certain food for Valentine's Day (secret #1)(unobtainable)", unlocked: false},
    {id: 11, name: "U HAXOR!1!!", desc: "\"Hack\" the game (discover secret #2)", unlocked: false},
    {id: 12, name: "NO. JUST NO.", desc: "Attempt to cook something terrible (discover secret #3)", unlocked: false},
    {id: 13, name: "Free Advertisment", desc: "Try to cook a certain \"phrase\" (discover secret #4)", unlocked: false},
    {id: 14, name: "Top Secret", desc: "Discover the easiest secret of all time (#5)", unlocked: false},
    {id: 22, name: "Oops I meant the other one", desc: "Wrong word!! (secret #6)", unlocked: false},
    {id: 23, name: "WORM", desc: "Get lucky (0.005% chance)(secret #7)", unlocked: false},
    {id: 15, name: "Overachiever", desc: "Achieve all above achievements (click on star button to claim)", unlocked: false},
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

function notify(notifText, time){
    if (notifText != null) {
        let notif = document.createElement("p");
        notif.innerHTML = notifText;
        notifContainer.appendChild(notif);
        if (time == null) {
            time = 5000;
        };
        setTimeout(function(){notif.remove()}, time);
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
        totalCustomers++;
        if (totalCustomers == 100) {
            award(17);
        } else if (totalCustomers == 500) {
            award(18);
        } else if (totalCustomers == 1000) {
            award(19);
        };
        ingredients.innerHTML = "Empty";
        makeFoodButton.disabled = true;
        makeFoodButton.style.color = "rgb(150, 150, 150)";
        clearIng.disabled = true;
        clearIng.style.color = "rgb(150, 150, 150)";
        money += order["profit"];
        totalMoney += order["profit"];
        moneyDisplay.innerHTML = money;
        let unlockedAll = true;
        for (let i = 0; i < foodList.length - 1; i++) {
            if (foodList[i]["unlocked"] == false) {
                unlockedAll = false;
                break;
            };
        };
        let customerName = customer.dataset.name;
        let rng = Math.floor(Math.random() * 25);
        if (rng == 0 && unlockedAll == false) {
            unlockRecipe(false);
        } else if ((rng >= 0 && rng < 10 && unlockedAll == true) || (rng >= 0 && rng < 2 && unlockedAll == false)) {
            let tip = Math.round(order["profit"] / 2)
            if (order["emoji"] != "🍙" && rng >= 0 && rng <= 2) {
                tip += 0.5;
            };
            money += tip;
            totalMoney += tip;
            moneyDisplay.innerHTML = money;
            notify(customer.dataset.name + " tipped you $" + tip + "!", 5000);
        };
        let orderEmoji = order["emoji"];
        if (customerName.match("Moca") != null && orderEmoji == "🥖") {
            award(2);
        };
        if ((customerName.match("Holly") != null || customerName.match("Malo") != null) && orderEmoji == "🥗") {
            award(3);
        };
        if (customerName.match("Skylar") != null && orderEmoji == "🧃") {
            award(4);
        };
        if ((customerName.match("Hina") != null || customerName.match("Sayo") != null) && orderEmoji == "🍟") {
            award(5);
        };
        if (customerName.match("Brock") != null && orderEmoji == "🍙") {
            award(6);
        };
        if (customerName.match("Rebecca") != null && orderEmoji == "🍰") {
            award(7);
        };
        if ((customerName.match("Peep") != null || customerName.match("Piper") != null || customerName.match("Sunny") != null) && orderEmoji == "🍳") {
            award(8);
        };
        if ((customerName.match("Hanako") != null || customerName.match("Tsukasa") != null) && orderEmoji == "🍩") {
            award(20);
        };
        if (customerName.match("Pippi") != null && orderEmoji == "🍕") {
            award(21);
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
              || i == "secret" || i == "sus" || i == "sussy" || i == "sussy baka"
              || i.match("flower")) {
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
                notify("HOW?!? YOU HACKER!! (Secret #2)", 7500);
                award(11);
                setTimeout(function(){
                    moneyDisplay.innerHTML = money;
                    stockDisplay.innerHTML = stock;
                    notify("jk it ain't real XD", 5000);
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
            } else if (ing.match("flower")) {
                ingSearch.value = "";
                ingSearchError.innerHTML = "you mean \"flour\"? (Secret #6)";
                setTimeout(function(){ingSearchError.innerHTML = ""}, 5000);
                award(22);
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
                if (ing == "🍎" && Math.floor(Math.random() * 100) == 0) {
                    ingSearchError.innerHTML = "🪱";
                    setTimeout(function(){
                        notify("oh looks like you found a worm in the apple… (Secret #7)", 15000);
                        setTimeout(function(){award(23)}, 1000);
                    }, 1000);
                };
            };
        } else if (ing != null && stock < 1) {
            ingSearchError.innerHTML = "You don't have enough ingredients!";
            setTimeout(function() {ingSearchError.innerHTML = "";}, 2500);
        } else {
            if (ingSearch.value != "" && ingSearch.value != null) {
                ingSearchError.innerHTML = "Invalid ingredient \"" + ingSearch.value + "\"! Check your spelling";
                setTimeout(function() {ingSearchError.innerHTML = "";}, 2500);
            };
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
        } else {
            let exists = true;
            for (let i2 = 0; i2 < ingredients.innerHTML.length - 1; i2++) {
                let char = foodList[i]["ing"].charAt(i2);
                if (ingredients.innerHTML.match(/char/g) != null) {
                    if (foodList[i]["ing"].match(/char/g).length > 1) {
                        if (ingredients.innerHTML.match(/char/g).length != foodList[i]["ing"].match(/char/g).length) {
                            exists = false;
                        };
                    };
                } else {
                    exists = false;
                };
            };
            if (exists == true) {
                ingredients.innerHTML = foodList[i]["emoji"];
                break;
            };
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
    
    if (ingredients.innerHTML == "🌾🥚") {
        let notif = document.createElement("p");
        notif.innerHTML = "The Pancakes recipe has been updated; See updated recipe in Recipes book";
        notifContainer.appendChild(notif);
        setTimeout(function(){notif.remove()}, 8000);
    };
    if (ingredients.innerHTML == "🧊") {
        let notif = document.createElement("p");
        notif.innerHTML = "The Shaved Ice recipe has been updated; See updated recipe in Recipes book";
        notifContainer.appendChild(notif);
        setTimeout(function(){notif.remove()}, 8000);
    };
    if (ingredients.innerHTML == "🌾🍫") {
        let notif = document.createElement("p");
        notif.innerHTML = "The Cookie recipe has been updated; See updated recipe in Recipes book";
        notifContainer.appendChild(notif);
        setTimeout(function(){notif.remove()}, 8000);
    };
    if (ingredients.innerHTML == "💧🥩🥬🫘🍋") {
        let notif = document.createElement("p");
        notif.innerHTML = "The Stew recipe has been changed to Paella; See updated recipe in Recipes book";
        notifContainer.appendChild(notif);
        setTimeout(function(){notif.remove()}, 8000);
    };
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
        recipeName.innerHTML = recipes[page]["emoji"] + " " + recipes[page]["name"] + "<br>Unlocked: " + (recipes[page]["unlocked"] == true ? "✅" : "❎") + "<br> Profit: $" + recipes[page]["profit"];
        recipeIng.innerHTML = "";
        let ing = recipes[page]["ingList"].split(",");
        for (let i = 0; i < ing.length; i++) {
            recipeIng.innerHTML = recipeIng.innerHTML + "<li>" + ing[i] + "</li>";
        };
    };
};

function addStock(ing) {
    let confirmation = confirm("Buy " + ing + " ingredients for $" + ing/2 + "?");
    if (confirmation == true && money >= ing/2 && stock + ing <= storage) {
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
        //alert("Error #1: Could not process request; If you see this message, screenshot it and show it to Nunners so she can fix this error. Data: money is " + money + ", ing is " + ing + ", stock is " + stock + ", storage is " + storage + ", confirmation is " + confirmation + ", money >= ing/2 is " + money >= ing/2 + ", stock + ing < storage is " + (stock + ing < storage));
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
        //alert("Error #2: Could not process request; If you see this message, screenshot it and show it to Nunners so she can fix this error. Data: money is " + money + ", storagePrice is " + storagePrice + ", confirmation is " + confirmation + ", money >= storagePrice is " + money >= storagePrice);
    };
};

function unlockRecipe(loseMoney) {
    let paid = false
    if (loseMoney == true && money >= recipePrice) {
        money -= recipePrice;
        moneyDisplay.innerHTML = money;
        paid = true
    } else if (loseMoney == false) {
        paid = true;
    };
    if (paid == true) {
        let unlocked = false;
        for (let i = 0; i < foodList.length; i++) {
            let f = Math.floor(Math.random() * foodList.length);
            if (foodList[f]["unlocked"] == false) {
                foodList[f]["unlocked"] = true;
                unlocked = true;
                let unlockedAll = true;
                for (let i2 = 0; i2 < foodList.length; i2++) {
                    if (foodList[i2]["unlocked"] == false) {
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
        //alert("Error #3: Could not process request; If you see this message, screenshot it and show it to Nunners so she can fix this error. Data: money is " + money + ", seatingPrice is " + seatingPrice + ", confirmation is " + confirmation + ", money >= seatingPrice is " + money >= seatingPrice);
    };
};

function addAd() {
    let confirmation = confirm("Buy ad (customers arrive faster) for $" + adPrice + "?");
    if (confirmation == true && money >= adPrice) {
        if (customerRate > 3000) {
            money -= adPrice;
            moneyDisplay.innerHTML = money;
            customerRate -= 3000;
            if (customerRate == 3000) {
                award(16);
            };
        } else {
            let notif = document.createElement("p");
            notif.innerHTML = "You can't buy any more ads! (Max of 4)";
            notifContainer.appendChild(notif);
            setTimeout(function(){notif.remove()}, 5000);
        };
    } else if (confirmation == true && money < adPrice) {
        alert("You don't have enough money to buy this! (Price: " + adPrice + ")");
    } else {
        //alert("Error #4: Could not process request; If you see this message, screenshot it and show it to Nunners so she can fix this error. Data: money is " + money + ", adPrice is " + adPrice + ", confirmation is " + confirmation + ", money >= adPrice is " + money >= adPrice);
    };
};

function addRestocker() {
    let confirmation = confirm("Hire a restocker (automatically restocks) for $" + restockerPrice + "?");
    if (confirmation == true && money >= restockerPrice) {
        if (restockers == 0) {
            money -= restockerPrice;
            moneyDisplay.innerHTML = money;
            restockers++;
        } else {
            let notif = document.createElement("p");
            notif.innerHTML = "You can't hire any more restockers! (Max of 1)";
            notifContainer.appendChild(notif);
            setTimeout(function(){notif.remove()}, 5000);
        };
    } else if (confirmation == true && money < restockerPrice) {
        alert("You don't have enough money to buy this! (Price: " + restockerPrice + ")");
    };
};

function saveData() {
    localStorage.setItem("money", money);
    localStorage.setItem("totalMoney", totalMoney);
    localStorage.setItem("maxCustomers", maxCustomers);
    localStorage.setItem("totalCustomers", totalCustomers);
    localStorage.setItem("customerRate", customerRate);
    localStorage.setItem("stock", stock);
    localStorage.setItem("storage", storage);
    localStorage.setItem("restockers", restockers);
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
        totalMoney = 10;
        localStorage.setItem("totalMoney", totalMoney);
        customers = 0;
        ordersList.innerHTML = "";
        maxCustomers = 3;
        localStorage.setItem("maxCustomers", maxCustomers);
        totalCustomers = 0;
        localStorage.setItem("totalCustomers", totalCustomers);
        customerRate = 15000;
        localStorage.setItem("customerRate", customerRate);
        stock = 25;
        stockDisplay.innerHTML = stock;
        localStorage.setItem("stock", stock);
        storage = 25;
        storageDisplay.innerHTML = storage;
        localStorage.setItem("storage", storage);
        restockers = 0;
        localStorage.setItem("storage", restockers);
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
        setTimeout(customer, 1000);
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
        alert("Looks like there's a customer! To prepare their order, enter the names of the ingredients required to make the food. (Don't worry, they'll stay there until you serve them or leave/reload the page)");
        alert("For example, if their order is \"🍙\" you would type \"rice\" into the textbox & hit \"go\"/\"enter\". If you want to view the ingredients for a certain food, click through the pages of the Recipes book.");
        alert("Once you add all the required ingredients to the Table, click the \"" + makeFoodButton.innerHTML + "\" button to fuse! Then, click the Serve button to give the food.");
        alert("Click on the \"" + clearIng.innerHTML + "\" button if you ever mess up with the order of ingredients. Doing so refunds your stock, so don't worry about wasting money.");
        alert("Serve food to customers and earn money! Use it to buy upgrades like recipes, seating, and advertisements (click each \"Purchase\" button to learn more about what they do). Don't forget to buy ingredients stock since you don't have unlimited ingredients.");
        alert("Click on the \"" + statsButton.innerHTML + "\" button to view a list of your game stats like total money, the number of recipes unlocked, and total customers served!")
        alert("You can unlock achievements by serving specific food to certain customers, discovering secrets, and more! View them by clicking on the yellow \"" + achievementsButton.innerHTML + "\" button at the bottom-right corner and show them off to your friends and family :D");
        alert("That's it! Click on the blue \"" + tutorialButton.innerHTML + "\" button in the bottom right corner to go through the tutorial again anytime. Happy cooking!");
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

function hasAchievement(a) {
    let ach = null;
    for (let i = 0; i < achievements.length; i++) {
        if (achievements[i]["id"] == a) {
            ach = achievements[i];
        };
    };
    if (ach != null) {
        if (ach["unlocked"] == true) {
            return true;
        } else {
            return false;
        };
    } else {
        return null;
    };
};

function showAchievements() {
    let achievementsList = "Achievements:";
    let unlockedAll = true;
    for (let i = 0; i < achievements.length - 1; i++) {
        let a = achievements[i];
        achievementsList = achievementsList + "\n" + (a["unlocked"] == true ? "✅" : "❎") + " " + a["name"] + " ~ " + a["desc"];
        if (a["id"] != 15 && a["unlocked"] == false) {
            unlockedAll = false;
        };
    };
    if (unlockedAll == true) {
        award(15);
        let a = achievements[achievements.length - 1]
        achievementsList = achievementsList + "\n" + (a["unlocked"] == true ? "✅" : "❎") + " " + a["name"] + " ~ " + a["desc"];
    } else {
        let a = achievements[achievements.length - 1]
        achievementsList = achievementsList + "\n" + (a["unlocked"] == true ? "✅" : "❎") + " " + a["name"] + " ~ " + a["desc"];
    };
    alert(achievementsList);
};

function toggleNotoEmoji() {
    if (notoEmoji == true) {
        emojiButton.classList.remove("noto");
        notoEmoji = false;
    } else {
        emojiButton.classList.add("noto");
        let notif = document.createElement("p");
        notif.innerHTML = "coming soon :>";
        notifContainer.appendChild(notif);
        setTimeout(function(){notif.remove()}, 3000);
        notoEmoji = true;
    }
};

function stats() {
    let s = "Your Stats:";
    s = s + "\nMoney ~ " + money;
    s = s + "\nTotal Money All-Time ~ " + totalMoney;
    let recipesUnlocked = 0;
    for (let i = 0; i < foodList.length; i++) {
        if (foodList[i]["unlocked"] == true) {
            recipesUnlocked++;
        };
    };
    s = s + "\nRecipes Unlocked ~ " + recipesUnlocked;
    s = s + "\nIngredients Stock ~ " + stock;
    s = s + "\nMax Ingredients Storage ~ " + storage;
    s = s + "\nSeating ~ " + maxCustomers;
    let ads = 0;
    let raw = (customerRate / 3000);
    switch (raw) {
        case 4:
            ads = 1;
        break;
        case 3:
            ads = 2;
        break;
        case 2:
            ads = 3;
        break;
        case 1:
            ads = 4;
        break
    }
    s = s + "\nAdvertisments ~ " + ads;
    let achUnlocked = 0;
    for (let i = 0; i < achievements.length; i++) {
        if (achievements[i]["unlocked"] == true) {
            achUnlocked++;
        };
    };
    s = s + "\nAchievements Unlocked ~ " + achUnlocked;
    s = s + "\nTotal Customers Served ~ " + totalCustomers;
    alert(s);
};

document.getElementById("favicon").href = "https://nunnerrs.github.io/assets/web-chef.ico";
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
//hireRestocker.onclick = addRestocker;
saveButton.onclick = saveData;
eraseDataButton.onclick = eraseData;
statsButton.onclick = stats;
achievementsButton.onclick = showAchievements;
emojiButton.onclick = toggleNotoEmoji;
tutorialButton.onclick = tutorial;
// code to run 1 second after loading
setTimeout(function(){
    customer();
    if (customerRate < 3000) {
        customerRate = 3000;
        localStorage.setItem("customerRate", 3000);
    };
}, 1000);

setTimeout(function(){
    if (localStorage.getItem("tutorialCompleted") == "false" || localStorage.getItem("tutorialCompleted") == null) {
        tutorial();
    };
}, 1500);
setTimeout(function(){
    notify("Version " + v + " is out now! <a href='" + updateLink + "'>Click here</a> to see changes or <span class='link' onclick='alert(`Version " + v + " Updates:\n" + updateSummary + "`)'>click here</span> for a summary of the new update", 10000);
}, 1550);
setInterval(function(){
    if (stock <= Math.round(storage / 2) && restockers > 0) {
        notify("Automatically restocking ingredients…");
        let stockToAdd = Math.floor(storage / 2);
        setTimeout(function(){
            storage += stockToAdd;
            storageDisplay.innerHTML = storage;
        }, 1000);
    };
}, 1000);
setInterval(customer, customerRate);
setInterval(function(){
    if (stock == 0 && money < 2.5) {
        let rng = Math.floor(Math.random() * 3) + 5;
        money += rng;
        totalMoney += rng;
        moneyDisplay.innerHTML = money;
        notify("You found $" + rng + " on the floor!", 5000)
        if (hasAchievement(9) == false) {
            award(9);
        };
    };
}, 5000);
setInterval(saveData, 60000);
