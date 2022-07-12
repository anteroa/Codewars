/**Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

For example: (Input --> Output)

10 --> 1
99 --> 18
-32 --> 5
Let's assume that all numbers in the input will be integer values.

 */

//my solution
function sumDigits(number) {
  
    let digits = number.toString().split('');
    let sum = 0
    for(let i = 0 ; i < digits.length; i++){
      if(digits[i] == '-'){
        continue
      }else{
        sum += Number(digits[i])
      }
    }
    
    return sum
  }

  //most clever
  function sumDigits(number) {
    return Math.abs(number).toString().split('').reduce(function(a,b){return +a + +b}, 0);
  }

