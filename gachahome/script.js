function get(id) {
    return document.getElementById(id);
}
var gachaTab = get("gacha-tab");
var homeTab = get("home-tab");
var homeSpace = get("home-space");
var offsetX, offsetY;

var stuff = get("stuff");
var closeBtn = get("close-btn");
var inv = get("inventory");

const inventory = [
    {name: "nailong", count: 2, desc: "blehh"},
    {name: "nene", count: 1, desc: "nene"},
];

const goods = {
    nailong: {url: "nailong.png", w: 387, h: 561},
    nene: {url: "https://pbs.twimg.com/media/EU5E2r3XYAESTqb.png", w: 398, h: 327}
}

function switchTab(tab, otherTab) {
    get(tab + "-tab").classList.add("current-tab");
    get(otherTab + "-tab").classList.remove("current-tab");
    get(tab + "-page").style = "position: static; visibility: visible;";
    get(otherTab + "-page").style = "position: fixed; visibility: hidden;";
    if (tab == "gacha") {
        document.body.style.background = "var(--periwinkle)";
    } else {
        document.body.style.background = "white";
    }
}
gachaTab.onclick = function(){switchTab("gacha", "home")};
homeTab.onclick = function(){switchTab("home", "gacha")};

function openStuff() {
    for (let i = 0; i < inventory.length; i++) {
        let item = document.createElement("div");
        item.classList.add("item");
        item.dataset.name = inventory[i].name;
        let img = document.createElement("img");
        img.draggable = true;
        setTimeout(function(){console.log(img.draggable);}, 1000);
        let url = goods[inventory[i].name].url;
        img.ondragstart = function(e){
            e.dataTransfer.setData("name", inventory[i].name);
            let image = new Image();
            image.src = url;
            console.log(url);
            e.dataTransfer.setDragImage(image, 25, 25);
        };
        img.src = url;
        item.appendChild(img);
        item.innerHTML += "<br>" + inventory[i].desc + " × " + inventory[i].count;
        inv.appendChild(item);
    }
}
openStuff();

function dragOver(e) {
    e.preventDefault();
}
homeSpace.ondragover = dragOver;

function drop(e) {
    e.preventDefault();
    let name = e.dataTransfer.getData("name");
    let item = document.createElement("div");
    item.classList.add("home-item");
    item.style.left = (e.clientX - 50) + "px";
    item.style.top = (e.clientY - 50) + "px";
    let img = document.createElement("img");
    img.draggable = false;
    console.log(name, goods[name]);
    img.src = goods[name].url;
    img.style.width = goods[name].w;
    img.height = goods[name].h;
    item.appendChild(img);
    homeSpace.appendChild(item);
}
homeSpace.ondrop = drop;

function closeInv() {
    stuff.style.position = "fixed";
    stuff.style.visibility = "hidden";
    homeSpace.style.left = 0;
}
closeBtn.onclick = closeInv;

//switchTab("gacha", "home");
switchTab("home", "gacha");