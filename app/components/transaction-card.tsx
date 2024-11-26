import Image from 'next/image'

interface TransactionCardProps {
  text: string
  organization: string
  logo: string
  time: string
}

export function TransactionCard({ text, organization, logo, time }: TransactionCardProps) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-gray-200 p-4">
      <div className="flex items-center gap-4">
        <div className="h-8 w-8 rounded-full bg-gray-100" />
        <span className="font-mono">{text}</span>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative h-10 w-10">
          <Image
            src={logo}
            alt={organization}
            fill
            className="rounded-full object-cover"
          />
        </div>
        <span className="text-sm text-gray-500">{time}</span>
      </div>
    </div>
  )
}

