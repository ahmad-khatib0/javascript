import { OrderCreatedEvent, Publisher, Subjects } from '@ahmad0/common'

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated
}
