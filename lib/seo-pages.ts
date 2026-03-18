import fs from 'fs'
import path from 'path'

const CONTENT_DIR = path.join(process.cwd(), 'content')

export interface ComparisonPage {
  slug: string
  competitor: string
  competitorUrl: string
  title: string
  description: string
  lastUpdated: string
  sections: {
    overview: { handshake: string; competitor: string }
    featureComparison: Array<{
      feature: string
      handshake: string
      competitor: string
      winner: 'handshake' | 'competitor' | 'tie'
    }>
    handshakeWins: string
    competitorWins: string
    whoShouldChooseHandshake: string
    whoShouldChooseCompetitor: string
    verdict: string
  }
  faqs: Array<{ question: string; answer: string }>
  relatedPages: RelatedPages
}

export interface GuidePage {
  slug: string
  title: string
  description: string
  lastUpdated: string
  sections: {
    intro: { title: string; content: string }
    steps: Array<{ title: string; content: string }>
    mistakes: { title: string; items: string[] }
    automation: { title: string; content: string }
  }
  faqs: Array<{ question: string; answer: string }>
  relatedPages: RelatedPages
}

export interface TemplatePage {
  slug: string
  title: string
  description: string
  lastUpdated: string
  sections: {
    intro: { title: string; content: string }
    templates: Array<{
      name: string
      text: string
      whenToUse: string
      expectedPerformance: string
      personalizationTips: string
    }>
    customization: { title: string; content: string }
    sendingAtScale: { title: string; content: string }
  }
  faqs: Array<{ question: string; answer: string }>
  relatedPages: RelatedPages
}

export interface UseCasePage {
  slug: string
  industry: string
  title: string
  description: string
  lastUpdated: string
  sections: {
    whyAutomation: { title: string; content: string }
    outreachStrategies: { title: string; content: string }
    howHandshakeHelps: { title: string; content: string }
    metrics: {
      title: string
      benchmarks: Array<{ metric: string; benchmark: string; notes: string }>
    }
  }
  faqs: Array<{ question: string; answer: string }>
  relatedPages: RelatedPages
}

interface RelatedPages {
  guides: string[]
  templates: string[]
  comparisons: string[]
  useCases: string[]
}

function loadJsonFiles<T>(subdir: string): T[] {
  const dir = path.join(CONTENT_DIR, subdir)
  if (!fs.existsSync(dir)) return []
  const files = fs.readdirSync(dir).filter((f) => f.endsWith('.json'))
  return files.map((filename) => {
    const filePath = path.join(dir, filename)
    const raw = fs.readFileSync(filePath, 'utf-8')
    return JSON.parse(raw) as T
  })
}

function loadJsonBySlug<T>(subdir: string, slug: string): T | null {
  const filePath = path.join(CONTENT_DIR, subdir, `${slug}.json`)
  if (!fs.existsSync(filePath)) return null
  const raw = fs.readFileSync(filePath, 'utf-8')
  return JSON.parse(raw) as T
}

// Comparison pages
export function getAllComparisons(): ComparisonPage[] {
  return loadJsonFiles<ComparisonPage>('compare')
}

export function getComparisonBySlug(slug: string): ComparisonPage | null {
  return loadJsonBySlug<ComparisonPage>('compare', slug)
}

export function getAllComparisonSlugs(): string[] {
  return getAllComparisons().map((p) => p.slug)
}

// Guide pages
export function getAllGuides(): GuidePage[] {
  return loadJsonFiles<GuidePage>('guides')
}

export function getGuideBySlug(slug: string): GuidePage | null {
  return loadJsonBySlug<GuidePage>('guides', slug)
}

export function getAllGuideSlugs(): string[] {
  return getAllGuides().map((p) => p.slug)
}

// Template pages
export function getAllTemplates(): TemplatePage[] {
  return loadJsonFiles<TemplatePage>('templates')
}

export function getTemplateBySlug(slug: string): TemplatePage | null {
  return loadJsonBySlug<TemplatePage>('templates', slug)
}

export function getAllTemplateSlugs(): string[] {
  return getAllTemplates().map((p) => p.slug)
}

// Use case pages
export function getAllUseCases(): UseCasePage[] {
  return loadJsonFiles<UseCasePage>('use-cases')
}

export function getUseCaseBySlug(slug: string): UseCasePage | null {
  return loadJsonBySlug<UseCasePage>('use-cases', slug)
}

export function getAllUseCaseSlugs(): string[] {
  return getAllUseCases().map((p) => p.slug)
}

// Helper to calculate reading time from content
export function calculateReadingTime(text: string): number {
  const wordsPerMinute = 230
  const words = text.trim().split(/\s+/).length
  return Math.ceil(words / wordsPerMinute)
}

// Helper to format a slug into a readable title
export function slugToTitle(slug: string): string {
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}
