import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'src/content/blog')

export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  excerpt: string
  content: string
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(postsDirectory)) return []
  const files = fs.readdirSync(postsDirectory).filter(f => f.endsWith('.mdx'))
  const posts = files.map(filename => {
    const slug = filename.replace(/\.mdx$/, '')
    const filePath = path.join(postsDirectory, filename)
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data, content } = matter(fileContents)
    return {
      slug,
      title: data.title || '',
      description: data.description || '',
      date: data.date || '',
      excerpt: data.excerpt || '',
      content,
    }
  })
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  const posts = getAllPosts()
  return posts.find(p => p.slug === slug)
}
