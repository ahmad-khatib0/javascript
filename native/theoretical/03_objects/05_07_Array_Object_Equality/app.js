let nums = [ 1, 2, 3 ];
let mystery = [ 1, 2, 3 ];
let moreNums = nums;

//They 'look' the same, but refer to different arrays
nums === mystery; // false

//These two arrays reference the exact same array, so we get true:
nums === moreNums; //true

const user = {
	username      : 'CherryGarcia8',
	email         : 'garcia@gmail.com',
	notifications : [ 'message', 'alert' ]
};

//THIS WILL NOT WORK!
if (user.notifications === []) {
	console.log('NO NEW NOTIFICATIONS!');
// [] === [] They look the same but each time I type empty array 
//it's a new place in memory.
}
// THIS VERSION DOES WORK!
if (!user.notifications.length === 0 ) {
	console.log('NO NEW NOTIFICATIONS!');
}
// or you can to shorter this more 
if (!user.notifications.length) {
	console.log('NO NEW NOTIFICATIONS!');
	// length will give us zero in this scenario and zero is a false value so we could say 
	//if not user dot notifications If there is no length we get no new notifications.

}
