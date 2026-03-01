import Link from 'next/link'
import { getSortedSolutionsData } from '../../lib/solutions'

export async function getStaticProps(){
  const solutions = getSortedSolutionsData()
  return { props: { solutions } }
}

const iconColors: Record<string, string> = {
  '🏢': 'from-blue-500 to-indigo-600',
  '💡': 'from-amber-400 to-orange-500',
}

export default function SolutionsPage({ solutions }: { solutions: any[] }){
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800" />
        <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: 'radial-gradient(circle, white 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }} />

        <div className="relative max-w-6xl mx-auto px-6 py-16 sm:py-20">
          <Link href="/" className="inline-flex items-center gap-1.5 text-blue-200 hover:text-white text-sm mb-8 transition-colors">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
            Etusivu
          </Link>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Ratkaisumme
          </h1>
          <p className="text-lg sm:text-xl text-blue-100 max-w-2xl leading-relaxed">
            Kehitämme käytännön työkaluja, jotka ratkaisevat todellisia haasteita — yhdessä käyttäjien kanssa.
          </p>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path d="M0 80V30C240 60 480 0 720 20C960 40 1200 10 1440 40V80H0Z" fill="#F9FAFB" />
          </svg>
        </div>
      </section>

      {/* ── Solution cards ── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution: any) => {
              const gradient = iconColors[solution.icon || '💡'] || 'from-gray-400 to-gray-500'
              return (
                <Link key={solution.slug} href={`/solutions/${solution.slug}`} className="group block">
                  <div className="relative bg-white rounded-2xl border border-gray-100 p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                    {/* Accent bar */}
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                    {/* Icon with gradient background */}
                    <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${gradient} text-2xl mb-5 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                      {solution.icon || '💡'}
                    </div>

                    <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-700 transition-colors">{solution.title}</h2>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{solution.description}</p>
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
    </>
  )
}
