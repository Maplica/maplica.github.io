import Link from 'next/link'
import Team from '../components/Team'
import Solutions from '../components/Solutions'
import { getSortedSolutionsData, SolutionMeta } from '../lib/solutions'

type HomeProps = {
  solutions: (SolutionMeta & { slug: string })[]
}

const pillars = [
  {
    icon: '🗺️',
    title: 'Paikkatiedon asiantuntijuus',
    description: 'Yhdistämme paikkatiedon, data-analytiikan ja kuntakentän tuntemuksen käytännön ratkaisuiksi.',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: '🔒',
    title: 'Avoin ja läpinäkyvä teknologia',
    description: 'Ratkaisumme perustuvat avoimiin teknologioihin — ei toimittajalukkoja, täysi hallinta sinulle.',
    color: 'from-emerald-500 to-emerald-600',
  },
  {
    icon: '🤝',
    title: 'Yhteistyössä asiakkaiden kanssa',
    description: 'Kehitämme työkaluja yhdessä käyttäjien kanssa, jotta lopputulos vastaa todelliseen tarpeeseen.',
    color: 'from-amber-500 to-amber-600',
  },
]

export default function Home({ solutions }: HomeProps){
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative -mt-6 -mx-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800" />
        <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: 'radial-gradient(circle, white 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }} />

        <div className="relative max-w-6xl mx-auto px-6 py-20 sm:py-28 flex flex-col sm:flex-row items-center gap-10">
          {/* Text */}
          <div className="flex-1 text-center sm:text-left animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-5 leading-tight">
              Paikkatietoa.<br />Ratkaisuja.<br />Vaikuttavuutta.
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 max-w-lg mb-8 leading-relaxed">
              Autamme kuntia ja organisaatioita hyödyntämään paikkatietoa arjen päätöksenteossa.
            </p>
            <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
              <Link href="/solutions" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg shadow-lg shadow-blue-900/20 hover:shadow-xl hover:scale-[1.02] transition-all">
                Ratkaisumme →
              </Link>
              <a href="mailto:contact.maplica@gmail.com" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-blue-300 text-blue-100 font-medium rounded-lg hover:bg-white/10 transition-all">
                Ota yhteyttä
              </a>
            </div>
          </div>

          {/* Mascot */}
          <div className="shrink-0 animate-fade-in-up" style={{ animationDelay: '150ms' }}>
            <div className="relative">
              <div className="absolute inset-0 bg-white/20 rounded-full blur-3xl scale-110" />
              <img
                src="/Mauno.svg"
                alt="Mauno-maskotti"
                className="relative w-40 h-40 sm:w-52 sm:h-52 lg:w-64 lg:h-64 drop-shadow-2xl hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path d="M0 80V30C240 60 480 0 720 20C960 40 1200 10 1440 40V80H0Z" fill="#F9FAFB" />
          </svg>
        </div>
      </section>

      {/* ── Value Proposition ── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-3 tracking-tight">Miksi Maplica?</h2>
          <p className="text-gray-500 text-center mb-12 max-w-xl mx-auto">Yhdistämme teknologian ja toimialaosaamisen — tuloksena ratkaisuja, jotka toimivat.</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {pillars.map((p) => (
              <div key={p.title} className="group text-center animate-fade-in-up">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${p.color} text-3xl mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {p.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="bg-gray-50">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 60V20C360 50 720 0 1080 30C1260 45 1380 25 1440 35V60H0Z" fill="white" />
        </svg>
      </div>

      {/* Solutions section */}
      <Solutions solutions={solutions} />

      {/* Divider */}
      <div className="bg-white">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 60V20C360 50 720 0 1080 30C1260 45 1380 25 1440 35V60H0Z" fill="#F9FAFB" />
        </svg>
      </div>

      {/* Team section */}
      <Team />

      {/* ── CTA Banner ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-700" />
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

        <div className="relative max-w-4xl mx-auto px-6 py-14 flex flex-col sm:flex-row items-center gap-8">
          <div className="shrink-0">
            <img src="/Mauno.svg" alt="Mauno" className="w-20 h-20 drop-shadow-lg hover:scale-105 transition-transform" />
          </div>
          <div className="flex-1 text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Kiinnostuitko?</h3>
            <p className="text-blue-100 text-sm sm:text-base">Ota yhteyttä ja keskustellaan, miten voimme auttaa organisaatiotasi.</p>
          </div>
          <a href="mailto:contact.maplica@gmail.com" className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-blue-700 font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all shrink-0">
            📬 Ota yhteyttä
          </a>
        </div>
      </section>
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
