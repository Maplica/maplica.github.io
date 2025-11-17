import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'

const postsDirectory = path.join(process.cwd(), 'content', 'posts')

export type PostMeta = {
  title: string
  date: string
  description?: string
}

export function getSortedPostsData(){
  const fileNames = fs.readdirSync(postsDirectory)
  const allPosts = fileNames.map((fileName: string) => {
    const slug = fileName.replace(/\.(md|mdx)$/, '')
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)
    return {
      slug,
      ...(matterResult.data as PostMeta)
    }
  })
  return allPosts.sort((a: any,b: any) => (a.date < b.date ? 1 : -1))
}

export function getAllPostIds(){
  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames.map((fileName: string) => ({ params: { slug: fileName.replace(/\.(md|mdx)$/, '') } }))
}

export async function getPostData(slug: string){
  const mdxPath = path.join(postsDirectory, `${slug}.mdx`)
  const mdPath = path.join(postsDirectory, `${slug}.md`)
  let fullPath = ''
  if (fs.existsSync(mdxPath)) fullPath = mdxPath
  else if (fs.existsSync(mdPath)) fullPath = mdPath
  else throw new Error(`Post not found for slug: ${slug}`)

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const matterResult = matter(fileContents)

  const mdxSource = await serialize(matterResult.content, { scope: matterResult.data })

  return {
    slug,
    mdxSource,
    ...(matterResult.data as PostMeta)
  }
}
