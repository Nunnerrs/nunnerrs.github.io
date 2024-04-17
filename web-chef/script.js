var v = "v" + "1.8.2.1";
var version = document.getElementById("version");
version.innerHTML = v;
/*var updateLink = "https://github.com/Nunnerrs/nunnerrs.github.io/commit/";
var commitId = "cc38037163afa5339cf1d327a2287b8f840ae811";
updateLink = updateLink + commitId;*/
// make a new line to display as new line
// NO " OR ', do ALT + {SHIFT} + [ or ]
var updateSummary = `• removed the Valentine’s Day secret, hopefully you got it (next time to get it is next year)<br>
• fixed issues with chili ingredient<br>
• NEW CUSTOM UI<br>`;

// the `; SHOULD NOT be on its own line

var tutorialStep = 0;
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
var alertContainer = document.getElementById("alert-container");
var alertText = document.getElementById("alert-text");
var okButton = document.getElementById("ok-button");
var cancelButton = document.getElementById("cancel-button");
var ordersList = document.getElementById("orders-list");
var orderCount = document.getElementById("order-count");
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
var hireRestocker = document.getElementById("hire-restocker");
var restockers = 0;
if (localStorage.getItem("restockers") != null) {
    restockers = Number(localStorage.getItem("restockers"));
};
var restockerPrice = 100;
var buyIndex = document.getElementById("buy-index");
var indexPrice = 250;
//var ingSelection = document.getElementById("ing-selection");
var indexButton = document.getElementById("index-button");
var indexBox = document.getElementById("index");
var closeIndex = document.getElementById("close-index");
var index = false;
if (localStorage.getItem("index") == "true") {
    index = true;
	indexButton.style.visibility = "visible";
    //ingSearch.setAttribute("list", "ing-selection");
};
var saveButton = document.getElementById("save-button");
var eraseDataButton = document.getElementById("erase-data-button");
var statsButton = document.getElementById("stats-button");
var achievementsButton = document.getElementById("achievements-button");
var keybindsButton = document.getElementById("keybinds-button");
var tutorialButton = document.getElementById("tutorial-button");

const customerNames = [
    /*Me & my friends*/	"Nunners", "Kayleigh", "Lianna", "Skylar", "Yeen Yeen", "Jin", "Jeff", "Jaelle", "Chelsey", "Ethan", "Emma", "Anton", "Jeanne", "Tiffany", "Sai", "Maiah", "Jordan", "Aya", "Samantha", "Jaedyn", "Marian", "Nikki", "Thida", "Jonelle", "Sophia", "Anette", "Cameron", "Rafael",
    /*RM NPCs*/			"Mr. Wedgehead", "Wide Racoon", "Albert", "Amongus", "War Noodle", "The Sun", "Princess Sherk", "Patricia", "Dummy", "Jules", "Zack", "Burbspernge", "Pumkin",
    /*PGS NPCs*/		"Azalea", "Malo", "Billy Bob Joe",
    /*CGT NPCs*/		"Jack", "Holly", "Jake", "Daisy",
    /*Bandori*/			"Marina", "Arisa Ichigaya", "Kasumi Toyama", "Rimi Ushigome", "Saaya Yamabuki", "Tae Hanazono", "Himari Uehara", "Moca Aoba", "Ran Mitake", "Tomoe Udagawa", "Tsugumi Hazawa", "Chisato Shirasagi", "Eve Wakamiya", "Hina Hikawa", "Maya Yamato", "Hagumi", "Kanon Matsubara", "Kaoru Seta", "Kokoro Tsurumaki", "Michelle", "Misaki", "Ako Udagawa", "Lisa Imai", "Rinko", "Sayo Hikawa", "Yukina Minato", "Mashiro Kurata", "Nanami Hiromachi", "Rui", "Touko Kirigaya", "Tsukushi Futaba", "CHU²", "LAYER", "LOCKE", "MASKING", "PAREO",
    /*TBHK*/			"Nene Yashiro", "Hanako", "Kou Minamoto", "Aoi Akane", "Akane Aoi", "Teru Minamoto", "Lemon Yamabuki", "Sousuke Mitsuba", "Tsukasa", "Sakura Nanamine", "Natsuhiko Hyuuga", "Yako", "Tsuchigomori", "Cult", "Lili", "Clyde", "Alex",
    /*Yeen's friends*/	"Evilyn", "b a c h a n", "Sebastian", "Mina", "Liam", "Valerie", "Karmynnah", "Colette", "Makayla", "Kimora",
    /*NunnerLibrary*/	"Pinky", "Mint", "Hope", "Noah", "Richard", "Marcus", "Sasha", "Billy", "Bob", "Joe", "Liva", "Cory", "Eve", "Cole", "Phoebe", "Sarah", "Saki", "Micah", "Whiskey Pete", "Valentine", "Morgan O'Connell", "Buddy Hawkins", 
    /*Pokémon*/			"Shuckle", "Ash Ketchum", "Satoshi", "Misty", "Brock", "May", "Dawn", "Iris", "Cilan", "Serena", "Clement", "Bonnie", "Lana", "Mao", "Kaki", "Lilie", "Sophocles", "Goh", "Chloe", "Koharu",
    /*Comic book*/		"Bill", "Roski", "Ginny", "Emily", "Rebecca", "Joey", "Charlyy", "Bobby", "Sally", "Pippi", "Althea", "Derek", "Alford", "Steven", "Collin",
    /*Mochi Squishies*/	"Marshmallow", "Ginger", "Vered", "Snowy", "Blossom", "Melody", "Peep", "Piper", "Sunny", "Honey", "Gummy", "Snoopy", "Mrs. Polar", "Sharpie",
    /*Roblox Youtubers*/"Flamingo", "Denis", "Leah Ashe", "Kreek", "Kevin", "Sketch", "ItsFunneh", "LankyBox", "Laughability", "Russo", "Sabrina",
    /*Roblox*/          "Carl", "Builderman", "David Baszucki", "Barry", "Jandel", "Poppy",
    /*Random*/          "You", "Your Mom", "Your Dad", "Nobody", "???",
	/*Genshin*/			"Albedo", "Amber", "Arataki Itto", "Barbara", "Beidou", "Bennett", "Candace", "Charlotte", "Chevreuse", "Chongyun", "Collei", "Cyno", "Dehya", "Diluc", "Diona", "Dori", "Eula", "Faruzan", "Fiscl", "Freminet", "Furina", "Gaming", "Ganyu", "Gorou", "Hu Tao", "Kaedehara Kazuha", "Kaeya", "Kamisato Ayaka", "Kamisato Ayato", "Keqing", "Klee", "Kujou Sara", "Kuki Shinobu", "Layla", "Lisa", "Lynette", "Lyney", "Mika", "Mona", "Nahida", "Navia", "Neuvillette", "Nilou", "Ningguang", "Noelle", "Qiqi", "Raiden Shogun", "Razor", "Rosaria", "Sangonomiya Kokomi", "Sayu", "Shenhe", "Shikanoin Heizou", "Sucrose", "Tartaglia", "Thoma", "Tighnari", "Traveler", "Venti", "Wanderer", "Wriothesley", "Xiangling", "Xingqiu", "Xinyan", "Xianyun", "Xiao", "Yae Miko", "Yanfei", "Yaoyao", "Yelan", "Yoimiya", "Yun Jin", "Zhongli",
	/*Sanrio*/			"Gudetama", "Cinnamoroll", "Pom Pom Purin", "Keroppi", "Chococat", "Kuromi", "My Melody", "Hello Kitty", "Pochacco",
	/*Rascal haha*/		"Sakuta Azusagawa", "Mai Sakurajima", "Rio Futaba", "Tomoe Koga", "Saki Kamisato",
    /*Komi Can't Comm.*/"Komi", "Tadano", "Najimi", "Agari", "Yamai", "Nakanaka",
];
const ingredientsList = {
    alcohol: "🍷",
    apple: "🍎",
    "🍎": "🍎",
    bean: "🫘",
    beans: "🫘",
    "🫘": "🫘",
    beef: "🥩",
    bread: "🍞",
    "🍞": "🍞",
    butter: "🧈",
    "🧈": "🧈",
    cheese: "🧀",
    "🧀": "🧀",
    chicken: "🥩",
	chili: "🌶️",
	"🌶️": "🌶️",
    choco: "🍫",
    chocolate: "🍫",
    "🍫": "🍫",
	corn: "🌽",
	"🌽": "🌽",
    cream: "🥛",
    creme: "🥛",
    cucumber: "🥒",
    "🥒": "🥒",
    dough: "🍞",
    egg: "🥚",
    "🥚": "🥚",
    fish: "🐟",
    "🐟": "🐟",
    flour: "🌾",
    "🌾": "🌾",
    honey: "🍯",
    ice: "🧊",
    "🧊": "🧊",
	jalapeno: "🌶️",
	"jalapeño": "🌶️",
    lemon: "🍋",
    lemons: "🍋",
    "🍋": "🍋",
    lettuce: "🥬",
    "🥬": "🥬",
	maize: "🌽",
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
	pepper: "🌶️",
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

// {emoji: "", name: "ing"},
const ingIndexList = [{emoji: "🍎", name: "Apple"}, {emoji: "🫘", name: "Beans"},  {emoji: "🍞", name: "Bread"}, {emoji: "🧈", name: "Butter"}, {emoji: "🧀", name: "Cheese"}, {emoji: "🌶️", name: "Chili"}, {emoji: "🍫", name: "Chocolate"}, {emoji: "🌽", name: "Corn"}, {emoji: "🥒", name: "Cucumber"}, {emoji: "🥚", name: "Egg"}, {emoji: "🐟", name: "Fish"}, {emoji: "🌾", name: "Flour"}, {emoji: "🧊", name: "Ice"}, {emoji: "🍋", name: "Lemon"}, {emoji: "🥬", name: "Lettuce"}, {emoji: "🥩", name: "Meat"}, {emoji: "🥛", name: "Milk"}, {emoji: "🍜", name: "Noodles"}, {emoji: "🧅", name: "Onion"}, {emoji: "🍍", name: "Pineapple"}, {emoji: "🥔", name: "Potato"}, {emoji: "🍚", name: "Rice"}, {emoji: "🧂", name: "Salt"}, {emoji: "🦐", name: "Shrimp"}, {emoji: "🍯", name: "Syrup"}, {emoji: "🍅", name: "Tomato"}, {emoji: "💧", name: "Water"}, {emoji: "🍷", name: "Wine"}];
for (let i = 0; i < ingIndexList.length; i++) {
	let ing = ingIndexList[i];
	let b = document.createElement("button");
	b.classList.add("ingButton");
	b.innerHTML = ing.emoji;
	//console.log("a");
	b.onclick = function(){console.log(ing.emoji); ingSearch.value = ing.emoji; addIng({key: "Enter"});};
	b.title = ing.name;
	indexBox.appendChild(b);
};

// Initial profits are calculated by (# ing × 2)
// Sorted by profit, alphabetical name (descending order)
const foodList = [ // {emoji: "", ing: "", ingList: "ING", name: "FOODNAME", profit: AMOUNT, unlocked: false},
    {emoji: "🍹", ing: "🍷🍍🍋💧🍯🧊", ingList: "Wine,Pineapple,Lemon,Water,Syrup,Ice", name: "Tropical Cocktail", profit: 14, unlocked: false},
    {emoji: "🍰", ing: "🌾🥚🧈🥛🧀", ingList: "Flour,Egg,Butter,Milk,Cheese", name: "Cheesecake", profit: 10, unlocked: false},
    {emoji: "🌯", ing: "🌾🫘🍚🥩🧅", ingList: "Flour,Beans,Rice,Meat,Onion", name: "Burrito", profit: 9.5, unlocked: false},
    {emoji: "🥘", ing: "🍚🥩🦐🍅🍋", ingList: "Rice,Meat,Shrimp,Tomato,Lemon", name: "Paella", profit: 9, unlocked: false},
    {emoji: "🍔", ing: "🍞🧀🥩🥬🍞", ingList: "Bread,Cheese,Meat,Lettuce,Bread", name: "Burger", profit: 9, unlocked: false},
    {emoji: "🍲", ing: "💧🍜🥩🧅", ingList: "Water,Noodles,Meat,Onion", name: "Pho", profit: 8.5, unlocked: false},
    {emoji: "🥪", ing: "🍞🧀🍅🥬🍞", ingList: "Bread,Cheese,Tomato,Lettuce,Bread", name: "Sandwich", profit: 8, unlocked: false},
    {emoji: "🥧", ing: "🍎🌾🥚🧈", ingList: "Apple,Flour,Egg,Butter", name: "Apple Pie", profit: 8, unlocked: false},
    {emoji: "🍱", ing: "🍚🐟🦐🥒", ingList: "Rice,Fish,Shrimp,Cucumber", name: "Bento Box", profit: 7.5, unlocked: false},
	{emoji: "🍿", ing: "🌽🧈🧂", ingList: "Corn,Butter,Salt", name: "Popcorn", profit: 7, unlocked: false},
    {emoji: "🍕", ing: "🍞🍅🧀🥩", ingList: "Bread,Tomato,Cheese,Meat", name: "Pizza", profit: 7, unlocked: false},
    {emoji: "🌮", ing: "🌾🥩🥬🧅", ingList: "Flour,Meat,Lettuce,Onion", name: "Taco", profit: 6.5, unlocked: false},
    {emoji: "🥗", ing: "🥬🍅🥒🧅", ingList: "Lettuce,Tomato,Cucumber,Onion", name: "Salad", profit: 6, unlocked: false},
    {emoji: "🧇", ing: "🌾🥚🧈", ingList: "Flour,Egg,Butter", name: "Waffles", profit: 5, unlocked: false},
	{emoji: "🫔", ing: "🌽🥩🌶️🍅", ingList: "Corn,Meat,Chili,Tomato", name: "Tamale", profit: 5, unlocked: false},
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
    for (let j = 0; j < splitName.length; j++) {
        name = name + splitName[j];
    };
    if (localStorage.getItem(name) != null) {
        if (localStorage.getItem(name) == "true" || localStorage.getItem(name) == true) {
            foodList[i]["unlocked"] = true;
        };
    };
};
const recipes = [...foodList].reverse();
const unlocked = [];
recipeName.innerHTML = recipes[page]["emoji"] + " " + recipes[page]["name"] + "<br>Unlocked: " + (recipes[page]["unlocked"] == true ? "<emoji>✅</emoji>" : "<emoji>❎</emoji>") + "<br> Profit: $" + recipes[page]["profit"];
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
    {id: 2, name: "Tsugurific", desc: "Serve a baguette to Moca Aoba", unlocked: false},
    {id: 3, name: "Plants Only", desc: "Serve a salad to Holly or Malo", unlocked: false},
    {id: 4, name: "Caprisun!!", desc: "Serve apple juice to Skylar", unlocked: false},
    {id: 5, name: "Mmm…fries", desc: "Serve French fries to Hina or Sayo Hikawa", unlocked: false},
    {id: 6, name: "Jelly-filled Donuts", desc: "Serve a rice ball to Brock", unlocked: false},
    {id: 7, name: "Cake…", desc: "Serve cheesecake to Rebecca", unlocked: false},
    {id: 8, name: "Hollup—", desc: "Serve a fried egg to either Peep, Piper, or Sunny", unlocked: false},
    {id: 21, name: "Cannabalism?!", desc: "Serve pizza to Pippi", unlocked: false},
    {id: 24, name: "Alcoholic", desc: "Serve a cocktail to Whiskey Pete", unlocked: false},
    {id: 9, name: "Spare Change…", desc: "Find money the floor (run out of money & stock first)", unlocked: false},
    {id: 10, name: "I ❤️ Web Chef", desc: "Cook a certain food for Valentine's Day (secret #1)(<i>unobtainable</i>)", unlocked: false},
    {id: 11, name: "U HAXOR!1!!", desc: "\"Hack\" the game (discover secret #2)", unlocked: false},
    {id: 12, name: "NO. JUST NO.", desc: "Attempt to cook something terrible (discover secret #3)", unlocked: false},
    {id: 13, name: "Free Advertisment", desc: "Try to cook a certain \"phrase\" (discover secret #4)", unlocked: false},
    {id: 14, name: "Top Secret", desc: "Discover the easiest secret of all time (#5)", unlocked: false},
    {id: 22, name: "Oops I meant the other one", desc: "Homophones… (secret #6)", unlocked: false},
    {id: 23, name: "WORM", desc: "Get lucky (1% chance)(secret #7)", unlocked: false},
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
		notifContainer.style.backgroundColor = "rgba(26, 46, 64, 0.75)";
		notifContainer.style.visibility = "visible";
        let notif = document.createElement("p");
        notif.innerHTML = notifText;
        notifContainer.appendChild(notif);
        if (time == null) {
            time = 5000;
        };
		setTimeout(function(){notif.remove()}, time);
		/*
        setTimeout(function(){
			console.log(notifContainer.childNodes.length);
            if (notifContainer.childNodes.length == 1) {
                let t = 0.75;
                let fade = setInterval(function(){
                    if (t > 0) {
                        t -= 0.05;
                        notif.style.opacity = t;
                        notifContainer.style.backgroundColor = "rgba(26, 46, 64, " + t + ")";
                    } else {
                        notif.remove();
                    };
                }, 50);
                setTimeout(function(){
					clearInterval(fade);
					notifContainer.style.backgroundColor = "rgba(26, 46, 64, 0.75)";
					notifContainer.style.visibility = "hidden";
				}, 750);
            } else {
                notif.remove();
            };
        }, time);*/
    };
};

function alert(text) {
	if (indexBox.style.visibility == "visible") {
		indexBox.style.visibility = "hidden";
		closeIndex.style.visibility = "hidden";
	};
	if (alertContainer.style.visibility == "visible") {
		ok();
	};
	if (text.match("Achievements:")) {
		alertText.style.textAlign = "left";
	} else {
		alertText.style.textAlign = "";
	};
	let title = text.split(":")[0].trim();
	if (title.match("Achievements") || title.match("Your Stats") || title.match("Keybinds")) {
		let span = document.createElement("span");
		span.id = "header";
		span.innerHTML = title;
		alertContainer.insertBefore(span, alertContainer.firstChild);
		text = text.split(title + ":")[1].trim();
	};
	alertText.innerHTML = text;
	alertContainer.style.visibility = "visible";
};

function ok() {
	alertText.innerHTML = "";
	alertContainer.style.visibility = "hidden";
	if (document.getElementById("header")) {
		document.getElementById("header").remove();
	};
	if (tutorialStep == 4) {
		tutorialStep = 0;
		alert("When certain customers order specific food or find a secret, you gain an achievement! View all your achievements by clicking the " + achievementsButton.innerHTML + " button. Show them off to your friends and family!<br><br>See your total money, recipes, upgrades and more by pressing the " + statsButton.innerHTML + " button. Check out all the keybinds by clicking the [A] button. If you want to redo the tutorial, click on the i button. Happy cooking!");
		localStorage.setItem("tutorialCompleted", "true");
	};
};

function cancel() {
	alertText.innerHTML = "";
	alertContainer.style.visibility = "hidden";
};

function customer(t) {
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
		if (t == true) {
			let rb = {emoji: "🍙", ing: "🍚", ingList: "Rice", name: "Rice Ball", profit: 1.5, unlocked: true};
			let fries = {emoji: "🍟", ing: "🥔", ingList: "Potato", name: "French Fries", profit: 2, unlocked: true};
        	order = Math.floor(Math.random() * 2) == 0 ? rb : fries;
		};
        unlocked.length = 0;
        customer.innerHTML = "<emoji>" + order["emoji"] + "</emoji> ~ $" + order["profit"] + " ~ " + customerName;
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
		setOrderCount();
		return order;
    };
};

function setOrderCount() {
	orderCount.innerHTML = "(" + customers + "/" + maxCustomers + ")";
}

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
	let proceed = false;
    if (ingredients.innerHTML == order["emoji"]) {
		proceed = true;
		ingredients.innerHTML = "Empty";
	 	ingredients.style.color = "rgb(20, 65, 100)";
        makeFoodButton.disabled = true;
        clearIng.disabled = true;
	} /*else if (ingredients.innerHTML.search(order["emoji"]) != -1) {
		proceed = true;
		let ing = ingredients.innerHTML;
		let p = ing.search(order["emoji"]);
		ingredients.innerHTML = ing.substring(p + 1, ing.length - 1);
		//console.log(ing.charAt(0),ing.charAt(1),ing.charAt(2));
	}*/
	if (proceed == true) {
        customers -= 1;
        totalCustomers++;
        if (totalCustomers >= 100) {
            award(17);
        } else if (totalCustomers >= 500) {
            award(18);
        } else if (totalCustomers >= 1000) {
            award(19);
        };
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
		if (tutorialStep == 3) {
			tutorialStep++;
			alert("Yay, you earned money! As you make more food, you'll begin to run out of stock. Use your money to refill your ingredients or buy upgrades like new recipes and more seating.");
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
        if (customerName.match("Whiskey Pete") != null && orderEmoji == "🍸") {
            award(24);
        };
        customer.remove();
		setOrderCount();
    };
};

function findIng() {
    let i = ingSearch.value.toLowerCase().trim();
    if (ingredientsList[i]) {
        return ingredientsList[i];
    } else if (ingredientsList[i.split(" ")[0]]) {
        return i.split(" ");
    } else if (i == "⬆️⬆️⬇️⬇️⬅️➡️⬅️➡️🅱️🅰️" || i == "dog" || i == "🐶" || i == "🐕" || i == "baby" || i == "babies" || i == "👶" || i == "girl" || i == "👧" || i.match("child") || i == "🧒" || i == "boy" || i == "👦" || i.match("orphan")
              || i.match("nunnerrs.github.io")
              || i == "secret" || i.match("sus") || i.match("among")
              || i.match("flower")) {
        return i;
    } else {
        return null;
    };
};

function addIng(e) {
    let add = function(i){
        if (stock - i.length/2 >= 0) {
            if (ingredients.innerHTML == "Empty") {
                ingredients.innerHTML = "";
                ingredients.style.color = "white";
                makeFoodButton.disabled = false;
                clearIng.disabled = false;
            };
            ingSearch.value = "";
            if (window.orientation > 1) {
                //ingSearch.blur();
            };
            ingredients.innerHTML = ingredients.innerHTML + i;
            //stock -= i.length/2;
            stock -= 1;
            stockDisplay.innerHTML = stock;
            if (i.match("🍎") && Math.floor(Math.random() * 100) == 0) {
                ingSearchError.innerHTML = "🪱";
                setTimeout(function(){
                    notify("oh looks like you found a worm in the apple… (Secret #7)", 15000);
                    setTimeout(function(){award(23)}, 1000);
                }, 1000);
            };
        } else {
            ingSearchError.innerHTML = "You don't have enough ingredients!";
            setTimeout(function() {ingSearchError.innerHTML = "";}, 2500);
        };
    };
    if (e.key == "Enter") {
        let ing = findIng();
        if (ing != null && stock > 0) {
            if (typeof ing == "string") {
                if (ing == "⬆️⬆️⬇️⬇️⬅️➡️⬅️➡️🅱️🅰️") {
                    setTimeout(function(){ingSearch.value = ""}, 1);
                    moneyDisplay.innerHTML = "∞";
                    stockDisplay.innerHTML = "∞";
                    notify("HOW?!? YOU HACKER!! (Secret #2)", 7500);
                    award(11);
                    setTimeout(function(){
                        moneyDisplay.innerHTML = money;
                        stockDisplay.innerHTML = stock;
                        notify("jk it ain't real XD", 5000);
                    }, 7500);
                } else if (ing == "dog" || ing == "🐶" || ing == "🐕" || ing == "baby" || ing == "babies" || ing == "👶" || ing == "girl" || ing == "👧" || ing.match("child") || ing == "🧒" || ing == "boy" || ing == "👦" || ing.match("orphan")) {
                    ingSearch.value = "";
                    ingSearchError.innerHTML = "NO. JUST NO. (Secret #3)";
                    setTimeout(function(){ingSearchError.innerHTML = ""}, 5000);
                    award(12);
                } else if (ing.match("nunnerrs.github.io")) {
                    ingSearch.value = "";
                    ingSearchError.innerHTML = "umm are you trying to cook my website?? (Secret #4)";
                    setTimeout(function(){ingSearchError.innerHTML = ""}, 5000);
                    award(13);
                } else if (ing == "secret" || ing.match("sus") || ing.match("among")) {
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
                    add(ing);
					if (tutorialStep == 1) {
						tutorialStep++;
						ingSearch.blur();
						alert("Great! Next, click the \"" + makeFoodButton.innerHTML + "\" button to turn them into food!");
					};
                };
            } else if (typeof ing == "object") {
                let bulkIng = "";
                for (let i = 0; i < ing.length; i++) {
                    if (ingredientsList[ing[i]]) {
                        bulkIng += ingredientsList[ing[i]];
                    };
                };
                add(bulkIng);
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
    // loop through each recipe
    for (let i = 0; i < foodList.length; i++) {
        //console.log(ingredients.innerHTML + " " + foodList[i]["ing"]);
        let r = foodList[i];
        //console.log(foodList[i].name);
        // check if table ing exactly equals recipe
        if (ingredients.innerHTML == foodList[i]["ing"]) {
            ingredients.innerHTML = foodList[i]["emoji"];
            //console.log("found food: " + foodList[i]["emoji"]);
			if (tutorialStep == 2) {
				tutorialStep++;
				alert("Now that you've made the food, click the \"Serve\" button in the Orders menu");
			};
            break;
        } else {
            // convert string variables into arrays (emojis)
            let tIng = ingredients.innerHTML;
            let input = [];
            let emoji = null;
			let tOffset = 0;
            for (let j = 0; j < tIng.length; j++) {
				//console.log(tIng.charCodeAt(j));
                // emoji becomes two objects, combine first and second part by odds and evens or smth
				if (tIng.charCodeAt(j) != 65039) {
					if ((j + tOffset) % 2 == 0) {
						emoji = tIng[j];
					} else {
						emoji += tIng[j];
						input.push(emoji);
						//console.log(emoji);
						emoji = null;
					};
				} else {
					//console.log(j + tOffset);
					tOffset++;
					continue;
				};
            };
			//console.log(input);
            let ring = r.ing;
            let rIng = [];
			let rOffset = 0;
            for (let j = 0; j < ring.length; j++) {
				if (ring.charCodeAt(j) != 65039) {
					if ((j + rOffset) % 2 == 0) {
						emoji = ring[j];
					} else {
						emoji += ring[j];
						rIng.push(emoji);
						//console.log(emoji);
						emoji = null;
					};
				} else {
					//console.log(j + rOffset);
					rOffset++;
					continue;
				};
            };
            
            // compare each recipe ing with table ing
            for (let j = 0; j < rIng.length; j++) {
                //console.log(rIng[j]);
                // loop 1 ing
                for (let k = 0; k < input.length; k++) {
                	//console.log(input[k]);
                    // check if table ing #k is the same as recipe ing #j
                	if (input[k] == rIng[j]) {
                        // remove match from both
                        input.splice(k, 1);
                        rIng.splice(j, 1);
						//console.log(rIng[j] + " = " + input[k]);
                        j -= 1;
                        break;
                    };
                };
            };
            //console.log(rIng);
            /*
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
            };*/
            //console.log(input, input == " ", input == "");

            // check if both lists are empty, if so, perfect match YAY
            // if table ing is more than the recipe or is missing some ing, it will fail (>v<)b
            if (input == "" && rIng == "") {
                ingredients.innerHTML = foodList[i]["emoji"];
                break;
            };
        };
    };
    
    // Valentine's Day secret
    /*if (ingredients.innerHTML == "🍫") {
        ingredients.innerHTML = "💝";
		notify("Happy Valentines Day! Thanks for playing Web Chef ❤️ (Secret #1)", 10000);
        award(10);
    };*/
    
    if (ingredients.innerHTML == "🌾🥚") {
        notify("The Pancakes recipe has been updated; See updated recipe in Recipes book", 8000);
    };
    if (ingredients.innerHTML == "🧊") {
        notify("The Shaved Ice recipe has been updated; See updated recipe in Recipes book", 8000);
    };
    if (ingredients.innerHTML == "🌾🍫") {
        notify("The Cookie recipe has been updated; See updated recipe in Recipes book", 8000);
    };
    if (ingredients.innerHTML == "💧🥩🥬🫘🍋") {
        notify("The Stew recipe has been changed to Paella; See updated recipe in Recipes book", 8000);
    };
};

function clear() {
    //if (stock + ingredients.innerHTML.length/2 < storage) {
	let ing = ingredients.innerHTML;
	let str = ing.length / 2; // stock to refund
	if (ing.match("🌶️")) {
		let chilis = 0;
		for (let i = 0; i < ing.length; i++) {
			if (ing.charCodeAt(i) == 65039) {
				chilis++;
				//console.log("PEPPER");
			}
		}
		str -= chilis * 0.5;
	}
    stock += str;
    stockDisplay.innerHTML = stock;
    /*} else {
        stock = storage;
        stockDisplay.innerHTML = stock;
    };*/
	if (tutorialStep == 2) {
		tutorialStep -= 1;
		let i = "ingredient you threw away.";
		if (ingredients.innerHTML.match("🍚")) {
			i = "the rice back.";
		} else if (ingredients.innerHTML.match("🥔")) {
			i = "the potato back.";
		};
		alert("This button resets the ingredients on the table. Add " + i);
	};
	ingredients.innerHTML = "Empty"
    ingredients.style.color = "rgb(20, 65, 100)";
    makeFoodButton.disabled = true;
    clearIng.disabled = true;
};

function flipPage() {
    recipeNum.innerHTML = page + 1;
    recipeName.innerHTML = "<emoji>" + recipes[page]["emoji"] + "</emoji> " + recipes[page]["name"] + "<br>Unlocked: " + (recipes[page]["unlocked"] == true ? "✅" : "❎") + "<br> Profit: $" + recipes[page]["profit"];
    recipeIng.innerHTML = "";
    let ing = recipes[page]["ingList"].split(",");
    for (let i = 0; i < ing.length; i++) {
		let ingredient = ing[i];
		if (recipes[page].unlocked == false) {
			ingredient = "???";
		}
        recipeIng.innerHTML = recipeIng.innerHTML + "<li>" + ingredient + "</li>";
    };
};

function backPage() {
    if (page > 0) {
        page -= 1;
        flipPage();
    };
};

function nextPage() {
    if (page < recipes.length - 1) {
        page++;
        flipPage();
    };
};

function addStock(ing) {
    let c = confirm("Buy " + ing + " ingredients for $" + ing/2 + "?");
    if (c == true && money >= ing/2 && stock + ing <= storage) {
        money -= ing/2;
        moneyDisplay.innerHTML = money;
        stock += ing;
        stockDisplay.innerHTML = stock;
    } else if (c == true && money >= ing/2 && stock == storage) {
        alert("You're already at max stock! (no money was lost)");
    } else if (c == true && money >= ing/2 && stock + ing > storage) {
        let c = confirm("Are you sure? Buying this will set your stock to " + storage + ", not " + (stock + ing) + "!");
        if (c == true) {
            money -= ing/2;
            moneyDisplay.innerHTML = money;
            stock = storage;
            stockDisplay.innerHTML = stock;
        };
    } else if (c == true && money < ing/2) {
        alert("You don't have enough money to buy this! (Price: $" + ing/2 + ")");
    } else {
        //alert("Error #1: Could not process request; If you see this message, screenshot it and show it to Nunners so she can fix this error. Data: money is " + money + ", ing is " + ing + ", stock is " + stock + ", storage is " + storage + ", c is " + c + ", money >= ing/2 is " + money >= ing/2 + ", stock + ing < storage is " + (stock + ing < storage));
    };
};

function addStorage() {
    let c = confirm("Buy 5 extra storage for $" + storagePrice + "?");
    if (c == true && money >= storagePrice) {
        money -= storagePrice;
        moneyDisplay.innerHTML = money;
        storage += 5;
        storageDisplay.innerHTML = storage;
    } else if (c == true && money < storagePrice) {
        alert("You don't have enough money to buy this! (Price: $" + storagePrice + ")");
    } else {
        //alert("Error #2: Could not process request; If you see this message, screenshot it and show it to Nunners so she can fix this error. Data: money is " + money + ", storagePrice is " + storagePrice + ", c is " + c + ", money >= storagePrice is " + money >= storagePrice);
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
                for (let j = 0; j < foodList.length; j++) {
                    if (foodList[j]["unlocked"] == false) {
                        unlockedAll = false;
                        break;
                    };
                };
                if (unlockedAll == true) {
                    award(1);
                };
                notify("You unlocked the recipe for " + foodList[f]["name"] + "! (" + foodList[f]["emoji"] + ")", 5000);
                saveData();
                break;
            };
        };
        if (unlocked == false) {
            alert("You have already unlocked all " + foodList.length + " recipes!");
        };
    } else {
        alert("You don't have enough money to buy this! (Price: $" + recipePrice + ")");
    };
};

function buyRecipe() {
    let c = confirm("Buy a random recipe for $" + recipePrice + "?");
    if (c == true) {
        unlockRecipe(true);
    };
};

function addSeating() {
    let c = confirm("Buy seating (+ 1 max customers) for $" + seatingPrice + "?");
    if (c == true && money >= seatingPrice) {
        money -= seatingPrice;
        moneyDisplay.innerHTML = money;
        maxCustomers++;
		setOrderCount();
    } else if (c == true && money < seatingPrice) {
        alert("You don't have enough money to buy this! (Price: $" + seatingPrice + ")");
    } else {
        //alert("Error #3: Could not process request; If you see this message, screenshot it and show it to Nunners so she can fix this error. Data: money is " + money + ", seatingPrice is " + seatingPrice + ", c is " + c + ", money >= seatingPrice is " + money >= seatingPrice);
    };
};

function addAd() {
    let c = confirm("Buy ad (customers arrive faster) for $" + adPrice + "?");
    if (c == true && money >= adPrice) {
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
    } else if (c == true && money < adPrice) {
        alert("You don't have enough money to buy this! (Price: $" + adPrice + ")");
    } else {
        //alert("Error #4: Could not process request; If you see this message, screenshot it and show it to Nunners so she can fix this error. Data: money is " + money + ", adPrice is " + adPrice + ", c is " + c + ", money >= adPrice is " + money >= adPrice);
    };
};

function addRestocker() {
    let c = confirm("Hire a restocker (automatically restocks) for $" + restockerPrice + "?");
    if (c == true && money >= restockerPrice) {
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
    } else if (c == true && money < restockerPrice) {
        alert("You don't have enough money to buy this! (Price: $" + restockerPrice + ")");
    };
};

function addIndex() {
    let c = confirm("Buy ingredient index (easy ingredient selection) for $" + indexPrice + "?");
    if (c == true && money >= indexPrice) {
        if (ingSearch.list == null && index == false) {
            money -= indexPrice;
            moneyDisplay.innerHTML = money;
            index = true;
            localStorage.setItem("index", "true");
            //ingSearch.setAttribute("list", "ing-selection");
			ingSearch.onfocus = function(){toggleIndex(true)};
        } else {
            let notif = document.createElement("p");
            notif.innerHTML = "You can't buy any more indexes! (Max of 1)";
            notifContainer.appendChild(notif);
            setTimeout(function(){notif.remove()}, 5000);
        };
    } else if (c == true && money < indexPrice) {
        alert("You don't have enough money to buy this! (Price: $" + indexPrice + ")");
    };
};

/*
function addPRODUCT() {
    let c = confirm("Buy ingredient index (easy ingredient selection) for $" + _PRICEVARIABLE + "?");
    if (c == true && money >= _PRICEVARIABLE) {
        // e.g. PRODUCTCOUNTVAR < MAXIMUM or you might not even need the if
        if (_CONDITION) {
            money -= _PRICEVARIABLE;
            moneyDisplay.innerHTML = money;
            // do something
        } else {
            let notif = document.createElement("p");
            notif.innerHTML = "You can't buy any more PRODUCTNAME! (Max of MAXIMUM)";
            // if it's a worker put "hire" instead of "buy"
            notifContainer.appendChild(notif);
            setTimeout(function(){notif.remove()}, 5000);
        };
    } else if (c == true && money < _PRICEVARIABLE) {
        alert("You don't have enough money to buy this! (Price: $" + _PRICEVARIABLE + ")");
    };
};
*/

function saveData() {
    if (saveButton.disabled != true) {
        localStorage.setItem("money", money);
        localStorage.setItem("totalMoney", totalMoney);
        localStorage.setItem("maxCustomers", maxCustomers);
        localStorage.setItem("totalCustomers", totalCustomers);
        localStorage.setItem("customerRate", customerRate);
        localStorage.setItem("stock", stock);
        localStorage.setItem("storage", storage);
        localStorage.setItem("restockers", restockers);
        localStorage.setItem("index", index);
        for (let i = 0; i < foodList.length - 2; i++) {
            let splitName = foodList[i]["name"].toLowerCase().split(" ");
            let name = "";
            for (let j = 0; j < splitName.length; j++) {
                name = name + splitName[j];
            };
            localStorage.setItem(name, foodList[i]["unlocked"].toString());
        };
        for (let i = 0; i < achievements.length - 1; i++) {
            let a = achievements[i];
            localStorage.setItem("achievement" + a["id"].toString(), a["unlocked"].toString());
        };
        saveButton.disabled = true;
        //saveButton.style.color = "rgb(150, 150, 150)";
        notify("Data saved!", 2500);
        setTimeout(function(){saveButton.disabled = false;}, 2500);
    };
};

function eraseData() {
    let c = confirm("Are you sure you want to erase all your data? (THIS ACTION CANNOT BE UNDONE IF YOU CLICK OK)");
    if (c == true) {
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
            for (let j = 0; j < splitName.length - 1; j++) {
                name = name + splitName[j];
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
        customerFunction = setTimeout(customer, 1000);
        notify("Data erased!", 5000);
    };
};

function tutorial() {
	if (tutorialStep == 0) {
		let c = confirm("Would you like to begin the tutorial? (Recommended for those new to Web Chef since you may not understand how things work)");
		if (c == true && tutorialStep == 0) {
			tutorialStep = 1;
			let o = null;
			if (ordersList.innerHTML == null || ordersList.innerHTML == "") {
				o = customer(true);
			} else {
				let order = ordersList.innerHTML.toString().split("</li>")[0].split("emoji>")[1].split("</")[0];
				if (order != "🍙" && order != "🍟") {
					o = customer(true);
				};
			};
			let order = ordersList.innerHTML.toString().split("</li>")[0].split("emoji>")[1].split("</")[0];
			//console.log(order, o["emoji"]);
			if (o != null) {
				order = o["emoji"];
			};
			let ing = order == "🍙" ? "rice" : "potato";
			alert("Welcome to Web Chef! This is a simple restaurant game where you prepare food for customers. Best played on a PC or tablet.<br><br>Looks like there's a customer! To prepare their order, enter the names of the ingredients required to make the food. (HINT: enter \"" + ing + "\" into the textbox)");
			ingSearch.focus();
			if (indexBox.style.visibility == "visible") {
				indexBox.style.visibility = "hidden";
				closeIndex.style.visibility = "hidden";
			};
			/*alert("For example, if their order is \"🍙\" you would type \"rice\" into the textbox & hit \"go\"/\"enter\". If you want to view the ingredients for a certain food, click through the pages of the Recipes book.");
			alert("Once you add all the required ingredients to the Table, click the \"" + makeFoodButton.innerHTML + "\" button to fuse! Then, click the Serve button to give the food.");
			alert("Click on the \"" + clearIng.innerHTML + "\" button if you ever mess up with the order of ingredients. Doing so refunds your stock, so don't worry about wasting money.");
			alert("Serve food to customers and earn money! Use it to buy upgrades like recipes, seating, and advertisements (click each \"Purchase\" button to learn more about what they do). Don't forget to buy ingredients stock since you don't have unlimited ingredients.");
			alert("Click on the \"" + statsButton.innerHTML + "\" button to view a list of your game stats like total money, the number of recipes unlocked, and total customers served!")
			alert("You can unlock achievements by serving specific food to certain customers, discovering secrets, and more! View them by clicking on the yellow \"" + achievementsButton.innerHTML + "\" button at the bottom-right corner and show them off to your friends and family :D");
			alert("That's it! Click on the blue \"" + tutorialButton.innerHTML + "\" button in the bottom right corner to go through the tutorial again anytime. Happy cooking!");*/
		};
	} else {
		let c = confirm("Are you sure you want to exit the tutorial?")
		if (c == true) {
			tutorialStep = 0;
			cancel();
		};
	};
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
        achievementsList = achievementsList + "<br>" + (a["unlocked"] == true ? "✅" : "❎") + " " + a["name"] + " ~ " + a["desc"];
        if (a["id"] != 15 && a["unlocked"] == false) {
            unlockedAll = false;
        };
    };
    if (unlockedAll == true) {
        award(15);
        let a = achievements[achievements.length - 1]
        achievementsList = achievementsList + "<br>" + (a["unlocked"] == true ? "✅" : "❎") + " " + a["name"] + " ~ " + a["desc"];
    } else {
        let a = achievements[achievements.length - 1]
        achievementsList = achievementsList + "<br>" + (a["unlocked"] == true ? "✅" : "❎") + " " + a["name"] + " ~ " + a["desc"];
    };
    alert(achievementsList);
};

function showKeybinds() {
    let k = `Keybinds:<br>
Left Arrow/A — Go back a page (recipe book)<br>
Right Arrow/D — Next page (recipe book)<br>
S — Save data<br>
E — Turn ingredients into food<br>
Backspace — Clear ingredients from table<br>
Q — OK (pop-ups)<br>
F — View stats<br>
G — View achievements<br>
H — View keybinds<br>
J — Begin tutorial
`;
    alert(k);
}

function stats() {
    let s = "Your Stats:";
    s = s + "<br>Money ~ " + money;
    s = s + "<br>Total Money All-Time ~ " + totalMoney;
    let recipesUnlocked = 0;
    for (let i = 0; i < foodList.length; i++) {
        if (foodList[i]["unlocked"] == true) {
            recipesUnlocked++;
        };
    };
    s = s + "<br>Recipes Unlocked ~ " + recipesUnlocked;
    s = s + "<br>Ingredients Stock ~ " + stock;
    s = s + "<br>Max Ingredients Storage ~ " + storage;
    s = s + "<br>Seating ~ " + maxCustomers;
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
    };
    s = s + "<br>Advertisments ~ " + ads + " (" + customerRate/1000 + " sec)";
    let achUnlocked = 0;
    for (let i = 0; i < achievements.length; i++) {
        if (achievements[i]["unlocked"] == true) {
            achUnlocked++;
        };
    };
    s = s + "<br>Achievements Unlocked ~ " + achUnlocked;
    s = s + "<br>Total Customers Served ~ " + totalCustomers;
    alert(s);
};

var keys = "";

function keybinds(e) {
    let k = e.key.toLowerCase();
	//console.log(k);
    if (document.activeElement != ingSearch) {
		if (ingredients.innerHTML.search("Empty") == -1 && makeFoodButton.disabled != true && clearIng.disabled != true) {
			if (k == "e") {
				makeFood();
			};
			if (k == "backspace") {
				clear();
			};
		};
		if (k == "q") {
			ok();
		};
		if (k == "w") {
			ingSearch.focus();
			let i = ingSearch.value;
			if (i != null) {
				setTimeout(function(){
					ingSearch.value = i.substring(0, i.length);
					//ingSearch.value = "a";
				}, 1);
			} else {
				ingSearch.value = "";
			};
		};
		if (k == "s") {
				saveData();
			};
        if (k == "f") {
            stats();
        };
        if (k == "g") {
            showAchievements();
        };
        if (k == "h") {
            showKeybinds();
        };
        if (k == "j") {
            tutorial();
        };
        if (k == "arrowleft" || k == "a") {
            backPage();
        };
        if (k == "arrowright" || k == "d") {
            nextPage();
        };
    } else {
		if (k == "escape") {
			ingSearch.blur();
			indexBox.style.visibility = "hidden";
			closeIndex.style.visibility = "hidden";
		};
		if (k == "arrowup" || k == "arrowdown" || k == "arrowleft" || k == "arrowright" || k == "b" || k == "a") {
        	keys += k;
		};
    };
    if (keys.match("arrowuparrowuparrowdownarrowdownarrowleftarrowrightarrowleftarrowrightba")) {
        keys = "";
        // if you edit the secret, edit the one in addIng function
        setTimeout(function(){ingSearch.value = ""}, 1);
        moneyDisplay.innerHTML = "∞";
        stockDisplay.innerHTML = "∞";
        notify("HOW?!? YOU HACKER!! (Secret #2)", 7500);
        award(11);
        setTimeout(function(){
            moneyDisplay.innerHTML = money;
            stockDisplay.innerHTML = stock;
            notify("jk it ain't real XD", 5000);
        }, 7500);
    };
};

function toggleIndex(show) {
	// comment line and uncomment below for testing mode
	if (index == true) {
	//if (true) {
		if (show == false) {
			indexBox.style.visibility = "hidden";
			closeIndex.style.visibility = "hidden";
		} else if (show == true) {
			indexBox.style.visibility = "visible";
			closeIndex.style.visibility = "visible";
		} else {
			let v = indexBox.style.visibility;
			indexBox.style.visibility = v == "visible" ? "hidden" : "visible";
			closeIndex.style.visibility = v == "visible" ? "hidden" : "visible";
		};
	};
};

//document.getElementById("favicon").href = "https://nunnerrs.github.io/assets/web-chef.ico";
okButton.onclick = ok;
//cancelButton.onclick = cancel;
if (index == true) {
	ingSearch.onfocus = function(){toggleIndex(true)};
};
closeIndex.onclick = function(){toggleIndex(false)};
//ingSearch.onblur = function(){toggleIndex(false)};
ingSearch.onkeydown = addIng;
indexButton.onclick = toggleIndex;
makeFoodButton.onclick = makeFood;
clearIng.onclick = clear;
pageL.onclick = backPage;
pageR.onclick = nextPage;
document.onkeydown = keybinds;

buyStock5.onclick = function(){addStock(5)};
buyStock10.onclick = function(){addStock(10)};
buyStock20.onclick = function(){addStock(20)};
buyStock50.onclick = function(){addStock(50)};
buyRecipeButton.onclick = buyRecipe;
buyStorage.onclick = addStorage;
buySeating.onclick = addSeating;
buyAd.onclick = addAd;
hireRestocker.onclick = addRestocker;
buyIndex.onclick = addIndex;

saveButton.onclick = saveData;
eraseDataButton.onclick = eraseData;
statsButton.onclick = stats;
achievementsButton.onclick = showAchievements;
keybindsButton.onclick = showKeybinds;
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
    //notify("Version " + v + " is out now! <a href='" + updateLink + "'>Click here</a> to see changes or <span class='link' onclick='alert(`Version " + v + " Updates:\n" + updateSummary + "`)'>click here</span> for a summary of the new update", 10000);
    notify("Version " + v + " is out now! <span class='link' onclick='alert(`Version " + v + " Updates:\n" + updateSummary + "`)'>Click here</span> for a summary of the new update", 10000);
}, 1550);
setInterval(function(){
    let stockToAdd = Math.floor(storage / 2);
    if (stock <= Math.round(storage / 2) && money - stockToAdd > 0 && restockers > 0) {
        notify("Restocking ingredients…", 2000);
        money -= stockToAdd/2
        moneyDisplay.innerHTML = money;
        setTimeout(function(){
            stock += stockToAdd;
            stockDisplay.innerHTML = stock;
        }, 1000);
    };
    if (stock > storage) {
        notify("Your stock is overflowing!", 1000);
        stock -= 1;
        stockDisplay.innerHTML = stock;
    };
}, 2000);
var customerFunction = setInterval(customer, customerRate);
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