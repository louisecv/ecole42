var i = 0

function changesize() {
    var x = document.getElementById("DIV").clientHeight + 10
    var y = document.getElementById("DIV").clientWidth + 10
    var l = document.getElementById("DIV").style.backgroundColor
    
    let table = ["red","green","blue"]
    i = i + 1
    l = table[i];
    if (i == 2) 
    i = -1
    
    if (document.getElementById("DIV").onclick) {
        document.getElementById("DIV").style.setProperty("height",x)
    }
    if (document.getElementById("DIV").onclick) {
        document.getElementById("DIV").style.setProperty("width",x)
    }
    if (document.getElementById("DIV").onclick) {
        document.getElementById("DIV").style.setProperty("background-color",l)
    }
    if (document.getElementById("DIV").clientWidth > 420) {
        document.getElementById("DIV").style.setProperty("width",200)
    }
    if (document.getElementById("DIV").clientHeight > 420) {
        document.getElementById("DIV").style.setProperty("height",200)
    }
    
}

function dim() {
    var p = document.getElementById("DIV").clientHeight - 5
    var q = document.getElementById("DIV").clientWidth - 5
    var m = document.getElementById("DIV").style.backgroundColor

    let table = ["blue","green","red"]
    i = i + 1
    m = table[i];
    if (i == 2) 
    i = -1

   if (document.getElementById("DIV").onmouseleave){
    document.getElementById("DIV").style.setProperty("height",p)
   }
   if (document.getElementById("DIV").onmouseleave){
    document.getElementById("DIV").style.setProperty("width",q)
   }
   if (document.getElementById("DIV").onclick) {
    document.getElementById("DIV").style.setProperty("background-color",m)
}
if (document.getElementById("DIV").clientWidth < 200){
    document.getElementById("DIV").style.setProperty("width",200)
}
if (document.getElementById("DIV").clientHeight < 200){
    document.getElementById("DIV").style.setProperty("height",200)
}
}