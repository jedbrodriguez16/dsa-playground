// find two integers that multiply to 20
// example:
// given array: [2,4,1,6,5,10]
// output: 4 and 5

// solution
var arr = [2, 4, 1, 6, 5, 10];
var target = 20;
search(arr, target);

function search(nums, target) {
  var lookup = new Set();
  // iterate through the items
  for (var i = 0; i < arr.length; i++) {
    // multiplier to find in the lookup
    var multiplier = 20 / arr[i];

    // if lookup already has the multiplier, we have found the pair
    if (lookup.has(multiplier)) {
      console.log(`The pair is: ${arr[i]} and ${multiplier}`);
    } else {
      // otherwise, add to lookup
      lookup.add(arr[i]);
    }
  }
}
