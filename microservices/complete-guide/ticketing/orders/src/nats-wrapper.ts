import nats, { Stan } from 'node-nats-streaming'

class NatsWrapper {
  private _client?: Stan

  get client() {
    if (!this._client) {
      throw new Error('can not access nats client before connecting')
    }
    return this._client
  }

  connect(clusterId: string, clientId: string, url: string) {
    this._client = nats.connect(clusterId, clientId, { url })
    return new Promise<void>((res, rej) => {
      this._client!.on('connect', () => {
        console.log('connected to nats orders app')
        res()
      })
      this._client!.on('error', (err) => {
        rej(err)
      })
    })
  }
}

export const natsWrapper = new NatsWrapper()
