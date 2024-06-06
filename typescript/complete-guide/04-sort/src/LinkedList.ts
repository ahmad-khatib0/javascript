import { Sorter } from './Sorter'

class Node {
  next: Node | null = null

  constructor(public data: number) {}
}

export class LinkedList extends Sorter {
  head: Node | null = null // the first element

  add(data: number): void {
    const node = new Node(data)

    if (!this.head) {
      this.head = node
      return
    }

    let tail = this.head // reference to the first element in the chain
    while (tail.next) {
      tail = tail.next // keep pushing the tail each time to the right until the end
    }

    tail.next = node // make the last pointer points to the last element that we got from the while loop
  }

  get length(): number {
    if (!this.head) return 0

    let length = 1
    let node = this.head
    while (node.next) {
      length++
      node = node.next
    }
    return length
  }

  at(index: number): Node {
    if (!this.head) {
      throw new Error('index is out of bounds !')
    }

    let counter = 0
    let node: Node | null = this.head
    while (node) {
      if (counter === index) {
        return node
      }
      counter++
      node = node.next
    }

    throw new Error('index is out of bounds ')
  }

  compare(leftIndex: number, rigthIndex: number): boolean {
    if (!this.head) throw new Error('List is empty')
    return this.at(leftIndex).data > this.at(rigthIndex).data
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftNode = this.at(leftIndex)
    const rightNode = this.at(rightIndex)

    const leftHand = leftNode.data
    leftNode.data = rightNode.data
    rightNode.data = leftHand
  }

  print(): void {
    if (!this.head) return
    let node: Node | null = this.head
    while (node) {
      console.log(node.data)
      node = node.next
    }
  }
}
