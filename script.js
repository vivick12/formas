// Retangulo
function calcularMultiplicacao() {
    let x = Number(prompt("Informe o primeiro valor:"));
    let y = Number(prompt("Informe o segundo valor:"));
    let resultado = x*y;
        alert("o resultado da área do retangulo é: "+ resultado+ "m²")
    // document.getElementById(a_ret).innerHTML=resultado
  }

//   Triangulo

function calcularAreaTriangulo() {
    
    let base = Number(prompt("Informe a base do triângulo:"));
    let altura = Number(prompt("Informe a altura do triângulo:"));
    let area = (base * altura) / 2;
    alert("A área do triângulo é: " + area + "");

  }

//   Circulo
function calcularAreaCirculo() {
    
    let raio = Number(prompt("Informe o raio do círculo:"));
    const pi = Math.PI;
    let area = pi * raio * raio;
    alert("A área do círculo é: " + area + "");
    res= 'A area do retãngulo é '=x*y+'m²';
    alert(res);
    document.getElementById(a_ret).innerHTML=res
  }

//   Trapezio
function calcularAreaTrapezio() {
   
    let baseMaior = Number(prompt("Informe a medida da base maior do trapézio:"));
    let baseMenor = Number(prompt("Informe a medida da base menor do trapézio:"));
    let altura = Number(prompt("Informe a altura do trapézio:"));
    let area = ((baseMaior + baseMenor) * altura) / 2;
    alert("A área do trapézio é: " + area + " ");
  }

//   Losango
function calcularAreaLosango() {
    
    let diagonalMaior = Number(prompt("Informe a medida da diagonal maior do losango:"));
    let diagonalMenor = Number(prompt("Informe a medida da diagonal menor do losango:"));
    let area = (diagonalMaior * diagonalMenor) / 2;
    alert("A área do losango é: " + area + " unidades de área.");
  }

    




    
