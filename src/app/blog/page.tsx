import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata } from '@/lib/metadata'
import { site } from '@/data/site'
import { getAllPosts } from '@/lib/blog'

export const metadata: Metadata = buildMetadata({
  title: 'Concrete Tips & Resources',
  description:
    'Concrete tips, cost guides, and resources for Dallas homeowners. Learn about driveways, patios, foundations, and more from Dallas Concrete Pros.',
  canonical: `${site.baseUrl}/blog`,
})

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <>
      <section className="bg-brand-charcoal text-white py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Concrete Tips & Resources for Dallas Homeowners
          </h1>
          <p className="text-lg text-brand-gray-mid mt-4">
            Guides, cost breakdowns, and expert advice for your next concrete
            project.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          {posts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-brand-gray text-lg">
                Blog posts coming soon. Check back for concrete tips, cost
                guides, and project advice.
              </p>
            </div>
          ) : (
            <div className="space-y-8">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="border-b border-brand-gray-mid/30 pb-8"
                >
                  <Link href={`/blog/${post.slug}`}>
                    <h2 className="text-2xl font-bold text-brand-charcoal hover:text-brand-orange transition-colors">
                      {post.title}
                    </h2>
                  </Link>
                  <p className="text-sm text-brand-gray mt-2">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </p>
                  <p className="text-brand-gray mt-3">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-block mt-3 text-brand-orange font-medium hover:underline"
                  >
                    Read More →
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
