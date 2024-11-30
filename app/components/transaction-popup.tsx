'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

interface Transaction {
  text: string
  organization: string
  logo: string
  time: string
}

const transactions: Transaction[] = [
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
]

export function TransactionPopup() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % transactions.length)
    }, 5000) // Change transaction every 5 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full flex justify-center items-center h-32">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5 }}
          className="bg-white shadow-lg rounded-lg p-4 w-full max-w-md"
        >
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <Image
                src={transactions[currentIndex].logo}
                alt={transactions[currentIndex].organization}
                width={48}
                height={48}
                className="rounded-full"
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">
                {transactions[currentIndex].text}
              </p>
              <p className="text-sm text-gray-500 truncate">
                {transactions[currentIndex].organization}
              </p>
            </div>
            <div className="inline-flex items-center text-base font-semibold text-gray-900">
              {transactions[currentIndex].time}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

