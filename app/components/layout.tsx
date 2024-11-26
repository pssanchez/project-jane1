import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <div className="min-h-screen bg-white">
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/uploads/logo.svg"
                alt="Jane Logo"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
          </div>
          
          <nav className="flex items-center gap-8">
            <Link 
              href="/" 
              className={`text-lg ${pathname === '/' ? 'text-[#E4A853]' : 'text-black'}`}
            >
              HOME
            </Link>
            <Link 
              href="/faq" 
              className={`text-lg ${pathname === '/faq' ? 'text-[#E4A853]' : 'text-black'}`}
            >
              FAQ
            </Link>
            <Link 
              href="/more" 
              className={`text-lg ${pathname === '/more' ? 'text-[#E4A853]' : 'text-black'}`}
            >
              MORE
            </Link>
          </nav>

          <div className="flex items-center gap-6">
            <Link 
              href="https://twitter.com/jane"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-gray-700 hover:text-gray-900"
            >
              TWITTER/X
            </Link>
            <Link 
              href="https://t.me/jane"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-gray-700 hover:text-gray-900"
            >
              TELEGRAM
            </Link>
          </div>
        </div>
      </header>
      <main className="container mx-auto px-4">
        {children}
      </main>
    </div>
  )
}

