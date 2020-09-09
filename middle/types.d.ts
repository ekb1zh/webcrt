export type Data = {
  response: Array<Entity>
}

export type Entity = {
  type: string,
  id: string,
  attributes: {
    photo: string,
    title: string,
    rooms: number,
    address: {
      city: string,
      street: string,
      house: string,
      room: string,
    },
    area: number,
    unit: string,
  },
  relationships: {
    type: string,
    id: string,
    attributes: {
      first_name: string,
      last_name: string,
      middle_name: string,
    }
  }
}