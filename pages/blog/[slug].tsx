import { getAllPostIds, getPostData } from '../../lib/posts'
import { MDXRemote } from 'next-mdx-remote'
import Link from 'next/link'

export async function getStaticPaths(){
  const paths = getAllPostIds()
  return { paths, fallback: false }
}

export async function getStaticProps({ params }: any){
  const postData = await getPostData(params.slug)
  return { props: { postData } }
}

export default function Post({ postData }: any){
  return (
    <>
      {/* ── Hero ── */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800" />
        <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: 'radial-gradient(circle, white 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }} />

        <div className="relative max-w-3xl mx-auto px-6 py-14 sm:py-18">
          <Link href="/blog" className="inline-flex items-center gap-1.5 text-blue-200 hover:text-white text-sm mb-8 transition-colors">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
            Blogi
          </Link>
          <time className="inline-block text-xs font-medium text-blue-200 bg-white/10 px-3 py-1 rounded-full mb-4">{postData.date}</time>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            {postData.title}
          </h1>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path d="M0 60V20C360 50 720 0 1080 30C1260 45 1380 25 1440 35V60H0Z" fill="white" />
          </svg>
        </div>
      </div>

      {/* ── Content ── */}
      <article className="max-w-3xl mx-auto px-6 py-12">
        <div className="prose prose-lg max-w-none prose-headings:tracking-tight prose-headings:font-bold prose-p:text-gray-600 prose-p:leading-relaxed prose-li:text-gray-600 prose-a:text-blue-600 prose-a:font-medium hover:prose-a:text-blue-800 prose-a:transition-colors">
          <MDXRemote {...postData.mdxSource} />
        </div>
      </article>
    </>
  )
}
