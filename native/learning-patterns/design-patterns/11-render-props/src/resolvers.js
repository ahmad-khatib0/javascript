import { gql } from 'apollo-boost'

export const ADD_MESSAGE = gql`
  mutation AddMessage($message: String!) {
    addMessage(message: $message) {
      message
    }
  }
`
