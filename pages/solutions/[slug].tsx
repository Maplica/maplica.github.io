import { getAllSolutionIds, getSolutionData } from '../../lib/solutions'
import { MDXRemote } from 'next-mdx-remote'
import Link from 'next/link'

export async function getStaticPaths() {
  const ids = getAllSolutionIds()
  return {
    paths: ids,
    fallback: false,
  }
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const solutionData = await getSolutionData(params.slug)
  return {
    props: {
      solutionData,
    },
  }
}

type Props = {
  solutionData: {
    slug: string
    title: string
    description: string
    icon?: string
    mdxSource: any
  }
}

export default function Solution({ solutionData }: Props) {
  return (
    <article className="max-w-2xl mx-auto px-4 py-12">
      <Link href="/" className="text-blue-600 hover:text-blue-800 mb-6 inline-block">← Back to home</Link>
      
      <div className="mb-8">
        <div className="text-5xl mb-3">{solutionData.icon || '💡'}</div>
        <h1 className="text-4xl font-bold mb-2">{solutionData.title}</h1>
        <p className="text-lg text-gray-600">{solutionData.description}</p>
      </div>

      <div className="prose max-w-none">
        <MDXRemote {...solutionData.mdxSource} />
      </div>
    </article>
  )
}
