const repeat = (str, times) => {
  let result = "";
  for (let i = 0; i < times; i++) {
    result += str;
  }
  return result;
};

const scream = (str) => {
  return str.toUpperCase() + "!!!";
};

const getRantText = (phrase) => {
  let text = scream(phrase);
  let rant = repeat(text, 8);
  return rant;
};

const makeRant = (phrase, el) => {
  const h1 = document.createElement("h1");
  h1.innerText = getRantText(phrase);
  el.appendChild(h1);
};
console.log("HELLO!");

makeRant("I hate mayonnaise", document.body);
// makeRant('if you have to cough, please cover your mouth', document.body);

// go to source in chrome devtool and then to pages and open the file you want to debug and if
// you clicked on any number's line of  for example function that you want to debug .
// you will notice there is a mark on the line that you have select , if  you run the file
// by after, select this breakPoint hit f5
// all of the file's codes will be executed expect the line you marked
