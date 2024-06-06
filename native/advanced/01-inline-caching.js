function findUser(user) {
    return `found ${user.firstname} ${user.lastname}`
}
const userData = {
    firstname: "johnson",
    lastname: 'deep',
}

console.log(findUser(userData));
// now here if you called findUser over and over, the compiler will replace this 
// return `found ${user.firstname} ${user.lastname}` with => found johnson deep
