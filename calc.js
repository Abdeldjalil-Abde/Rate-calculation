var result =  document.querySelector(".result span");
var suu = document.querySelector(".result h2");
const button = document.querySelector("button");

button.addEventListener("click", function () {
  var fondamental = document.querySelectorAll("#fondamental");
  var secondaire = document.querySelectorAll("#secondaire");
  var primaire = document.querySelectorAll("#primaire");
   if(document.querySelectorAll("#fondamental").length)
    result.textContent = "yes";
    else
    result.textContent = "No";

    
   });
