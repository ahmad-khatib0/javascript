"hello".toUpperCase(); //when you will run the code or the file 
// its will not working 

// but if you've store it in const or anything it will work 
const greet = "hello".toUpperCase();


// No return!
function add(x, y) {
	console.log(x + y);
}

// This version returns the sum of x & y;
function add(x, y) {
	return x + y;
}

// We can capture the return value:
const total = add(4, 9); //13
