const arr = ["L", "i", "g", "h", "t", "", "r", "a", "i", "n"];
let sorted = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === "") {
    arr[i] = "-";
    console.log("white space");
  }
  sorted.push(arr[i].toLowerCase());
}

console.log(sorted);
