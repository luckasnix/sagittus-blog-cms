export default {
  name: 'category',
  title: 'Categoria',
  type: 'document',
  fields: [
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        slugify: input => input.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '-')
      },
      validation: Rule => Rule.required().error('O slug é obrigatório')
    },
    {
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: Rule => Rule.required().error('O título é obrigatório')
    }
  ]
}
