import type React from "react"
import type { LucideIcon } from "lucide-react"

interface InfoCardProps {
  icon: LucideIcon
  title: string
  children: React.ReactNode
}

export function InfoCard({ icon: Icon, title, children }: InfoCardProps) {
  return (
    <div className="border-none shadow-none text-center">
      <div className="space-y-2 pb-2">
        <Icon className="w-6 h-6 text-secondary mx-auto" />
        <p className="text-lg font-semibold">{title}</p>
      </div>
      <div className="text-textcolor">{children}</div>
    </div>
  )
}

