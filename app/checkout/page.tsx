'use client'
import { useCart } from '@/hooks/useCart'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { useEffect, useState } from 'react'

// Checkout page for Stripe payment integration
export default function CheckoutPage() {
  const { items, getTotalPrice, clearCart } = useCart()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const total = getTotalPrice()

  const handleCheckout = async () => {
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items }),
      })
      const data = await res.json()
      if (data.url) {
        window.location.href = data.url
      } else {
        setError('Erreur lors de la création de la session Stripe.')
      }
    } catch (err) {
      setError('Erreur lors du paiement.')
    } finally {
      setLoading(false)
    }
  }

  // Ajoute la logique de redirection selon le succès ou l'échec
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search)
      if (params.get('success') === 'true') {
        clearCart()
        window.location.href = '/checkout/success'
      } else if (params.get('canceled') === 'true') {
        window.location.href = '/checkout/fail'
      }
    }
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen p-4">
        <h1 className="text-3xl font-bold mb-4">Checkout</h1>
        <div className="w-full max-w-md bg-white rounded-lg shadow p-6">
          {items.length === 0 ? (
            <p>Votre panier est vide.</p>
          ) : (
            <>
              <ul className="mb-4">
                {items.map(item => (
                  <li key={item.id} className="flex items-center mb-2">
                    <div className="w-12 h-12 relative mr-2">
                      <Image src={item.image} alt={item.name} fill className="object-cover rounded" />
                    </div>
                    <span className="flex-1 font-semibold">{item.name} x {item.quantity}</span>
                    <span className="font-bold">${(item.price * item.quantity).toFixed(2)}</span>
                  </li>
                ))}
              </ul>
              <div className="flex justify-between mb-4">
                <span>Total :</span>
                <span className="font-bold text-lg">${total.toFixed(2)}</span>
              </div>
              {error && <div className="text-red-600 mb-2">{error}</div>}
              <Button onClick={handleCheckout} disabled={loading} className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700">
                {loading ? 'Paiement...' : 'Payer avec Stripe'}
              </Button>
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}
