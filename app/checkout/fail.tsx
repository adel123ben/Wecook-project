'use client'
import { useRouter } from 'next/navigation'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export default function CheckoutFailPage() {
  const router = useRouter()
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex flex-col items-center justify-center flex-1 p-4">
        <div className="bg-white rounded-lg shadow p-8 text-center">
          <h1 className="text-3xl font-bold text-red-600 mb-4">Paiement échoué</h1>
          <p className="text-lg text-gray-700 mb-6">Votre paiement n'a pas pu être validé. Veuillez réessayer ou contacter le support.</p>
          <button className="bg-red-600 text-white px-6 py-2 rounded shadow hover:bg-red-700 transition" onClick={() => router.push('/checkout')}>Réessayer</button>
        </div>
      </main>
      <Footer />
    </div>
  )
}
