var resultado;
var final;

function proces(){

    resultado = document.getElementById("answer").value;

    //alert(resultado);

    if(resultado == "aaaabbbbbcca"){

        final = "444455555221";

    }
    else{
        final = "Esta no es la respuesta correcta";
    }

    document.getElementById("final").innerHTML = final;

}