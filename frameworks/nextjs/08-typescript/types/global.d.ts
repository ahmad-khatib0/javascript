export { }

// we employed the export {} line within our global.d.ts file, designating it as an external module.
// This approach allows us to efficiently augment the global scope

declare global {
  interface IPost {
    id: number
    title: string
    body: string
  }
}
