 var result =  document.querySelector(".result span");
 var suu = document.querySelector(".result h2");
 const button = document.querySelector("button");

//  button.addEventListener("click", function () {
//    var Compelation = document.querySelectorAll("#Compelation input");
//    var SE = document.querySelectorAll("#SystemDexploitation input");
//    var GL = document.querySelectorAll("#GenieLogicile input");
//    var IHM = document.querySelectorAll("#IHM input");
//    var PL = document.querySelectorAll("#PogrmaionLineaure input");
//    var Probabilite = document.querySelectorAll("#Probabilite input");
//    var ENVS = document.querySelectorAll("#ENVS input");
//    Compelation = parseFloat(Compelation[0].value) * 0.6 + ((parseFloat(Compelation[1].value) + parseFloat(Compelation[2].value))/2) * 0.4;  
//     SE = parseFloat(SE[0].value) * 0.6 + ((parseFloat(SE[1].value) + parseFloat(SE[2].value))/2) * 0.4; 
//     GL = parseFloat(GL[0].value) * 0.6 + ((parseFloat(GL[1].value) + parseFloat(GL[2].value))/2) * 0.4; 
//     IHM = parseFloat(IHM[0].value) * 0.6 + ((parseFloat(IHM[1].value) + parseFloat(IHM[2].value))/2) * 0.4; 
//     PL = parseFloat(PL[0].value) * 0.6 + parseFloat(PL[1].value) * 0.4; 
//     Probabilite = parseFloat(Probabilite[0].value) * 0.6 + parseFloat(Probabilite[1].value) * 0.4; 
//     ENVS = parseFloat(ENVS[0].value);
//     var  moyenne = (fondamental * 3 + SE * 3 + GL * 3 + IHM * 3 + PL * 2 + Probabilite * 2  + ENVS) / 17;
//     if(moyenne >= 10){
//     suu.textContent = "ناجح"; 
//     suu.classList.remove("colore");
//     }
//     else{
//     suu.textContent = "راسب"; 
//     suu.classList.add("colore");
//     }
//     result.textContent =    moyenne.toFixed(2); 

//     });

 button.addEventListener("click", function () {
   var fondamental = document.querySelectorAll("#fondamental");
   var secondaire = document.querySelectorAll("#secondaire");
   var primaire = document.querySelectorAll("#primaire");
   var i = 0 , Som_Module = 0 , coefficient = 0 , moyenne_Module , moyenne; ;
   if(fondamental){
   for( i=0;i<fondamental.length;i++){                 // Calcul de som module fondamental 

       moyenne_Module = (parseFloat(fondamental[i].querySelectorAll("input")[0].value) * 0.6 + ((parseFloat(fondamental[i].querySelectorAll("input")[1].value) + parseFloat(fondamental[i].querySelectorAll("input")[2].value))/2) * 0.4); 

       Som_Module = Som_Module + moyenne_Module * fondamental[i].getAttribute("coefficient");       // Calculer de Module substance dans coefficient (module fondamental)

       coefficient = coefficient + parseFloat(fondamental[i].getAttribute("coefficient"));
       
    }
  }
  if(secondaire){
    for( i=0;i<secondaire.length;i++){                // Calcul de som module secondaire
      
      moyenne_Module = parseFloat(secondaire[i].querySelectorAll("input")[0].value) * 0.6 + parseFloat(secondaire[i].querySelectorAll("input")[1].value) * 0.4 ; 

      Som_Module = Som_Module + moyenne_Module * secondaire[i].getAttribute("coefficient");       // Calculer de Module substance dans coefficient (module secondaire)

      coefficient = coefficient + parseFloat(secondaire[i].getAttribute("coefficient"));

    }
  }
  if(primaire){
    for( i=0;i<primaire.length;i++){               // Calcul de som module secondaire
  
      if(primaire.length == 1){

      moyenne_Module = parseFloat(primaire.querySelectorAll("input")[0].value) * primaire.getAttribute("coefficient");   // Calculer de Module substance dans coefficient (module primaire)

      Som_Module = Som_Module + moyenne_Module;   

      coefficient = coefficient + parseFloat(primaire.getAttribute("coefficient"));

      }
      else{
        
      moyenne_Module = parseFloat(primaire[i].querySelectorAll("input")[0].value) * primaire[i].getAttribute("coefficient");   // Calculer de Module substance dans coefficient (module primaire)

      Som_Module = Som_Module + moyenne_Module;   

      coefficient = coefficient + parseFloat(primaire[i].getAttribute("coefficient"));

      }
    }
  }
    moyenne = Som_Module / coefficient;
    if(moyenne >= 10){
    suu.textContent = "ناجح"; 
    suu.classList.remove("colore");
    }
    else{
    suu.textContent = "راسب"; 
    suu.classList.add("colore");

    }
  result.textContent = moyenne.toFixed(2);
  
     
    });
