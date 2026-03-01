import Link from 'next/link'
import { SolutionMeta } from '../lib/solutions'

type Solution = {
  slug: string
} & SolutionMeta

type SolutionsProps = {
  solutions: Solution[]
}

const iconColors: Record<string, string> = {
  '🏢': 'from-blue-500 to-indigo-600',
  '💡': 'from-amber-400 to-orange-500',
}

export default function Solutions({ solutions }: SolutionsProps){
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-3 tracking-tight">Ratkaisumme</h2>
        <p className="text-center text-gray-500 mb-12 max-w-xl mx-auto">Rakennettu yhdessä käyttäjien kanssa.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((sol) => {
            const gradient = iconColors[sol.icon || '💡'] || 'from-gray-400 to-gray-500'
            return (
              <Link href={`/solutions/${sol.slug}`} key={sol.slug} className="group block">
                <div className="relative bg-white rounded-2xl border border-gray-100 p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                  {/* Accent bar */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  
                  {/* Icon with gradient background */}
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${gradient} text-2xl mb-5 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                    {sol.icon || '💡'}
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-700 transition-colors">{sol.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{sol.description}</p>
                  <span className="inline-flex items-center gap-1 text-blue-600 text-sm font-medium group-hover:gap-2 transition-all">
                    Lue lisää
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
                  </span>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
