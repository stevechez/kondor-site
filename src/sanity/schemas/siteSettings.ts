export const siteSettings = {
  name: 'siteSettings',
  title: 'Company Information',
  type: 'document',
  // This makes the document a "singleton" (only one can exist) 
  // when paired with the structureTool configuration
  fields: [
    {
      name: 'companyName',
      title: 'Company Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'licenseNumber',
      title: 'Contractor License #',
      type: 'string',
      description: 'Display your CSLB license for legal compliance.',
    },
    {
      name: 'phoneNumber',
      title: 'Business Phone',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Contact Email',
      type: 'string',
    },
    {
      name: 'address',
      title: 'Business Address',
      type: 'text',
      rows: 3,
    },
    {
      name: 'seoDescription',
      title: 'SEO Site Description',
      type: 'text',
      description: 'The description that appears in Google search results.',
      validation: (Rule: any) => Rule.max(160),
    }
  ],
};