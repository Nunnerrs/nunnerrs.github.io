var book = document.getElementById("book");
var pageL = document.getElementById("pageL");
var pageR = document.getElementById("pageR");
var back = document.getElementById("back");
var close = document.getElementById("close");
var next = document.getElementById("next");
var darkMode = document.getElementById("darkMode");
var currentBook = null;
var pageNumL = -1;
var pageNumR = 0;
var mobileOn = false;
var darkModeOn = false;
var dm = localStorage.getItem("darkMode");

if (dm == null) {
    localStorage.setItem("darkMode", "false");
    dm = false;
} else if (dm == "true" || dm == true) {
    toggleDarkMode();
};

var total = 11;

const books = {
    // fitting image sample: https://i.ibb.co/xLsBh3W/img.png (add class rp to fix margin on right pages)
    /*
    Total lines: 23
    Line capacity: 33 characters
    Page capacity: 781 characters
    DON'T FORGET TO UPDATE BOOK TOTAL ABOVE
    book#: [
        // edit TITLE, AUTHOR, READING LEVEL, SCHEDULED RELEASE DATE & copy share link ID,
        "", // <img src="covers/placeholder.png">
        "<br><br><br><br><br><br><br><bt>TITLE</bt><br><br><heading>By AUTHOR</heading><br><br>Reading Level: <star>★★★★★☆☆☆☆</star><br>Coming soon in MONTH 2023<br><br><button id='book#' onclick='copyLink();'>Copy book share link</button>",
        "Coming Soon!",
        "Coming Soon!",
        // DON'T FORGET TO UPDATE BOOK TOTAL ABOVE AND CHANGE RELASE DATE TO PUBLISH DATE
    ],
    */
    book1: [
        "", // <img src="covers/placeholder.png">
        "<br><br><br><br><br><br><br><bt>Nunnerology</bt><br><br><heading>By Nunners</heading><br><br>Reading Level: <star>★★★☆☆</star><br>Published on 1/17/2023<br><br><button id='book1' onclick='copyLink();'>Copy book share link</button>",
        "This is an autobiography (maybe?) that I wrote so you guys can learn more about me. For a more brief version (mainly relating to code), visit my <a href='about'>about me page</a>.",
        "Hi there, I'm Julianna, but I'm known as Nunners on this website. I build and code Roblox games for fun. I also enjoy making this website, coded through HTML, JavaScript, and CSS. The coding languages I've learned are HTML, JavaScript, CSS, Luau (language based on Lua used for Roblox game making), and PHP.",
        "Three words describing my personality are funny, smart, and creative. I'm a perfectionist (which I never realized actually). I have an older brother and a younger sister. In my free time, I play Roblox or code (this website or Roblox games). I like to draw, read, and listen to music. My friends are Kayleigh, Lianna, and Skylar (I have a lot more but they don't want to be publically mentioned). I'm a big fan of Pokémon and Toilet-Bound Hanako-kun.",
        "Here's a list of some of my <b>favorites:</b><br>• Animals — Hedgehogs, frogs, and ducks<br>• Anime — Toilet-Bound Hanako-kun<br>• Chips — Cheddar & Sour Cream Ruffles and Cheetos Puffs<br>• Color — Aquamarine (hex #00ffae)<br>• Foods — Bistek, fried bangus, gyudon (from Yoshinoya), and SPAM<br>• Holiday — Christmas 🎄<br>• Manga — Toilet-Bound Hanako-kun<br>• Music Artists — Snail's House, Kirara Magic, and Tobu<br>• Music Genre — kawaii future bass and electro house<br>• Pokémon — Shaymin and Shuckle<br>• Sport — None<br>• Video Games — Roblox, Genshin Impact, and BanG Dream!",
        "<b>Fun facts about me:</b><br>• I was born on a couch (not in a hospital &#128561)<br>• My memory is really good, especially my long-term memory (but sometimes my short-term memory fails me so it balances out)<br>• I memorized every single Pokémon in exsistence (including Gen. 9!) + (a lot of) types of each of them + facts about many + Gen. 6 & 7 cries<br>• I own <i>every</i> Toilet-Bound Hanako-kun manga (even Vol. 0 and After-School Hanako-kun)(except Vol. 18+, those haven't released yet in English)",
        "<b>Fun facts about my website:</b><br>• My personal website (nunnerrs.github.io) used to be on W3Spaces (I switched because they started limiting the free plan grrr)<br>• Web Chef was renamed three times. Its original name was JS Chef, but was changed to Button Chef, Web Cuisine, and now it's Web Chef! Heheh I just wasn't satified—",
        "<b>Contacts</b> (idk what you'd use them for tho)<br>Discord server (NunnerDev): <a href='https://discord.gg/zbVsHA4tSu'>discord.gg</a><br>Roblox username: Nunnerrs<br>Website: <a href='https://nunnerrs.github.io'>nunnerrs.github.io</a>",
        "And that's all I can think of adding for now! I'll update this more as things change.",
    ],
    book2: [
        "", // <img src="covers/placeholder.png">
        "<br><br><br><br><br><bt>How To NunnerLibrary</bt><br><br><heading>By Nunners</heading><br><br>Reading Level: <star>★★★☆☆</star><br>Published on 1/17/2023<br><b>Press the <span style='font-family: M PLUS ROUNDED 1C'>→</span> button below</b> to flip the page<br><br><button id='book2' onclick='copyLink();'>Copy book share link</button>",
        "Welcome to the NunnerLibrary! This book is a tutorial for the NunnerLibrary. You'll learn what everything does and the meaning of things such as the Reading Level. Books should be read from left to right, top to bottom. To open a book, click on any button (book cover) under a book genre (close any open books first). Each book is sorted into a category/genre (e.g. click on Nunnerology under Non-Fiction). Books with \"Vol. 1\", \"Vol. 2\", etc under the title means that book is part of a series. If you're going to start a book series, you should always read each book in order (start with Volume 1, then read Volume 2…) so you understand the storyline.",
        "The Reading Level on the cover shows the \"difficulty\" of the currently open book. It's out of 5 stars, <star>★☆☆☆☆</star> means the book is very easy to read while <star>★★★★★</star> means the book may be pretty difficult to read (because of the vocabulary). Don't worry if you like reading books 2-stars or less or 4-stars or more, everyone has their likes and dislikes. Most books have a reading level of <star>★★★☆☆</star> (moderate level). The book will open up above all the book buttons along will three different buttons. The <span style='font-family: M PLUS ROUNDED 1C'>←</span> button flips the book one page backward. The <span style='font-family: M PLUS ROUNDED 1C'>&#215</span> button closes the book. The <span style='font-family: M PLUS ROUNDED 1C'>→</span> button flips the book one page forward. (The book continues on the next page, so click on the <span style='font-family: M PLUS ROUNDED 1C'>→</span> button below!)",
        "The \"Copy book share link\" can be used to bookmark a NunnerLibrary book or to share a specific book to someone else. Clicking on it copies a link to your keyboard's clipboard. If you visit the link, it will open the exact book you copied the link from. The \"Turn on dark mode\" button at the bottom makes the background black and system buttons dark gray. Many people like using dark mode (pretty much everywhere they can), and the darkness can be easier on eyes (especially at night). The \"Write a book for the NunnerLibrary\" at the bottom is a link to a Google Form where you can write your own book or story idea for the NunnerLibrary. The \"To The NunnerVerse²\" below it is a link to go back to my homepage.",
        "In the NunnerLibrary, you'll find all sorts of books. Most will be original stories, but some could feature characters from existing books or could be based on real books. There's currently a total of " + total + " books in the NunnerLibrary database. If you know me in real life or have my Discord username, you can always let me know any book suggestions you have (either the story outline or the entire story). I hope there's at least one book here you'll enjoy reading :D! (Click the <span style='font-family: M PLUS ROUNDED 1C'>&#215</span> to close the book).",
    ],
    book3: [
        "", // <img src="covers/placeholder.png">
        "<br><br><br><br><br><br><bt>Feet Quest</bt><br><br><heading>By Lianna</heading><br><br>Reading Level: <star>★★★☆☆</star><br>Coming soon sometime in 2023<br><br><button id='book3' onclick='copyLink();' disabled>Copy book share link</button>",
        "Coming Soon!",
        "Coming Soon!",
    ],
    book4: book4, // I Got Reincarnated As A Cow
    book5: [
        "", // <img src="covers/placeholder.png">
        "<br><br><br><br><br><br><bt>Pinky & Mint: Coral</bt><br><br><heading>By Nunners</heading><br><br>Reading Level: <star>★★☆☆☆</star><br>Published on 1/18/2023<br><br><button id='book5' onclick='copyLink();'>Copy book share link</button>",
        "Pinky and Mint are swimming in the ocean. They are octopi. Mint turns around and sees a strange thing on the ocean floor.<br>\"Ooh, what's that?\" he says, swimming towards it. Pinky floats next to him.<br>\"Wow, that looks cool!\" she exclaims. \"Wait, what is it?\"<br>The strange object is shaped like long, purple tubes.<br>\"Maybe…it's an animal?\" Mint guesses. Using one tentacle, he touches the bumpy outside, but nothing happens. Pinky looks at the thing upside down.<br>\"It didn't move, so it's not an animal…\" Mint says.<br>\"Maybe it's a plant,\" Pinky says. \"Can I eat it?\"<br>\"Umm, I don't think you should,\" Mint warns.",
        "He looks inside the tubes from the top. All them are empty. They both circle it many times while thinking.<br>\"It looks like it's stuck to the ground,\" Pinky says. \"Wait, what's <i>this</i>?\"<br>She stops and looks at another strange thing nearby. It's yellow and has branches. Bumps cover the entire thing.<br>\"These look so cool,\" Mint thinks out loud. \"Are they similar?\"<br>\"Where do the roots of the plant go…?\" Pinky says. She tries to pull the yellow thing out. A branch came off easily when Pinky did, and they watched as it fell onto the ground. \"Uh oh…I broke it…\"<br>\"AAH! What if that was a living thing?!\" Mint says in a panic. \"You broke off it's arm!!\"",
        "A small teal fish swims by and looks at the octopi.<br>\"NOO!!\" she cries in a shrilly voice. \"Look what you've done to my pwecious home…\"<br>The fish races to the yellow thing and sighs.<br>\"I-I'm so sowwy, i-it was an accident,\" Pinky stammers.<br>\"Huh? You don't need to be sorry,\" she smiles. Pinky and Mint look completely confused.<br>\"I should thank you. I've always wanted more of it. Anyway, who <i>are</i> you two?\"<br>\"I'm Mint, and she's Pinky,\" Mint says. He tilts his head a little. \"What do you mean by <i>it</i>?\"<br>\"You know, the <i>coral</i>,\" the fish says, swimming into a purple tube. She sticks her head out of it. \"This is my home, in the <i>coral</i> reef.\"",
        "\"Ohhhh,\" Pinky realizes. \"So <i>coral</i> is the name of these things.\"<br>\"So you live in the coral,\" Mint says. \"They really are plants.\"<br>\"No, they aren't,\" the fish says. Pinky's eyes widen. She turned to the yellow branch-like coral<br>\"I'm sowwy, little guy…\" she says. \"Uhh, where's their eyes?\"<br>\"Well, coral aren't fish either,\" says the little fish. \"But they are alive. Oh, did you see the piece that broke off?\"<br>She swims to the broken coral piece on the ground. It stands upright like a tiny cone, while earlier it didn't. \"These yellow ones are called staghorn coral. Look, it's already growing.\"<br>\"Woah…do they multiply that way?\" Mint asks.<br>\"Pretty much!\" the fish says.",
        "\"I've wanted another Staghorn by my home for a while since they've got many branches.\"<br>\"What's this one then?\" Pinky asks, floating beside the purple tube-like coral.<br>\"Those are tube coral,\" she explains.<br>\"I'm hungry. We should really go now…\" Mint says.<br>\"See you again someday! Bye-byeee!!\" Pinky waves a tentacle at the fish.<br>\"Oh, and my name's Liva! Bye!\"<br>Mint and Pinky swim away from the corals, only to see hundreds of more coral below a small cliff in all different colors.<br>\"Wanna go exploring first?\" Mint smiles at Pinky.<br>\"Race ya to that big rock!\" she calls, rushing ahead.",
        "\"W-wait for me! Pinkyyyyy!!!!\" Mint exclaimed, swimming after her.<br><br>The adventures of the two octopi continues!<br><br><b>Coral Facts:</b><br>• Corals are not plants! They are animals just like Pinky and Mint.<br>• Corals are made up of hundreds of thousands of polyps, which are tiny, soft creatures that are grouped together.<br>• 25% of all ocean species (creatures) live in coral reefs, just like Liva!<br>• Coral comes in all different colors, shapes, and sizes! Besides staghorn and tube, there's over 6,000 species of coral.",
        "Read the next book, <i>Pinky & Mint:<br>Hermit Crabs</i>, coming out in March 2023<br><br><br><b>Sources <i>[if you want to learn more about coral, click <a href='https://www.fisheries.noaa.gov/corals'>here</a> (has higher vocabulary)]</i></b><br>• Seven surprising facts about coral — <a href='https://www.sheddaquarium.org/stories/seven-surprising-facts-about-coral'>https://www.sheddaquarium.org/<br>stories/seven-surprising-facts-about-coral</a><br>• Are corals animals or plants? — <a href='https://oceanservice.noaa.gov/facts/coral.html'>https://oceanservice.noaa.gov/<br>facts/coral.html</a><br>• Staghorn coral — <a href='https://www.fisheries.noaa.gov/species/staghorn-coral'>https://www.fisheries.noaa.gov/<br>species/staghorn-coral</a><br>• Google search (on questions about coral)",
    ],
    book6: book6, // Hope Vol. 1
    book7: book7, // Nunners' Guide To Dreams & Nightmares
    book8: [ // "<heading><b>Mon. DD, 2023</b></heading><br><br>• ",
        "", // <img src="covers/placeholder.png">
        "<br><br><br><br><br><br><bt>NunnerVerse Weekly</bt><br><br><heading>By Nunners</heading><br><br>Reading Level: <star>★★★☆☆</star><br>Latest news: 5/9/2023<br><br><button id='book8' onclick='copyLink();'>Copy book share link</button>",
        // UPDATE NEWEST NEWS ABOVE & IN INDEX.HTML FILE
        "<heading><b>May 9, 2023</b></heading><br><br>• I'M SORRY GUYS I have't really got much time (and inspiration) to write <i>Pinky & Mint: Whales</i>. I hope you guys will understand 🙏.<br>• On the bright side, I just released a new book called <b><i>The Guardian Of The Phoenix</i></b>! It'll be a new series spanning across several volumes.<br>• As for the Pinky & Mint series…umm it <i>might just be</i> postponed (sorryijustlostmotivation 😭).",
        "<heading><b>Apr. 13, 2023</b></heading><br><br>• New Kahoot! Username Generator on my <a href='https://nunnerrs.github.io/about'>about me page</a>. You can screenshot any cool nicknames you got or something.<br>• More <i>Nunners' Guide To Dreams & Nightmares</i> dream meanings! I'll try to have one for every letter of the alphabet and more.",
        "<heading><b>Apr. 10, 2023</b></heading><br><br>• <i>Hope Vol. 2</i> is OUT NOW! SORRY FOR THE DELAY :/ I'll try to get <i>Hope Vol. 3</i> out much faster than Volume 2.<br>• New CGT gears! Handgun, Name Tag, NunnerSword, and more.<br>• I added more stuff to <i>Nunnerology</i>; Go check it out :D",
        "<heading><b>Apr. 6, 2023</b></heading><br><br>• I took a break from updating my website for a while, hope you guys aren't mad 😃! Anyways, sorry for the delay on Hope Vol. 2. I actually haven't been working on it (I barely even started it) to be honest with you. But don't worry I can finally end the month-long postponing :DDD",
        "<heading><b>Mar. 9, 2023</b></heading><br><br>• Web Chef updates! New ingredients Syrup, Wine and Pineapple plus recipes to go with them like Flan, Fondue, and Tropical Cocktail. I also added a new achievements system where you can earn badges for doing certain things, discovering secrets, and more! And of course lots of bug fixes :P",
        "<heading><b>Mar. 7, 2023</b></heading><br><br>• <i>Hope Vol. 2</i> coming soon! There's still a lot I have to do, but I'll try my hardest to finish it before April.<br>• Custom Gear Testing updates! I added a Toy Ball gear you can use to play with your pets. There's also a new only-owner gear called the NunnerOrb—touching it awards you with the Meet Nunnerrs! badge. If you have the badge, you can wear the Nunnerrs suit. I also fixed some broken stuff.",
        "<heading><b>Mar. 1, 2023</b></heading><br><br>• <i>Pinky & Mint: Hermit Crabs</i> is now published!!! It's longer than the <i>Coral</i> one and I hope you'll enjoy it! Note that you don't need to read <i>Pinky & Mint: Coral</i> before the new book (it's styled so that you can read any of them in any order).<br>• Check out the small new updates to Web Chef & collection of online fun stuffs.", 
        "<heading><b>Feb. 28, 2023</b></heading><br><br>• Publishing <i>Pinky & Mint: Hermit Crabs</i> sometime today (or in a few days)! I just need to cite the sources used. I also made the upcoming books' covers visible, but they can't be viewed yet.", 
        "<heading><b>Feb. 27, 2023</b></heading><br><br>• <i>Pinky & Mint: Hermit Crabs</i> & <i>Hope Vol. 2</i> release delay — Sorry guys, the two books I promised would release in February are going to be postponed to March. I've been busy with schoolwork, and I can't really write two books in two days so :P. But don't worry, I'll try to write them very soon<br>• Added a day-night cycle to CGT and a Lantern & Tip Book gear! Light up the night with the Lantern and discover useful tips with the Tip Book. BTW, I'm working on a Toy Ball gear so you can play fetch with your pets •u•<br>• News articles that are spread across multiple pages should be read from right to left (e.g. read right page before left)",
        "<heading><b>Feb. 22, 2023</b></heading><br><br>• New Custom Gear Testing updates! Join the game to earn the 100 Visits achievement (cool notification too!) and a free sparkler gear. There's also a new Meet Nunnerrs! badge; touch the NunnerOrb gear (item only I can have) if I'm holding it out and you'll unlock the Nunnerrs Suit. You can also ask me to join you if you're playing CGT (if I'm available) on Discord (NunnerDev server/DM) for the badge.",
        "<heading><b>Feb. 15, 2023</b></heading><br><br>• I've published a pre-release of <i>Nunners' Guide To Dreams & Nightmares</i>! It's unfinished but be sure to check it out. I'll add some more dream meanings and some chunky paragraphs talking about dreams in the future.<br>• I'm currently writing <i>Pinky & Mint: Hermit Crabs</i>! The Pinky & Mint series are designed so that you can read the books in any order.",
        "<heading><b>Feb. 15, 2023</b></heading><br><br>• I made a new \"book\" called <i>NunnerVerse Weekly</i> (the one you're reading right now). It's basically where I'll put all my update logs for every project from now on. The newest logs will be on the first few pages. I'm not sure if I should delete the old logs after a long time though. [DISCLAIMER: I'm probably gonna add new \"articles\" every few days, but there's <i>still a chance</i> for me to forget to post new logs. So pls don't get mad if you've been waiting for \"new update\" but there isn't yet—]",
    ],
    book9: [
        "", // <img src="covers/placeholder.png">
        "<br><br><br><br><br><br><bt>Pinky & Mint: Hermit Crabs</bt><br><br><heading>By Nunners</heading><br><br>Reading Level: <star>★★☆☆☆</star><br>Published on 3/1/2023<br><br><button id='book9' onclick='copyLink();'>Copy book share link</button>",
        "Pinky and Mint swim along the ocean floor. They are octopi. Mint quickly picks up a sea shell on the floor but doesn't find anything inside.<br>\"Haahhhh…\" he sighs. \"All I see are empty shells and rocks. Didn't you say there's snails in these shells?\"<br>\"Hold on, we'll find one somewhere around here…\" Pinky says hopefully. \"We just gotta look harder!\"<br>As they continued their search, Pinky finds a round shell and sees something in it that catches her eye.<br>\"Mint! I found it!!\" she calls.<br>Mint drops the rock he held and swims towards Pinky with excitement.<br>\"Wow…what is it?\"",
        "The red little creature inside the shell doesn't move.<br>\"See? I told you we'd find one!\" Pinky says happily.<br>\"But…what <i>is</i> that?\"<br>\"Uh, it's <i>obviously</i> a <i>snail</i>!\"<br>\"How am I supposed to know?\"<br>The creature twitches as Pinky scoops it into her arms. As they look more closely, it's body looks scaly and dotted with hairs.<br>\"Pfff!\" Mint laughs. \"That's not a snail! That thing's not slimy <i>or</i> squishy!\"<br>\"O-Of course it's a snail!\" Pinky says. She looks down at the shelled creature in her arms. \"Hey there little guy…\"<br>The living thing wiggles as Pinky touches it gently. Both octopi gasp as they realize its \"body\" is actually the creature's legs!",
        "\"WAAUGHH!\" Pinky screams. \"Th-that's NOT a snail—\"<br>She lets go of the shell and the creature sinks down from her arms onto the floor. Little eyes slowly poke out from the shell and extends its legs.<br>\"Whew…\" the red creature says, shaking sand off of it's body. It looks at the octopi and jumps. \"Yikes!\"<br>The creature quickly digs into the sand to hide, but its shell is still visible.<br>\"Hey, wait!\" Mint cries. He moves a little closer to the frightened creature. \"Umm…lil' crab, we're not here to harm you…\"<br>\"Eek!\" the crab curls up even more into its shell. \"G-Go away…\"<br>\"Hmmm…how do we get them to <i>not</i> be scared…?\" Pinky wonders.",
        "\"Wait, I think I know!\" Mint's eyes light up as he grabs a handful of seaweed and places it in front of the crab. \"Here.\"<br>Moments later, tiny eyes pop out from the shell and stares directly at the seaweed, then to Mint, then to Pinky. Two large claws quickly snatch the seaweed, and the crab munches away at it. It keeps a close eye on the octopi but happily continues to eat.<br>Mint smiles and Pinky does a flip. \"Yippeee!\" Pinky exclaims. She stops and rushes towards the crab. \"Ooh, wait, what's your name, little crabby guy?\"<br>\"Kmmhy,\" The crab mumbles, continues to eat.<br>\"Ummm…what did you say?\" Pinky frowns.",
        "Mint and Pinky watch the little guy eat quietly. After a while, it takes its last bite and swallows. \"Yummy…\" the creature smiles happily. It glances at the two octopi looming over it. \"Oh yeah.\"<br>The crab stands up and stretches, shaking off the sand on its shell. It looks at them with bright eyes. \"My name's Cory. I thought you guys were gonna hurt me or something at first,\" the crab says in a soft voice. It holds out a claw in handshake. \"You guys look friendly though.\"<br>\"Nice to meet ya, Cory!\" Mint says, shaking his small claw. \"OWWIE!!\"<br>Mint grabs his own tentacle and rubs it. \"You pinched me…\"",
        "\"Ah! S-Sowwy…\" Cory apologises. He sighs at his tiny but sharp claws. \"I-I do that a lot, I'm sowwy…\"<br>\"It-it's fine.\" Mint turns to Pinky. \"I know he isn't the snail you were looking for, but…I thought crabs <i>didn't</i> have shells…\"<br>\"It's 'cause I'm a <i>hermit crab</i>, duhh!\" Cory says, crawling towards them. \"I like small homes that I can bring wherever I go!\"<br>\"Wait, that's your <i>home</i>?!\" Pinky gasps.<br>She looked at him with sad eyes. \"I'm sowwy I picked it up earlier…I didn't know—\"<br>\"It's okay, really,\" Cory responds.<br>His eyes widen and he crawls away from the octopi.",
        "Both octopi glance at one another in confusion.<br>\"It's perfect!\" Cory exclaims, gently touching an empty shell. It's slightly larger than his current shell. He wiggles in his shell and suddenly pops off of it. The rest of his body is exposed, which is in the shape of a spiral like his original shell.<br>\"Ahh! Are you okay?!\" Pinky panics.<br>\"Huh? What do you mean?\" Cory tilts his head in confusion.<br>\"I'm just getting myself a new shell.\"<br>He backs his tail into the new shell, which is shaped like a wide cone. The rest of Cory's body is now hidden inside, and he tucks into the shell even more.<br>\"If I fits, I sits,\" he says calmly.",
        "\"Huh? I thought you guys made your own shells…\" Mint says. \"So you use shells made by snails. Right?\"<br>He gently picks up Cory with two tentacles. The crab's limbs don't move at all and little bubbles sprout from Cory's mouth.<br>\"Oh, he fell asleep…\" Mint sighs. He places him down next to other shells that seem to be sleeping hermit crabs.<br>\"I didn't know there were more crabs.\" Mint says, turning to Pinky. \"So, what now?\"<br>\"Hmmmm…maybe we can go look for an <i>actual</i> snail,\" Pinky says. \"Oh yeah, the one I found was <i>really</i> big and had a green shell\"<br>\"Whaaaat!! I think you're making stuff up now…\"<br>\"I'm not! It was so pretty, you should see it!\"",
        "\"How am I supposed to see it if we don't start looking?\"<br>\"…Oh yeah.\" Pinky says. She waves at Cory. \"Good niiight…\"<br>Mint and Pinky swim away, lifting up rocks and shells.<br><br>The adventure of the two octopi continues!<br><br>Read the upcoming book, <i>Pinky & Mint: Whales</i>, coming out in April 2023!<br><br><b>Read them all!</b><br><i>Pinky & Mint: Coral</i><br><i>Pinky & Mint: Hermit Crabs</i>",
        "<b>Hermit Crab Facts</b><br>• Hermit crabs molt, which is when they shed their exoskeleton (outer shell-like body). They do this because their exoskeleton doesn't grow.<br>• Hermit crabs change shells every year or so, and it usually molts when it does.<br>• Hermit crabs live in all kinds of sea shells. They use shells made by other creatues like snails. Sadly, hundreds of thousands die because they mistake plastic for shells.<br>• Hermit crabs are very social, meaning they like to interact with other hermit crabs as well as other sea creatures.",
        "<b>Sources</b><br>• <a href='https://www.facebook.com/PBSNature/videos/hermit-crab-shells/414959254038523'>Hermit Crab Shells (facebook.com)</a><br>• <a href='https://environment.bm/land-hermit-crab'>Land Hermit Crab (environment.bm)</a><br>• <a href='https://cdnsciencepub.com/doi/10.1139/cjz-2014-0312'>Hiding time of the hermit crab (cdnsciencepub.com)</a><br>• <a href='https://www.hermitcrabpatch.com/Hermit-Crab-Successful-Molting-a/138.htm'>Hermit Crab Successful Molting (hermitcrabpatch.com)</a><br>• <a href='https://a-z-animals.com/blog/10-incredible-hermit-crab-facts/'>10 Incredible Hermit Crab Facts (a-z-animals.com)</a>",
    ],
    book10: book10, // Hope Vol. 2
    book11: book11, // Hope Vol. 3
    book12: [
        // edit TITLE, AUTHOR, READING LEVEL, SCHEDULED RELEASE DATE & copy share link ID,
        "", // <img src="covers/placeholder.png">
        "<br><br><br><br><br><br><br><bt>Pinky & Mint: Whales</bt><br><br><heading>By Nunners</heading><br><br>Reading Level: <star>★★☆☆☆</star><br>Coming soon in 2023<br><br><button id='book12' onclick='copyLink();'>Copy book share link</button>",
        "Pinky and Mint are swimming near the deep parts of the ocean. They are octopi. Pinky becomes very interested in a tiny shrimp.<br>\"Wow it's a shrimp…\" she stares. It quickly swims away from fear.<br>\"Huh? Where?\" Mint looks around and his eyes widen.<br>\"It left already—\" Pinky says.<br>A huge red cloud rushes towards them!<br>\"WAAAAAAAAAHH!!!\" they scream, whirling under water as the cloud hit them. They closed their eyes and could feel little things tickling them. Mint opens his eyes a little and sees millions of the tiny shrimps!<br>\"Wait, Pinky!\" he taps her tentacle and points. \"Those are all wittle shrimps!!\"<br>Pinky slowly opens her eyes and gasps. \"Whoaaa!\"",
        "The huge group of shrimps move like a red tornado. Each of them look scared. One slows down in front of Mint.<br>\"Wun while you stiw can!!\" it says and quickly swims off.<br>\"Run? But why?\" Mint shakes his head in confusion. After a moment the big cloud of shrimps move past them.<br>\"Phew,\" Pinky scratches her head. \"What was that all about?\"<br>Mint and Pinky hear a loud humming noise. It's a little high pitched but sounds sad.<br>\"Is someone singing?\" Mint swims a little bit upwards. He stops when he notices a small dark shape coming towards them.<br>Pinky moves towards it. \"Hiiii!!\" She waves a tentacle.<br>The shape grew bigger as it came closer.",
        "\"Hey, why won't you wave back?\" Pinky frowns.<br>The song coming from the shadow only gets louder. They stare at it and they see it has huge fins. The shape begins to look more like a fish as it comes nearer, only a hundred times bigger than them!<br>\"AAAAAAAH!! SHARKK!!!\" Pinky hides behind Mint in panic. The giant creature's huge mouth opens and reveals hundreds of long teeth.<br>\"WAAAAAAA!!\" Both octopi rush to the side and dodge the hundred-foot long animal. It swims quickly towards the big shrimp cloud, but the shrimps separate and the creature slows down.<br>The octopi hide behind a rock.<br>\"W-W-W-What was <i>that</i>?!\" Pinky stutters.<br>\"Dunno. But we gotta stay quiet!\"",
        "\"W-W-What if it f-finds us…?\"<br>\"I'm sure that's not gonna—\"<br>A giant head appears above the rock. Pinky and Mint stare at the creature unable to move. It grins.<br>\"Haii theree~!\" the giant says in a slow voice.<br>Pinky doesn't move. Mint blinks. \"H-Hi…\"",
        // DON'T FORGET TO UPDATE BOOK TOTAL ABOVE AND CHANGE RELASE DATE TO PUBLISH DATE
    ],
    book13: book13, // Guardian Of The Phoenix Vol. 1
    book14: book14, // Guardian Of The Phoenix Vol. 2
};

function openBook(bookId) {
    if (currentBook == null) {
        currentBook = bookId;
        book.classList.add("nh");
        book.style = "visibility: visible;";
        back.style = "visibility: visible;";
        close.style = "visibility: visible;";
        next.style = "visibility: visible;";
        pageL.innerHTML = books["book" + currentBook][0];
        pageR.innerHTML = books["book" + currentBook][1];
        pageNumL = 0;
        pageNumR = 1;
    };
};

var params = window.location.href.split("?")[1];
var param1 = params.split("&");
if (param1[0].split("=")[0].match("book") && Number(param1[0].split("=")[1])) {
    let bookNumber = Number(param1[0].split("=")[1]);
    if (bookNumber <= total) {
        openBook(bookNumber);
        //pageR.innerHTML = books["book" + bookNumber][0];
    };
};

function backPage() {
    if (pageNumL > 0) {
        //alert("flipped page back");
        pageNumL -= 2;
        pageNumR -= 2;
        pageL.innerHTML = books["book" + currentBook][pageNumL];
        pageR.innerHTML = books["book" + currentBook][pageNumR];
        if (pageNumL <= 0) {
            pageL.innerHTML = "";
        };
        if (pageNumR >= books["book" + currentBook].length) {
            pageR.innerHTML = "";
        };
    };
};

function closeBook() {
    currentBook = null;
    book.classList.remove("nh");
    book.style = "visibility: hidden;";
    back.style = "visibility: hidden;";
    close.style = "visibility: hidden;";
    next.style = "visibility: hidden;";
    pageL.innerHTML = "";
    pageR.innerHTML = "";
    pageNumL = 0;
    pageNumR = 1;
    //alert("closed book #" + currentBook);
};

function nextPage() {
    if (books["book" + currentBook][pageNumL + 2] != null) {
        //alert("flipped page forward");
        pageNumL += 2;
        pageNumR += 2;
        pageL.innerHTML = books["book" + currentBook][pageNumL];
        pageR.innerHTML = books["book" + currentBook][pageNumR];
        if (pageNumR >= books["book" + currentBook].length) {
            pageR.innerHTML = "";
        };
        console.log(pageNumL + " " + pageNumR);
    };
};

function copyLink() {
    navigator.clipboard.writeText("https://nunnerrs.github.io/library.html?book=" + currentBook.toString());
    alert("Copied share link! You can bookmark the link or share with others (paste with CMD/CTRL + V)");
    //alert("Sorry, copying & loading book share links are currently disabled due to a bug where it doesn't copy anything. I'm working to fix the error, sorry for any trouble this may have caused you.");
};

function toggleDarkMode() {
    /*for (let i = 1; i < total; i++) {
          let e = document.getElementById("book" + i);
          let bg = toString(e.style.backgroundColor);
          e.style.backgroundColor = e.style.borderColor;
          e.style.borderColor = bg;
      };*/
      if (darkModeOn == true) {
          document.body.style = "background-color: rgb(255, 255, 255)";
          let h = document.body.getElementsByTagName("h1")
          for (let i = 0; i < h.length; i++) {
              h[i].classList.remove("white");
          };
          h = document.body.getElementsByTagName("h2")
          for (let i = 0; i < h.length; i++) {
              h[i].classList.remove("white");
          };
          h = document.body.getElementsByTagName("h3")
          for (let i = 0; i < h.length; i++) {
              h[i].classList.remove("white");
          };
          h = document.body.getElementsByTagName("h4")
          for (let i = 0; i < h.length; i++) {
              h[i].classList.remove("white");
          };
          let p = document.body.getElementsByTagName("p")
          for (let i = 0; i < p.length; i++) {
              p[i].classList.remove("white");
          };
          book.classList.add("lightBg");
          book.classList.remove("darkBg");
          book.classList.remove("white");
          back.classList.remove("darkBg");
          back.classList.remove("white");
          close.classList.remove("darkBg");
          close.classList.remove("white");
          next.classList.remove("darkBg");
          next.classList.remove("white");
          darkMode.classList.add("darkBg");
          darkMode.classList.add("white");
          darkMode.innerHTML = "Turn on dark mode";
          localStorage.setItem("darkMode", "false");
          darkModeOn = false;
      } else {
          document.body.style = "background-color: rgb(0, 0, 0)";
          let h = document.body.getElementsByTagName("h1")
          for (let i = 0; i < h.length; i++) {
              h[i].classList.add("white");
          };
          h = document.body.getElementsByTagName("h2")
          for (let i = 0; i < h.length; i++) {
              h[i].classList.add("white");
          };
          h = document.body.getElementsByTagName("h3")
          for (let i = 0; i < h.length; i++) {
              h[i].classList.add("white");
          };
          h = document.body.getElementsByTagName("h4")
          for (let i = 0; i < h.length; i++) {
              h[i].classList.add("white");
          };
          let p = document.body.getElementsByTagName("p")
          for (let i = 0; i < p.length; i++) {
              p[i].classList.add("white");
          };
          book.classList.remove("lightBg");
          book.classList.add("darkBg");
          book.classList.add("white");
          back.classList.add("darkBg");
          back.classList.add("white");
          close.classList.add("darkBg");
          close.classList.add("white");
          next.classList.add("darkBg");
          next.classList.add("white");
          darkMode.classList.remove("darkBg");
          darkMode.classList.remove("white");
          darkMode.innerHTML = "Turn off dark mode";
          localStorage.setItem("darkMode", "true");
          darkModeOn = true;
      };
};

for (let i = 1; i < total; i++) {
    document.getElementById("book" + i).onclick = function(){openBook(i)};
};

//pageL.innerHTML = "";
//pageR.innerHTML = "";

back.onclick = backPage;
close.onclick = closeBook;
next.onclick = nextPage;
darkMode.onclick = toggleDarkMode;
