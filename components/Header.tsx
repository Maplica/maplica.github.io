import Link from 'next/link'

export default function Header() {
  return (
    <header className="w-full border-b bg-white">
      <nav className="max-w-4xl mx-auto p-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-xl font-semibold">
          <img src="/Mauno.svg" alt="Maplica logo" className="h-8 w-8" />
          <span>Maplica</span>
        </Link>
        <div className="space-x-4">
          <Link href="/">Etusivu</Link>
          <Link href="/solutions">Ratkaisut</Link>
          <Link href="/blog">Blogi</Link>
        </div>
      </nav>
    </header>
  )
}
