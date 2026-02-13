import {defineField, defineType} from 'sanity'

export const serviceType = defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Service Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'icon',
      title: 'Icon (SVG/PNG)',
      type: 'image',
      options: {
        hotspot: true,
        accept: 'image/svg+xml,image/png,image/jpeg',
      }
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
    })
  ],
})
