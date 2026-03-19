import { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/blog'
import { getAllComparisons, getAllGuides, getAllTemplates, getAllUseCases } from '@/lib/seo-pages'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://byhandshake.com'
  const now = new Date()

  // Core pages
  const corePages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/features`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/pricing`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/affiliate`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/privacy`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/cookies`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/gdpr`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
  ]

  // Hub pages
  const hubPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/compare`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/guides`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/templates`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/use-cases`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/tools`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/tools/linkedin-connection-request-generator`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/tools/linkedin-outreach-roi-calculator`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/tools/linkedin-profile-score`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
  ]

  // Blog posts
  const blogPages: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Comparison pages
  const comparePages: MetadataRoute.Sitemap = getAllComparisons().map((page) => ({
    url: `${baseUrl}/compare/${page.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Guide pages
  const guidePages: MetadataRoute.Sitemap = getAllGuides().map((page) => ({
    url: `${baseUrl}/guides/${page.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Template pages
  const templatePages: MetadataRoute.Sitemap = getAllTemplates().map((page) => ({
    url: `${baseUrl}/templates/${page.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Use case pages
  const useCasePages: MetadataRoute.Sitemap = getAllUseCases().map((page) => ({
    url: `${baseUrl}/use-cases/${page.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [
    ...corePages,
    ...hubPages,
    ...blogPages,
    ...comparePages,
    ...guidePages,
    ...templatePages,
    ...useCasePages,
  ]
}
