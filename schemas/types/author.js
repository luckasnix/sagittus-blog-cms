export default {
  name: 'author',
  title: 'Autor',
  type: 'document',
  fields: [
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug'
    },
    {
      name: 'name',
      title: 'Nome',
      type: 'string'
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
              type: 'string'
            },
            {
              name: 'url',
              title: 'URL',
              type: 'string'
            }
          ]
        }
      ]
    }
  ]
}
