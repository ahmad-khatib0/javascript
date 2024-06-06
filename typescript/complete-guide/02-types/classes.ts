class Vehicle {
  constructor(public color: string) {}
  drive(): void {
    console.log('chugga chugga');
  }
  protected hunk(): void {
    console.log('beep');
  }
}

const vehicle = new Vehicle('blue');

class MyCar extends Vehicle {
  // you can not change the access modifier in a child class
  // private drive(): void {
  //   console.log('vroom');
  // }

  constructor(public wheels: number, color: string) {
    super(color);
  }
  startDrivingCar(): void {
    this.drive();
  }
  startHunk(): void {
    this.hunk();
  }
}

const myCar = new MyCar(4, 'blue');
myCar.startDrivingCar();
myCar.startHunk();
