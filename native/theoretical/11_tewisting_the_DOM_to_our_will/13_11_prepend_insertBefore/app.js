const parentUL = document.querySelector("ul");
const newLI = document.createElement("li");
newLI.innerText = "I AM A NEW LIST ITEM!";

//prepend will add newLI as the FIRST child of parentUL
parentUL.prepend(newLI); //Doesn't work in IE!

//We can also insert something BEFORE another element, using insertBefore.
// First, select the element to insert before:
const targetLI = document.querySelectorAll("li.todo")[2]; //3rd li with class of 'todo'
// To insert our new LI before targetLI...
//parent.insertBefore(what to insert, where to insert)
parentUL.insertBefore(newLI, targetLI);
// newLI is the thing that we want to insert and targetLI is
// where is the place that we want to insert it in

const i = document.createElement("i");
i.innerText = "I AM A NEW  ELEMENT";
const firstP = document.querySelector("p");
// firstP.insertAdjacentElement("afterend", i);
// firstP.insertAdjacentElement("afterbegin", i);
// firstP.insertAdjacentElement("beforebegin", i);
firstP.insertAdjacentElement("beforebegin", i);
// So append is different from appendChild.
//  In that we can actually insert in multiple elements at once.
firstP.append(i, newLI);
firstP.prepend(i, newLI);
