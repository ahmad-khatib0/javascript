const myImage = document.createElement("img");
myImage.src =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtEjO8U0cZkSVcaiWuni9Z7FGuIUxrv8JaCg&usqp=CAU";
document.body.append(myImage);
myImage.style.transition = "all 2s";

const sheet = new CSSStyleSheet();

sheet.replaceSync(`*{translation :all 2s}`);

document.adoptedStyleSheet = [sheet];

const allElements = document.body.children;
setInterval(() => {
  for (let element of allElements) {
    const rotation = Math.floor(Math.random() * 360);
    const c = Math.floor(document.body.clientHeight * Math.random());
    const b = Math.floor(document.body.clientWidth * Math.random());
    element.style.transform = `translate(${c}px ,${b}px) rotate(${rotation}deg)`;
  }
}, 2000);
