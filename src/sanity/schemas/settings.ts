export default {
  name: 'settings',
  title: 'Site Settings (SEO)',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Site Meta Title',
      type: 'string',
      description: 'The title shown in Google search results (e.g., "Best General Contractor in Aptos").',
      validation: (Rule: any) => Rule.max(60).warning('Keep under 60 characters for Google.'),
    },
    {
      name: 'description',
      title: 'Site Meta Description',
      type: 'text',
      rows: 3,
      description: 'The short summary shown under your link in search results.',
      validation: (Rule: any) => Rule.max(160).warning('Keep under 160 characters.'),
    },
    {
      name: 'ogImage',
      title: 'Social Share Image',
      type: 'image',
      description: 'The image shown when the site is shared on Facebook or via text message.',
    },
  ],
};