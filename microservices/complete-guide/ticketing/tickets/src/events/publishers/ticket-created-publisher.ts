import { Publisher, Subjects, TicketCreatedEvent } from '@ahmad0/common'

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated
}
