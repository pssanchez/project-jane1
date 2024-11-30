'use client'

import { useState, useEffect } from 'react'
import { TransactionCard } from './transaction-card'

interface Transaction {
  text: string
  organization: string
  logo: string
  time: string
}

export function TransactionScroller() {
  const [transactions, setTransactions] = useState<Transaction[]>([
    {
      text: "I give 10 SOL for orangutang banana",
      organization: "The orangutang project",
      logo: "/uploads/orangutang-project.svg",
      time: "10h"
    },
    {
      text: "I give 10 SOL for saving monkeys",
      organization: "Saving Monkeys Nonprofit",
      logo: "/uploads/saving-monkeys.svg",
      time: "1d"
    },
    {
      text: "I donate 5 SOL to protect rainforests",
      organization: "Rainforest Alliance",
      logo: "/uploads/rainforest-alliance.svg",
      time: "2d"
    },
    {
      text: "I contribute 15 SOL to ocean cleanup",
      organization: "Ocean Conservancy",
      logo: "/uploads/ocean-conservancy.svg",
      time: "3d"
    }
  ])

  useEffect(() => {
    const interval = setInterval(() => {
      setTransactions(prevTransactions => {
        const [first, ...rest] = prevTransactions
        return [...rest, first]
      })
    }, 5000) // Rotate every 5 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full overflow-hidden">
      <div className="space-y-4 transition-all duration-500">
        {transactions.map((transaction, index) => (
          <div 
            key={`${transaction.organization}-${index}`}
            className="transform transition-all duration-500 hover:scale-105"
          >
            <TransactionCard {...transaction} />
          </div>
        ))}
      </div>
    </div>
  )
}

