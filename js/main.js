
var i = 0;
var min = 0;
var max = 100000;
var success = false;
var attempts = 100;
var secretNumber = Math.round(Math.random() * (max - min) + min);
var random = Math.round(Math.random() * (101 - 0) + 0);

console.log("Secreto: " + secretNumber);
console.log("Aleatorio inicial: " + random);
console.log("\r");

//Repetir hasta encontrar o agotar limite de intentos
while(!success && (i < attempts)){
    //Si el numero es menor que el resultado
    if(random < secretNumber){
        min = random;
        random = Math.round(Math.random() * (max - min) + min);
        console.log( i + "   <<     " + random + "   ||   min: " + min + "   max: " + max);
    //Si el numero es mayor que el resultado
    }else if(random > secretNumber){
        max = random;
        random = Math.round(Math.random() * (max - min) + min);
        console.log( i + "   >>     " + random + "   ||   min: " + min + "   max: " + max);

    }else if(random == secretNumber){
        success = true; }
    i++; }

console.log("\r");
console.log("Numero secreto  : " + secretNumber);
console.log("Numero final    : " + random);
console.log("\r");
console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!");
console.log("!!!!!!!!!!  WIN  !!!!!!!!!!");
console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!");
