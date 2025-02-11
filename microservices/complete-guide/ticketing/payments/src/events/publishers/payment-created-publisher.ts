import { Subjects, Publisher, PaymentCreatedEvent } from '@ahmad0/common'

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated
}
