'use client';

import { NextStudio } from 'next-sanity/studio';
import config from '../../../../sanity.config';

export default function StudioPage() {
  // This renders the entire Sanity CMS admin interface 
  // at yourdomain.com/studio
  return <NextStudio config={config} />;
}