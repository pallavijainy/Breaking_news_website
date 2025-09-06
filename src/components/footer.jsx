"use client"

import { Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image"
import { CiFacebook, CiInstagram, CiTwitter, CiYoutube } from "react-icons/ci";


export default function Footer() {

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Image src="/logo.png" alt="Hindustan Pragati Samachar" width={50} height={50} className="rounded-lg" />
              <div>
                <h3 className="text-lg font-bold text-red-400">
                 "हिन्दुस्तान प्रगति समाचार"
                </h3>
              </div>
            </div>
            <div className="flex space-x-4">
              <CiFacebook
 className="h-5 w-5 text-blue-400 hover:text-blue-300 cursor-pointer" />
              <CiTwitter className="h-5 w-5 text-blue-400 hover:text-blue-300 cursor-pointer" />
              <CiInstagram className="h-5 w-5 text-pink-400 hover:text-pink-300 cursor-pointer" />
              <CiYoutube className="h-5 w-5 text-red-400 hover:text-red-300 cursor-pointer" />
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-400">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="text-gray-300 hover:text-white transition-colors">
                 Home
                </a>
              </li>
              <li>
                <a href="/politics" className="text-gray-300 hover:text-white transition-colors">
                 Politics
                </a>
              </li>
              <li>
                <a href="/sports" className="text-gray-300 hover:text-white transition-colors">
                Sports
                </a>
              </li>
              <li>
                <a href="/business" className="text-gray-300 hover:text-white transition-colors">
                 Business
                </a>
              </li>
             
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-400">Categories</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/entertainment" className="text-gray-300 hover:text-white transition-colors">
                 Entertainment
                </a>
              </li>
              <li>
                <a href="/health" className="text-gray-300 hover:text-white transition-colors">
                 Health
                </a>
              </li>
              <li>
                <a href="/education" className="text-gray-300 hover:text-white transition-colors">
                  Education
                </a>
              </li>
              <li>
                <a href="/weather" className="text-gray-300 hover:text-white transition-colors">
              Weather
                </a>
              </li>
             
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-400">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-green-400" />
                <span className="text-gray-300">नई दिल्ली, भारत</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-green-400" />
                <span className="text-gray-300">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-green-400" />
                <span className="text-gray-300">news@hindustanpragati.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 हिन्दुस्तान प्रगति समाचार All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
