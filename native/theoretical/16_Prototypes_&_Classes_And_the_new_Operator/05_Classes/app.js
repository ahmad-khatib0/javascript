// normally in JavaScript for a function name you know  we don't capitalized  the first
// character but we do when we are creating classes or constructor functions.
class Color {
  constructor(r, g, b, name) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.name = name;
  }
  //Now a constructor is a function that will execute immediately whenever a new color is created

  //adding this methods directly to this function's constructor instead of typing
  //for example : Color.prototype.innerRGB = function ........ so its nicer and shorter way
  innerRGB() {
    const { r, g, b } = this;
    // this will refer to the individual object.
    return `${r}, ${g}, ${b}`;
  }
  rgb() {
    return `rgb(${this.innerRGB()})`;
  }
  rgba(a = 1.0) {
    return `rgba(${this.innerRGB()}, ${a})`;
  }
  hex() {
    const { r, g, b } = this;
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }
}
// red  =>
// __proto__:
// constructor: class Color
// hex: ƒ hex()
// innerRGB: ƒ innerRGB()
// rgb: ƒ rgb()
// rgba: ƒ rgba(a = 1.0)
// __proto__: Object

const red = new Color(255, 67, 89, "tomato");
const white = new Color(255, 255, 255, "white");
