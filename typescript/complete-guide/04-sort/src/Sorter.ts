interface Sortable {
  length: number
  compare(leftIndex: number, rightIndex: number): boolean
  swap(leftIndex: number, rightIndex: number): void
}

export abstract class Sorter {
  abstract compare(leftIndex: number, rightIndex: number): boolean
  abstract swap(leftIndex: number, rightIndex: number): void
  abstract length: number

  sort(): void {
    const { length } = this
    // for (let i = 0; i < length; i++) {
    //   for (let j = 0; j < length - i - 1; j++) {
    //     // in this array ts will give you what is in common between string and array
    //     if (this.collection instanceof Array) {
    //       // but after this if, it will give you all methods that are relevant to arrays!
    //       if (this.collection[j] > this.collection[j + 1]) {
    //         const leftHand = this.collection[j];
    //         this.collection[j] = this.collection[j + 1]; // swap right side to left
    //         this.collection[j + 1] = leftHand; // swap the left side to right
    //       }
    //     }

    // if (typeof this.collection === "string") { }

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1)
        }
      }
    }
  }
}
