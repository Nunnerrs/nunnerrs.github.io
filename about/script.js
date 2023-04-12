var title = document.getElementById("title");
var button = document.getElementById("click-button");
var clickMsg = document.getElementById("click-msg");
var checkboxes = document.getElementById("checkboxes");
var visitCount = Number(localStorage.getItem("visits"));
var kahootUsername = document.getElementById("kahoot-username");
var kahootGenerator = document.getElementById("kahoot-generator");

const adjectives = ["Agent", "Agile", "Amazing", "Amiable", "Aquatic", "Arctic", "Awesome",
                   "Blue", "Bold", "Bright",
                   "Champion", "Classy", "Clever", "Crazy", "Creative", "Cute",
                   "Daring", "Diplomat", "Doctor", "Dynamic",
                   "Eager", "Elated", "Epic", "Excited",
                   "Fabulous", "Flying", "Fuzzy",
                   "Golden", "Happy", "Honest",
                   "Inspired", "Jolly", "Joyful", "Kind",
                   "Legend", "Lively", "Lovely", "Magic", "Majestic", "Mountain",
                   "Purple", "Radiant", "Rational", "Red", "Rocky",
                   "Silly", "Snowy", "Speedy", "Stellar", "Super",
                   "Wise", "Wonder", "Zany"];
const animals = ["Alpaca", "Ant", "Bear", "Cat", "Cheetah", "Condor", "Crab",
                "Dingo", "Dog", "Dove", "Dragon", "Duck",
                "Fox", "Frog", "Gator", "Giraffe", "Glider", "Goose",
                "Hamster", "Hen", "Horse", "Ibex", "Kitten",
                "Lemur", "Leopard", "Lion", "Newt", "Octopus", "Otter",
                "Penguin", "Pigeon", "Quail", "Raven", "Rhino",
                "Sable", "Seal", "SeaLion", "Sloth", "Snail", "Sphinx", "Squid", "Swan",
                "Tiger", "Wallaby", "Wildcat", "Wolf",
                "Yak", "Yeti", "Zebra"];

if (visitCount == null || visitCount == NaN || typeof visitCount != "number") {
    localStorage.setItem("visits", 0);
    visitCount = 0;
};
localStorage.setItem("visits", visitCount + 1);
visitCount = Number(localStorage.getItem("visits"));
if (visitCount == 1 || visitCount == "1") {
    document.getElementById("visits").innerHTML = visitCount + " time";
} else {
    document.getElementById("visits").innerHTML = visitCount + " times";
};

function click() {
    let clicks = document.getElementById("clicks");
    let newClicks = Number(clicks.innerHTML) + 1;
    clicks.innerHTML = newClicks;
    if (Number(newClicks) == 50) {
        clickMsg.innerHTML = "wow you did it! you should feel cool after being congratulated by Nunners herself";
    };
    if (Number(newClicks) == 100) {
        clickMsg.innerHTML = "oh you got 100 clicks now that's nice";
    };
    if (Number(newClicks) == 150) {
        clickMsg.innerHTML = "um you know you can stop now";
    };
    if (Number(newClicks) == 200) {
        clickMsg.innerHTML = "bye bye";
    };
    if (Number(newClicks) == 250) {
        clickMsg.innerHTML = "…";
    };
    if (Number(newClicks) == 300) {
        clickMsg.innerHTML = "you're clicking a lot huh…";
    };
    if (Number(newClicks) == 350) {
        clickMsg.innerHTML = "w-well just so you know…";
    };
    if (Number(newClicks) == 400) {
        clickMsg.innerHTML = "I'M NOT GONNA ADD ANY MORE MESSAGES AFTER THIS, OKAY?!";
    };
    if (Number(newClicks) == 450) {
        clickMsg.innerHTML = "h-hey why're you still clicking this button??";
    };
    if (Number(newClicks) == 500) {
        clickMsg.innerHTML = "oh I SEE what you're tryna do!";
    };
    if (Number(newClicks) == 550) {
        clickMsg.innerHTML = "you probably want something like…";
    };
    if (Number(newClicks) == 600) {
        clickMsg.innerHTML = "THE SECRET CODE FOR THE CHECKBOXES!!!";
    };
    if (Number(newClicks) == 650) {
        clickMsg.innerHTML = "well i AIN'T TELLING YA!";
    };
    if (Number(newClicks) == 700) {
        clickMsg.innerHTML = "…";
    };
    if (Number(newClicks) == 750) {
        clickMsg.innerHTML = "i said, I'M NOT GONNA GIVE IT TO YOU!";
    };
    if (Number(newClicks) == 800) {
        clickMsg.innerHTML = "do you REALLY expect me to tell you…?";
    };
    if (Number(newClicks) == 850) {
        clickMsg.innerHTML = "well…i bet your wrists hurt…";
    };
    if (Number(newClicks) == 900) {
        clickMsg.innerHTML = "YOU BETTER NOT BE USING AN AUTO-CLICKER THOUGH or else SHAME ON U";
    };
    if (Number(newClicks) == 950) {
        clickMsg.innerHTML = "i'll tell you the secret code…at 1,500 CLICKS!";
    };
    if (Number(newClicks) == 1000) {
        clickMsg.innerHTML = "ok, so you're really dedicated and hit 1,000 clicks, huh?";
    };
    if (Number(newClicks) == 1050) {
        clickMsg.innerHTML = "the next time you'll get a message from me is gonna be at 1,250 clicks!! so get clickin'!";
    };
    if (Number(newClicks) == 1150) {
        clickMsg.innerHTML = "";
    };
    if (Number(newClicks) == 1250) {
        clickMsg.innerHTML = "…you really wanna know what it is, huh…";
    };
    if (Number(newClicks) == 1300) {
        clickMsg.innerHTML = "ok ok i'll tell you already…";
    };
    if (Number(newClicks) == 1350) {
        clickMsg.innerHTML = "the secret code…";
    };
    if (Number(newClicks) == 1400) {
        clickMsg.innerHTML = "…for the checkboxes…";
    };
    if (Number(newClicks) == 1450) {
        clickMsg.innerHTML = "…IS……………";
    };
    if (Number(newClicks) == 1500) {
        clickMsg.innerHTML = "make the letter \"N\" okay? you're welcome, but it doesn't really do anything yet so ummm……";
    };
    if (Number(newClicks) == 1550) {
        clickMsg.innerHTML = "…";
    };
    if (Number(newClicks) == 1600) {
        clickMsg.innerHTML = "…why're you still clicking this button…?";
    };
    if (Number(newClicks) == 1650) {
        clickMsg.innerHTML = "…";
    };
    if (Number(newClicks) == 1700) {
        clickMsg.innerHTML = "oh i see…you probably think there's <i>more than one</i> code, huh?";
    };
    if (Number(newClicks) == 1750) {
        clickMsg.innerHTML = "well there aren't any more! so might as well stop";
    };
    if (Number(newClicks) == 1800) {
        clickMsg.innerHTML = "no like seriously, i never added anything else";
    };
    if (Number(newClicks) == 1850) {
        clickMsg.innerHTML = "…yet";
    };
    if (Number(newClicks) == 1900) {
        clickMsg.innerHTML = "i think you should massage your hand now i bet it aches";
    };
    if (Number(newClicks) == 1950) {
        clickMsg.innerHTML = "btw reload the page if you want to start over with the dialog";
    };
    if (Number(newClicks) == 2000) {
        clickMsg.innerHTML = "dang you hit 2,000";
    };
    if (Number(newClicks) == 2050) {
        clickMsg.innerHTML = "well, there aren't anymore secrets…";
    };
    if (Number(newClicks) == 2100) {
        clickMsg.innerHTML = "so what now?";
    };
    if (Number(newClicks) == 2150) {
        clickMsg.innerHTML = "maybe we could have a conversation…";
    };
    if (Number(newClicks) == 2200) {
        clickMsg.innerHTML = "but i'm too lazy right now, and i'd have to delete it once i add a new secret";
    };
    if (Number(newClicks) == 2250) {
        clickMsg.innerHTML = "so bye bye, for real this time!";
    };
    /*setTimeout(function() {
        clicks.innerHTML = Math.floor(Number(clicks.innerHTML))
        if (Number(clicks.innerHTML) > newClicks) {
            clicks.innerHTML = newClicks;
        };
    }, 50);*/
};

function checkCode() {
    let cb = Array.prototype.slice.call(checkboxes.querySelectorAll("*"));
    if (cb[0].checked && !cb[1].checked && !cb[2].checked && cb[3].checked && cb[4].checked && cb[5].checked && !cb[6].checked && cb[7].checked && cb[8].checked && !cb[9].checked && cb[10].checked && cb[11].checked && cb[12].checked && !cb[13].checked && !cb[14].checked && cb[15].checked) {
        alert("you got the code right! the secret's still coming soon tho so check back some other time");
    };
};

function generateUsername() {
    let adj = Math.floor(Math.random() * adjectives.length);
    let animal = Math.floor(Math.random() * animals.length);
    let username = adjectives[adj] + animals[animal];
    kahootUsername.innerHTML = "Your username is …";
    setTimeout(function(){kahootUsername.innerHTML = "Your username is " + username}, 1000);
};

button.onclick = click;
checkboxes.onclick = checkCode;
kahootGenerator.onclick = generateUsername;
