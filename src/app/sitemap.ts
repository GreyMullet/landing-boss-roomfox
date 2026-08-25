import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap{
    return [
      {
        url: 'https://present-boss.roomfox.ru',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 1,
      },
      {
        url: 'https://present-boss.roomfox.ru/blog',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      },
    ]
}