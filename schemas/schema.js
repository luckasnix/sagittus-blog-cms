import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import metadata from './types/metadata'
import author from './types/author'
import category from './types/category'
import post from './types/post'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    metadata,
    author,
    category,
    post
  ])
})
