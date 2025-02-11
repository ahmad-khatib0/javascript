import { AxiosPromise, AxiosResponse } from 'axios'

///
interface ModelAttributes<T> {
  set(value: T): void
  getAll(): T
  get<K extends keyof T>(key: K): T[K]
}

interface Sync<T> {
  fetch(id: number): AxiosPromise
  save(data: T): AxiosPromise
}

interface Events {
  on(eventName: string, callback: () => void): void
  trigger(eventName: string): void
}

export interface HasId {
  id?: number
}

export class Model<T extends HasId> {
  constructor(
    private attributes: ModelAttributes<T>,
    private events: Events,
    private sync: Sync<T>
  ) {}

  // get on() {
  //   return this.events.on
  // }
  on = this.events.on // this is equivalent to the get on above it
  // this syntax is valid only if we initialize the constructor args inside the () , not inside the body {} of the constructor
  trigger = this.events.trigger
  get = this.attributes.get

  set(update: T): void {
    this.attributes.set(update)
    this.events.trigger('change')
  }

  fetch(): void {
    const id = this.get('id') // its referncing this get , not that inside Attributes class,
    // does it matter, it depends, e,g here it does not, but for example with this.set(response.data) inside the
    // then block , invocking this set will trigget the event emitter, while invocking the set inside the
    // attributes class will not,

    if (typeof id != 'number') {
      throw new Error('can not fetch without an ID!')
    }
    this.sync.fetch(id).then((response: AxiosResponse): void => this.set(response.data))
  }

  save(): void {
    this.sync
      .save(this.attributes.getAll())
      .then((res: AxiosResponse): void => this.trigger('save'))
      .catch(() => this.trigger('error'))
  }
}
