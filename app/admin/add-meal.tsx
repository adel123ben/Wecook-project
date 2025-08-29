"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const categories = [
  'BREAKFAST', 'LUNCH', 'DINNER', 'SNACK', 'DESSERT', 'VEGETARIAN', 'VEGAN', 'KETO', 'PROTEIN'
]

export default function AddMealPage() {
  const [form, setForm] = useState({
    name: '',
    description: '',
    image: '',
    price: '',
    calories: '',
    protein: '',
    carbs: '',
    fat: '',
    category: categories[0],
    available: true
  })
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleCategory = (value: string) => {
    setForm({ ...form, category: value })
  }

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0])
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    let imageUrl = form.image
    if (imageFile) {
      // Simple local upload: convert to base64 (for demo, not production)
      const reader = new FileReader()
      reader.onloadend = async () => {
        imageUrl = reader.result as string
        await submitMeal(imageUrl)
      }
      reader.readAsDataURL(imageFile)
    } else {
      await submitMeal(imageUrl)
    }
  }

  const submitMeal = async (imageUrl: string) => {
    try {
      const res = await fetch('/api/meals', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          image: imageUrl,
          price: parseFloat(form.price),
          calories: parseInt(form.calories),
          protein: parseFloat(form.protein),
          carbs: parseFloat(form.carbs),
          fat: parseFloat(form.fat),
          available: true
        })
      })
      if (res.ok) {
        router.push('/meals')
      } else {
        setError('Erreur lors de la création du plat.')
      }
    } catch {
      setError('Erreur lors de la création du plat.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle>Ajouter un plat</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input name="name" placeholder="Nom" value={form.name} onChange={handleChange} required />
            <Input name="description" placeholder="Description" value={form.description} onChange={handleChange} required />
            <Input name="price" type="number" step="0.01" placeholder="Prix" value={form.price} onChange={handleChange} required />
            <Input name="calories" type="number" placeholder="Calories" value={form.calories} onChange={handleChange} required />
            <Input name="protein" type="number" step="0.1" placeholder="Protéines" value={form.protein} onChange={handleChange} required />
            <Input name="carbs" type="number" step="0.1" placeholder="Glucides" value={form.carbs} onChange={handleChange} required />
            <Input name="fat" type="number" step="0.1" placeholder="Lipides" value={form.fat} onChange={handleChange} required />
            <Select value={form.category} onValueChange={handleCategory}>
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                {categories.map(cat => (
                  <SelectItem key={cat} value={cat}>{cat.charAt(0) + cat.slice(1).toLowerCase()}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Input type="file" accept="image/*" onChange={handleImage} />
            {error && <div className="text-red-600">{error}</div>}
            <Button type="submit" disabled={loading} className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700">
              {loading ? 'Ajout...' : 'Ajouter le plat'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
