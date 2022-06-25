/**Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]*/

//solution from: https://stackoverflow.com/a/33034768/11918980 -- this response is AWESOME!
//Difference
function array_diff(a, b) {
    return a.filter(x => !b.includes(x))
  }

//Intersection
function array_intersection(a, b) {
    return a.filter(x => b.includes(x))
  }

//Symmetric Difference
function array_symm_diff(a, b) {
    return a.filter(x => !b.includes(x)).concat(b.filter(x => !includes(x)))
  }
