import {defineField, defineType} from 'sanity'

export const profileType = defineType({
  name: 'profile',
  title: 'Profile',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'headline',
      title: 'Hero Headline',
      type: 'string',
      description: 'e.g. "I\'M ANDIKA"'
    }),
    defineField({
      name: 'subHeadline',
      title: 'Sub Headline',
      type: 'string',
      description: 'e.g. "Passionate full-stack developer dedicated to..."'
    }),
    defineField({
      name: 'profileImage',
      title: 'Profile Image',
      type: 'image',
      options: {
        hotspot: true,
      }
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
    }),
    defineField({
      name: 'resumeURL',
      title: 'Resume Link (Download CV)',
      type: 'url',
    }),
    defineField({
        name: 'socialLinks',
        title: 'Social Links',
        type: 'object',
        fields: [
            defineField({ name: 'github', type: 'url' }),
            defineField({ name: 'linkedin', type: 'url' }),
            defineField({ name: 'instagram', type: 'url' }),
        ]
    }),
    defineField({
      name: 'stats',
      title: 'Stats (Experience, Projects, etc)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'label', type: 'string' }),
            defineField({ name: 'value', type: 'string' }),
          ]
        }
      ]
    })
  ],
})
