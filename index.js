//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
//create a function called `map`, it should take 2 parameters `array` and `iteratee`
//`array` must be an array
//`iteratee` must be a function that takes one parameter returns something
//The point of the javascript map function is to take an array and return different array with the exact same number of items in it
//The items will be whatever the function `iteratee` creates
//in the map function create a new empty array and store in a variable named whatever you want (myNewArray)
//loop array and extract the single item from the array per loop and store it in a variable
//on each loop call iteratee() passing in the item from the current loop into the call to iteratee()
//iteratee is a function that must return something, capture whatever it returns in a variable
//add the returned value from iteratee tp myNewArray
//after looping, return  myNewArray

//**********Map Function**********/

function map(array, iteratee) {
  let myNewArray = [];

  for (i = 0; i < array.length; i++) {
    let arrayElement = array[i];
    let returnedValue = iteratee(arrayElement);
    myNewArray.push(returnedValue);
  }
  return myNewArray;
}

function addOne(i) {
  return i + 1;
}
let otherArr = [1, 2, 3, 4, 5];

console.log(map(otherArr, addOne));

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
//create a function called `filter`, it should take 2 parameters `array` and `iteratee`
//`array` must be an array
//`iteratee` must be a function that takes one parameter and returns a bool
//in the map function create a new empty array and store in a variable named whatever you want (myNewArray)
//loop `array` and call iteratee for each thing in the array,
//     passing in the item from the current loop
//iteratee will return true or false, if true add the item to myNewArray else do not
//after looping, return myNewArray

//*************Filter********/

function divisibleByTwo(i) {
  if (i % 2 === 0) return i;
}

function filter(array, iteratee) {
  let myNewArray = [];
  for (i = 0; i < array.length; i++) {
    let arrayElement = array[i];
    if (iteratee(arrayElement) === true) {
      myNewArray.push(arrayElement);
    }
  }
  return myNewArray;
}

console.log(filter(otherArr, divisibleByTwo));

console.log(otherArr.filter(divisibleByTwo));

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
//create a function called `find`, it should take 2 parameters `theArray` and `fnc`
//loop theArray and call the fnc for each thing in the array,
//     passing in the item from the current loop
//fnc will return true or false, if true return the item
//after looping, return null

//**********Find Function***********/
function find(theArray, fnc) {
  for (let i = 0; i < theArray.length; i++) {
    if (fnc(theArray[i])) {
      return theArray[i];
    }
  }
}

function itEqualsThree(i) {
  return i === 3;
}
console.log(find(otherArr, itEqualsThree));

/************Find Last***************/
//return the last item in theArray
function findLast(theArray) {
  return theArray[theArray.length - 1];
}

console.log(findLast(otherArr));

/*************Head***************/
//return the first element of the array
function head(theArray) {
  return theArray[0];
}
console.log(head(otherArr));

//create a new array
//loop theArray in reverse order
//add the item from each loop to the new array
//return the new array

//**************Reverse ****************/
function reverse(theArray) {
  let myNewArray = [];

  //start loop at end of array (minus 1 otherwise undefined)
  for (i = theArray.length - 1; i >= 0; i--) {
    let arrayVal = theArray[i];
    myNewArray.push(arrayVal);
  }
  return myNewArray;
}
console.log(reverse(otherArr));

//create a new array
//loop theArray
//add the item from each loop to the new array except the first item
//return the new array

//************Tail **********/
//start loop at 1 to exclude first item
function tail(theArray) {
  let myNewArray = [];
  for (i = 1; i < theArray.length; i++) {
    myNewArray.push(theArray[i]);
  }
  return myNewArray;
}
console.log(tail(otherArr));

//implement the most basic sorting algorithm there is
//assume the array will always have numbers
//use a while loop to constantly loop theArray until it is sorted
//use a for loop to loop theArray
//look at the current item and the next item, compare them
//if the items are out of order, swap them
//initialize a variable that indicates if a swap had to be done, set it to false
//if a swap is done set it to true
//after each for loop check the variable, if true, continue the while loop
//if false return theArray

//***************Sort*************/

const bubbleSort = array => {
  let sorted = false;

  let counter = 0;

  while (!sorted) {
    sorted = true;
    for (let i = 0; i < array.length - 1 - counter; i++) {
      if (array[i] > array[i + 1]) {
        helper(i, i + 1, array);
        sorted = false;
      }
    }
    counter++;
  }
  return array;
};

// exports.map = map;
// exports.filter = filter;
// exports.find = find;
// exports.head = head;
// exports.reverse = reverse;
// exports.tail = tail;
// exports.sort = sort;
// exports.findLast = findLast;
