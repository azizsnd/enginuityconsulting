"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Languages } from "lucide-react"
import { usePathname } from "next/navigation"

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false)
    const [currentLocale, setCurrentLocale] = useState('en')
    const pathname = usePathname()

    const languages = [
        { code: 'en', name: 'English' },
        { code: 'fr', name: 'Français' },
        { code: 'ar', name: 'العربية' }
    ]
    const changeLanguage = (locale: string) => {
        setCurrentLocale(locale)
        setIsLanguageMenuOpen(false)
    }

    return (
        <header className="fixed top-0 left-0 right-0 z-50">
            <div className="bg-primary backdrop-blur-md px-10 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo section remains unchanged */}
                    <Link href="/" className="flex items-center space-x-4">
                        <Image
                            src="/logo.png"
                            alt="logo"
                            width={50}
                            height={50}
                            className="w-12 h-12"
                        />
                        <div>
                            <p className="font-semibold text-white">
                                Enginuity
                            </p>
                            <p className="font-semibold text-white">
                                Consulting
                            </p>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <Link
                            href="/"
                            className={`transition-colors border-b-2 border-transparent px-2 font-semibold ${pathname === "/" ? "border-secondary text-white hover:text-white/70" : "text-white/70 hover:text-white "
                                }`}
                        >
                            Home
                        </Link>
                        <Link
                            href="/Services"
                            className={`transition-colors border-b-2 border-transparent px-2 font-semibold ${pathname === "/Services" ? "border-secondary text-white hover:text-white/70" : "text-white/70 hover:text-white "
                                }`}
                        >
                            Services
                        </Link>
                        <Link
                            href="/Contact" // Fixed trailing space
                            className={`transition-colors border-b-2 border-transparent px-2 font-semibold ${pathname === "/Contact" ? "border-secondary text-white hover:text-white/70" : "text-white/70 hover:text-white "
                                }`}
                        >
                            Contact
                        </Link>
                    </nav>

                    {/* Right Section remains unchanged */}
                    <div className="flex items-center space-x-6 relative">
                        <div className="relative">
                            <button
                                className="flex items-center text-white hover:text-white/70 transition-colors gap-1"
                                onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
                            >
                                    {currentLocale.toUpperCase()}
                                <Languages className="w-5 h-5" />
                            </button>

                            {isLanguageMenuOpen && (
                                <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg py-2">
                                    {languages.map((lang) => (
                                        <button
                                            key={lang.code}
                                            onClick={() => changeLanguage(lang.code)}
                                            className={`w-full px-4 py-2 text-sm text-left flex justify-between items-center ${currentLocale === lang.code
                                                    ? 'bg-gray-100 text-primary font-semibold'
                                                    : 'text-gray-700 hover:bg-gray-50'
                                                }`}
                                        >
                                            {lang.name}
                                            {currentLocale === lang.code && (
                                                <span className="text-primary">✓</span>
                                            )}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                        <button className="border rounded-none border-white text-white p-2">
                            Get in touch
                        </button>
                    </div>


                    {/* Mobile Menu Button remains unchanged */}
                    <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden mt-4 pb-4">
                        <nav className="flex flex-col space-y-4">
                            <Link
                                href="/"
                                className={`text-white hover:text-white/70 transition-colors border-b-2 border-transparent ${pathname === "/" ? "border-white" : ""
                                    }`}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Home
                            </Link>
                            <Link
                                href="/Services"
                                className={`text-white hover:text-white/70 transition-colors border-b-2 border-transparent ${pathname === "/Services" ? "border-white" : ""
                                    }`}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Services
                            </Link>
                            <Link
                                href="/Contact"
                                className={`text-white hover:text-white/70 transition-colors border-b-2 border-transparent ${pathname === "/Contact" ? "border-white" : ""
                                    }`}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Contact
                            </Link>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    )
}