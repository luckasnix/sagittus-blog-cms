import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import author from './types/author'
import category from './types/category'
import post from './types/post'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([ author, category, post ])
})
