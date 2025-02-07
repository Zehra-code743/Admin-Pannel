import { type SchemaTypeDefinition } from 'sanity'
import order from './order'
import delivery from './delivery'
import shipment from './shipment'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [order,delivery,shipment],
}
