 // jshint esversion : 9 
 function square(x) {
 	return x * x;
 	console.log('ALL DONE!'); //this NEVER runs;
 }

 // One way of writing this function
 function isPurple(color) {
 	if (color.toLowerCase() === 'purple') {
 		return true;
 	} else {
 		return false;
 	}
 }

 // We don't need the else!
 function isPurple(color) {
 	if (color.toLowerCase() === 'purple') {
 		return true;
 	}
 	return false;
 }

 // An even shorter way!
 function isPurple(color) {
 	return color.toLowerCase() === 'purple';
 }

 function containsPurple(arr) {
 	for (let color of arr) {
 		if (color === 'purple' || color === 'magenta') {
 			return true;
 		}
 	}
 	return false;
 }




 function isNine(number) {
 	if (number.toLowerCase() === 'nine') {
 		return true;
 		//its will not return anything after the return method
 		console.log("this is true ") //its will not working 
 	} else {
 		return false;
 	}
 }


 function isContainPink(color2) {
 	for (let color3 of color2) {
 		if (color3 === 'pink' || color3 === 'red') {
 			return true;
 		}
 	}
	 return false; //we put it here because the code or the array 
	 // will end at the first item if it did not find the matched 
	 // items and will not complete to the end of the array's item 
	 // if we put this line of the code before the carly parentheses 
	 
 }