console.log("Hello Skyrim!");

var config = {
    apiKey: "AIzaSyAvJrB-IvdqUjQ7x1eysmq9PG-sbL6MXes",
    authDomain: "skyrim-dani-earl.firebaseapp.com",
    databaseURL: "https://skyrim-dani-earl.firebaseio.com",
    projectId: "skyrim-dani-earl",
    storageBucket: "skyrim-dani-earl.appspot.com",
    messagingSenderId: "365217646138"
};

firebase.initializeApp(config);

var database = firebase.database();

database.ref().limitToLast(5).on("child_added", function(snapshot, prevChildKey) {
    var newChild = snapshot.val();
    console.log("Race: " + newChild.selRaceInput);
    console.log("Class: " + newChild.selClassInput);
    console.log("Gender: " + newChild.selGenderInput);

    $("#characterUserInput").append("<tr><td>" + newChild.selRaceInput +
        "</td><td>" + newChild.selClassInput +
        "</td><td>" + newChild.selGenderInput +
        // "</td><td>" + nextTrain.format("HH:mm") + 
        // "</td><td>" + tMinutesTillTrain + 
        "</td></tr>");
});

$(document).ready(function() {

    $("#submitBtn").on("click", function(event) {
        event.preventDefault();

        var selRace = $("#sel1").val();
        console.log(selRace);
        var selClass = $("#sel2").val();
        console.log(selClass);
        var selGender = $("#sel3").val();
        console.log(selGender);

        // Elf combos
        if (selRace === "Bosmer (Elf)" && selClass === "Warrior") {
            $("#characterUserOutput").html("<br><strong>Elf name ideas:</strong><br> Fenian Olathana, <br> Vamir Aratris, <br> Nevarth Quinfaren <br><img src =elf_image.jpg><br><p>You have selected a Warrior Elf character. This option will not work well in the beginning of the game because the elf is small and starts off weak. But over time, you can build your strength and become pretty decent at melee combat.</p><p> As Elves are not from Skyrim, they tend to get mildly rude comments from some of the guards, such as 'Stay out of trouble, Elf'</p>")
        } else if (selRace === "Bosmer (Elf)" && selClass === "Thief/Rogue") {
            $("#characterUserOutput").html("<br><strong>Elf name ideas:</strong><br> Fenian Olathana, <br> Vamir Aratris, <br> Nevarth Quinfaren <br><img src =elf_image.jpg><br><p>You have selected a Thief/Rogue Elf character. This option makes a lot of use of the following skills: sneak, range weapons, lockpicking, among others. This is a good combination since Elves are small and move stealthilier than the larger races.</p><p> As Elves are not from Skyrim, they tend to get mildly rude comments from some of the guards, such as 'Stay out of trouble, Elf.' </p>")
        } else if (selRace === "Bosmer (Elf)" && selClass === "Mage") {
            $("#characterUserOutput").html("<br><strong>Elf name ideas:</strong><br> Fenian Olathana, <br> Vamir Aratris, <br> Nevarth Quinfaren <br><img src =elf_image.jpg><br><p>You have selected a Mage Elf character. This option will make use of various magic skills such as Destruction, Illusion, Restoration, Conjuration, etc. Although this character would make more sense than a Warrior Elf, there are other better races if you want to be a mage (not listed here)</p>")
        }
        // Nord combos
        else if (selRace === "Nord (Large Human)" && selClass === "Warrior") {
            $("#characterUserOutput").html("<br><strong>Nord name ideas:</strong><br> Klordur Iron-Oath, <br> Jarclek Torvarikssen, <br>Hjohmm Ohrhenrsen <br><img src =nord_image.jpg><br><p>You have selected a Warrior Nord character. This is a great combo as the Nords are large and powerful characters. They start off stronger than some of the other races and do very will with melee weapons and hand to hand combat.</p><p>Skyrim is the homeland of the Nord.</p>")
        } else if (selRace === "Nord (Large Human)" && selClass === "Thief/Rogue") {
            $("#characterUserOutput").html("<br><strong>Nord name ideas:</strong><br> Klordur Iron-Oath, <br> Jarclek Torvarikssen, <br>Hjohmm Ohrhenrsen <br><img src =nord_image.jpg><br><p>You have selected a Thief/Rogue Nord character. This is not an ideal combo as Nords are large and usualy wear heavy armor, making sneaking around more difficult. It can be done, but there are better combos to use.</p><p>Skyrim is the homeland of the Nord.</p>")
        } else if (selRace == "Nord (Large Human)" && selClass == "Mage") {
            $("#characterUserOutput").html("<br><strong>Nord name ideas:</strong><br> Klordur Iron-Oath, <br> Jarclek Torvarikssen, <br>Hjohmm Ohrhenrsen <br><img src =nord_image.jpg><br><p>You have selected a Mage Nord character. This is a decent combo, and the character will be able to physically defend against attacks in the beginning until they learn enough magic to be a productive mage.</p><p>Skyrim is the homeland of the Nord.</p>")
        }
        // Orc combos
        else if (selRace == "Orsimer (Orc)" && selClass == "Warrior") {
            $("#characterUserOutput").html("<br><strong>Orc name ideas:</strong><br> Graklak gro-Marob, <br> Womrikug gro-Ulagh, <br>Bakh gro-Morbash note: female names have 'gra' instead of 'gro' <br><img src =orc_image.jpg><br><p>You have selected the Warrior Orc character. This is a great option as Orcs are a large and powerful race. Their natural skill with single handed swords, double handed swords and fist fighting help them excell as a Warrior.</p><p>As Orcs are not native to Skyrim, they are often the recipient of prejudice from the native Nords.</p>")
        } else if (selRace == "Orsimer (Orc)" && selClass == "Thief/Rogue") {
            $("#characterUserOutput").html("<br><strong>Orc name ideas:</strong><br> Graklak gro-Marob, <br> Womrikug gro-Ulagh, <br>Bakh gro-Morbash note: female names have 'gra' instead of 'gro' <br><img src =orc_image.jpg><br><p>You have selected the Thief/Rogue Orc character. This combo is not ideal as the Orc is large and heavy, often using heavy armor, making it more difficult to sneak around with. It can be done, but this character will take longer to get proficient in stealth attributes than an elf would.</p><p>As Orcs are not native to Skyrim, they are often the recipient of prejudice from the native Nords.</p>")
        } else if (selRace == "Orsimer (Orc)" && selClass == "Mage") {
            $("#characterUserOutput").html("<br><strong>Orc name ideas:</strong><br> Graklak gro-Marob, <br> Womrikug gro-Ulagh, <br>Bakh gro-Morbash note: female names have 'gra' instead of 'gro' <br><img src =orc_image.jpg><br><p>You have selected the Mage Orc character. This option will make use of various magiv skills such as Destruction, Illusion, Restoration, and Conjuration. This character will likely rely on its brute strength in the beginning of the game while the magic skills are being honed.</p><p>As Orcs are not native to Skyrim, they are often the recipient of prejudice from the native Nords.</p>")
        }


        database.ref().push({
            selRaceInput: selRace,
            selClassInput: selClass,
            selGenderInput: selGender,

        });
    });
});

// $.ajaxPrefilter(function(options) {
//     if (options.crossDomain && $.support.cors) {
//         options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
//     }
// });

$("#find-skyrimItem").on("click", function(event) {
    // Preventing the submit button from trying to submit the form
    // We're optionally using a form so the user may hit Enter to search instead of clicking the button
    event.preventDefault();
    // Here we grab the text from the input box
    var searchItem = $("#skyrim-input").val();
    // var searchItem = "dragons+(skyrim)";
    var queryURL = "http://elderscrolls.wikia.com/api/v1/Search/List?query=" + searchItem + "&limit=5&minArticleQuality=10&batch=1&namespaces=0%2C14"

    $.ajax({
        url: 'https://cors-anywhere.herokuapp.com/' + queryURL,
        method: "GET"

    }).done(function(response) {
        // TODO clear out the #wikiaApi
        console.log(response);
        var resultsDiv = $('<div>');
        for (var i = 0; i < response.items.length; i++) {
            var result = response.items[i];
            var htmlSnippet = result.snippet;
            var url = result.url;
            var link = $("<a>").attr("href", url).text(url);
            var paragraph = $("<p>").html(htmlSnippet).append(link);
            resultsDiv.append(paragraph);
        }

        $('#wikiaAPI').html(resultsDiv);

    });
    var apiKey = "789cdd67c22ff2b99b54f20df8bfded4"
    var queryFlickrURL = "http://api.flickr.com/services/rest/?&method=flickr.photos.search&text=skyrim%20" + searchItem + "&api_key=" + apiKey + "&per_page=6&format=json&nojsoncallback=?"

    $.ajax({
        url: queryFlickrURL,
        method: "GET"
    }).done(function(response) {
        console.log(response);
        $("#flickrAPI").empty();

        var photos = response.photos.photo;

        for (var i = 0; i < photos.length; i++) {
            var photo = photos[i];
            var imgSrc = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`

            $('<img>').attr('src', imgSrc).appendTo("#flickrAPI");
        }

    });
});