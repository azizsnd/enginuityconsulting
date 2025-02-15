import { MapPin, Mail, Phone, Clock } from "lucide-react"
import { InfoCard } from "./info-card"

export default function ContactInfo() {
  return (
    <div className="w-full bg-white text-primary py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <InfoCard icon={MapPin} title="Address">
            <p>19 North Road Piscataway,</p>
            <p>NJ 08854</p>
          </InfoCard>

          <InfoCard icon={Mail} title="Email">
            <p>gamma@sbcglobal.net</p>
            <p>gamma@sbcglobal.net</p>
          </InfoCard>

          <InfoCard icon={Phone} title="Phone">
            <p>(246) 917-5787</p>
            <p>(246) 917-5787</p>
          </InfoCard>

          <InfoCard icon={Clock} title="Opening hours">
            <p>Mon-Sat: 8 AM - 06 PM</p>
            <p>Sun: day off</p>
          </InfoCard>
        </div>
    </div>
  )
}

