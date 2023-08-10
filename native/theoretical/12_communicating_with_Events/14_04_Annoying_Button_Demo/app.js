const btn = document.querySelector("button");

btn.addEventListener("mouseover", function () {
  console.log("MOUSED OVER ME!");
  const height = Math.floor(Math.random() * window.innerHeight);
  const width = Math.floor(Math.random() * window.innerWidth);
  btn.style.left = `${width}px`;
  btn.style.top = `${height}px`;
});

btn.addEventListener("click", function () {
  btn.innerText = "YOU GOT ME!";
  document.body.style.backgroundColor = "green";
});
// window.screen   this show you the actual static  diminutions of the screen
// inner width or height is to show you  the dynamic diminutions of the screen
