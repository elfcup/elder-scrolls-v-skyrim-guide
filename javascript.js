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
    console.log("Character Race: " + newChild.selRaceInput);
    console.log("Character Class: " + newChild.selClassInput);
    console.log("Character Gender: " + newChild.selGenderInput);

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

        if (selRace === "Bosmer (Elf)" && selClass === "Warrior") {
            $("#characterUserOutput").html("<br><strong>Elf name ideas:</strong><br> Fenian Olathana, <br> Vamir Aratris, <br> Nevarth Quinfaren <br><img src =elf_image.jpg><br><p>You have selected a Warrior Elf character. This option will not work well in the beginning of the game because the elf is small and starts off weak. But over time, you can build your strength and become pretty decent at melee combat.</p><p> As Elves are not from Skyrim, they tend to get mildly rude comments from some of the guards, such as 'Stay out of trouble, Elf'</p>")
        } else if (selRace === "Bosmer (Elf)" && selClass === "Thief/Rogue") {
            $("#characterUserOutput").html("<br><strong>Elf name ideas:</strong><br> Fenian Olathana, <br> Vamir Aratris, <br> Nevarth Quinfaren <br><img src =elf_image.jpg><br><p>You have selected a Thief/Rogue Elf character. This option makes a lot of use of the following skills: sneak, range weapons, lockpicking, among others. This is a good combination since Elves are small and move stealthilier than the larger races.</p><p> As Elves are not from Skyrim, they tend to get mildly rude comments from some of the guards, such as 'Stay out of trouble, Elf.' </p>")
        }

        // else if (selRace === "Bosmer (Elf)" && selClass === "Mage") {
        //     $("#characterUserOutput").html("<br><strong>Elf name ideas:</strong><br> Fenian Olathana, <br> Vamir Aratris, <br> Nevarth Quinfaren <br><img src =elf_image.jpg>")
        // }
        else if (selRace === "Nord (Large Human)" && selClass === "Warrior") {
            $("#characterUserOutput").html("<br><strong>Nord name ideas:</strong><br> Klordur Iron-Oath, <br> Jarclek Torvarikssen, <br>Hjohmm Ohrhenrsen <br><img src =nord_image.jpg>")
        } else if (selRace === "Nord (Large Human)" && selClass === "Thieft/Rogue") {
            $("#characterUserOutput").html("<br><strong>Nord name ideas:</strong><br> Klordur Iron-Oath, <br> Jarclek Torvarikssen, <br>Hjohmm Ohrhenrsen <br><img src =nord_image.jpg>")
        }

        // else if (selRace == "Nord (Large Human)" && selClass == "Mage") {
        //     $("#characterUserOutput").html("<br><strong>Nord name ideas:</strong><br> Klordur Iron-Oath, <br> Jarclek Torvarikssen, <br>Hjohmm Ohrhenrsen <br><img src =nord_image.jpg>") 
        // }
        else if (selRace == "Orsimer (Orc)" && selClass == "Warrior") {
            $("#characterUserOutput").html("<br><strong>Orc name ideas:</strong><br> Graklak gro-Marob, <br> Womrikug gro-Ulagh, <br>Bakh gro-Morbash note: female names have 'gra' instead of 'gro' <br><img src =orc_image.jpg>")
        } else if (selRace == "Orsimer (Orc)" && selClass == "Thief/Rogue") {
            $("#characterUserOutput").html("<br><strong>Orc name ideas:</strong><br> Graklak gro-Marob, <br> Womrikug gro-Ulagh, <br>Bakh gro-Morbash note: female names have 'gra' instead of 'gro' <br><img src =orc_image.jpg>")
        }







        database.ref().push({
            selRaceInput: selRace,
            selClassInput: selClass,
            selGenderInput: selGender,

        });
    });
});