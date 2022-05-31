/**Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

Examples (Input -> Output):
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "

Good Luck! */

//my solution
function doubleChar(str) {
    // Your code heres
    let arr = str.split("");
    let res = ""
    for(let i = 0 ; i < arr.length ; i++){
      let tempS = arr[i] + arr[i]
      res += (tempS)
    }
    return res
  }
  
//most clever 
const doubleChar = (str) => str.split("").map(c => c + c).join("");
