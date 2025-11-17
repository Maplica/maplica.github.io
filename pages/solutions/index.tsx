import Link from 'next/link'
import { getSortedSolutionsData } from '../../lib/solutions'

export async function getStaticProps(){
  const solutions = getSortedSolutionsData()
  return { props: { solutions } }
}

export default function SolutionsPage({ solutions }: { solutions: any[] }){
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-2">Ratkaisumme</h1>
      <p className="text-gray-600 mb-8">Tällaista olemme tehneet. Pyrimme jatkuvasti kehittämään näitä ideoita, sekä ratkaisemaan uusia haasteita!</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {solutions.map(solution => (
          <Link key={solution.slug} href={`/solutions/${solution.slug}`}>
            <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-lg transition cursor-pointer">
              <div className="text-4xl mb-3">{solution.icon || '💡'}</div>
              <h2 className="text-xl font-semibold mb-2">{solution.title}</h2>
              <p className="text-gray-600 text-sm mb-4">{solution.description}</p>
              <span className="text-blue-600 font-medium">Learn more →</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
