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

var total = 8;

const books = {
    /*
    Line capacity: 33 characters
    Page capacity: 781 characters
    DON'T FORGET TO UPDATE BOOK TOTAL ABOVE
    book#: [
        // edit TITLE, AUTHOR, READING LEVEL, SCHEDULED RELEASE DATE & copy share link ID, 
        "<br><br><br><br><br><br><br><bt>TITLE</bt><br><br><heading>By AUTHOR</heading><br><br>Reading Level: <star>★★★★★☆☆☆☆</star><br>Coming soon in MONTH 2023<br><br><button id='book#' onclick='copyLink();'>Copy book share link</button>
        "Coming Soon!",
        "Coming Soon!",
        // DON'T FORGET TO UPDATE BOOK TOTAL ABOVE AND CHANGE RELASE DATE TO PUBLISH DATE
    ],
    */
    book1: [
        "<br><br><br><br><br><br><br><bt>Nunnerology</bt><br><br><heading>By Nunners</heading><br><br>Reading Level: <star>★★★☆☆</star><br>Published on 1/17/2023<br><br><button id='book1' onclick='copyLink();'>Copy book share link</button>",
        "This is an autobiography (maybe?) that I wrote so you guys can learn more about me. For a more brief version (mainly relating to code), visit my <a href='about'>about me page</a>.",
        "Hi there, I'm Julianna, but I'm known as Nunners on this website. I build and code Roblox games for fun. I also enjoy making this website, coded through HTML, JavaScript, and CSS. The coding languages I've learned are HTML, JavaScript, CSS, Luau (language based on Lua used for Roblox game making), and PHP.",
        "Three words describing my personality are funny, smart, and creative. I'm a perfectionist (which I never realized actually). I have an older brother and a younger sister. In my free time, I play Roblox or code (this website or Roblox games)(in case you're wondering, my username is Nunnerrs, but I'd probably only friend you if I know you in real life). My friends are Kayleigh, Lianna, and Skylar (I have a lot more but they don't want to be publically mentioned). I'm a big fan of Pokémon and Toilet-Bound Hanako-kun.",
        "Here's a list of some of my <b>favorites:</b><br>• Animals — Hedgehogs, frogs, and ducks<br>• Anime — Toilet-Bound Hanako-kun<br>• Chips — Cheddar & Sour Cream Ruffles and Cheetos Puffs<br>• Color — Aquamarine (hex #00ffae)<br>• Foods — Bistek, fried bangus, gyudon (from Yoshinoya), and SPAM<br>• Holiday — Christmas 🎄<br>• Manga — Jibaku Shounen Hanako-kun<br>• Music Artists — Snail's House, Kirara Magic, and Tobu<br>• Music Genre — kawaii future bass and electro house<br>• Pokémon — Shaymin and Shuckle<br>• Sport — None<br>• Video Games — Roblox, Genshin Impact, and BanG Dream!",
        "<b>Fun facts about me:</b><br>• I was born on a couch (not in a hospital &#128561)<br>• My memory is really good, especially my long-term memory (but sometimes my short-term memory fails me so it balances out)<br>• I memorized every single Pokémon in exsistence (before Gen. 9, but I'm memorizing more!) + (a lot of) types of each of them + facts about many + Gen. 6 & 7 cries",
        "<b>Fun facts about my website:</b><br>• My personal website (nunnerrs.github.io) used to be on W3Spaces (I switched because they started limiting the free plan grrr)<br>• Web Chef was renamed three times. Its original name was JS Chef, but was changed to Button Chef, Web Cuisine, and now it's Web Chef! Heheh I just wasn't satified—",
        "And that's all I can think of adding for now! I'll update this more as things change.",
    ],
    book2: [
        "<br><br><br><br><br><bt>How To NunnerLibrary</bt><br><br><heading>By Nunners</heading><br><br>Reading Level: <star>★★★☆☆</star><br>Published on 1/17/2023<br><b>Press the <span style='font-family: M PLUS ROUNDED 1C'>→</span> button below</b> to flip the page<br><br><button id='book2' onclick='copyLink();'>Copy book share link</button>",
        "Welcome to the NunnerLibrary! This book is a tutorial for the NunnerLibrary. You'll learn what everything does and the meaning of things such as the Reading Level. Books should be read from left to right, top to bottom. To open a book, click on any button under a book genre (<span style='font-family: M PLUS ROUNDED 1C'>&#9888</span> clicking on a book while one is already open will \"override\" your currently open book <span style='font-family: M PLUS ROUNDED 1C'>&#9888</span>). Each book is sorted into a category/genre (e.g. click on Nunnerology under Non-Fiction). Books with \"Vol. 1\", \"Vol. 2\", etc under the title means that book is part of a series. If you're going to start a book series, you should always read each book in order (start with Volume 1, then read Volume 2…) so you understand the storyline.",
        "The Reading Level on the cover shows the \"difficulty\" of the currently open book. It's out of 5 stars, <star>★☆☆☆☆</star> means the book is very easy to read while <star>★★★★★</star> means the book may be pretty difficult to read (because of the vocabulary). Don't worry if you like reading books 2-stars or less or 4-stars or more, everyone has their likes and dislikes. Most books have a reading level of <star>★★★☆☆</star> (moderate level). The book will open up above all the book buttons along will three different buttons. The <span style='font-family: M PLUS ROUNDED 1C'>←</span> button flips the book one page backward. The <span style='font-family: M PLUS ROUNDED 1C'>&#215</span> button closes the book. The <span style='font-family: M PLUS ROUNDED 1C'>→</span> button flips the book one page forward. (The book continues on the next page, so click on the <span style='font-family: M PLUS ROUNDED 1C'>→</span> button below!)",
        "The \"Copy book share link\" can be used to bookmark a NunnerLibrary book or to share a specific book to someone else. Clicking on it copies a link to your keyboard's clipboard. If you visit the link, it will open the exact book you copied the link from. The \"Turn on dark mode\" button at the bottom makes the background black and system buttons dark gray. Many people like using dark mode (pretty much everywhere they can), and the darkness can be easier on eyes (especially at night). The \"To The NunnerVerse²\" at the bottom is a link to go back to my homepage.",
        "In the NunnerLibrary, you'll find all sorts of books. Most will be original stories, but some could feature characters from existing books or could be based on real books. There's currently a total of " + total + " books in the NunnerLibrary database. If you know me in real life or have my Discord username, you can always let me know any book suggestions you have (either the story outline or the entire story). I hope there's at least one book here you'll enjoy reading :D! (Click the <span style='font-family: M PLUS ROUNDED 1C'>&#215</span> to close the book).",
    ],
    book3: [
        "<br><br><br><br><br><br><bt>Feet Quest</bt><br><br><heading>By Lianna</heading><br><br>Reading Level: <star>★★★☆☆</star><br>Coming soon sometime in 2023<br><br><button id='book3' onclick='copyLink();' disabled>Copy book share link</button>",
        "Coming Soon!",
        "Coming Soon!",
    ],
    book4: [
        "<br><br><br><br><br><bt>I Got Reincarnated<br>As A Cow</bt><br><br><heading>By Skylar</heading><br><br>Reading Level: <star>★★★☆☆</star><br>Coming soon sometime in 2023<br><br><button id='book4' onclick='copyLink();' disabled>Copy book share link</button>",
        "Coming Soon!",
        "Coming Soon!",
    ],
    book5: [
        "<br><br><br><br><br><br><bt>Pinky & Mint: Coral</bt><br><br><heading>By Nunners</heading><br><br>Reading Level: <star>★★☆☆☆</star><br>Published on 1/18/2023<br><br><button id='book5' onclick='copyLink();'>Copy book share link</button>",
        "Pinky and Mint are swimming in the ocean. They are octopi. Mint turns around and sees a strange thing on the ocean floor.<br>\"Ooh, what's that?\" he says, swimming towards it. Pinky floats next to him.<br>\"Wow, that looks cool!\" she exclaims. \"Wait, what is it?\"<br>The strange object is shaped like long, purple tubes.<br>\"Maybe…it's an animal?\" Mint guesses. Using one tentacle, he touches the bumpy outside, but nothing happens. Pinky looks at the thing upside down.<br>\"It didn't move, so it's not an animal…\" Mint says.<br>\"Maybe it's a plant,\" Pinky says. \"Can I eat it?\"<br>\"Umm, I don't think you should,\" Mint warns.",
        "He looks inside the tubes from the top. All them are empty. They both circle it many times while thinking.<br>\"It looks like it's stuck to the ground,\" Pinky says. \"Wait, what's <i>this</i>?\"<br>She stops and looks at another strange thing nearby. It's yellow and has branches. Bumps cover the entire thing.<br>\"These look so cool,\" Mint thinks out loud. \"Are they similar?\"<br>\"Where do the roots of the plant go…?\" Pinky says. She tries to pull the yellow thing out. A branch came off easily when Pinky did, and they watched as it fell onto the ground. \"Uh oh…I broke it…\"<br>\"AAH! What if that was a living thing?!\" Mint says in a panic. \"You broke off it's arm!!\"",
        "A small teal fish swims by and looks at the octopi.<br>\"NOO!!\" she cries in a shrilly voice. \"Look what you've done to my pwecious home…\"<br>The fish races to the yellow thing and sighs.<br>\"I-I'm so sowwy, i-it was an accident,\" Pinky stammers.<br>\"Huh? You don't need to be sorry,\" she smiles. Pinky and Mint look completely confused.<br>\"I should thank you. I've always wanted more of it. Anyway, who <i>are</i> you two?\"<br>\"I'm Mint, and she's Pinky,\" Mint says. He tilts his head a little. \"What do you mean by <i>it</i>?\"<br>\"You know, the <i>coral</i>,\" the fish says, swimming into a purple tube. She sticks her head out of it. \"This is my home, in the <i>coral</i> reef.\"",
        "\"Ohhhh,\" Pinky realizes. \"So <i>coral</i> is the name of these things.\"<br>\"So you live in the coral,\" Mint says. \"They really are plants.\"<br>\"No, they aren't,\" the fish says. Pinky's eyes widen. She turned to the yellow branch-like coral<br>\"I'm sowwy, little guy…\" she says. \"Uhh, where's their eyes?\"<br>\"Well, coral aren't fish either,\" says the little fish. \"But they are alive. Oh, did you see the piece that broke off?\"<br>She swims to the broken coral piece on the ground. It stands upright like a tiny cone, while earlier it didn't. \"These yellow ones are called staghorn coral. Look, it's already growing.\"<br>\"Woah…do they multiply that way?\" Mint asks.<br>\"Pretty much!\" the fish says.",
        "\"I've wanted another Staghorn by my home for a while since they've got many branches.\"<br>\"What's this one then?\" Pinky asks, floating beside the purple tube-like coral.<br>\"Those are tube coral,\" she explains.<br>\"I'm hungry. We should really go now…\" Mint says.<br>\"See you again someday! Bye-byeee!!\" Pinky waves a tentacle at the fish.<br>\"Oh, and my name's Liva! Bye!\"<br>Mint and Pinky swim away from the corals, only to see hundreds of more coral below a small cliff in all different colors.<br>\"Wanna go exploring first?\" Mint smiles at Pinky.<br>\"Race ya to that big rock!\" she called, rushing ahead.",
        "\"W-wait for me! Pinkyyyyy!!!!\" Mint exclaimed, swimming after her.<br><br>The adventures of the two octopi continues!<br><br><b>Coral Facts:</b><br>• Corals are not plants! They are animals just like Pinky and Mint.<br>• Corals are made up of hundreds of thousands of polyps, which are tiny, soft creatures that are grouped together.<br>• 25% of all ocean species (creatures) live in coral reefs, just like Liva!<br>• Coral comes in all different colors, shapes, and sizes! Besides staghorn and tube, there's over 6,000 species of coral.",
        "Read the next book, <i>Pinky & Mint:<br>Hermit Crabs</i>, coming out in February 2023<br><br><br><b>Sources <i>[if you want to learn more about coral, click <a href='https://www.fisheries.noaa.gov/corals'>here</a> (has higher vocabulary)]</i></b><br>• Seven surprising facts about coral — <a href='https://www.sheddaquarium.org/stories/seven-surprising-facts-about-coral'>https://www.sheddaquarium.org/<br>stories/seven-surprising-facts-about-coral</a><br>• Are corals animals or plants? — <a href='https://oceanservice.noaa.gov/facts/coral.html'>https://oceanservice.noaa.gov/<br>facts/coral.html</a><br>• Staghorn coral — <a href='https://www.fisheries.noaa.gov/species/staghorn-coral'>https://www.fisheries.noaa.gov/<br>species/staghorn-coral</a><br>• Google search (on questions about coral)",
    ],
    book6: [
        "<br><br><br><bt>Hope (Vol. 1)</bt><br><br><heading>Based on a <a href='https://www.youtube.com/watch?v=e0wVNJ-fAeI'>story</a> by Jamie ThatBloxer</heading><br><br>Written by Nunners<br>Reading Level: <star>★★★☆☆</star><br>Published on 1/22/2023<br><br><b>WARNING:</b> This book features gun violence. This book is also very emotional.<br><br><button id='book6' onclick='copyLink();'>Copy book share link</button>",
        "All around the room, girls in pink tutus were having last-minute ballet practice. Hope stood against the handrail, amazed at how skilled all the other girls were. From across the room, three girls pointed at Hope, who was wearing a white and brown tutu.<br>\"What is she even wearing?\" a black-haired girl smirked.<br>\"You're asking me?\" a girl beside her with green & blue hair sniggered. \"It looks like she got that from the dollar store!\"<br>\"Come on, that's mean,\" a blonde-haired girl by them said. \"She at least spent two dollars on that thing she calls an outfit.\"<br>All three girls laughed to themselves.<br>The ballet instructor walked up to Hope. \"Hope, what's the",
        "matter?\"<br>\"Nothing,\" she replied. \"I'm just waiting for my dad to come.\"<br>\"He will, don't worry.\"<br>\"Maybe.\"<br>\"Just work on your pointe, you need to be prepared.\"<br>\"Yes, Miss.\" Hope nodded. She began to practice and tried not to worry. A man quickly made his way towards her. \"Hey sweetie, sorry I'm late,\" he said. \"Just got caught up in something.\"<br>\"It's okay,\" Hope reassured. \"At least you're here now.\"<br>\"Here, I picked out this flower, especially for you.\" Her dad held out a white flower and tucked it under her headband. \"Here you go.\"<br>She smiled, her face blushing red like her hair. \"Aww, thank you Dad. I love you.\"",
        "\"Well, I better go back to my seat,\" her dad said. He hugged Hope tightly. \"You'll do amazing, remember I believe in you.\"<br>&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160✿ ✿ ✿<br>The music started playing, and all the ballerinas began dancing. Every seat in the audience was full. The ballerinas danced gracefully along with the music. Hope ran across the stage and leaped. She led the others in pointe at the center. Hope's dad sat in the front row, tears of joy in his eyes. Hope twirled in the center as the ballet performance came to a close. Her dad stood up and bursted into applause.<br>&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160✿ ✿ ✿<br>In a diner open late at night, Hope's dad was busy at work.",
        "He mopped the floor, cooked the food, and cleaned the tables.<br>\"Hello?\" a woman sitting in a booth called. \"My burger has onions in it. I specifically asked for no onions.\"<br>\"I apologise,\" Hope's dad responded. \"I'll get you a new one right away.\"<br>He sighed as he finished preparing the burger. Later in the night, he checked out groceries for a customer in a store. He swept the floor and cleaned the isles too.<br>\"Richard, could I talk to you in my office?\" the manager said as he came up to him.<br>\"Yes, of course.\" he replied.<br>They entered the office, and the manager sat down.",
        "\"Well, you've been coming late to work recently,\" he began. \"And you've been slacking in your work performance. What's been going on?\"<br>\"I have a daughter. I need to take care of her.\" Richard explained. \"Plus, I have another job.\"<br>\"I think you're taking on more than you can handle,\" the manager said calmly. \"So, I am with no other choice but to relieve you from this job. You've been a brilliant employee.\"<br>\"I really need the money, please dont—\"<br>\"I have no other choice. I'm sorry.\"<br>\"Thank you for the opportunity.\" He walked out of the manager's office and to a park. There, he sat down and started crying.",
        "&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160✿ ✿ ✿<br>The next day, Hope was performing ballet at the park. Her hat was placed upside-down on the floor for donations. A blond-haired boy placed a dollar bill in her hat.<br>\"You're really talented,\" he told her. \"You know that, right?\"<br>\"Oh, thanks…\" Hope blushed.<br>\"Uh, I'm Noah.\"<br>\"Hope.\"<br>\"Pretty name.\" Noah said.<br>\"Yeah, my dad says it's special.\"<br>\"Mhm.\"<br>\"Well, nice meeting you, Noah. I have to go now…\" Hope said.<br>\"Nice meeting you too.\"<br>Hope walked away, still smiling and blushing.<br>&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160✿ ✿ ✿<br>\"Bye Lucy,\" Hope's dad called to his coworker at the diner. \"I'll see you tomorrow.\"",
        "\"See you, stay safe.\" Lucy replied. He went outside and began walking home. He looked around, feeling slighly uncomfortable. He continued, but was interrupted.<br>\"Stay where you are,\" a man behind him said. He wore a beanie and goggles, holding a gun pointed directly at Richard. Hope's dad turned around.<br>\"Look, I-I don't want any trouble,\" he told the gunman.<br>\"You aren't going to get any,\" the gunman threatened. \"As long as you give me what I want.\"<br>Tears welled up in his eyes as Hope's dad handed him a few dollar bills.<br>\"You're joking, right?\" the gunman said.",
        "\"It's all I have,\" Richard looked down at the floor. \"I work at a diner, I have a child…I don't have much…\"<br>\"Boohoo, cry me a river. There's an ATM <i>right there</i>,\" the gunman said, his gun still pointed at him. \"Take out some money or I'll put a bullet through your head.\"<br>\"I barely have any money in my account. I have <i>nothing</i>…\" he said. The gunman shoved him, but Richard punched him in the face and knocked him over. The gun fell out of his hands, and Richard quickly grabbed it. He pointed it at his attacker.<br>\"I know you won't do it,\" the gunman smirked. A gun went off loudly, but it wasn't the one Richard held. Hope's dad looked down at his chest, and fell to his knees.",
        "Another gunman stood behind him, watching Richard collapse. The two gunmen walked away, leaving him on the floor. Richard's life flashed before his eyes.<br><br>He remembered the day he met her at the park, her bright red hair, and the day he proposed to her, and when…<br>\"I'm sorry to say this but…\" the doctor told him all those years ago.<br>His memories of his wife came flooding back to him. Memories of her when she was pregnant…and her grave too. When she left this world.<br>\"…Your wife died during childbirth.\"",
        "He recalled the happy ones too, of the baby, of Hope growing up, learning how to ride a bike…All those bittersweet memories…<br><br>Lucy walked out of the diner, looking around after hearing the gunshot. Her eyes grew wide as she saw him and called for help.<br>&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160✿ ✿ ✿<br>Back at home, Hope woke up with a strange feeling.<br>\"Dad?\" she called as she headed down stairs. \"Hmmm…I guess he's working a long shift.\"<br>Hope walked to school. During class, the intercom went off.<br>\"Hope Moore, please come to the principal's office.\"<br>Hope left and opened the door to the office. The principal sat at his desk, looking very concerned.",
        "\"Yes, sir? Why did you call me?\" Hope sat down, looking worried. \"I didn't do anything!\"<br>\"It's not about school…\" the principal said, not sure how to begin.<br>\"Then what is it?\"<br>\"Your dad…\"<br>\"Yeah, I was wondering about him, he wasn't at home—\"<br>\"Hope. Your dad is in the hospital…\"<br>\"What?! WHY?\" Hope cried, tears welling up in her eyes.<br>\"He was shot in the back. We're going to get you to the hospital now.\"<br>\"Is-is he okay?\"<br>\"We don't know yet…\" the principal told her. Hope sobbed in her hands while the principal watched her, not knowing how to comfort her.",
        "&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160✿ ✿ ✿<br>Hope held her dad's hand as tears streaked down her cheeks. Her dad had a black eye and his arm was connected to a container of blood. A monitor beeped in the background, keeping track of his heart rate. He opened his eyes slightly.<br>\"Hope…\" her dad said. He was hit with an old memory of them.<br><br>Hope was doing homework while he washed the dishes.<br>\"Hey, Dad? Why did you name me Hope?\" she had asked.<br>\"Well,\" he responded. \"Your mom left us really early.\"<br>It had hurt him to recall the pain Hope's mom had gone through. He had fallen to his knees when he heard the doctor's unforgettable words.",
        "\"You never got to meet her, but she was the prettiest woman you'd ever see.\" Hope's dad had told her. \"I was heartbroken, but when I looked at you, I knew.\"<br>His eyes filled with tears as he washed the dishes. \"Your name is Hope, because hope is what you give me.\"<br>Hope blushed as she looked at her dad from across the room, her eyes brimming with tears.<br><br>\"Dad…?\" Hope glanced at her dad with a worried look. The monitor's beeps began to slow down. He smiled at Hope, and closed his eyes. Hope's heart dropped in her chest.<br>\"Dad…\" Tears spilled from her eyes as she gently shook his arm. \"Please…don't go…\"",
        "No response. The smile on her dad's face faded away.<br>\"No…\" Hope muttered. The sound from the monitor beeped without pausing. She collapsed in her chair, streams of tears falling non-stop.<br>&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160✿ ✿ ✿<br>The pain in her chest never left. Hope stared at her dad's casket with the priest. She placed a white flower on top of it.<br>\"I picked out this flower, especially for you, Dad.\" Hope said, trying to choke back her tears.<br><br>Hope rolled her luggage behind her as she followed the woman giving her a ride. She cried as she watched her childhood home fade off in the distance.",
        "The woman opened the car door and led Hope to Sarah's Orphanage. When they walked inside, Hope spotted a blond-haired boy sitting in a corner. His face was buried in his knees, and when he looked up Hope saw tears running down his face.<br>Her eyes grew wide and tons of questions raced across her mind. \"Noah…?\"<br><br><i>Hope Vol. 2</i> coming in February 2023!",
    ],
    book7: [ // "<bt>LETTER</bt><br><b>TITLE</b><br>If you dreamt …",
        "<br><br><br><br><br><bt>Nunners' Guide To Dreams & Nightmares</bt><br><br><heading>By Nunners</heading><br><br>Reading Level: <star>★★★☆☆</star><br>Published on 2/15/2023<br><br><button id='book7' onclick='copyLink();'>Copy book share link</button>",
        "<heading><b>Introduction</b></heading><br><b><i>Nunners' Guide To Dreams & Nightmares</i> is a stupid book that shouldn't be taken seriously</b>. If you're shocked or mad about what your dreams tell about you, just know it's probably not true. Don't think I'm diagnosing you or anything. Anyways, the <i>things-you-see-in-your-dreams</i> are sorted in alphabetical order. Meanings created by me except a few (see credits at the last page). And uh if you dreamt or had a nightmare last night don't forget to look for its meaning here.<br><br>Well, I hope you enjoy it!<br>— Nunners",
        "<heading><b>A</b></heading><br><b>Ants</b><br>If you dreamt you were being killed/trampled by a ton of ants, it shows that you're too weak/scared to even step on an ant lol. If you were dreaming about watching ants, you probably really like ants 'cause I don't know who dreams of ants…<br><br><b>Animal</b><br><i>See Ants/Bears/Bees/Cows/<br>Giraffes/Jellyfish/Koalas/Lizards</i>",
        "<heading><b>B</b></heading><br><b>Bears</b><br>If you dreamt that a bear attacked/killed you, you probably <i>won't</i> be attacked by a bear in the future. Ah, scratch that. Everyone's gonna be mauled to death by a bear in the near future (according to <i>Bears Want To Kill You</i> by Ethan Nicole). If you've been attacked by a bear in the past, your nightmare was probably just a cute little memory of the past, don't worry about it. Yeah…<br><br><b>Bees</b><br>If you dreamt that you were being swarmed by bees, it may be a result from a bad memory from the past relating to bees.",
        "<heading><b>B</b></heading><br><b>Bees (cont.)</b><br>Same goes for dreaming about being stung by one/many. If you had a nice dream about petting cute bees, then good for you since 12.5% of all people are terrified by them.<br><br><b>Burgers</b><br>If you dreamed about burgers then you're probably really obsessed with burgers. If you dream of burgers or any other junk food several more times this week, then you may develop obesity (joking). If you dreamt that someone stole your burger then oh no someone's gonna steal your burger today :C",
        "<heading><b>B</b></heading><br><b>Bulls</b><br>Bro what in the world you doin' dreaming about bulls????",
        "<heading><b>C</b></heading><br><b>Cheeseburgers</b><br><i>See Burgers</i><br><br><b>Cows</b><br>If you dreamt about cows, it could be because you ate some Chick-fil-a yesterday. If you didn't, then it probably means you really like cows for some reason. In many cultures, cows are considered sacred, so something really epic may happen to you soon. If you were dreaming that you got reincarnated as a cow, then maybe you read <i>I Got Reincarnated As A Cow</i> a bit too much. If you constantly dream of turning into a cow, then it's very likely that you <i>will</i> become one when you die. If you dreamt about male cows (called bulls get it right), then <i>see Bulls</i>.",
        "<heading><b>D</b></heading><br><b>Death</b><br>If you dreamt that you died, then you probably woke up right after (omg you did 😱). If you dreamt that someone you care about died, then uh oh <i>something similar might just happen</i> 👀",
        "<heading><b>E</b></heading><br><b>Egg</b><br>If you dreamt about cooked eggs, then you probably really want eggs for breakfast. Chances are, if you already ate breakfast, there weren't any eggs in it. Too bad.",
        "<heading><b>F</b></heading><br><b>Falling</b><br>If you dreamt that you were falling off a high height or into oblivion, there's probably some really big problems bugging you right now. But if you dreamt off falling off a high height on <i>purpose</i>, then…that's a different story…(<i>see Suicide</i>)",
        "<heading><b>G</b></heading><br><b>Giraffes</b><br>If you dreamt about giraffes, your neck will grow 5% longer than normal every month starting tomorrow 🦒.",
        "<heading><b>H</b></heading><br><b>Hamburgers</b><br><i>See Burgers</i>",
        "<heading><b>I</b></heading><br><b>Ice Cream</b><br>If you dreamt about ice cream, it shows that you look for all the sweetest things in life. I hope you didn't just eat ice cream for breakfast right now.",
        "<heading><b>J</b></heading><br><b>Jellyfish</b><br>If you dreamt about jellyfish, it shows you may look all cute on the outside, but you're actually really stingy on the inside.",
        "<heading><b>K</b></heading><br><b>Koalas</b><br>If you dreamt about koalas, you probably really want to go back to sleep right now. Maybe you're jealous they get to sleep so much and you're just here trying to stay awake.",
        "<heading><b>L</b></heading><br><b>Lizards</b><br>If you dreamt lizards, then there's probably lizards in your backyard right now. If you don't have a backyard, then you probably enjoy watching lizards skitter across sidewalks or something. Or they're being annoying pests where you frequently go to. If none of these apply to you, then you're probably just dying to see a lizard in-person.",
        "<heading><b>M</b></heading><br><b>Mad</b><br>If you dreamt about being mad at someone/some people you know (a friend, someone who lives with you), then you probably had an argument or fight recently (bro no way 😱). From the looks of it, the argument didn't end well because one person may have just stormed off or hurt someone (could be you). The best thing you and the people involved should do is ✨✨make up✨✨ and ✨✨apologise✨✨.",
        "<heading><b>S</b></heading><br><b>Suicide</b><br>If you dreamt that you commit suicide, then you should attend some suicide counseling, I don't really know what to tell you—But if you were dreaming that someone you know/care about did, then uhhhh maybe tell them that you're there for them…? You may be forseeing the future or reading their thoughts somehow. 👀",
        "<heading><b>T</b></heading><br><b>Teeth</b><br>If you dreamt that a tooth fell out, then one of your teeth will most likely come out soon (if you still got baby teeth). If one/all of your teeth came out in your dream and you have all permanent teeth, then you're probably gonna lose something soon (it probably won't be just teeth).",
        "<heading><b>Credits</b></heading><br>• <a href='https://www.dreamdictionary.org'>Dream Dictionary</a> — meanings for Cows & Falling<br>• <a href='https://bestbees.com/Culture'>BestBees.com — melissophobia statistics",
    ],
    book8: [ // "<heading><b>Mon. DD, 2023</b></heading><br><br>• ", 
        "<br><br><br><br><br><br><bt>NunnerVerse Weekly</bt><br><br><heading>By Nunners</heading><br><br>Reading Level: <star>★★★☆☆</star><br>Latest news: 2/27/2023<br><br><button id='book8' onclick='copyLink();'>Copy book share link</button>",
        // UPDATE NEWEST NEWS ABOVE
        "<heading><b>Feb. 28, 2023</b></heading><br><br>• Publishing <i>Pinky & Mint: Hermit Crabs</i> sometime today (or in a few days)! I just need to cite the sources used. I also made the upcoming books' covers visible, but they can't be viewed yet.", 
        "<heading><b>Feb. 27, 2023</b></heading><br><br>• <i>Pinky & Mint: Hermit Crabs</i> & <i>Hope Vol. 2</i> release delay — Sorry guys, the two books I promised would release in February are going to be postponed to March. I've been busy with schoolwork, and I can't really write two books in two days so :P. But don't worry, I'll try to write them very soon (<b>P&M:HC is 95% done!</b>)<br>• Added a day-night cycle to CGT and a Lantern & Tip Book gear! Light up the night with the Lantern and discover useful tips with the Tip Book. BTW, I'm working on a Toy Ball gear so you can play fetch with your pets •u•<br>• News articles that are spread across multiple pages should be read from right to left (e.g. read right page before left)",
        "<heading><b>Feb. 22, 2023</b></heading><br><br>• New Custom Gear Testing updates! Join the game to earn the 100 Visits achievement (cool notification too!) and a free sparkler gear. There's also a new Meet Nunnerrs! badge; touch the NunnerOrb gear (item only I can have) if I'm holding it out and you'll unlock the Nunnerrs Suit. You can also ask me to join you if you're playing CGT (if I'm available) on Discord (NunnerDev server/DM) for the badge.",
        "<heading><b>Feb. 15, 2023</b></heading><br><br>• I've published a pre-release of <i>Nunners' Guide To Dreams & Nightmares</i>! It's unfinished but be sure to check it out. I'll add some more dream meanings and some chunky paragraphs talking about dreams in the future.<br>• I'm currently writing <i>Pinky & Mint: Hermit Crabs</i>! The Pinky & Mint series are designed so that you can read the books in any order.",
        "<heading><b>Feb. 15, 2023</b></heading><br><br>• I made a new \"book\" called <i>NunnerVerse Weekly</i> (the one you're reading right now). It's basically where I'll put all my update logs for every project from now on. The newest logs will be on the first few pages. I'm not sure if I should delete the old logs after a long time though. [DISCLAIMER: I'm probably gonna add new \"articles\" every few days, but there's <i>still a chance</i> for me to forget to post new logs. So pls don't get mad if you've been waiting for \"new update\" but there isn't yet—]",
    ],
    book9: [
        "<br><br><br><br><br><br><bt>Pinky & Mint: Hermit Crabs</bt><br><br><heading>By Nunners</heading><br><br>Reading Level: <star>★★☆☆☆</star><br>Coming soon on 3/1/2023<br><br><button id='book9' onclick='copyLink();'>Copy book share link</button>",
        "Pinky and Mint swim along the ocean floor. They are octopi. Mint quickly picks up a sea shell on the floor but doesn't find anything inside.<br>\"Haahhhh…\" he sighs. \"All I see are empty shells and rocks. Didn't you say there's snails in these shells?\"<br>\"Hold on, we'll find one somewhere around here…\" Pinky says hopefully. \"We just gotta look harder!\"<br>As they continued their search, Pinky finds a round shell and sees something in it that catches her eye.<br>\"Mint! I found it!!\" she calls.<br>Mint drops the rock he held and swims towards Pinky with excitement.<br>\"Wow…what is it?\"",
        "The red little creature inside the shell doesn't move.<br>\"See? I told you we'd find one!\" Pinky says happily.<br>\"But…what <i>is</i> that?\"<br>\"Uh, it's <i>obviously</i> a <i>snail</i>!\"<br>\"How am I supposed to know?\"<br>The creature twitches as Pinky scoops it into her arms. As they look more closely, it's body looks scaly and dotted with hairs.<br>\"Pfff!\" Mint laughs. \"That's not a snail! That thing's not slimy <i>or</i> squishy!\"<br>\"O-Of course it's a snail!\" Pinky says. She looks down at the shelled creature in her arms. \"Hey there little guy…\"<br>The living thing wiggles as Pinky touches it gently. Both octopi gasp as they realize its \"body\" is actually the creature's legs!",
        "\"WAAUGHH!\" Pinky screams. \"Th-that's NOT a snail—\"<br>She lets go of the shell and the creature sinks down from her arms onto the floor. Little eyes slowly poke out from the shell and extends its legs.<br>\"Whew…\" the red creature says, shaking sand off of it's body. It looks at the octopi and jumps. \"Yikes!\"<br>The creature quickly digs into the sand to hide, but its shell is still visible.<br>\"Hey, wait!\" Mint cries. He moves a little closer to the frightened creature. \"Umm…lil' crab, we're not here to harm you…\"<br>\"Eek!\" the crab curls up even more into its shell. \"G-Go away…\"<br>\"Hmmm…how do we get them to <i>not</i> be scared…?\" Pinky wonders.",
        "\"Wait, I think I know!\" Mint's eyes light up as he grabs a handful of seaweed and places it in front of the crab. \"Here.\"<br>Moments later, tiny eyes pop out from the shell and stares directly at the seaweed, then to Mint, then to Pinky. Two large claws quickly snatch the seaweed, and the crab munches away at it. It keeps a close eye on the octopi but happily continues to eat.<br>Mint smiles and Pinky does a flip. \"Yippeee!\" Pinky exclaims. She stops and rushes towards the crab. \"Ooh, wait, what's your name, little crabby guy?\"<br>\"Kmmhy,\" The crab mumbles, continues to eat.<br>\"Ummm…what did you say?\" Pinky frowns.",
        "Mint and Pinky watch the little guy eat quietly. After a while, it takes its last bite and swallows. \"Yummy…\" the creature smiles happily. It glances at the two octopi looming over it. \"Oh yeah.\"<br>The crab stands up and stretches, shaking off the sand on its shell. It looks at them with bright eyes. \"My name's Cory. I thought you guys were gonna hurt me or something at first,\" the crab says in a soft voice. It holds out a claw in handshake. \"You guys look friendly though.\"<br>\"Nice to meet ya, Cory!\" Mint says, shaking his small claw. \"OWWIE!!\"<br>Mint grabs his own tentacle and rubs it. \"You pinched me…\"",
        "\"Ah! S-Sowwy…\" Cory apologises. He sighs at his tiny but sharp claws. \"I-I do that a lot, I'm sowwy…\"<br>\"It-it's fine.\" Mint turns to Pinky. \"I know he isn't the snail you were looking for, but…I thought crabs <i>didn't</i> have shells…\"<br>\"It's 'cause I'm a <i>hermit crab</i>, duhh!\" Cory says, crawling towards them. \"I like small homes that I can bring wherever I go!\"<br>\"Wait, that's your <i>home</i>?!\" Pinky gasps.<br>She looked at him with sad eyes. \"I'm sowwy I picked it up earlier…I didn't know—\"<br>\"It's okay, really,\" Cory responds.<br>His eyes widen and he crawls away from the octopi.",
        "Both octopi glance at one another in confusion.<br>\"It's perfect!\" Cory exclaims, gently touching an empty shell. It's slightly larger than his current shell. He wiggles in his shell and suddenly pops off of it. The rest of his body is exposed, which is in the shape of a spiral like his original shell.<br>\"Ahh! Are you okay?!\" Pinky panics.<br>\"Huh? What do you mean?\" Cory tilts his head in confusion.<br>\"I'm just getting myself a new shell.\"<br>He backs his tail into the new shell, which is shaped like a wide cone. The rest of Cory's body is now hidden inside, and he tucks into the shell even more.<br>\"If I fits, I sits,\" he says calmly.",
        "\"Huh? I thought you guys made your own shells…\" Mint says. \"So you use shells made by snails. Right?\"<br>He gently picks up Cory with two tentacles. The crab's limbs don't move at all and little bubbles sprout from Cory's mouth.<br>\"Oh, he fell asleep…\" Mint sighs. He places him down next to other shells that seem to be sleeping hermit crabs.<br>\"I didn't know there were more crabs.\" Mint says, turning to Pinky. \"So, what now?\"<br>\"Hmmmm…maybe we can go look for the <i>actual</i>snail,\" Pinky says. \"The one I found was <i>really</i> big and had a green shell\"<br>\"Whaaaat!! I think you're making stuff up now…\"<br>\"I'm not! It was so pretty, you should see it!\"",
        "\"How am I supposed to see it if we don't start looking?\"<br>\"…Oh yeah.\" Pinky says. She waves at Cory. \"Good niiight…\"<br>Mint and Pinky swim away, lifting up rocks and shells.<br><br>The adventure of the two octopi continues!<br><br><b>Hermit Crab Facts</b><br>• Hermit crabs molt, which is when they shed their exoskeleton (outer shell-like body). They do this because their exoskeleton doesn't grow.<br>• Hermit crabs change shells every year or so, and it usually molts when it does.<br>• Hermit crabs live in all kinds of sea shells. They use shells made by other creatues like snails. Sadly, hundreds of thousands die because they mistake plastic for shells.",
        "<b>Hermit Crab Facts:</b><br>• Hermit crabs are very social, meaning they like to interact with other hermit crabs as well as other sea creatures.<br><br>Read the next book, <i>Pinky & Mint: Whales</i>, coming out in April 2023!<br><br><br><b>Sources</b><br>• ",
        // DON'T FORGET TO UPDATE BOOK TOTAL ABOVE AND CHANGE RELASE DATE TO PUBLISH DATE
    ],
    book10: [
        "<br><br><br><bt>Hope Vol. 2</bt><br><br><heading>Based on a <a href='https://www.youtube.com/watch?v=e0wVNJ-fAeI'>story</a> by Jamie ThatBloxer</heading><br><br>Reading Level: <star>★★★☆☆</star><br>Coming soon in March 2023<br><br><button id='book10' onclick='copyLink();'>Copy book share link</button>",
        "Hope looked at the blond-haired boy, who was sitting in a corner and had recently been crying.<br>\"Noah?\" Hope said. After everything that happened, her only friend turned out to be an orphan? \"What are you doing here?\"",
        "Coming Soon!",
        // DON'T FORGET TO UPDATE BOOK TOTAL ABOVE AND CHANGE RELASE DATE TO PUBLISH DATE
    ],
};

const hidden = [3, 4, 9, 10];

function openBook(bookId) {
    let open = true;
    if (hidden.length > 0) {
        for (let i = 0; hidden.length - 1; i++) {
            if (bookId == hidden[i]) {
                open = false;
                break;
            };
         };
    };
    if (open == true && currentBook == null) {
        currentBook = bookId;
        book.classList.add("nh");
        book.style = "visibility: visible;";
        back.style = "visibility: visible;";
        close.style = "visibility: visible;";
        next.style = "visibility: visible;";
        pageL.innerHTML = "";
        pageR.innerHTML = books["book" + currentBook][0];
        pageNumL = -1;
        pageNumR = 0;
    };
};

var params = window.location.href.split("?")[1];
var param1 = params.split("&");
if (param1[0].split("=")[0].match("book") && Number(param1[0].split("=")[1])) {
    openBook(Number(param1[0].split("=")[1]));
    //pageR.innerHTML = books["book" + bookId][0];
};

function backPage() {
    let comingSoon = false;
    if (hidden.length > 0) {
        for (let i = 0; hidden.length - 1; i++) {
            if (currentBook == hidden[i]) {
                comingSoon = true;
            };
         };
    };
    if (pageNumL > -1 && comingSoon == false) {
        //alert("flipped page back");
        pageNumL -= 2;
        pageNumR -= 2;
        pageL.innerHTML = books["book" + currentBook][pageNumL];
        pageR.innerHTML = books["book" + currentBook][pageNumR];
        if (pageNumL <= -1) {
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
    pageNumL = -1;
    pageNumR = 0;
    //alert("closed book #" + currentBook);
};

function nextPage() {
    let comingSoon = false;
    if (hidden.length > 0) {
        for (let i = 0; hidden.length - 1; i++) {
            if (currentBook == hidden[i]) {
                comingSoon = true;
            };
         };
    };
    if (books["book" + currentBook][pageNumL + 2] != null && comingSoon == false) {
        //alert("flipped page forward");
        pageNumL += 2;
        pageNumR += 2;
        pageL.innerHTML = books["book" + currentBook][pageNumL];
        pageR.innerHTML = books["book" + currentBook][pageNumR];
        if (pageNumR >= books["book" + currentBook].length) {
            pageR.innerHTML = "";
        };
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
    document.getElementById("book" + i).onclick = function() {openBook(i)});
};

//pageL.innerHTML = "";
//pageR.innerHTML = "";

back.addEventListener("click", backPage);
close.addEventListener("click", closeBook);
next.addEventListener("click", nextPage);
darkMode.addEventListener("click", toggleDarkMode);
