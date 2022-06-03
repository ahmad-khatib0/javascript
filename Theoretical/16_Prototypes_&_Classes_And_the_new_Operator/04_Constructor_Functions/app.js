// This is a Constructor Function...
function Color(r, g, b) {
  this.r = r;
  this.g = g;
  this.b = b;
}
// the above func is behave like this func :
// function Color(r, g, b) {
//   const o = {};
//   o.r = r;
//   o.g = g;
//   o.b = b;
//   return o;
//   // but it's doing it all implicitly behind the scenes for us
// }

//If you call it on its own like a regular function...
Color(35, 60, 190); //undefined
//It returns undefined. Seems useless!

// *****************
// THE NEW OPERATOR!
// *****************

// 1. Creates a blank, plain JavaScript object;
// 2. Links (sets the constructor of) this object to another object;
// 3. Passes the newly created object from Step 1 as the this context;
// 4. Returns this if the function doesn't return its own object.

Color.prototype.rgb = function () {
  const { r, g, b } = this;
  return `rgb(${r}, ${g}, ${b})`;
};

Color.prototype.hex = function () {
  const { r, g, b } = this;
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};

Color.prototype.rgba = function (a = 1.0) {
  const { r, g, b } = this;
  //color 1 or 2 will be the value of this.
  return `rgba(${r}, ${g}, ${b}, ${a})`;
};
// so  we can add methods to the color prototype so that they are
// only defined them  one time rather than on each individual color

// if we don't use a new keyword this refers to the window object but when we use new
// .It will be used to create a new object for you based off of this pattern.
const color1 = new Color(40, 255, 60);
color1.hex();
const color2 = new Color(0, 0, 0);
color2.hex();

// color1.hex === color2.hex  => true :  because they are on the same
// shared prototype object rather than uniquely defined on each instance. =>
//__proto__:
// hex: ƒ ()
// rgb: ƒ ()
// rgba: ƒ (a = 1.0)
// constructor: ƒ Color(r, g, b)
// __proto__: Object
