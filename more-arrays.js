// Here's an array which the next few tasks will build upon. Don't change it here!
const months = [
  "Jon",
  "Feb",
  "Mar",
  "Apr",
  "Jun",
  "May",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
];

// You can modify arrays in a similar way to how you fetched a single value, and then using
// assignment to give it a new value. For example, there's a typo in the first month of the
// months array. It says "Jon" but it should say "Jan". To fix this, we can find the 1st
// item (counting from 0) and assign it a new value:
months[0] = "Jan";

// Task 1: Use console.log() to print the months array. Notice how the first month is fixed!
console.log(months);

// Task 2: The array of months above has another mistake; "Jun" comes before "May". Without
// modifying the line above, use assignment to fix the mistake by re-assigning the 5th
// and 6th items in the array. After you've done that, use console.log() to log the
// months array.
months[4] = "May";
months[5] = "Jun";
console.log(months);

// Task 3: Arrays have a property which you can use to find the number of items it contains.
// Try to find it in the docs and then use it in a console.log() below to print the number
// of items in the months array. (Docs: https://www.w3schools.com/js/js_arrays.asp)

let lenght = months.length;
console.log(months.length);

// Task 4: There's another problem with the array! It's missing December.. No christmas!!! Fix it
// by using months.push() to add a new item to the end of the array and then use console.log()
// to print the array to the console. Check the docs for more information on .push().
months.push("Dec");
console.log(months);

// Task 5: There's another function which can be called to remove an item from the array
// (it was in the lecture on JavaScript, or try to find it in the docs). Use it to remove
// the last item from the array and then print the months array using console.log()
months.pop(12);
console.log(months);

// Task 6: Using splice(), you can remove items from the middle of arrays. It requires two
// arguments; first, the index from where you'd like to start deleting, and second, the
// number of items you'd like to delete. Use .splice() to remove "Jul" from the months array.

months.splice(6, 1);
console.log(months);
