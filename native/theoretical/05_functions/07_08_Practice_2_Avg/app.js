// Write a function to find the average value in an array of numbers
//avg([0,50]) //25
//avg([75,76,80,95,100]) //85.2

function avg(array) {
    let total = 0;
    // loop over each number 
    for (let num of array) {
        //  we want to take that NUM and add it into total 
        total += num
    }
    return total / array.length;
}