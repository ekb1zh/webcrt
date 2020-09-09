export type Data = {
  response: Array<Entity>
}

export type Entity = {
  type: string,
  id: string | number,
  attributes: {
    photo: string,
    title: string,
    rooms: number,
    address: {
      city: string,
      street: string,
      house: string | number,
      room: string | number,
    },
    area: number,
    unit: string,
  },
  relationships: {
    type: string,
    id: string | number,
    attributes: {
      first_name: string,
      last_name: string,
      middle_name: string,
    }
  }
}