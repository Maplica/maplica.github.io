import { getAllSolutionIds, getSolutionData } from '../../lib/solutions'
import { MDXRemote } from 'next-mdx-remote'
import Link from 'next/link'
import { ReactNode } from 'react'

export async function getStaticPaths() {
  const ids = getAllSolutionIds()
  return {
    paths: ids,
    fallback: false,
  }
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const solutionData = await getSolutionData(params.slug)
  return {
    props: {
      solutionData,
    },
  }
}

type Props = {
  solutionData: {
    slug: string
    title: string
    description: string
    icon?: string
    mdxSource: any
  }
}

/* ── Custom MDX components for richer styling ── */

function FeatureCard({ icon, title, children }: { icon: string; title: string; children: ReactNode }) {
  return (
    <div className="flex gap-4 p-5 rounded-xl bg-white shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <span className="text-2xl mt-0.5 shrink-0">{icon}</span>
      <div>
        <h4 className="font-semibold text-gray-900 mb-1">{title}</h4>
        <p className="text-gray-600 text-sm leading-relaxed m-0">{children}</p>
      </div>
    </div>
  )
}

function FeatureGrid({ children }: { children: ReactNode }) {
  return <div className="grid gap-4 sm:grid-cols-2 my-8 not-prose">{children}</div>
}

function Highlight({ children }: { children: ReactNode }) {
  return (
    <div className="relative my-10 p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100">
      <div className="prose prose-blue max-w-none prose-p:text-gray-700">{children}</div>
    </div>
  )
}

function CTA({ href, variant = 'primary', children }: { href: string; variant?: 'primary' | 'secondary'; children: ReactNode }) {
  const base = 'inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all text-sm'
  const styles = variant === 'primary'
    ? `${base} bg-blue-600 text-white hover:bg-blue-700 shadow-md shadow-blue-600/20 hover:shadow-lg hover:shadow-blue-600/30`
    : `${base} bg-white text-blue-700 border-2 border-blue-200 hover:border-blue-400 hover:bg-blue-50`
  return <a href={href} target="_blank" rel="noopener noreferrer" className={styles}>{children}</a>
}

function CTAGroup({ children }: { children: ReactNode }) {
  return <div className="flex flex-wrap gap-4 my-8 not-prose">{children}</div>
}

function InfoCard({ icon, children }: { icon?: string; children: ReactNode }) {
  return (
    <div className="flex items-start gap-3 p-4 rounded-lg bg-amber-50 border border-amber-200 my-6 not-prose">
      <span className="text-xl shrink-0">{icon || '💡'}</span>
      <div className="text-sm text-amber-900 leading-relaxed">{children}</div>
    </div>
  )
}

function Steps({ children }: { children: ReactNode }) {
  return <div className="solution-steps my-8">{children}</div>
}

function MascotCTA({ href, children }: { href: string; children: ReactNode }) {
  return (
    <div className="relative my-10 flex flex-col sm:flex-row items-center gap-6 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 border border-blue-100 shadow-sm not-prose overflow-hidden">
      {/* Decorative dots */}
      <div className="absolute top-0 right-0 w-32 h-32 opacity-[0.07]" style={{ backgroundImage: 'radial-gradient(circle, #4f46e5 1.5px, transparent 1.5px)', backgroundSize: '12px 12px' }} />
      
      {/* Mascot */}
      <div className="shrink-0 relative">
        <div className="absolute inset-0 bg-blue-200 rounded-full blur-xl opacity-30 scale-110" />
        <img
          src="/Mauno_Standalone.svg"
          alt="Mauno-maskotti"
          className="relative w-24 h-24 sm:w-28 sm:h-28 drop-shadow-md hover:scale-105 transition-transform"
        />
      </div>

      {/* Text + CTA */}
      <div className="flex-1 text-center sm:text-left">
        <div className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">{children}</div>
        <a
          href={href}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-sm bg-blue-600 text-white hover:bg-blue-700 shadow-md shadow-blue-600/20 hover:shadow-lg hover:shadow-blue-600/30 transition-all"
        >
          📬 Ota yhteyttä pilottiyhteistyöstä
        </a>
      </div>
    </div>
  )
}

const mdxComponents = {
  FeatureCard,
  FeatureGrid,
  Highlight,
  CTA,
  CTAGroup,
  InfoCard,
  Steps,
  MascotCTA,
}

export default function Solution({ solutionData }: Props) {
  return (
    <>
      {/* ── Hero section ── */}
      <div className="relative -mt-6 -mx-6 mb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 25% 50%, white 1px, transparent 1px), radial-gradient(circle at 75% 50%, white 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="relative max-w-3xl mx-auto px-6 py-16 sm:py-20">
          <Link href="/solutions" className="inline-flex items-center gap-1.5 text-blue-200 hover:text-white text-sm mb-8 transition-colors">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
            Ratkaisut
          </Link>
          <div className="text-5xl mb-4">{solutionData.icon || '💡'}</div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 tracking-tight">
            {solutionData.title}
          </h1>
          <p className="text-lg sm:text-xl text-blue-100 max-w-2xl leading-relaxed">
            {solutionData.description}
          </p>
        </div>
      </div>

      {/* ── Content ── */}
      <article className="max-w-3xl mx-auto px-4 pb-16">
        <div className="prose prose-lg max-w-none prose-headings:tracking-tight prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:pb-3 prose-h2:border-b prose-h2:border-gray-200 prose-p:text-gray-600 prose-p:leading-relaxed prose-li:text-gray-600 prose-a:text-blue-600 prose-a:font-medium hover:prose-a:text-blue-800 prose-a:transition-colors">
          <MDXRemote {...solutionData.mdxSource} components={mdxComponents} />
        </div>
      </article>
    </>
  )
}
