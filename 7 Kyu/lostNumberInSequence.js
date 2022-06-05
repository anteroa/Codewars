/**An ordered sequence of numbers from 1 to N is given. One number might have deleted from it, then the remaining numbers were mixed. Find the number that was deleted.

Example:

The starting array sequence is [1,2,3,4,5,6,7,8,9]
The mixed array with one deleted number is [3,2,4,6,7,8,1,9]
Your function should return the int 5.
If no number was deleted from the starting array, your function should return the int 0.

Note: N may be 1 or less (in the latter case, the first array will be []).

 */

//my solution
function findDeletedNumber(arr, mixArr) {
    // your code
    arr.sort((a, b) => a-b)
    mixArr.sort((a, b) => a-b)
    //console.log(arr, mixArr)
    for(let i = 0 ; i < arr.length; i++){
      if(mixArr.includes(arr[i]) == false){
        return arr[i]
      }
    }return 0
}

//clever
function findDeletedNumber(arr, mixArr) {
    return arr.filter(v=>mixArr.indexOf(v)==-1)[0]||0
  }