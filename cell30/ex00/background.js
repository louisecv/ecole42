function generatecolor() {
    var x = "#" + Math.random().toString(16).slice(-3)

    document.getElementById("main").style.setProperty("background-color",x)
}