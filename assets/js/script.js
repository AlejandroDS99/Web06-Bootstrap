console.log("Página en construcción con Patricio Estrella");

function clickPatricio() {
    alert("Lamayonesa es un instrumento");
}

function changeColor( elementHTML, color ) {
    // alert("Que emoción, voy a cambiar mi color");
    console.log(elementHTML);
    console.log(color);

    elementHTML.style.color = color
} 

function changeColorWithPromt( elementHtml) {
    const color = prompt("Dime el color en inglés", "yellow");
    changeTextOfUserColor( elementHtml, color);
    changeColor( elementHtml, color );
}

function changeTextOfUserColor( element, color ) {
    element.innerHTML = "<h3>Ahora soy <em>" + color + "</em> </h3>";
}

function resetColor() {
    const refGreenColor = document.getElementById("green-color");
    const refRedColor = document.getElementById("red-color");
    const refPurpleColor = document.getElementById("purple-color");
    const refUserColor = document.getElementById("user-color"); 

    // refRedColor.style.color = "black";
    changeColor(refRedColor, 'black');
    changeColor(refGreenColor, 'black');
    changeColor(refPurpleColor, 'black');
    changeColor(refUserColor, 'black');
    changeTextOfUserColor(refUserColor, 'black');
}

function changeName(){
    const userName = prompt("Escribe tu nombre cholo", "Machete");
    const refGretting = document.getElementById("gretting");
    refGretting.innerHTML = 'Hola ${userName}, la clika te respalda';
}