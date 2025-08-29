'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { useCart } from '@/hooks/useCart'

export default function CheckoutSuccessPage() {
  const router = useRouter()
  const { clearCart } = useCart()

  useEffect(() => {
    clearCart()
  }, [clearCart])

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex flex-col items-center justify-center flex-1 p-4">
        <div className="bg-white rounded-lg shadow p-8 text-center">
          <h1 className="text-3xl font-bold text-green-600 mb-4">Paiement réussi !</h1>
          <p className="text-lg text-gray-700 mb-6">Merci pour votre commande. Votre paiement a été validé et votre commande est en préparation.</p>
          <button className="bg-green-600 text-white px-6 py-2 rounded shadow hover:bg-green-700 transition" onClick={() => router.push('/meals')}>Retour au catalogue</button>
        </div>
      </main>
      <Footer />
    </div>
  )
}
