import { OrderCancelledEvent, Publisher, Subjects } from '@ahmad0/common'

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled
}
