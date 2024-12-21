import { type SchemaTypeDefinition } from 'sanity'

import {blockContentType} from './blockContentType'
import {categoryType} from './categoryType'
import { productTypes } from './productTypes'
import { OrderType } from './OrderType'
import { salesType } from './salesType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, categoryType, productTypes, OrderType, salesType ],
}
