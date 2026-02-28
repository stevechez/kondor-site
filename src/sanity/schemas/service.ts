export const service = {
  name: 'service',
  title: 'Services',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Service Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Short Description',
      type: 'text',
      rows: 3,
      validation: (Rule: any) => Rule.max(150).warning('Keep it brief for the grid layout.'),
    },
    {
      name: 'icon',
      title: 'Icon Type',
      type: 'string',
      options: {
        list: [
          { title: 'Hammer (General)', value: 'hammer' },
          { title: 'Paintbrush (Remodel)', value: 'paintbrush' },
          { title: 'Home (Addition)', value: 'home' },
          { title: 'Ruler (Design)', value: 'ruler' },
        ],
      },
      initialValue: 'hammer',
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first.',
    },
  ],
};