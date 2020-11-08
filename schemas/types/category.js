export default {
  name: 'category',
  title: 'Categoria',
  type: 'document',
  fields: [
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug'
    },
    {
      name: 'title',
      title: 'Título',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Descrição',
      type: 'text',
      rows: 2
    }
  ]
}
