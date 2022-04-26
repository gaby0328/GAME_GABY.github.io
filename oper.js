
function operacion(){
    var Entrada_a=parseFloat(document.MyForm.numero1.value);
    var Entrada_b=parseFloat(document.MyForm.numero2.value);

   // Salida del circuito Digital

    if (Entrada_a==0 && Entrada_b==0){
        var Salida_Final=0;
    } if (Entrada_a==0 && Entrada_b==1) {
        var Salida_Final=1;
    } if (Entrada_a==1 && Entrada_b==0){
        var Salida_Final=1;
    }if (Entrada_a==1 && Entrada_b==1){
        var Salida_Final=0;
    }

    // NOT (a)
    if(Entrada_a==0){
        var NOTa=1;
    } else{
        var NOTa=0;
    }

     // NOT (b)
     if(Entrada_b==0){
        var NOTb=1;
    } else{
        var NOTb=0;
    }
   
    // NOT(a) * b
    if(Entrada_a==0 && Entrada_b==1){
        var NOTab=1;
    }else{
        var NOTab=0;
    }

      // a * NOT(b)
      if(Entrada_a==1 && Entrada_b==0){
        var NOTba=1;
    }else{
        var NOTba=0;
    }


    resul1=document.getElementById("resultado1");
    resul2=document.getElementById("resultado2");
    resul3=document.getElementById("resultado3");
    resul4=document.getElementById("resultado4");
    resul5=document.getElementById("resultado5");
    resul1.innerHTML=Salida_Final.toFixed(0);
    resul2.innerHTML=NOTa.toFixed(0);
    resul3.innerHTML=NOTb.toFixed(0);
    resul4.innerHTML=NOTab.toFixed(0);
    resul5.innerHTML=NOTba.toFixed(0);
   
}