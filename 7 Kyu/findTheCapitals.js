/**Instructions
Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

Example
Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] ); */

//solution
var capitals = function (word) {
	// Write your code here
  let resArr = []
  for(let i = 0; i < word.length; i++){
    if(word[i].toLowerCase() != word[i]){
      resArr.push(i)
    }
  }
  return resArr
}