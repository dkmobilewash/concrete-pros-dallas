import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getAllPosts, getPostBySlug } from '@/lib/blog'
import { site } from '@/data/site'
import { buildMetadata } from '@/lib/metadata'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { BreadcrumbNav } from '@/components/ui/BreadcrumbNav'
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema'

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }))
}

export function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Metadata {
  const post = getPostBySlug(params.slug)
  if (!post) return {}
  return buildMetadata({
    title: post.title,
    description: post.description,
    canonical: `${site.baseUrl}/blog/${post.slug}`,
  })
}

export default function BlogPostPage({
  params,
}: {
  params: { slug: string }
}) {
  const post = getPostBySlug(params.slug)
  if (!post) notFound()

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog' },
    { label: post.title },
  ]

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: site.baseUrl },
          { name: 'Blog', url: `${site.baseUrl}/blog` },
          { name: post.title, url: `${site.baseUrl}/blog/${post.slug}` },
        ]}
      />

      <section className="bg-brand-charcoal text-white py-6">
        <div className="max-w-4xl mx-auto px-4">
          <BreadcrumbNav items={breadcrumbItems} />
        </div>
      </section>

      <article className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          <header className="mb-10">
            <h1 className="text-3xl md:text-4xl font-extrabold text-brand-charcoal">
              {post.title}
            </h1>
            <p className="text-brand-gray mt-3">
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
          </header>

          <div className="prose prose-lg max-w-none prose-headings:text-brand-charcoal prose-a:text-brand-orange">
            <MDXRemote source={post.content} />
          </div>
        </div>
      </article>
    </>
  )
}
