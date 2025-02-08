import Link from "next/link"
import { Facebook, Twitter, Instagram } from "lucide-react"
import Image from "next/image"

export default function Footer() {
    return (
        <footer className="bg-primary text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
                    {/* Logo and Subscribe Section */}
                    <div className="md:col-span-2 space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="bg-secondary p-3 rounded">
                                <Image
                                    src="/logo.png"
                                    alt="logo"
                                    width={50}
                                    height={50}
                                    className="w-12 h-12"
                                />
                            </div>
                            <div className="font-semibold">
                                <div>Enginuity</div>
                                <div>Consulting</div>
                            </div>
                        </div>
                        <p className="text-textcolor text-sm w-72">
                            Velit facilisi senectus velit elementum. Consequat vel arcu feugiat dui eu tempor pretium at porta. Dui
                            pellentesque sagitt...
                        </p>
                        <div className="space-y-2">
                            <h3 className="font-semibold">Subscribe Us</h3>
                            <div className="flex gap-4">
                                <Link href="#" className="hover:text-gray-400">
                                    <Facebook className="w-5 h-5" />
                                </Link>
                                <Link href="#" className="hover:text-gray-400">
                                    <Twitter className="w-5 h-5" />
                                </Link>
                                <Link href="#" className="hover:text-gray-400">
                                    <Instagram className="w-5 h-5" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Services Column */}
                    <div className="space-y-4">
                        <h3 className="font-semibold">Services</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li>
                                <Link href="#" className="hover:text-white">
                                    Marketing Strategy
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-white">
                                    Financial management
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-white">
                                    Business Strategy
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-white">
                                    Sales and Marketing
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-white">
                                    Human Resources
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Useful Links Column */}
                    <div className="space-y-4">
                        <h3 className="font-semibold">Useful links</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li>
                                <Link href="/" className="hover:text-white">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/Services" className="hover:text-white">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/Contact" className="hover:text-white">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                            <h3 className="font-semibold">Address</h3>
                            <p className="text-sm text-gray-400">
                                8592 Fairground
                                <br />
                                St. Tallahassee,
                                <br />
                                FL 32303
                            </p>
                    </div>
                    {/* Contact Column */}
                    <div className="space-y-4">
                        <div className="space-y-4">
                            <h3 className="font-semibold">Email</h3>
                            <p className="text-sm text-gray-400">
                                <Link href="mailto:teverett@optonline.net" className="hover:text-white">
                                    teverett@optonline.net
                                </Link>
                            </p>
                        </div>
                        <div className="space-y-2">
                            <h3 className="font-semibold">Phone</h3>
                            <p className="text-sm text-gray-400">(863) 267-3634</p>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
                    <p>&copy;Copyright Business Consulting 2025.</p>
                </div>
            </div>
        </footer>
    )
}

