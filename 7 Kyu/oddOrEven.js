/**Given a list of integers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero).

Examples:
Input: [0]
Output: "even"

Input: [0, 1, 4]
Output: "odd"

Input: [0, -1, -5]
Output: "even" */

//my solution
function oddOrEven(array) {
   let sum = array.reduce( (prevVal, currVal) => 
     prevVal + currVal, 0)
   return sum % 2 == 0 ? "even" : "odd";
 }
 

//clver and best practice?
function oddOrEven(arr) {
    return arr.reduce((a,b)=>a+b,0) % 2 ? 'odd' : 'even';
}

//things done: sum of all elements in array and check for even or odd to return string.