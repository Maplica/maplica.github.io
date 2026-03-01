import Link from 'next/link'
import { getSortedPostsData } from '../../lib/posts'

export async function getStaticProps(){
  const posts = getSortedPostsData()
  return { props: { posts } }
}

export default function Blog({ posts }: { posts: any[] }){
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800" />
        <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: 'radial-gradient(circle, white 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }} />

        <div className="relative max-w-6xl mx-auto px-6 py-16 sm:py-20">
          <Link href="/" className="inline-flex items-center gap-1.5 text-blue-200 hover:text-white text-sm mb-8 transition-colors">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
            Etusivu
          </Link>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Blogi
          </h1>
          <p className="text-lg sm:text-xl text-blue-100 max-w-2xl leading-relaxed">
            Ajatuksia, oppeja ja näkökulmia paikkatiedon maailmasta.
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path d="M0 80V30C240 60 480 0 720 20C960 40 1200 10 1440 40V80H0Z" fill="#F9FAFB" />
          </svg>
        </div>
      </section>

      {/* ── Posts ── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6">
          <div className="space-y-6">
            {posts.map(post => (
              <Link href={`/blog/${post.slug}`} key={post.slug} className="group block">
                <article className="relative bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 shadow-sm hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 overflow-hidden">
                  {/* Accent bar */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="flex items-center gap-3 mb-3">
                    <time className="text-xs font-medium text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full">{post.date}</time>
                  </div>
                  <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-700 transition-colors">{post.title}</h2>
                  {post.description && (
                    <p className="text-gray-600 text-sm leading-relaxed mb-3">{post.description}</p>
                  )}
                  <span className="inline-flex items-center gap-1 text-blue-600 text-sm font-medium group-hover:gap-2 transition-all">
                    Lue lisää
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
                  </span>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
