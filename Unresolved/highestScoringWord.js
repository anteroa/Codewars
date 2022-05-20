/*Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid. */

function high(x){
    //split the string of words into an array of words
    let arr =  x.split(' ');
    //declare the variables that will be used for comparing word values
    let currentWordVal, tempWordVal, highestWordVal = 0
    let indexOfWord = 0
    //iterate array of words
    for(let i = 0; i < arr.length; i++){
      //assign the values to variables
      //console.log(typeof arr[i])
      currentWordVal = wordSum(arr[i])
      tempWordVal = wordSum(arr[i+1])
      
      console.log(tempWordVal)
      
      //compare the values
      if(currentWordVal > tempWordVal){
        highestWordVal = currentWordVal
        indexOfWord = i
      }else if(currentWordVal < tempWordVal){
        highestWordVal = tempWordVal 
        indexOfWord = i+1
      }else{
        console.log('error')
      }
    }
   
    console.log(arr[indexOfWord]);
  }
  
  function wordSum(str){
    let wordVal = 0;
    for(let i = 0; i < str.length; i++){
      wordVal += str.charCodeAt(i);
    }
    return wordVal;
  }

  /**Current issue lies in the comparison of the elements in the word
  array. I end up trying to access things outside of it due to the checking 
  of index i+1 .... this can be solved with an adequate map/filter 
  of the array. */