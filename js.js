let valorAltura = document.getElementById("valorAltura");
let resultadoAltura = document.getElementById("resultadoAltura");

  resultadoAltura.innerHTML = valorAltura.value;

  valorAltura.oninput = function () {
    resultadoAltura.innerHTML = this.value;
  }

let valorPeso = document.getElementById("valorPeso");
let resultadoPeso = document.getElementById("resultadoPeso");


  resultadoPeso.innerHTML = valorPeso.value;


  valorPeso.oninput = function () {

    resultadoPeso.innerHTML = this.value;
    
  }


  let resultadoIMC = document.getElementById("btnresultado");
  resultadoIMC.onclick = function(){

    let altura = parseFloat(resultadoAltura.value);
    let peso = parseFloat(resultadoPeso.value);

    // console.log(resultadoPeso, resultadoAltura,);
    // console.log(typeof altura, typeof peso);

    let IMC = parseFloat(peso / (altura ** 2));
    console.log(IMC.toFixed(2));
      if (IMC <= 18) {
        console.log('vc esta abaixo do peso!');
      }
      else if (IMC <= 25) {
        console.log('vc esta no peso ideal!');

      }
      else if (IMC <= 30) {
        console.log('vc esta sobrepeso!');

      }
      else if (IMC <= 40) {
        console.log('vc esta obeso!');

      }
      else if (IMC >= 40) {
        console.log('vc esta muito obeso parceiro!');

      }
}
  
