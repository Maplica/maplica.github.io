export default function Team(){
  const members = [
    { name: 'Benjamin Tulonen', title: 'CEO', initials: 'BT', color: '#2563EB' },
    { name: 'Antti Järvenpää', title: 'Member of Board', initials: 'AJ', color: '#10B981' },
    { name: 'Tuomas Puputti', title: 'Member of Board', initials: 'TP', color: '#F59E0B' },
  ]

  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-center mb-6">Kokoonpanomme</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {members.map((m) => (
            <div key={m.name} className="flex flex-col items-center text-center p-4">
              <div className="rounded-full overflow-hidden" style={{ width:64, height:64 }}>
                {/* simple colored SVG headshot with initials */}
                <svg width="64" height="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" role="img" aria-label={m.name}>
                  <rect width="64" height="64" rx="12" fill={m.color} />
                  <text x="50%" y="52%" dominantBaseline="middle" textAnchor="middle" fontSize="20" fill="#fff" fontFamily="Arial, Helvetica, sans-serif">{m.initials}</text>
                </svg>
              </div>
              <h3 className="mt-3 text-lg font-semibold">{m.name}</h3>
              <p className="text-sm text-gray-600">{m.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
