

function convert(){
   let inputBoxValue =  document.getElementById("input").value;
   let toFarenheit =  document.getElementById("Farenhait");
   let toCelcious =  document.getElementById("Celcious");
   let preFix = "The converted answer is: "
   // console.log("Here: "+inputBox + isFarenheit + isCelcious)
   // console.log(isFarenheit.checked)

   if(toFarenheit.checked){
      document.getElementById("answer").innerHTML =  preFix + convertToFarenheit(inputBoxValue) +" Farenheit!";
   }
   else if (toCelcious.checked){
      document.getElementById("answer").innerHTML =  preFix + convertToCelcious(inputBoxValue) + " Celcious!"
   }
   else{
      document.getElementById("answer").innerHTML = "Nothing has entered"
   }
   }

function convertToFarenheit(num){
   return (num* 9/5) + 32 ;
}

function convertToCelcious(num){
   return (num - 32) / 1.8
}