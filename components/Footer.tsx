export default function Footer(){
  const year = new Date().getFullYear()
  return (
    <footer className="w-full border-t mt-12 bg-white">
      <div className="max-w-4xl mx-auto p-4 text-sm text-gray-600 flex items-center gap-2">
        <span className="whitespace-nowrap">© {year} </span>
        <img src="/logo.svg" alt="Maplica logo" className="h-5 w-5 object-contain inline-block" />
        <span>Maplica, <a href="mailto:contact.maplica@gmail.com">contact.maplica@gmail.com</a></span>
      </div>
    </footer>
  )
}
