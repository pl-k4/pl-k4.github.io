function soon() {
    alert("This feature is coming soon!");
}

var versions = ["1.8.8", "1.8+Shaders", "Resent", "1.5.2", "Beta 1.3"]
var files = ["play/Eagler-1.8.8.html", "play/EaglerXShaders.html", "play/Resent_3.7.html", "play/Eagler-1.5.2.html", "play/Eagler-Beta1.3.html"]
var gameVer = versions[0]
var pos = 0;
var playbutton = document.getElementById("playbutton");


function changeGame() {
    pos++
    if (pos >= versions.length) {
        pos = 0;
    }
    gameVer = versions[pos];
    document.getElementById("playbutton").innerHTML = "PLAY " + gameVer.toUpperCase();
    document.getElementById("playbutton").href = files[pos];

}