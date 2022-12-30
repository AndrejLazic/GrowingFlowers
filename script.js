var cvet = prompt("Cvet");
var voda = prompt("Voda");
var djubrivo = prompt("Djubrivo");
var temp = prompt("Temperatura");

var final = "";

if(temp >= 20 && temp <= 30){
    console.log("temp OK");
    for(var i = 0; i < voda; i++){
        for(var j = 0; j < voda; j++){
            final += "-";
        }
        for(var z = 0; z < djubrivo; z++){
            final += cvet;
        }
    }
}else{
    console.log("losa temp");
    var final = "";
    for(var i = 0; i < voda*voda; i++){
        final += "-"
    }
    final += cvet;
}
console.log("Voda: " + voda);
console.log("Djubrivo: " + djubrivo);
console.log(final);
alert(final);
