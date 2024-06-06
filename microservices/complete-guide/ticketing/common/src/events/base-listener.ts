import { Message, Stan } from 'node-nats-streaming'
import { Subjects } from './subjects'

interface Event {
  subject: Subjects
  data: any
}

export abstract class Listener<T extends Event> {
  abstract subject: T['subject']
  abstract queueGroupName: string
  abstract onMessage(data: T['data'], msg: Message): void
  protected client: Stan
  protected ackWait: number = 5 * 1000

  constructor(client: Stan) {
    this.client = client
  }

  subscriptionOptions() {
    return this.client
      .subscriptionOptions()
      .setDeliverAllAvailable() // gets all the events that passed at first connect only
      .setManualAckMode(true)
      .setAckWait(this.ackWait)
      .setDurableName(this.queueGroupName)
    // mark events that sent to this subscription with rememberable name for later use
  }

  listen() {
    // by adding in the Q group right here, it's going to make sure that even if we very
    // temporarily disconnect all clients or all subscriptions with this durable name, it
    // will not dump the entire durable subscription. so if another instance that is controlled by
    // the (queue-group-name) get created or restarted, NATS won't sent the processed events again to this instance
    const subscription = this.client.subscribe(this.subject, this.queueGroupName, this.subscriptionOptions())

    subscription.on('message', (msg: Message) => {
      console.log(`message received: ${this.subject} / ${this.queueGroupName}`)

      const parsedMsg = this.parseMessage(msg)
      this.onMessage(parsedMsg, msg)
    })
  }

  parseMessage(msg: Message) {
    const data = msg.getData()
    return typeof data === 'string' ? JSON.parse(data) : JSON.parse(data.toString('utf-8'))
  }
}
