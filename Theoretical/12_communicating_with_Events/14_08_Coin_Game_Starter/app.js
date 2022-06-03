function isTouching(a, b) {
  const aRect = a.getBoundingClientRect();
  const bRect = b.getBoundingClientRect();
  //The Element.getBoundingClientRect() method returns a DOMRect object
  //providing information about the size of an element and its position relative to the viewport.
  return !(
    aRect.top + aRect.height < bRect.top ||
    aRect.top > bRect.top + bRect.height ||
    aRect.left + aRect.width < bRect.left ||
    aRect.left > bRect.left + bRect.width
  );
}

const avatar = document.querySelector("#player");
window.addEventListener("keyup", function (event) {
  if (event.key === "ArrowDown" || event.key === "Down") {
    const currentTop = extractPos(avatar.style.top);
    avatar.style.top = `${currentTop + 50}px `;
  } else if (event.key === "ArrowUp" || event.key === "Up") {
    const currentTop = extractPos(avatar.style.top);
    avatar.style.top = `${currentTop - 50}px `;
  } else if (event.key === "ArrowRight" || event.key === "Right") {
    const currentLeft = extractPos(avatar.style.left);
    avatar.style.left = `${currentLeft + 50}px `;
  } else if (event.key === "ArrowLeft" || event.key === "Left") {
    const currentLeft = extractPos(avatar.style.left);
    avatar.style.left = `${currentLeft - 50}px `;
  }
});
const extractPos = (pos) => {
  if (!pos) return 100; //So if currently Avatar.style.top is an empty string then we'll return 100
  //   100 because of the initial value of the css file
  return paresInt(pos.slice(0, -2));
  // -2 this to slice the px letters ,regardless on the length of that number and than return it
  // as a number , example : let pos = 900px  > paresInt(pos.slice(0, -2));  => 900
};
