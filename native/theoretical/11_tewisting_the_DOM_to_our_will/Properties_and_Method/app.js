// ****************
// querySelector
// ****************
//To find the first li on the page:
document.querySelector("li");

//To find the first element with class of special:
document.querySelector(".special");

//To find the first element with id of main (there should only be one...)
document.querySelector("#main");

// To find the first li with the class of special, nested inside of a ul, nested inside a section:
document.querySelector("section ul li .special");
document.querySelector('input[type="password');

// ****************
// querySelectorAll
// ****************

// To find ALL li's on the page:
document.querySelectorAll("li");

// To find ALL elements with the class of special on the page:
document.querySelectorAll(".special");

// inner text & text content
// const p = document.querySelector('#main');
// p.innerText => shows just the content
// p.textContent => shows if there is script for example inside that p element

// inner html
// const form = document.querySelector("form");
// form.innerHTML = "<h1>i'm an h1  </h1>";
// const h1 = document.querySelector("h1");
// h1.innerHTML += " is cool"; // this is adding  to the previous  content instead of range rid of it
// h1.innerHTML += " is cool <b>!!!!</b>" ; // that adds an element to
// while // h1.innerText  += " is cool";  // adds it  as a text

// const input = document.querySelectorAll("input");
// input[0].value;  =>  what is written in the filed
// input[0].value += "i am adding a new thing to the filed ";

// const range = document.querySelector('input[type="range"]');
// range.getAttribute("max"); // 500  which mean that is gets the information form HTML element
// range.setAttribute("max", "600"); // 600  that is change the value of HTML attribute
// range.setAttribute("type", "radio"); // change the type of the input
//  the variable is still called range but it's no longer  an actual range input.

// const li = document.querySelector("li");
// li.parentElement  =>  ul
// li.parentElement.parentElement  =>  body
// const ul = document.querySelector("ul");
// ul.children[0].innerText;  => "First Thing"
// const firstLi = document.querySelector("li");
firstLi.nextElementSibling.nextElementSibling;
//   => <li class=​"special">​::marker​"Third Thing"</li>​
// const thirdLi = firstLi.nextElementSibling.nextElementSibling;
// thirdLi.previousElementSibling =>   <li>​second</li>​

// const liAll = document.querySelectorAll("li");
// for (let i = 0; i < liAll.length; i++) {
//   //   console.log(liAll[i].innerText);
//   liAll[i].innerText = "WE ARE CHANGER ";
// // }
// for (let li of liAll) {
//   li.innerHTML = "WE ARE THE <b>INTERNATIONAL</b> ";
// }
