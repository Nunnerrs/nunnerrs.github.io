var title = document.getElementById("title");
var button = document.getElementById("click-button");
var visitCount = Number(localStorage.getItem("visits"));
var clicks = document.getElementById("clicks");
var clickMsg = document.getElementById("click-msg");
var codepad = document.getElementById("codepad");
var checkboxes = document.getElementById("checkboxes");
var kahootUsername = document.getElementById("kahoot-username");
var kahootGenerator = document.getElementById("kahoot-generator");
var tabs = document.getElementById("tabs");
var extras = document.getElementById("extras");

const adjectives = ["Agent", "Agile", "Amazing", "Amazon", "Amiable", "Aquatic", "Arctic", "Awesome",
                   "Blue", "Bold", "Bright",
                   "Champion", "Classy", "Clever", "Crazy", "Creative", "Cute",
                   "Daring", "Diplomat", "Doctor", "Dynamic",
                   "Eager", "Elated", "Epic", "Excited",
                   "Fabulous", "Flying", "Friendly", "Fuzzy",
                   "Gentle", "Glad", "Golden", "Happy", "Helpful", "Honest",
                   "Inspired", "Jolly", "Joyful", "Kind",
                   "Legend", "Lively", "Lovely", "Lucky", "Magic", "Majestic", "Mighty", "Mountain",
                   "Nimble",
                   "Polite", "Purple", "Radiant", "Rational", "Red", "Rocky",
                   "Silly", "Silver", "Snowy", "Speedy", "Stellar", "Super",
                   "Wise", "Wonder", "Zany"];
const animals = ["Alpaca", "Ant", "Bear", "Boa", "Cat", "Cheetah", "Condor", "Crab",
                "Dingo", "Dog", "Dove", "Dragon", "Duck",
                "Fox", "Frog", "Gator", "Gazelle", "Giraffe", "Glider", "Goose",
                "Hamster", "Hen", "Horse", "Ibex", "Kitten",
                "Lemur", "Leopard", "Lion", "Lobster", "Newt", "Octopus", "Otter",
                "Penguin", "Pigeon", "Puffin", "Quail", "Raven", "Rhino", "Rooster",
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

// DO NOT SCROLL DOWN — SECRET SPOILERS AHEAD
// ONLY WIENERS GIVE UP SO CLOSE THIS RIGHT NOW

function click() {
    let proceed = true;
    if (document.getElementById("promise")) {
        if (!document.getElementById("promise").checked && Number(clicks.innerHTML) > 2395) {
            proceed = false;
        }
    }
    if (proceed == true) {
        let newClicks = Number(clicks.innerHTML) + 1;
        clicks.innerHTML = newClicks;
        let c = Number(newClicks);
        if (c%50 == 0) {
            clickMsg.innerHTML = dialog[c/50 - 1];
        };
    }
    /*setTimeout(function() {
        clicks.innerHTML = Math.floor(Number(clicks.innerHTML))
        if (Number(clicks.innerHTML) > newClicks) {
            clicks.innerHTML = newClicks;
        };
    }, 50);*/
};

const dialog = ["wow you did it! congrats :D", "oh you got 100 clicks that's nice", "um, you know you can stop now…", "bye bye", "…",
    "you're clicking a lot huh…", "WELL JUST SO YOU KNOW…", "I'M NOT GONNA ADD ANY MORE MESSAGES AFTER THIS, OKAY?!",
    "h-hey, why're you still clicking this button??", "oh, I SEE what you're trying to do!", "you probably want…",
    "THE SECRET CODE TO THE CHECKBOXES!!", "pfff, I'm not gonna give it to you", "…", "I said, I'm <i>not</i> gonna give it to you…",
    "do you <i>really</i> expect me to tell you…?", "well, I bet your wrists hurt by now…", "YOU BETTER NOT BE USING AN AUTOCLICKER OR ELSE SHAME ON YOU",
    "fine, I'll tell you the code…", "AT 1,500 CLICKS >:]", "btw if you reload the page you have to start over <3",
    "I'll come back at 1,250 clicks, keep clickin' until then!", "", "", "…you're really dedicated, huh?", "alright…", "the secret code…",
    "…to the checkboxes…", "IS……………", "make the letter \"N\" okay?", "bro, why're you still clicking this button?", "……",
    "oh i see…you probably think there's <i>more than one</i> code, huh?", "that was the only code! so might as well stop now",
    "no seriously, I don't have any more codes to tell you", "…huh? you want a hint?", "sorry kid, you're gonna have to find out by yourself",
    "too bad ^^", "too bad ^^", "dang you reached 2,000 clicks", "no, I'm not giving you a hint, go away", "STOP CLICKING",
    "take a break smh I bet your wrist aches by now", "………", "FINE! I'll give you a hint…", "promise me that you'll touch grass once I tell you",
    "PROMISE!!! >:[&nbsp&nbsp&nbsp<label for='promise'>&nbspI promise to touch grass&nbsp</label><input id='promise' type='checkbox'>",
    "alright, so you know how the clue has three main components?", "the first is the location… (WRITE THIS DOWN)",
    "the second is the hint for what the next code is", "and the third is where to find the code!", "…huh? still confused?",
    "too bad :P", "ask nunners if you're really stumped", "yeah yeah technically I do know the code…",
    "…but it's not my place for me to tell you", "ANYWAYS GO OUTSIDE NOWW", "", "", "…should I even be surprised?", "yeah, I'm gonna go now, bye.",
    ""
]

function checkCode() {
    let cb = Array.prototype.slice.call(checkboxes.querySelectorAll("*"));
    if (cb[0].checked && !cb[1].checked && !cb[2].checked && cb[3].checked && cb[4].checked && cb[5].checked && !cb[6].checked && cb[7].checked && cb[8].checked && !cb[9].checked && cb[10].checked && cb[11].checked && cb[12].checked && !cb[13].checked && !cb[14].checked && cb[15].checked) {
        setTimeout(function(){
            alert("you got the code right! now, for the next clue: ERROR 404: REALLY BIG future update not found");
            alert("think this thouroughly; there's three main things in the clue that you need to figure out");
        }, 100);
    };
};

function generateUsername() {
    let adj = Math.floor(Math.random() * adjectives.length);
    let animal = Math.floor(Math.random() * animals.length);
    let username = adjectives[adj] + animals[animal];
    kahootUsername.innerHTML = "Your username is …";
    setTimeout(function(){kahootUsername.innerHTML = "Your username is " + username}, 1000);
};

function switchTabs(tab) {
    for (let i = 0; i < tabs.childNodes.length; i++) {
        if (tabs.childNodes[i].classList) {
            tabs.childNodes[i].classList.remove("selected");
        }
        if (extras.childNodes[i].innerHTML != null) {
            console.warn(extras.childNodes[i].innerHTML);
            extras.childNodes[i].style.position = "fixed";
            extras.childNodes[i].style.visibility = "hidden";
        }
    }
    if (tab != "codepad") {
        codepad.style.position = "fixed";
        codepad.style.visibility = "hidden";
    }
    document.getElementById(tab + "-tab").classList.add("selected");
    let t = document.getElementById(tab);
    t.style.position = "";
    t.style.visibility = "visible";
}

button.onclick = click;
/*button.onfocus = function(){
    setTimeout(function(){alert("hi"); button.blur();}
};*/
checkboxes.onclick = checkCode;
kahootGenerator.onclick = generateUsername;
tabs.childNodes.forEach(function(i){
    i.onclick = function(){switchTabs(i.dataset.name)};
})