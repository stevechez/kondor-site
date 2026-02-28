export const project = {
  name: 'project',
  title: 'Construction Projects',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Project Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'location',
      title: 'Project Location',
      type: 'string',
      description: 'e.g., Aptos, CA',
    },
    {
  name: 'mainImage',
  title: 'Main Image',
  type: 'image',
  options: { hotspot: true },
  validation: (Rule: any) => Rule.required().error('A project needs at least one photo.'),
},
    {
      name: 'beforeImage',
      title: 'Before Image (Optional)',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'description',
      title: 'Project Details',
      type: 'text',
    },
    {
  name: 'coordinates',
  title: 'Project Coordinates',
  type: 'geopoint',
  description: 'Pin the location on the map for the gallery.'
},
{
  name: 'slug',
  title: 'Slug',
  type: 'slug',
  options: { source: 'title' },
  validation: (Rule: any) => Rule.required(),
}
  ],
};