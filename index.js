function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      let sum = array[i] + array[j];
      if (sum === target) {
        return true
      }
    }
  }
  return false
}

/* 
  Write the Big O time complexity of your function here:
  The time complexity of your function is 𝑂(𝑛^2), where 𝑛 is the number of elements in the array. 
  This is because I have nested loops, each iterating over the array.
*/

/* 
  Add your pseudocode here:
1. Loop through the array with index i.
2. Inside this loop, loop through the array again with index j starting from i + 1.
3. Calculate the sum of the elements at index i and j.
4. If the sum is equal to the target, return true.
5. If no such pair is found after all iterations, return false.
*/

/*
  Add written explanation of your solution here:
  The function hasTargetSum checks if any two numbers in the given array add up to the specified target sum. 
  It uses two nested loops to consider each possible pair of numbers. If a pair is found whose sum equals the target, the function returns true. 
  If no such pair is found after checking all pairs, the function returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 3, 4], 5));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 3, 4], 8));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([10, 15, 3, 7], 17)); 

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 3], 6));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
