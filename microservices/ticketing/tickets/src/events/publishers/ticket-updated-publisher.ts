import { Publisher, Subjects, TicketUpdatedEvent } from '@ahmad0/common'

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated
}
