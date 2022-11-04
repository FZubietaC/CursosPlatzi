////Manipulacion del DOM y operaciones con JS

const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn=document.querySelector('#btncalcular');
const pResult = document.querySelector('#result');

form.addEventListener('submit', suma)

function suma(event) {
    //console.log({event});
    event.preventDefault();
    const sumaInputs = Number(input1.value) + Number(input2.value);
    pResult.innerText = "Resultado suma: " + sumaInputs;
}





