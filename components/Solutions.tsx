import Link from 'next/link'
import { SolutionMeta } from '../lib/solutions'

type Solution = {
  slug: string
} & SolutionMeta

type SolutionsProps = {
  solutions: Solution[]
}

export default function Solutions({ solutions }: SolutionsProps){
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Ratkaisumme</h2>
          {/* <Link href="/solutions" className="text-blue-600 hover:text-blue-800 font-medium">View all →</Link> */}
        </div>
        <p className="text-center text-gray-600 mb-8">Tällaista olemme tehneet.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {solutions.map((sol) => (
            <div key={sol.slug} className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
              <div className="text-4xl mb-3">{sol.icon || '💡'}</div>
              <h3 className="text-xl font-semibold mb-2">{sol.title}</h3>
              <p className="text-gray-600 text-sm">{sol.description}</p>
              <Link href={`/solutions/${sol.slug}`} className="inline-block mt-4 text-blue-600 hover:text-blue-800 text-sm font-medium">Learn more →</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
