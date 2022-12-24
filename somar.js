function clicar() {
    var atv1 = document.querySelector(".atv1").value;
    var atv2 = document.querySelector(".atv2").value;
    var atv3 = document.querySelector(".atv3").value;
    var for1 = document.querySelector(".for1").value;
    var for2 = document.querySelector(".for2").value;
    var for3 = document.querySelector(".for3").value;
    var auto = document.querySelector(".auto").value;
    var npc = document.querySelector(".npc").value;
   
    var atv = ((parseInt(atv1) + parseInt(atv2) + parseInt(atv3) + parseInt(for1) + parseInt(for2) + parseInt(for3))/3) *0.40;
    var auto_ok= parseInt(auto) * 0.10;
    var npc2= (atv + auto_ok);
  
    var resultado = npc2 + (npc /2);

    if (resultado >= 70){

        document.querySelector(".resultado").innerHTML = resultado + " - Aprovado!";

    }else {

        document.querySelector(".resultado").innerHTML = resultado + " - Fazer NEF";

    }
    
}   

function limpar(){

    document.querySelector(".atv1").value ="";
    document.querySelector(".atv2").value ="";
    document.querySelector(".atv3").value ="";
    document.querySelector(".for1").value ="";
    document.querySelector(".for2").value ="";
    document.querySelector(".for3").value ="";
    document.querySelector(".auto").value ="";
    document.querySelector(".npc").value ="";

}

function recuperacao() {
    var rec1 = document.querySelector(".notafinal").value;
    var rec2 = document.querySelector(".nef").value;

   
    var nef_final = (parseInt(rec1) + parseInt(rec2))/2 ;
 

    if (nef_final >= 50){

        document.querySelector(".resultadofinal").innerHTML = nef_final + " - Aprovado!";

    }else {

        document.querySelector(".resultadofinal").innerHTML = nef_final + " - Reprovado";

    }

}

    function limpar2() {

        document.querySelector(".notafinal").value ="";
        document.querySelector(".nef").value ="";

    }