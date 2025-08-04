import { Component } from 'react'

// the idea behind error boundaries really is that you can ensure that
// not your entire application crashes if something goes wrong, but that instead you can catch those errors
// and then handle them in an elegant way, just as you would do it with try catch in regular JavaScript.
class ErrorBoundary extends Component {
  constructor() {
    super()
    this.state = { hasError: false }
  }

  // this lifecycle method will be triggered whenever one of the child components throws an error
  // or generates an error.
  // The componentDidCatch lifecycle method can be added to any class-based component,
  // and whenever you do add it to a class-based component, it makes that class-based component an error boundary.
  // It's just a term which we use to refer to when we talk about components that have this lifecycle method.
  componentDidCatch(error) {
    console.log(error)
    this.setState({ hasError: true })
  }

  render() {
    if (this.state.hasError) {
      return <p>Something went wrong!</p>
    }
    return this.props.children
  }
}

export default ErrorBoundary
