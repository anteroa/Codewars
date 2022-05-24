/**Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  "" */

//solution
function solution(string) {
    let result = '';
    
    for (let i = 0; i < string.length; i ++) {
      string[i].charCodeAt() > 96 ? result += string[i] : result += ` ${string[i]}`
    }
    
    return result;
  }
  

//most upvoted, uses regex
// complete the function
function solution(string) {
    return(string.replace(/([A-Z])/g, ' $1'));
  
}