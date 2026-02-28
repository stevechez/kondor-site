export const hero = {
  name: 'hero',
  title: 'Hero Section',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Main Headline',
      type: 'string',
      initialValue: 'Your Trusted General Contractor in Aptos',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'subtitle',
      title: 'Sub-headline',
      type: 'text',
      rows: 3,
      initialValue: 'Custom homes. Seamless remodels. No hidden costs.',
    },
    {
      name: 'ctaText',
      title: 'Button Text',
      type: 'string',
      initialValue: 'Get a Free Estimate',
    },
    {
      name: 'phoneNumber',
      title: 'Display Phone Number',
      type: 'string',
    },
    {
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
      options: { hotspot: true },
    },
  ],
};