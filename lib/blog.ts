import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog')

export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  author: string
  tags: string[]
  content: string
  readingTime: number
}

function calculateReadingTime(content: string): number {
  const wordsPerMinute = 230
  const words = content.trim().split(/\s+/).length
  return Math.ceil(words / wordsPerMinute)
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return []

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.mdx'))

  const posts = files.map((filename) => {
    const filePath = path.join(BLOG_DIR, filename)
    const raw = fs.readFileSync(filePath, 'utf-8')
    const { data, content } = matter(raw)

    return {
      slug: data.slug || filename.replace(/\.mdx$/, ''),
      title: data.title || '',
      description: data.description || '',
      date: data.date || '',
      author: data.author || 'Handshake Team',
      tags: data.tags || [],
      content,
      readingTime: calculateReadingTime(content),
    }
  })

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostBySlug(slug: string): BlogPost | null {
  const posts = getAllPosts()
  return posts.find((p) => p.slug === slug) || null
}

export function getRelatedPosts(currentSlug: string, limit = 3): BlogPost[] {
  const current = getPostBySlug(currentSlug)
  if (!current) return []

  const all = getAllPosts().filter((p) => p.slug !== currentSlug)

  // Score by shared tags
  const scored = all.map((post) => {
    const shared = post.tags.filter((t) => current.tags.includes(t)).length
    return { post, score: shared }
  })

  scored.sort((a, b) => b.score - a.score)
  return scored.slice(0, limit).map((s) => s.post)
}

export function getAllSlugs(): string[] {
  return getAllPosts().map((p) => p.slug)
}
