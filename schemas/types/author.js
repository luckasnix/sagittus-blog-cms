export default {
  name: 'author',
  title: 'Autor',
  type: 'document',
  fields: [
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        slugify: input => input.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '-')
      },
      validation: Rule => Rule.required().error('O slug é obrigatório')
    },
    {
      name: 'name',
      title: 'Nome',
      type: 'string',
      validation: Rule => Rule.required().error('O nome é obrigatório')
    },
    {
      name: 'profilePicture',
      title: 'Foto de Perfil',
      type: 'image'
    },
    {
      name: 'socialNetworks',
      title: 'Redes Sociais',
      type: 'array',
      of: [
        {
          name: 'socialNetwork',
          title: 'Rede Social',
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Nome',
              type: 'string',
              validation: Rule => Rule.required().error('O nome da rede social é obrigatório')
            },
            {
              name: 'url',
              title: 'URL',
              type: 'url',
              validation: Rule => [
                Rule.required().error('A URL da rede social é obrigatória'),
                Rule.uri({ scheme: ['http', 'https'] }).error('A URL da rede social deve iniciar com "http" ou "https"')
              ]
            }
          ]
        }
      ]
    }
  ]
}
