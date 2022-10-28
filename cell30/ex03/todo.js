function nw() {
    if(document.getElementById("new").onclick){
        let b = document.getElementById("tache")
        let todo = document.createElement("p")
        todo.id = "liste"
        todo.type = "button"
        todo.textContent = prompt()

        if(todo.textContent == 0)
        alert("taper du texte")

        b.prepend(todo)}

    if(document.getElementById("liste")){
        var val = confirm("voulez vous supprimer cet element ?")
        if(val==0){
            delete.getElementById("liste")
        }
    }
}
