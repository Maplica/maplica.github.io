import Link from 'next/link'
import { getSortedPostsData } from '../../lib/posts'

export async function getStaticProps(){
  const posts = getSortedPostsData()
  return { props: { posts } }
}

export default function Blog({ posts }: { posts: any[] }){
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Blogi</h1>
      <ul className="space-y-4">
        {posts.map(post => (
          <li key={post.slug} className="p-4 bg-white rounded shadow-sm">
            <Link href={`/blog/${post.slug}`} className="text-xl font-semibold">{post.title}</Link>
            <div className="text-sm text-gray-500">{post.date}</div>
            <p className="mt-2 text-gray-700">{post.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
