// the name of the interface must be generic as much as possible
// the purpose of interface is to define a type
interface Reportable {
  // name: string;
  // year: Date;
  // broken: boolean;
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Car name is: ${this.name}`;
  },
};

const drinkObject = {
  color: 'brown',
  carbonated: true,
  sugar: 30,
  summary(): string {
    return `my drink has ${this.sugar} amount of sugar`;
  },
};

const printSummary = (item: Reportable): void => {
  console.group();
  // console.log(`Name: ${vehicle.name}`);
  // console.log(`Year: ${vehicle.year}`);
  // console.log(`Broken? : ${vehicle.broken}`);
  console.log(`${item.summary()}`);
  console.groupEnd();
};

//oldCivic should satisfy what needed inside the Reportable interface only, and CAN HAS ITS OWN METHODS
printSummary(oldCivic);
printSummary(drinkObject);
