import Link from 'next/link'
import Team from '../components/Team'
import Solutions from '../components/Solutions'
import { getSortedSolutionsData, SolutionMeta } from '../lib/solutions'

type HomeProps = {
  solutions: (SolutionMeta & { slug: string })[]
}

export default function Home({ solutions }: HomeProps){
  return (
    <>
      <section className="text-center py-12">
        <h1 className="text-4xl font-extrabold mb-4">Maplica</h1>
        <p className="text-lg text-gray-700 mb-6">Ratkaisuja ongelmiin.</p>
        <div className="space-x-4">
          <Link href="/blog" className="inline-block px-5 py-3 bg-blue-600 text-white rounded">Blogitekstit</Link>
          <a href="#contact" className="inline-block px-5 py-3 border rounded">Ota yhteyttä</a>
        </div>
      </section>

      {/* Solutions section */}
      <Solutions solutions={solutions} />

      {/* Team section */}
      <Team />
    </>
  )
}

export function getStaticProps() {
  const solutions = getSortedSolutionsData()
  return {
    props: {
      solutions,
    },
  }
}
