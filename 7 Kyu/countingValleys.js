/**You need count how many valleys you will pass.

Start is always from zero level.

Every time you go down below 0 level counts as an entry of a valley, and as you go up to 0 level from valley counts as an exit of a valley.

One passed valley is equal one entry and one exit of a valley.

s='FUFFDDFDUDFUFUF'
U=UP
F=FORWARD
D=DOWN
To represent string above

(level 1)  __
(level 0)_/  \         _(exit we are again on level 0)
(entry-1)     \_     _/
(level-2)       \/\_/
So here we passed one valley

 */

function countingValleys(s) {
    //here we go again
    let count = 0 
    let valleyEntrance = 0
    let valleyExit = 0
    for(let i = 0; i < s.length; i++){
      if(s[i] === 'U'){
        count++
        if(count === 0){
          valleyExit++
        }
      }else if(s[i] === 'D'){
        count--
        if(count === -1){
          valleyEntrance++
        }
      }
    }
    let res = [valleyEntrance, valleyExit]
    res.sort((a, b) => a - b)
    return res[0]
}