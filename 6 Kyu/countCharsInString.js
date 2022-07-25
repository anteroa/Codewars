/**The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}. */

//my solution
function count (string) {  
    // The function code should be here
    if (string.length === 0){
      return {};  
    }else{
      let chars = string.split('')
      let cSet = new Set(chars)
      let it = cSet.values()
      let nr = Array.from(it)
      let rObj = new Object()
      
      for(let i = 0 ; i < nr.length; i++){
        let currstring = nr[i]
        //console.log(currstring)
        rObj[currstring] = 0
      }
      
      for(let i = 0; i < string.length; i++){
        for(let j = 0; j < nr.length; j++){
          if(string[i] === nr[j]){
            rObj[nr[j]]++ 
          }
        }
      }
      
      return rObj
    }
  }

//clever || best practice
function count (string){
    var count = {};
    string.split('').forEach(s => {
        count[s] ? count[s]++ : count[s] = 1;
    });
    return count;
}