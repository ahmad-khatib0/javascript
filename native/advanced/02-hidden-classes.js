function Animal(x, y) {
    this.x = x;
    this.y = y
}

const obj1 = new Animal(1, 2);
const obj2 = new Animal(3, 4);

obj1.a = 30;
obj1.b = 100;
obj2.b = 30;
obj2.a = 100;
// this makes compiling time slower, as a solution, first try to add a and b in the 
// Animal instead of x and y, or call them in the same order like  
obj1.a = 30;
obj1.b = 100;
obj2.a = 30;
obj2.a = 100;//here a then b ,again a then b 

// this also slowing the compiler 
delete obj1.x; 