export class EngineError extends Error {
  constructor(message: string) {
    super(`[engine] ${message}`)
    this.name = 'EngineError'
  }
}
