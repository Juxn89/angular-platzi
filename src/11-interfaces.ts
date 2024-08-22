export interface Driver {
  database: string
  password: string
  port: number

  connect(): void
  disconnect(): void
  isConnected(): boolean
}

const driver: Driver = {
  database: '',
  password: '',
  port: 23,
  connect(): void { },
  disconnect: function (): void {
    throw new Error("Function not implemented.")
  },
  isConnected: function (): boolean {
    throw new Error("Function not implemented.")
  }
}

class PostgresDriver implements Driver {
  constructor(
    public database: string,
    public password: string,
    public port: number
  ) {}

  disconnect(): void {
    throw new Error("Method not implemented.")
  }

  isConnected(): boolean {
    throw new Error("Method not implemented.")
  }

  connect(): void {

  }
}