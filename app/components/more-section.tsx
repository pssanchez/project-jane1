import { TransactionCard } from './transaction-card'

export function MoreSection() {
  return (
    <div className="space-y-10 w-full flex flex-col items-center">
      <h2 className="text-2xl font-bold text-center mb-6">Recent Transactions</h2>
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
        <TransactionCard
          text="I give 5 SOL for monkey sanctuary"
          organization="Monkey Sanctuary Foundation"
          logo="/uploads/monkey-sanctuary.svg"
          time="2d"
        />
        <TransactionCard
          text="I give 15 SOL for primate research"
          organization="Primate Research Institute"
          logo="/uploads/primate-research.svg"
          time="3d"
        />
      </div>
    </div>
  )
}

