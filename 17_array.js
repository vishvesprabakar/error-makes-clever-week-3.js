// 17.1_array.js - array can have multiple values
var a = [1, 2, 3, 4, 5];
a[3] = 33;
console.log(a[3] + " - array can have multiple values");

// Path: push 17.2_array.js - add an element to the end
var a = [10, 20, 30, 40, 50];
a.push(60);
console.log(a + " - push");

// Path: pop 17.2_array.js - remove the last element
var a = [10, 20, 30, 40, 50];
a.pop();
console.log(a + " - pop");

// Path: Slice 17.3_array.js - cut the num
var a = [2, 4, 6, 8, 10];
//0-2, (1-4, 2-6, 3-8,) 4-10
var b = a.slice(1, 4); //1 position to 3 position less than 1 position
console.log(a + " - slice");
console.log(b + " - slice");

// Path: Splice 17.3_array.js - delete element and can replace it 
var a = [2, 4, 6, 8, 10];
//0-2, (1-4, 2-6, 3-8,) 4-10
a.splice(1, 3); //deletes 3 elements from position 1
console.log(a + " - splice");

// Path: indexOf 17.4_array.js - find the position number
var a = [123, 456, 334, 121];
console.log(a.indexOf(456) + " - indexOf");

// Path: includes 17.4_array.js - true or false
var a = [123, 456, 334, 121];
console.log(a.includes(456) + " - includes");

// Path: length 17.4_array.js - number of elements
var a = [123, 456, 334, 121];
console.log(a.length + " - length");

// Path: combine array with loop 17.6_array.js - combine array with loop
var a = [10, 20, 30, 40, 50];
for (count = 0; count <= 5; count = count + 1) {
    console.log(a[count] + " - count");
}

// Path: Arrays practice 17.7_array.js - Arrays practice
var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (count = 0; count <10; count++) {
    if (a[count] % 2 == 0 ) {
        console.log(a[count] + " - even");
    } else if (a[count] % 2 == 1) {
        console.log(a[count] + " - odd");
    } 
}