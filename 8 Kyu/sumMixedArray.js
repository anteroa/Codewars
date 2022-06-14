/** Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.*/

//solution
function sumMix(x){
    let res = 0;
    for(let i = 0 ; i < x.length ; i++){
      if(typeof x[i] === 'number'){
        res += x[i];
      } else {
        let element = x[i];
        let parsed = Number(element);
        res += parsed
      }
    }
    return res
  }

//best practice, most clever
function sumMix(x){
    return x.map(a => +a).reduce((a, b) => a + b);
  }