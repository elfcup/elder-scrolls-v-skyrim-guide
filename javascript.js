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
            $("#characterUserOutput").html("<br><strong>Elf name ideas:</strong><br> Fenian Olathana, <br> Vamir Aratris, <br> Nevarth Quinfaren <br><img src =elf_image.jpg>")
        }
        // Nord combos
        else if (selRace === "Nord (Large Human)" && selClass === "Warrior") {
            $("#characterUserOutput").html("<br><strong>Nord name ideas:</strong><br> Klordur Iron-Oath, <br> Jarclek Torvarikssen, <br>Hjohmm Ohrhenrsen <br><img src =nord_image.jpg>")
        } else if (selRace === "Nord (Large Human)" && selClass === "Thieft/Rogue") {
            $("#characterUserOutput").html("<br><strong>Nord name ideas:</strong><br> Klordur Iron-Oath, <br> Jarclek Torvarikssen, <br>Hjohmm Ohrhenrsen <br><img src =nord_image.jpg>")
        } else if (selRace == "Nord (Large Human)" && selClass == "Mage") {
            $("#characterUserOutput").html("<br><strong>Nord name ideas:</strong><br> Klordur Iron-Oath, <br> Jarclek Torvarikssen, <br>Hjohmm Ohrhenrsen <br><img src =nord_image.jpg>")
        }
        // Orc combos
        else if (selRace == "Orsimer (Orc)" && selClass == "Warrior") {
            $("#characterUserOutput").html("<br><strong>Orc name ideas:</strong><br> Graklak gro-Marob, <br> Womrikug gro-Ulagh, <br>Bakh gro-Morbash note: female names have 'gra' instead of 'gro' <br><img src =orc_image.jpg>")
        } else if (selRace == "Orsimer (Orc)" && selClass == "Thief/Rogue") {
            $("#characterUserOutput").html("<br><strong>Orc name ideas:</strong><br> Graklak gro-Marob, <br> Womrikug gro-Ulagh, <br>Bakh gro-Morbash note: female names have 'gra' instead of 'gro' <br><img src =orc_image.jpg>")
        } else if (selRace == "Orsimer (Orc)" && selClass == "Mage") {
            $("#characterUserOutput").html("<br><strong>Orc name ideas:</strong><br> Graklak gro-Marob, <br> Womrikug gro-Ulagh, <br>Bakh gro-Morbash note: female names have 'gra' instead of 'gro' <br><img src =orc_image.jpg>")
        }


        database.ref().push({
            selRaceInput: selRace,
            selClassInput: selClass,
            selGenderInput: selGender,

        });
    });
});

$.ajaxPrefilter(function(options) {
    if (options.crossDomain && $.support.cors) {
        options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
    }
});

$("#find-skyrimItem").on("click", function(event) {
    // Preventing the submit button from trying to submit the form
    // We're optionally using a form so the user may hit Enter to search instead of clicking the button
    event.preventDefault();
    // Here we grab the text from the input box
    var searchItem = $("#skyrim-input").val();
    // var searchItem = "dragons+(skyrim)";
    var queryURL = "http://elderscrolls.wikia.com/api/v1/Search/List?query=" + searchItem + "&limit=5&minArticleQuality=10&batch=1&namespaces=0%2C14"

    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function(response) {
        // TODO clear out the #wikiaApi
        console.log(response);
        var resultsDiv = $('<div>');
        for (var i = 0; i < 5; i++) {
            var result = response.items[i];
            var htmlSnippet = result.snippet;
            var url = result.url;
            var link = $("<a>").attr("href", url).text(url);
            var paragraph = $("<p>").html(htmlSnippet).append(link);
            resultsDiv.append(paragraph);
        }

        $('#wikiaAPI').html(resultsDiv);

        // console.log(response.items[0].snippet);
        // var results = response.items[0];
        // var results2 = results.snippet;
        // var resultsURL = results.url;
        // console.log(resultsURL);
        // var link = $("<a>").attr("href", resultsURL).text(resultsURL)
        // $("#wikiaAPI").html(results2).append(link);
        // // $("#wikiaAPI").append(results2);

    });
});