function calcularIMC(){
    var peso = document.getElementById("peso").value;
    var altura = document.getElementById("altura").value;

    if(peso === "" || altura === ""){
        alert("Os dados são insuficientes, por favor insira-os corretamente.");
        return;
    }

    var imc = parseFloat(peso / (altura * altura)).toFixed(2);

    alert("Seu IMC é de " + imc);

}