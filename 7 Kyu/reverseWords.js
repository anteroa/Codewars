/**Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps" */

//my solution
function reverseWords(str) {
    // Go for it
    let arr = str.split(' ');
    for(let i = 0; i < arr.length; i++){
      let el = arr[i]
      string = [...el].reverse().join("");
      arr[i] = string
    }
    return arr.join(' ')
  }

//best practices winner
function reverseWords(str) {
    return str.split(' ').map(function(word){
      return word.split('').reverse().join('');
    }).join(' ');
  }

//clever winner
function reverseWords(str) {
    // Go for it
    //split words into seperate arrays
    return str.split("").reverse().join("").split(" ").reverse().join(" ");
  }