/// <reference types="@types/google.maps" />

import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

const user = new User();
const company = new Company();
const customMap = new CustomMap('map');

// ts is implicitly check to see if user and company satisfy the Mappable interface, (called IMPLICIT CHECK)
customMap.addMarker(user);
customMap.addMarker(company);
