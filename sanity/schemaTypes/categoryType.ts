import {TagIcon} from '@sanity/icons'
import { Subtitles } from 'lucide-react'
import { title } from 'process'
import {defineField, defineType} from 'sanity'

export const categoryType = defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  icon: TagIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    }),
    defineField({
      name: 'description',
      type: 'text',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      Subtitle : 'description',
    }
  }
})
