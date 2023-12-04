import { ExpirationCompleteEvent, Publisher, Subjects } from '@ahmad0/common'

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete
}
