/**Your function takes two arguments:

current father's age (years)
current age of his son (years)
Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).

 */

//my solution
function twiceAsOld(dadYearsOld, sonYearsOld) {
    // your code here
    let d = dadYearsOld, s = sonYearsOld, sDub = s * 2
    if(d > sDub){
      return d - sDub
    }else if(d < sDub){
      return sDub - d
    }else if(sDub == d){
      return 0
    }
}