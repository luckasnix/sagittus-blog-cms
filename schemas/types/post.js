export default {
  name: 'post',
  title: 'Postagem',
  type: 'document',
  fields: [
    {
      name: 'locale',
      title: 'Localidade',
      type: 'string',
      options: {
        list: [
          { title: 'Inglês', value: 'en-US' },
          { title: 'Português', value: 'pt-BR' }
        ]
      },
      validation: Rule => Rule.required().error('A localidade é obrigatória')
    },
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
      name: 'date',
      title: 'Data',
      type: 'date',
      validation: Rule => Rule.required().error('A data é obrigatória')
    },
    {
      name: 'coverImage',
      title: 'Imagem de Capa',
      type: 'image',
      validation: Rule => Rule.required().error('A imagem de capa é obrigatória')
    },
    {
      name: 'content',
      title: 'Conteúdo',
      type: 'array',
      of: [
        {
          type: 'block'
        },
        {
          title: 'Imagem',
          type: 'image',
          fields: [
            {
              name: 'caption',
              title: 'Legenda',
              type: 'string',
              validation: Rule => Rule.required().error('A legenda da imagem é obrigatória')
            }
          ]
        }
      ],
      validation: Rule => Rule.required().error('O conteúdo é obrigatório')
    },
    {
      name: 'author',
      title: 'Autor',
      type: 'reference',
      to: [
        {
          type: 'author'
        }
      ]
    },
    {
      name: 'category',
      title: 'Categoria',
      type: 'reference',
      to: [
        {
          type: 'category'
        }
      ]
    }
  ]
}
