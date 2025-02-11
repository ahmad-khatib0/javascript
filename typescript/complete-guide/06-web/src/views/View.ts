import { HasId, Model } from '../models/Model'

export abstract class View<T extends Model<K>, K extends HasId> {
  // Mode<K> this K is comming from the second generic
  constructor(public parent: Element, public model: T) {
    this.bindModel()
  }

  regions: { [key: string]: Element } = {}

  abstract template(): string
  eventsMap(): { [key: string]: () => void } {
    return {}
  }

  regionsMap(): { [key: string]: string } {
    return {}
  }

  bindModel(): void {
    this.model.on('change', () => this.render())
  }

  bindEvents(fragment: DocumentFragment): void {
    // a document fragment in general. Its purpose is to kind of hold some HTML inside of memory
    // before it actually gets attached to the DOM.
    const eventsMap = this.eventsMap()
    for (let key in eventsMap) {
      const [eventName, selector] = key.split(':')
      fragment.querySelectorAll(selector).forEach((el) => {
        el.addEventListener(eventName, eventsMap[key])
      })
    }
  }

  mapRegions(fragment: DocumentFragment): void {
    const regionsMap = this.regionsMap()
    for (let key in regionsMap) {
      const selector = regionsMap[key]
      const element = fragment.querySelector(selector)
      if (element) this.regions[key] = element
    }
  }

  onRender(): void {}

  render(): void {
    this.parent.innerHTML = ''
    const templateElement = document.createElement('template')
    templateElement.innerHTML = this.template()

    this.bindEvents(templateElement.content)
    this.mapRegions(templateElement.content)
    this.onRender()

    this.parent.append(templateElement.content)
  }
}
