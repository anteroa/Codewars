/**Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer */

//solution
function squareDigits(num){
    let digits =  num.toString().split('')
    let nums = digits.map(Number)
    for(let i = 0; i < nums.length; i++){
      nums[i] *= nums[i];
    }
    return Number(nums.join(''))
}

//best practice, most clever
function squareDigits(num){
    return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
    
  }
