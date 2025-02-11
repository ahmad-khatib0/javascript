import { Sorter } from './Sorter'
import { NumbersCollection } from './NumbersCollection'
import { CharactersCollection } from './CharactersCollection'
import { LinkedList } from './LinkedList'
const numbersCollection = new NumbersCollection([1000090, 3, -5, 0])
numbersCollection.sort()
console.log(numbersCollection)
const charactersCollection = new CharactersCollection('Xaaaby')
console.log(charactersCollection.sort)
console.log(charactersCollection.data)
const linkedList = new LinkedList()
linkedList.add(-500)
linkedList.add(-10)
linkedList.add(-3)
linkedList.add(5)
linkedList.sort()
linkedList.print()
