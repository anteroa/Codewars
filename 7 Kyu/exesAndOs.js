/**Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false */

//my solution
function XO(str) {
    let arr = str.toLowerCase().split('')
    let xCount = 0, oCount = 0;
    for(let i = 0 ; i < arr.length; i++ ){
      if(arr[i] === 'x'){
        xCount++
      }else if(arr[i] === 'o'){
        oCount++
      }
    }
    return xCount === oCount
}

//most clever, best practice?
const XO = str => {
    str = str.toLowerCase().split('');
    return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
  }