function results() {
    var words = 1;
    var spaces = 0;
    var sentences = 0;
    var average = 0;
    var string = document.getElementById("textArea").value;

    for (var i = 0; i <= string.length; i++) {
        if (string[i] === " ") {
            words++;
            spaces++;
        }
        if (string[i] === "." || string[i] === "?" || string[i] === "!") {
            sentences++;
        }
    }
    average = words / sentences;
    document.getElementById("totalWords").innerHTML = words;
    document.getElementById("totalSpaces").innerHTML = spaces;
    document.getElementById("totalSentences").innerHTML = sentences;
    document.getElementById("averageWords").innerHTML = average;
}