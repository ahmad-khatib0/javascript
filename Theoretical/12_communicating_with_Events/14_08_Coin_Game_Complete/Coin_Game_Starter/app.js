function isTouching(a, b) {
  const aRect = a.getBoundingClientRect();
  const bRect = b.getBoundingClientRect();

  return !(
    aRect.top + aRect.height < bRect.top ||
    aRect.top > bRect.top + bRect.height ||
    aRect.left + aRect.width < bRect.left ||
    aRect.left > bRect.left + bRect.width
  );
}

const init = () => {
  const avatar = document.querySelector("#player");
  const coin = document.querySelector("#coin");
  moveCoin();
  window.addEventListener("keyup", function (e) {
    if (e.key === "ArrowDown" || e.key === "Down") {
      moveVertical(avatar, 50);
    } else if (e.key === "ArrowUp" || e.key === "Up") {
      moveVertical(avatar, -50);
    } else if (e.key === "ArrowRight" || e.key === "Right") {
      moveHorizontal(avatar, 50);
      avatar.style.transform = "scale(1,1)";
      //   this to redirect the player for the correct direction
    } else if (e.key === "ArrowLeft" || e.key === "Left") {
      moveHorizontal(avatar, -50);
      avatar.style.transform = "scale(-1,1)";
    }
    if (isTouching(avatar, coin)) moveCoin();
  });
};

const moveVertical = (element, amount) => {
  const currTop = extractPos(element.style.top);
  element.style.top = `${currTop + amount}px`;
};
const moveHorizontal = (element, amount) => {
  const currLeft = extractPos(element.style.left);
  element.style.left = `${currLeft + amount}px`;
};

const extractPos = (pos) => {
  if (!pos) return 100; //So if currently Avatar.style.top is an empty string then we'll return 100
  //   100 because of the initial value of the css file
  return paresInt(pos.slice(0, -2));
  // -2 this to slice the px letters ,regardless on the length of that number and than return it
  // as a number , example : let pos = 900px  > paresInt(pos.slice(0, -2));  => 900
};

const moveCoin = () => {
  const x = Math.floor(Math.random() * window.innerWidth);
  const y = Math.floor(Math.random() * window.innerHeight);
  coin.style.top = `${y}px`;
  coin.style.left = `${x}px`;
};

init();
