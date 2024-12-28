// import { createClient } from 'next-sanity'
import { createClient } from '@sanity/client';

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
  token: process.env.SANITY_AUTH_TOKEN,

})
