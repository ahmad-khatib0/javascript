export class Attributes<T> {
  constructor(private data: T) {}
  // like T, K is alos a convention name, e,g can to be KeyOfObject
  // so here  <K extends keyof T>  e.g UserProps has name, id , age, so the K can only be one of those keys
  // so now THIS HERE IS LIKE  e.g being the id string as a type , so here the object's keys are the TYPES
  // and the return type which is T[K]  is like for example user['id'],
  // so return one of the needed keys that are existed inside this generic T
  // get<K extends keyof T>(key: K): T[K] {
  //   return this.data[key]
  // }
  // converted to anonymous function to fix `this` issue
  get = <K extends keyof T>(key: K): T[K] => {
    return this.data[key]
  }

  set(update: T): void {
    Object.assign(this.data as Object, update)
  }

  getAll(): T {
    return this.data
  }
}
