import Link from 'next/link'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-200/60 shadow-sm">
      <nav className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 text-xl font-bold tracking-tight hover:opacity-80 transition-opacity">
          <img src="/Mauno.svg" alt="Maplica logo" className="h-9 w-9" />
          <span className="bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent">Maplica</span>
        </Link>
        <div className="flex items-center gap-6 text-sm font-medium text-gray-600">
          <Link href="/" className="hover:text-blue-600 transition-colors">Etusivu</Link>
          <Link href="/solutions" className="hover:text-blue-600 transition-colors">Ratkaisut</Link>
          <Link href="/blog" className="hover:text-blue-600 transition-colors">Blogi</Link>
        </div>
      </nav>
    </header>
  )
}
