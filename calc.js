var result =  document.querySelector(".result span");
var suu = document.querySelector(".result h2");
const button = document.querySelector("button");

button.addEventListener("click", function () {
  var form = document.querySelectorAll("#form");
  var i = 0 , Som_Module = 0 , coefficient = 0 , moyenne_Module , moyenne; ;
  for(i=0;i<form.length;i++)
  {
     // Calcul de som module fondamental 
  if(form[i].getAttribute("status") == 3){
                
      moyenne_Module = (parseFloat(form[i].querySelectorAll("input")[0].value) * 0.6 + ((parseFloat(form[i].querySelectorAll("input")[1].value) + parseFloat(form[i].querySelectorAll("input")[2].value))/2) * 0.4); 

      Som_Module = Som_Module + moyenne_Module * form[i].getAttribute("coefficient");       // Calculer de Module substance dans coefficient (module fondamental)

      coefficient = coefficient + parseFloat(form[i].getAttribute("coefficient"));
   
 }
    // Calcul de som module secondaire
 if(form[i].getAttribute("status") == 2){
                  
     moyenne_Module = parseFloat(form[i].querySelectorAll("input")[0].value) * 0.6 + parseFloat(form[i].querySelectorAll("input")[1].value) * 0.4 ; 

     Som_Module = Som_Module + moyenne_Module * form[i].getAttribute("coefficient");       // Calculer de Module substance dans coefficient (module secondaire)

     coefficient = coefficient + parseFloat(form[i].getAttribute("coefficient"));

 }
    // Calcul de som module primaire
 if(form[i].getAttribute("status") == 1){
               
     moyenne_Module = parseFloat(form[i].querySelectorAll("input")[0].value) * form[i].getAttribute("coefficient");   // Calculer de Module substance dans coefficient (module primaire)

     Som_Module = Som_Module + moyenne_Module;   

     coefficient = coefficient + parseFloat(form[i].getAttribute("coefficient"));
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
