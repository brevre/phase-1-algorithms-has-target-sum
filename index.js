
  // Write your algorithm here

function hasTargetSum(array, target) {
  // Create a set to store numbers we've seen so far
  const seenNumbers = new Set();

  // Iterate through the array
  for (let number of array) {
    // Calculate the complement (the number needed to reach the target)
    const complement = target - number;

    // If the complement is in the set, we found a pair that adds up to the target
    if (seenNumbers.has(complement)) {
      return true;
    }

    // Add the current number to the set
    seenNumbers.add(number);
  }

  // No pair was found that adds up to the target
  return false;
}

// Test cases
console.log(hasTargetSum([3, 8, 12, 4, 11, 7], 10)); // Expecting: true
console.log(hasTargetSum([22, 19, 4, 6, 30], 25));   // Expecting: true
console.log(hasTargetSum([1, 2, 5], 4));             // Expecting: false

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
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
