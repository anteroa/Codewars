/**An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case) */

//my solution
function isIsogram(str){
    str = str.toLowerCase()//needed to convert to lower or uppercase for ignoring case to work
    for(let i = 0 ; i < str.length ; i++){
      if (str.substring(i + 1).includes(str.charAt(i)))
        return false;
    }
    return true
}
  