function calculer(){
    var a = parseInt(document.getElementById("input1").value)
    var b = parseInt(document.getElementById("input2").value)
    var op = document.getElementById("select")
    var res = 0


    var operator = op.options[op.selectedIndex].value;
 
    res = 0
    if (document.getElementById("tryme").onclick){

      if (a < 0)
      alert("Error :(")


      if (b < 0)
      alert("Error :(")

      if (operator == "+"){
          console.log("+");
          res = a+b;
        }
    
      if (operator == "-"){
          console.log("-");
          res = a - b;
       }

      if (operator == "*"){
            console.log("*");
            res = a * b;
        }

      if (operator == "/"){
            console.log("/");
            if (b == 0){
            alert("it's over 9000!")
            console.log("it's over 9000!")}
            res = a / b;
        }
        

      if (operator == "%"){
          console.log("%");
          if (b == 0){
          alert("it's over 9000!")
          console.log("it's over 9000!")}
          res = a % b;
        }
    }
    

    alert(res)
}

function sayalert() {
    alert("Please, use me ...")
    setTimeout(sayalert, 30000)
}