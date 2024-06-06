import fs from 'fs'

//there is nothing about naming the GENERICS by =>  T name, its just a convention
export abstract class CsvFileReader<T> {
  data: T[] = []

  constructor(public filename: string) {}

  abstract mapRow(row: string[]): T

  read() {
    this.data = fs
      .readFileSync(this.filename, { encoding: 'utf8' })
      .split('\n')
      .map((row: string): any => {
        return row.split(',')
      })
      .map(this.mapRow)
  }
}
