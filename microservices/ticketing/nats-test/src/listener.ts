import { randomBytes } from 'crypto'
import nats from 'node-nats-streaming'
import { TicketCreateListener } from './events/ticket-created-listener'

console.clear()
const stan = nats.connect('ticketing', randomBytes(4).toString('hex'), {
  url: 'http://localhost:4222',
})

stan.on('connect', () => {
  console.log('listener connected to NATS')

  stan.on('close', () => {
    console.log('nats connection closed')
    process.exit()
  })

  new TicketCreateListener(stan).listen()
})

// help that streaming server understand that when one of these clients goes offline,
// it's not coming back, so we don't have to wait additional time for the
// this service to be healthy again, and immediately keep processing those
// messages that was published while this server went down, so don't wait it,
// and pause some events from being processed, so:  if it went down? send messages to another listeners
process.on('SIGINT', () => stan.close())
process.on('SIGTERM', () => stan.close())
