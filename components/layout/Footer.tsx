import Link from 'next/link'
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react'
import { FaFacebookF, FaInstagram, FaTiktok, FaLinkedinIn } from 'react-icons/fa';
import { Button } from '../ui/button';

export function Footer() {
  return (
    // <footer className="bg-gray-900 text-white">
    //   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    //     <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
    //       {/* Company Info */}
    //       <div className="space-y-4">
    //         <div className="flex items-center space-x-2">
    //           <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-orange-500 rounded-full flex items-center justify-center">
    //             <span className="text-white font-bold text-sm">M</span>
    //           </div>
    //           <span className="text-xl font-bold">MealDelivery</span>
    //         </div>
    //         <p className="text-gray-300 text-sm">
    //           Fresh, healthy meals delivered to your door. Made with love and premium ingredients.
    //         </p>
    //         <div className="flex space-x-4">
    //           <Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
    //           <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
    //           <Instagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
    //         </div>
    //       </div>

    //       {/* Quick Links */}
    //       <div className="space-y-4">
    //         <h3 className="text-lg font-semibold">Quick Links</h3>
    //         <div className="flex flex-col space-y-2">
    //           <Link href="/" className="text-gray-300 hover:text-white transition-colors text-sm">
    //             Home
    //           </Link>
    //           <Link href="/meals" className="text-gray-300 hover:text-white transition-colors text-sm">
    //             Meals
    //           </Link>
    //           <Link href="/about" className="text-gray-300 hover:text-white transition-colors text-sm">
    //             About Us
    //           </Link>
    //           <Link href="/contact" className="text-gray-300 hover:text-white transition-colors text-sm">
    //             Contact
    //           </Link>
    //         </div>
    //       </div>

    //       {/* Customer Service */}
    //       <div className="space-y-4">
    //         <h3 className="text-lg font-semibold">Customer Service</h3>
    //         <div className="flex flex-col space-y-2">
    //           <Link href="/help" className="text-gray-300 hover:text-white transition-colors text-sm">
    //             Help Center
    //           </Link>
    //           <Link href="/returns" className="text-gray-300 hover:text-white transition-colors text-sm">
    //             Returns
    //           </Link>
    //           <Link href="/shipping" className="text-gray-300 hover:text-white transition-colors text-sm">
    //             Shipping Info
    //           </Link>
    //           <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors text-sm">
    //             Privacy Policy
    //           </Link>
    //         </div>
    //       </div>

    //       {/* Contact Info */}
    //       <div className="space-y-4">
    //         <h3 className="text-lg font-semibold">Contact Us</h3>
    //         <div className="space-y-3">
    //           <div className="flex items-center space-x-3">
    //             <Phone className="w-4 h-4 text-green-500" />
    //             <span className="text-gray-300 text-sm">+1 (555) 123-4567</span>
    //           </div>
    //           <div className="flex items-center space-x-3">
    //             <Mail className="w-4 h-4 text-green-500" />
    //             <span className="text-gray-300 text-sm">hello@mealdelivery.com</span>
    //           </div>
    //           <div className="flex items-center space-x-3">
    //             <MapPin className="w-4 h-4 text-green-500" />
    //             <span className="text-gray-300 text-sm">123 Food Street, City, ST 12345</span>
    //           </div>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="border-t border-gray-800 mt-12 pt-8">
    //       <div className="flex flex-col md:flex-row justify-between items-center">
    //         <p className="text-gray-400 text-sm">
    //           © 2024 MealDelivery. All rights reserved.
    //         </p>
    //         <div className="flex space-x-6 mt-4 md:mt-0">
    //           <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
    //             Terms of Service
    //           </Link>
    //           <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
    //             Privacy Policy
    //           </Link>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </footer>
    <footer className="bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* Colonne 1: WeCook */}
          <div>
            <h3 className="font-bold text-lg mb-4">WeCook</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-green-500">Forfaits</a></li>
              <li><a href="#" className="hover:text-green-500">Menu</a></li>
              <li><a href="#" className="hover:text-green-500">Cartes-cadeaux</a></li>
            </ul>
          </div>

          {/* Colonne 2: À propos */}
          <div>
            <h3 className="font-bold text-lg mb-4">À propos</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-green-500">Carrières</a></li>
              <li><a href="#" className="hover:text-green-500">Blogue</a></li>
            </ul>
          </div>

          {/* Colonne 3: Programmes */}
          <div>
            <h3 className="font-bold text-lg mb-4">Programmes</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-green-500">Récompenses</a></li>
              <li><a href="#" className="hover:text-green-500">Entreprise</a></li>
            </ul>
          </div>

          {/* Colonne 4: Télécharger l'application */}
          <div>
            <h3 className="font-bold text-lg mb-4">Télécharger l'application</h3>
            <div className="space-y-3">
              <a href="https://apps.apple.com/app/id" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="Télécharger dans l'App Store"
                  className="h-10 w-auto"
                />
              </a>
              <a href="https://play.google.com/store/apps/details?id" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://play.google.com/intl/en_us/badges/static/images/badges/fr_badge_web_generic.png"
                  alt="L'obtenir sur Google Play"
                  className="h-12 w-auto"
                />
              </a>
            </div>
          </div>

          {/* Colonne 5: Nous contacter + Suivez-nous + Voir la FAQ */}
          <div>
            <h3 className="font-bold text-lg mb-4">Nous contacter</h3>
            <p className="mb-1 underline text-green-900 cursor-pointer font-bold">info@repaswecook.ca</p>
            <p className="mb-4 underline text-green-900 cursor-pointer font-bold">1-844-493-2665</p>
            <Button size="lg" className="mb-6 bg-green-600  text-white px-4 py-2 rounded-lg hover:bg-opacity-20">
              Voir la FAQ
            </Button>
            <h3 className="font-bold text-lg mb-4">Suivez-nous</h3>
            <div className="flex space-x-3">
              <a href="#" className="bg-green-500 text-white rounded-full p-2 hover:bg-green-600">
                <FaFacebookF className="w-4 h-4" />
              </a>
              <a href="#" className="bg-green-500 text-white rounded-full p-2 hover:bg-green-600">
                <FaInstagram className="w-4 h-4" />
              </a>
              <a href="#" className="bg-green-500 text-white rounded-full p-2 hover:bg-green-600">
                <FaTiktok className="w-4 h-4" />
              </a>
              <a href="#" className="bg-green-500 text-white rounded-full p-2 hover:bg-green-600">
                <FaLinkedinIn className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Barre inférieure */}
      <div className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-600 mb-4 sm:mb-0 font-serif">
            © 2025 WeCook. Tous droits réservés.{' '}
            <a href="#" className="hover:text-green-500 underline mx-2 inline-block">Conditions d'utilisation</a>
            <a href="#" className="hover:text-green-500 underline mx-2 inline-block">Politique de confidentialité</a>
          </p>
          <Button size="lg" className="bg-green-500 text-white px-4 py-2 rounded flex items-center hover:bg-green-600">
            <span className="mr-2">□</span> Chat
          </Button>
        </div>
      </div>
    </footer>
  )
}