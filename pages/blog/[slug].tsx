import { getAllPostIds, getPostData } from '../../lib/posts'
import { MDXRemote } from 'next-mdx-remote'

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
    <article>
      <h1 className="text-3xl font-bold">{postData.title}</h1>
      <div className="text-sm text-gray-500 mb-6">{postData.date}</div>
      <div className="prose max-w-none">
        <MDXRemote {...postData.mdxSource} />
      </div>
    </article>
  )
}
