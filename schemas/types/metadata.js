export default {
  name: 'metadata',
  title: 'Metadados',
  type: 'document',
  fields: [
    {
      name: 'locale',
      title: 'Localidade',
      type: 'string',
      options: {
        list: [
          { title: 'Português', value: 'pt-BR' },
          { title: 'Inglês', value: 'en-US' },
          { title: 'Espanhol', value: 'es-ES' }
        ]
      },
      validation: Rule => Rule.required().error('A localidade é obrigatória')
    },
    {
      name: 'organization',
      title: 'Organização',
      type: 'string',
      validation: Rule => Rule.required().error('A organização é obrigatória')
    },
    {
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: Rule => [
        Rule.required().error('O título é obrigatório'),
        Rule.max(60).warning('O título ideal deve conter no máximo 60 caracteres')
      ]
    },
    {
      name: 'description',
      title: 'Descrição',
      type: 'text',
      rows: 2,
      validation: Rule => [
        Rule.required().error('A descrição é obrigatória'),
        Rule.min(50).warning('A descrição ideal deve conter no mínimo 50 caracteres'),
        Rule.max(160).warning('A descrição ideal deve conter no máximo 160 caracteres')
      ]
    },
    {
      name: 'url',
      title: 'URL',
      type: 'string',
      validation: Rule => [
        Rule.required().error('A URL é obrigatória'),
        Rule.uri({
          scheme: ['http', 'https']
        }).error('A URL deve iniciar com "http" ou "https"')
      ]
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      validation: Rule => Rule.required().error('A logo é obrigatória')
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: Rule => Rule.required().error('O email é obrigatório')
    },
    {
      name: 'phone',
      title: 'Telefone',
      type: 'string',
      validation: Rule => Rule.required().error('O telefone é obrigatório')
    }
  ]
}
