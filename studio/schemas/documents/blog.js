import { format } from 'date-fns';
import { GiNotebook } from 'react-icons/gi';

export default {
  title: 'Blog Post',
  name: 'blog',
  type: 'document',
  icon: GiNotebook,
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      title: 'Published At',
      name: 'publishedAt',
      type: 'datetime',
    },
    {
      title: 'Cover Image',
      name: 'coverImage',
      type: 'customImage',
    },
    {
      title: 'Blog Body',
      name: 'body',
      type: 'bodyText',
    },
    {
      title: 'Poster',
      name: 'poster',
      type: 'image',
      options: {
        hotspot: true, // <-- Defaults to false
      },
      fields: [
        {
          name: 'alternative_text',
          type: 'string',
          title: 'ALT TEXT',
          validation: (Rule) =>
            Rule.error("Alt text can't be empty").required(),
          options: {
            isHighlighted: true, // <-- make this field easily accessible
          },
        },
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
          options: {
            isHighlighted: true, // <-- make this field easily accessible
          },
        },
      ],
    },
  ],
  preview: {
    select: {
      image: 'coverImage',
      title: 'name',
      publishedAt: 'publishedAt',
    },
    prepare({ image, title, publishedAt }) {
      return {
        title,
        media: image,
        subtitle: publishedAt
          ? format(new Date(publishedAt), 'p,dd/MM/yyyy')
          : '',
      };
    },
  },
};
