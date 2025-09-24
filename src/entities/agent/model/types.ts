export type AgentItem = {
  id: string
  name: string
  image: {
    src: string
    width: number
    height: number
    alt: string
  }
  listings: number
}

export type AgentList = AgentItem[]
