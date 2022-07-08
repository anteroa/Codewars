/**Write a function which will accept a sequence of numbers and calculate the variance for the sequence.

The variance for a set of numbers is found by subtracting the mean from every value, squaring the results, adding them all up and dividing by the number of elements.

For example, in pseudo code, to calculate the variance for [1, 2, 2, 3].

mean = (1 + 2 + 2 + 3) / 4
=> 2

variance = ((1 - 2)^2 + (2 - 2)^2 + (2-2)^2 + (3 - 2)^2)  /  4
=> 0.5 */

//my solution
// Takes an array of numbers and returns the variance as a float.
// The array of numbers will always have at least one element in it.
var variance = function(numbers) {
    //We need the mean first, so we calculate that
    let sum = numbers.reduce((a, b) => a + b, 0);
    let mean = sum / numbers.length;
    
    //Then the deviations
    let deviationsArray = [];
      for(let i = 0; i < numbers.length; i++){
          deviationsArray.push(numbers[i] - mean)
      }
    
    //Then we square the deviations
    let squaredDevs = [] 
    deviationsArray.forEach(el => {
      squaredDevs.push(el*el)    
    })
    
    //Now we add the squared deviations together
    let devSum = squaredDevs.reduce((a, b) => a + b, 0)
    
    //5. Divide the sum by one less than than the number of data points
    //  This is the variance
    let variance = devSum / numbers.length
    return variance
  };

//most clever, best practices
var variance = function(numbers) {
    var mean = numbers.reduce(function (prev, v) { return prev + v }) / numbers.length
    return numbers.reduce(function (prev, v) { return prev + Math.pow(v - mean, 2) }, 0) / numbers.length
  };

//other clever 
const variance = ns => {
    const mean = ns.reduce((s, n) => s + n) / ns.length;
    return ns.reduce((v, n) => v + (n - mean) ** 2, 0) / ns.length;
  }