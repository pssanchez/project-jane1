'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { TypeWriter } from './components/type-writer'
import { TransactionCard } from './components/transaction-card'
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
              <div className="font-mono text-lg">
                <TypeWriter text="> Jane see monkey with no banana, but monkey love banana, and jane love monkey. jane give monkey money to buy banana" />
              </div>
            </div>

            <div className="space-y-4 w-full">
              <TransactionCard
                text="I give 10 SOL for orangutang banana"
                organization="The orangutang project"
                logo="/uploads/orangutang-project.svg"
                time="10h"
              />
              <TransactionCard
                text="I give 10 SOL for saving monkeys"
                organization="Saving Monkeys Nonprofit"
                logo="/uploads/saving-monkeys.svg"
                time="1d"
              />
              <div className="flex justify-end w-full">
                <button onClick={() => setActiveSection('more')} className="inline-block text-right">
                  See All {'>'}
                </button>
              </div>
              <div className="font-mono text-lg pt-4">
                <TypeWriter 
                  text="> Hehe monkey funny" 
                  delay={70}
                />
              </div>
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
    <div className="min-h-screen bg-white flex justify-center">
      <div className="w-full max-w-3xl px-8 py-6 flex flex-col items-center relative">
        {/* Banner Image */}
        <div className="absolute top-0 left-1/2 right-0 z-0 h-44 w-screen -translate-x-1/2 overflow-hidden rounded-bl-3xl rounded-br-3xl">
          <Image
            src="/uploads/web-banner.png"
            alt="Jungle Banner"
            width={1920}
            height={300}
            className="w-full h-full object-cover opacity-50"
          />
        </div>

        <div className="flex flex-col mb-12 w-full items-center relative z-10 ">
          {/* Logo Container */}
          <div className="mb-4 overflow-hidden rounded-3xl">
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
            <nav className="flex items-center gap-8">
              <button 
                onClick={() => setActiveSection('home')}
                className={`text-lg ${activeSection === 'home' ? 'text-[#E4A853]' : 'text-black'}`}
              >
                HOME
              </button>
              <button 
                onClick={() => setActiveSection('faq')}
                className={`text-lg ${activeSection === 'faq' ? 'text-[#E4A853]' : 'text-black'}`}
              >
                FAQ
              </button>
              <button 
                onClick={() => setActiveSection('more')}
                className={`text-lg ${activeSection === 'more' ? 'text-[#E4A853]' : 'text-black'}`}
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
            className="text-lg text-[#E4A853] hover:text-gray-700"
          >
            TWITTER/X
          </Link>
          <Link 
            href="https://t.me/jane"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg text-[#E4A853] hover:text-gray-700"
          >
            TELEGRAM
          </Link>
        </div>
      </div>
    </div>
  )
}

