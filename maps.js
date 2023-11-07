// The last examples used forEach to iterate over an array. .forEach() invoked
// a function for each item in an array, but doesn't actually return anything.

//const dogs = ["Labrador", "Beagle", "Poodle", "Pug", "Chihuahua"]

// This function is similar to the last task of the iteration challenges, except
// it returns a string from the function instead of using console.log().
const doggieWalks = dogs.forEach((dogName) => {
  return "The " + dogName + " needs to go for a walk!";
});

// Task 1: Use console.log to log the `doggieWalks` variable below to see what was
// actually returned from .forEach()

const doggieWalks2 = dogs.forEach((dogName) => {
  console.log("The " + dogName + " needs to go for a walk!");
});

// Task 2: Now change .forEach to .map on line 9 and run the code again.
// See the difference? .map() returns the values from the function. The `return`
// in the mapping function is very important. Try removing it to see what happens.
const doggieWalks3 = dogs.map((dogName) => {
  return "The " + dogName + " needs to go for a walk!";
});
console.log(doggieWalks3);

// Task 3: Create a new variable called `shoutyDogNames` and assign it to a new
// dogs.map() call. Inside the dogs.map() call, write a function which returns a
// dog's name in uppercase. Finally, log the `shoutyDogNames` variable.

const shoutyDogNames = dogs.map(shoutyDogNames.toUpperCase);
console.log(shoutyDogNames);
