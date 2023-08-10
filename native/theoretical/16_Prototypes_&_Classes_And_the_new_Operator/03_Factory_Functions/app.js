//This functions makes and returns an object every time it is called.
// The resulting objects all follow the same "recipe"
// This is called a factory function (makeColor)
function makeColor(r, g, b) {
  const color = {};
  color.r = r;
  color.g = g;
  color.b = b;
  //Those are the values that were passed in : example: makeColor(34,255,245)
  //   =>{r:34 , g:255 , b:245 }
  color.rgb = function () {
    //return `rgb (${r} , ${g} , ${b} )` ;  instead of doing this in hard coding
    const { r, g, b } = this;
    //this referred to color object ; remember that we can to access  the this key globally
    // and here we say that make const { r, g, b } = this; be inside that object
    // so when we store this method inside that object . and because we return it entirely
    // at the end of this function . so we can to access its content latter on
    return `rgb(${r}, ${g}, ${b})`;
  };

  color.hex = function () {
    const { r, g, b } = this;
    //this referred to color object ; remember that we can to access  the this key globally
    // and here we say that make const { r, g, b } = this; be inside that object
    // so when we store this method inside that object . and because we return it entirely
    // at the end of this function . so we can to access its content latter on
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  };
  return color;
}

const firstColor = makeColor(35, 255, 150);
firstColor.rgb(); //"rgb(35, 255, 150)"
// in this method rgb() the value of this key will refer to this object
// to the left of the dot(firstColor). So if I use (this) I can access
// this  dot r , this dot g , this dot b.

firstColor.hex(); //firstColor.hex();
const black = makeColor(0, 0, 0);
black.rgb(); //"rgb(0, 0, 0)"
black.hex(); //"#0000s00"
