import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'

const solutionsDirectory = path.join(process.cwd(), 'content', 'solutions')

export type SolutionMeta = {
  title: string
  description: string
  icon?: string
}

export function getSortedSolutionsData(){
  if (!fs.existsSync(solutionsDirectory)) {
    return []
  }
  const fileNames = fs.readdirSync(solutionsDirectory)
  const allSolutions = fileNames.map((fileName: string) => {
    const slug = fileName.replace(/\.(md|mdx)$/, '')
    const fullPath = path.join(solutionsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)
    return {
      slug,
      ...(matterResult.data as SolutionMeta)
    }
  })
  return allSolutions
}

export function getAllSolutionIds(){
  if (!fs.existsSync(solutionsDirectory)) {
    return []
  }
  const fileNames = fs.readdirSync(solutionsDirectory)
  return fileNames.map((fileName: string) => ({ params: { slug: fileName.replace(/\.(md|mdx)$/, '') } }))
}

export async function getSolutionData(slug: string){
  const mdxPath = path.join(solutionsDirectory, `${slug}.mdx`)
  const mdPath = path.join(solutionsDirectory, `${slug}.md`)
  let fullPath = ''
  if (fs.existsSync(mdxPath)) fullPath = mdxPath
  else if (fs.existsSync(mdPath)) fullPath = mdPath
  else throw new Error(`Solution not found for slug: ${slug}`)

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const matterResult = matter(fileContents)

  const mdxSource = await serialize(matterResult.content, { scope: matterResult.data })

  return {
    slug,
    mdxSource,
    ...(matterResult.data as SolutionMeta)
  }
}
