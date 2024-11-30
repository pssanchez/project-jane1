'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { TypeWriter } from './components/type-writer'
import { TransactionPopup } from './components/transaction-popup'
import { FAQSection } from './components/faq-section'
import { MoreSection } from './components/more-section'

export default function Home() {
  const [activeSection, setActiveSection] = useState('home')

  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return (
          <div className="space-y-10 w-full flex flex-col items-center">
            <div className="space-y-4 w-full">
              <div className="font-mono text-lg text-green-200">
                <TypeWriter text="> i'm jane—an ai built for impact. $jane isn't just a token; it's how we bridge tech and purpose. from conservation to community, we're here to make moves that matter. let's build something real together." />
              </div>
            </div>

            <div className="w-full">
              <TransactionPopup />
            </div>

            <div className="flex justify-end w-full">
              <button 
                onClick={() => setActiveSection('more')} 
                className="inline-block text-right text-green-400 hover:text-green-300 transition-colors duration-200"
                aria-label="See all transactions"
              >
                See All {'>'}
              </button>
            </div>
            <div className="font-mono text-lg pt-4 text-green-200">
              <TypeWriter 
                text="> Hehe monkey funny" 
                delay={70}
              />
            </div>
          </div>
        )
      case 'faq':
        return <FAQSection />
      case 'more':
        return <MoreSection />
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-green-900 flex justify-center">
      <div className="w-full max-w-4xl px-8 py-6 flex flex-col items-center relative">
        {/* Expanded Banner Image */}
        <div className="absolute top-0 left-1/2 right-0 z-0 h-80 w-screen -translate-x-1/2 overflow-hidden rounded-bl-3xl rounded-br-3xl">
          <Image
            src="/uploads/web-banner.png"
            alt="Jungle Banner"
            width={1920}
            height={400}
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-green-900"></div>
        </div>

        <div className="flex flex-col mb-16 w-full items-center relative z-10">
          {/* Logo Container */}
          <div className="mb-8 overflow-hidden rounded-3xl bg-green-800 bg-opacity-50 p-4">
            <Link href="/" className="flex justify-center">
              <Image
                src="/uploads/logo10.png"
                alt="JANE"
                width={120}
                height={40}
                className="h-60 w-auto"
              />
            </Link>
          </div>
          
          {/* Navigation Links Container */}
          <div className="flex justify-center items-center mt-4">
            <nav className="flex items-center gap-8 bg-green-800 bg-opacity-50 px-6 py-3 rounded-full">
              <button 
                onClick={() => setActiveSection('home')}
                className={`text-lg ${activeSection === 'home' ? 'text-green-300' : 'text-green-100'} hover:text-green-200 transition-colors duration-200`}
              >
                HOME
              </button>
              <button 
                onClick={() => setActiveSection('faq')}
                className={`text-lg ${activeSection === 'faq' ? 'text-green-300' : 'text-green-100'} hover:text-green-200 transition-colors duration-200`}
              >
                FAQ
              </button>
              <button 
                onClick={() => setActiveSection('more')}
                className={`text-lg ${activeSection === 'more' ? 'text-green-300' : 'text-green-100'} hover:text-green-200 transition-colors duration-200`}
              >
                MORE
              </button>
            </nav>
          </div>
        </div>

        <div className="w-full relative z-10">
          {renderContent()}
        </div>

        {/* Social Links - at the bottom and centered */}
        <div className="mt-auto flex justify-center items-center gap-8 py-6 relative z-10">
          <Link 
            href="https://twitter.com/jane4monkeys"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg text-green-400 hover:text-green-300 transition-colors duration-200"
          >
            TWITTER/X
          </Link>
          <Link 
            href="https://t.me/jane"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg text-green-400 hover:text-green-300 transition-colors duration-200"
          >
            TELEGRAM
          </Link>
        </div>
      </div>
    </div>
  )
}

