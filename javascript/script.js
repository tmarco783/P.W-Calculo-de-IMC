function calcularIMC(){
    var peso = document.getElementById("peso").value;
    var altura = document.getElementById("altura").value;

    if(peso == "" || altura == ""){
        alert("Os dados são insuficientes, por favor insira-os corretamente.");
        return;
    }

    var imc = parseFloat(peso / (altura * altura)).toFixed(2);

    exibirResultado(imc);
}

function exibirResultado(imc){
    alert("Seu IMC é de: " + imc + "kg/m²");

    if(imc < 18.5){
        alert("Isto significa que seu índice está abaixo do normal");
    }else if(imc > 18.5 && imc < 24.9){
        alert("Isto significa que seu índice está dentro da normalidade");
    }else if(imc > 24.9 && imc <= 29.9){
        alert("Isto significa que seu índice está acima do normal");
    }else if(imc > 30){
        alert("Isto significa que seu índice está muito acima do normal, indicando obesidade");
    }
}
