const feline = {
  legs: 4,
  family: 'Felidae'
};

const canine = {
  family: 'Caninae',
  furry: true,
  legs: 4
};

const dog = {
  ...canine,
  isPet: true,
  adorable: true
};
//{family: "Caninae", furry: true, legs: 4, isPet: true, adorable: true}

const houseCat = {
  ...feline,
  isGrumpy: true,
  personality: 'unpredictable'
};
//{legs: 4, family: "Felidae", isGrumpy: true, personality: "unpredictable"}

const catDog = {
  ...canine,
  ...feline
};
//{family: "Felidae", furry: true, legs: 4}

//Order matters! Legs will be 3 here, because we set it AFTER spreading canine.
// So the order does matter if you have conflicting properties with the same key name.

const tripod = {
  ...canine,
  legs: 3,
};
//{family: "Caninae", furry: true, legs: 3}

const catDogClone = {
  // if we triple equals to cat dog it's false. They are
  //  unique references because we made a copy.
  ...catDog
};

const random = [...'hello', {
  ...catDog
}];



// can't spread the object // [...dog] It's not an itarable It only works if we're passing in an array
//  that we're spreading a string or some other itarable but an object literal is not one.

// {...[4,5,6] }  it does work we get key value pairs based off of the
//  indices so zero is the key set to 4 1 5 2 to 6.