/**Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese" */

//my solution, consistent with best practices 
function bmi(weight, height) {
    let i = weight / (height * height);
      
    if(i > 30.0){
      return 'Obese'
    }else if(i <= 30.0 && i > 25.0){
      return 'Overweight'
    }else if(i <= 25.0 && i > 18.5){
      return 'Normal'
    }else if(i <= 18.5){
      return 'Underweight'
    }
}


//clever.... shortest
function bmi(weight, height) {
  
    var bmi  = weight/(height*height);
    
     return bmi < 18.5 ? "Underweight" : bmi <=25 ? "Normal" : bmi <= 30 ? "Overweight" : "Obese";
    
}