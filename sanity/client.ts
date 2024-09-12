import { createClient } from 'next-sanity'
import createImageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export const client = createClient({
    projectId: "effpp5ax",
    dataset: "production",
    apiVersion: "2022-03-07",
    useCdn: true,
});


// https://www.sanity.io/docs/image-url
const builder = createImageUrlBuilder(client)

export const urlFor = (source: SanityImageSource | any) => {
  return builder.image(source)
}




