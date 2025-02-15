function changeTxt(event) {
    let clickedButton = event.target.id; // Get the ID of the clicked button
    let plantNames = {
        p1: "Happi happi plant(*ᴗ͈ˬᴗ͈)ꕤ*.ﾟ",
        p2: "Depres Plant (っ◞‸◟ c)",
        p3: "Kirby Plant (˶˃ ᵕ ˂˶) .ᐟ.",
        p4: "Woozy doozy Plant ( ꩜ ᯅ ꩜;)⁭ ⁭",
        p5: "Euphoria ᓚ₍ ^. .^₎"
    };

    let messages = {
        p1: "You deserve the love you so freely give to others",
        p2: "Did you know, women are 50% more likely to be depressed than men; so lets promote equality!",
        p3: "You are not your thoughts. You are the observer of them",
        p4: "Feelings are just visitors. Let them come and go",
        p5: "Turn your anger around, did you know anger can be a source of motivation?"
    };
    let message = messages[clickedButton] || "You planted a mystery plant! 🪴"; // Default message
    let plantName = plantNames[clickedButton] || "You planted a mystery plant! 🪴"; // Default message

    document.getElementById("pFact").innerText = message; // Update text
    document.getElementById("plant-tit").innerText = plantName; // Update text

}
