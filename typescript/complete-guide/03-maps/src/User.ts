import { faker } from '@faker-js/faker';
import { Mappable } from './CustomMap';

// export default 'red';
// this default export is recommended to avoid it in typescript, even though it works absolutely fine

// implements is not required , but it will help us to point directly to errors if any
// and help other people to see what user should to satisfy
export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = 'red';

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `User Name: ${this.name}`;
  }
}
