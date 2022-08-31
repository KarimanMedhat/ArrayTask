/*let nums = [1, 1, 1, 1, 1];

let newNums = [nums[0], nums[0]+nums[1], nums[0]+nums[1]+nums[2], nums[0]+nums[1]+nums[2]+nums[3], nums[0]+nums[1]+nums[2]+nums[3]+nums[4]];
 
console.log(newNums); 

//another solution

let nums = [1, 1, 1, 1, 1];
let one = nums[0], two = nums[1], three = nums[2], four = nums[3], five = nums[4];
let newArray = [one, one+two, one+two+three, one+two+three+four, one+two+three+four+five];

console.log(newArray); */

let nums = [1, 1, 1, 1, 1];
let newArray = nums.map(function(ele){
  return ele + ele;
});
console.log(newArray);
//This is the main solution I wanted to go with but i couldn't know how.