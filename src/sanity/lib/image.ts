import createImageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { dataset, projectId } from '../env';

// Create image URL builder instance
const builder = createImageUrlBuilder({ projectId, dataset });

// urlFor function that generates the image URL from Sanity image source
export const urlFor = (source: SanityImageSource) => {
  // Return image URL with optional transformations (you can adjust width/height as needed)
  return builder.image(source).auto('format').fit('max').width(500).url();
};
