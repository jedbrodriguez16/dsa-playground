// find most frequent item in the array (assumption: there's unique item that has most occurences)
// example:
// given array: [1, 3, 2, 1, 3, 1, 3, 4, 3]
// output: 3

// solution
// var arr = [0, 1, 3, 1, 4, 5, 2, 0];
var arr = [1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 5, 7, 8, 9];

var counter = new Map();
var max = 0;
var item = null;

// iterate through the items
for (var i = 0; i < arr.length; i++) {
  // current item key
  var key = arr[i];

  // if counter map already has the counter entry for the item, increment the count
  if (counter.has(key)) {
    counter.set(key, counter.get(key) + 1);
  } else {
    // otherwise, initialise the item's counter entry to 1
    counter.set(key, 1);
  }

  // compute for new max counter
  if (counter.get(key) > max) {
    max = counter.get(key);
    item = key;
  }
}

// find the first item with highest occurence
// if (item != null) console.log("most frequent item is ", item);
// else console.log("not found");

// find all items with most occurences (equal highest counter value)
var maxList = [];
for (var [key, value] of counter.entries()) {
  if (value == max) {
    maxList.push(key);
  }
}

if (maxList.length > 0) {
  console.log("The items with most occurences are: ", maxList);
  console.log(
    "The highest number with highest occurence is: ",
    Math.max(...maxList)
  );
  console.log("occurences for each item: ", counter);
} else console.log("not found");
