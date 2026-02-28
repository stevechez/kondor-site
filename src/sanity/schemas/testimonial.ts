export default {
  name: 'testimonial',
  title: 'Testimonials',
  type: 'document',
  fields: [
    {
      name: 'author',
      title: 'Client Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'location',
      title: 'Project Location (e.g. Aptos)',
      type: 'string',
    },
    {
      name: 'quote',
      title: 'Review/Quote',
      type: 'text',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'rating',
      title: 'Star Rating',
      type: 'number',
      options: {
        list: [5, 4, 3, 2, 1],
      },
      initialValue: 5,
    },
  ],
};