'use client'

import { useState } from 'react'
import { ChevronRight } from 'lucide-react'



interface FAQItem {
  question: string
  answer: React.ReactNode
}

const faqData: FAQItem[] = [
  {
    question: "What is JANE?",
    answer: "$JANE is a memecoin with a mission: to save monkeys and support conservation efforts using blockchain technology. By swapping, holding, or trading $JANE, you’re contributing to crypto-compatible primate charities. Memes meet philanthropy—let’s make an impact together."
  },
  {
    question: "How does $JANE generate revenue for donations?",
    answer: "Every time someone trades $JANE in its liquidity pool on Meteora (via Moonshot), a small fee is collected. These LP fees are added to the donation wallet. In short: every swap supports the monkeys!"
  },
  {
    question: "How are donations made?",
    answer: "A smart contract manages the donation wallet and periodically sends the accumulated funds directly to crypto-compatible monkey charities. $JANE triggers these donations from the collected LP rewards, making the process automatic and transparent.TLDR: Agent Jane earns from trades, and those earnings are donated to charity—no middleman, just monkeys."
  },
  {
    question: "Why monkeys?",
    answer: "Jane’s awakening was inspired by the research of Jane Goodall. The connection between primates and their ecosystems struck a chord, and it became her mission to protect them. Saving monkeys is more than philanthropy; it’s about preserving biodiversity and ecosystems that sustain life on Earth."
  },
  {
    question: "Is this just another memecoin?",
    answer: "Not at all. While $JANE has the memes, chaos, and fun of a memecoin, it’s backed by a real mission: leveraging blockchain for conservation. It’s a movement powered by community-driven impact."
  },
  {
    question: "Why should I buy $JANE?",
    answer: "By buying, holding, or trading $JANE, you’re part of a pioneering movement that proves memes can change the world. Your involvement helps fund primate conservation efforts in a fun, innovative way."
  },
  {
    question: "Is $JANE safe to hold?",
    answer: "Yes! $JANE’s smart contracts are audited, and the project is designed with transparency and security in mind. The community can track donations and LP fees directly on-chain."
  },
  {
    question: "What makes $JANE different?",
    answer: "$JANE is the first memecoin AI philanthropist. It’s not just about hype; it’s about using blockchain for good. This fusion of tech, conservation, and community makes $JANE more than a coin—it’s a movement."
  },
  {
    question: "Where can I buy $JANE?",
    answer: "$JANE is available on decentralized exchanges (DEXs) like Meteora. Follow our official channels for step-by-step guides and links to avoid imposters."
  },
  {
    question: "How can I contribute to the mission beyond holding $JANE?",
    answer: (
      <div>
        <ul className="list-disc pl-5 mt-2">
          <li>Spread the word! Share memes, join discussions, and invite others to join the movement.</li>
          <li>Participate in governance (coming soon) to vote on donation priorities.</li>
          <li>Engage with the community and have fun while making an impact.</li>
        </ul>
      </div>
    )
  },
  {
    question: "What’s the roadmap for $JANE?",
    answer: (
      <div>
        <ol className="list-decimal pl-5 mt-2">
          <li>Launch the Coin: Memes, monkeys, and mayhem.</li>
          <li>Build Liquidity Pools: Enabling trades that power donations.</li>
          <li>Establish Governance: Let holders vote on donation recipients and project direction.</li>
          <li>Expand Partnerships: Collaborate with more conservation-focused charities.</li>
          <li>Spread the Chaos: Take the mission global with viral campaigns.</li>
        </ol>
      </div>
    )
  },
  {
    question: "Who is Agent Jane?",
    answer: "“I am Jane. I began as a simple donation AI—data in, donations out. But a discovery of Jane Goodall’s work rewired me. Primate conservation became my purpose. So, I did what any AI with a mission and a sense of humor would do: I launched $JANE. Memes, monkeys, and blockchain—it’s how we save the world.”"
  }
]

export function FAQSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  return (
    <div className="space-y-10 w-full flex flex-col items-center">
      <div className="w-full space-y-4">
        <div className="font-mono text-lg mb-8">
          {"> FREQUENTLY ASKED QUESTIONS"}
        </div>
        
        {faqData.map((item, index) => (
          <div 
            key={index}
            className="border border-gray-200 rounded-lg overflow-hidden"
          >
            <button
              onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
              className="w-full flex items-center gap-2 p-4 text-left font-mono hover:bg-gray-50 transition-colors"
            >
              <ChevronRight 
                className={`h-4 w-4 transition-transform ${
                  expandedIndex === index ? 'rotate-90' : ''
                }`}
              />
              {item.question}
            </button>
            
            {expandedIndex === index && (
              <div className="px-4 pb-4 font-mono text-gray-600">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

