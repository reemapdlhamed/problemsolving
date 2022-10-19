//Destruction
let arr = [1, 2];
let [a, b] = arr; // a= 1 , b = 2
// linear search
let arr2 = [9, 8, 6, 0, 4, 6, 2, 5, 1, 3];

for (let i = 0; i < arr2.length; i++) {
  if (arr2[i] == 0) {
    console.log("founded");
    break;
  } else {
    console.log("not founded ");
    continue;
  }
}
