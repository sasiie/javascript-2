// This task pulls together the previous two tasks to practice a more "real" data
// structure you'd see regularly as a web developer.
//
// Consider the following array of product objects:
const products = [
  { name: "Camera", brand: "Canon", model: "EOS 70D" },
  { name: "Camera", brand: "Nikon", model: "D3400" },
  { name: "Camera", brand: "GoPro", model: "Hero 4" },
  { name: "Drone", brand: "DJI", model: "Phantom" },
  { name: "Drone", brand: "GoPro", model: "Karma" },
];

// Task 1: Write a .forEach function which iterates through the products
// and uses console.log() to print the name and brand of each item.

products.forEach(function (product) {
  console.log("Name:", product.name);
  console.log("Brand:", product.brand);
});

//Task 2;
const models = products.map(function (product) {
  return product.model;
});

console.log(models);
