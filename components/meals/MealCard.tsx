'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Plus, Zap, User } from 'lucide-react'
import { useCart } from '@/hooks/useCart'
import toast from 'react-hot-toast'

interface MealCardProps {
  id: string
  name: string
  description: string
  image: string
  price: number
  calories: number
  protein: number
  carbs: number
  fat: number
  category: string
  available: boolean
}

export function MealCard({
  id,
  name,
  description,
  image,
  price,
  calories,
  protein,
  carbs,
  fat,
  category,
  available
}: MealCardProps) {
  const { addItem } = useCart()

  const handleAddToCart = () => {
    if (!available) return
    
    addItem({
      id,
      name,
      price,
      image
    })
    
    toast.success(`${name} added to cart!`)
  }

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      BREAKFAST: 'bg-yellow-100 text-yellow-800',
      LUNCH: 'bg-blue-100 text-blue-800',
      DINNER: 'bg-purple-100 text-purple-800',
      SNACK: 'bg-green-100 text-green-800',
      DESSERT: 'bg-pink-100 text-pink-800',
      VEGETARIAN: 'bg-emerald-100 text-emerald-800',
      VEGAN: 'bg-teal-100 text-teal-800',
      KETO: 'bg-orange-100 text-orange-800',
      PROTEIN: 'bg-red-100 text-red-800'
    }
    return colors[category] || 'bg-gray-100 text-gray-800'
  }

  return (
    <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col">
      <Link href={`/meals/${id}`} className="flex flex-col flex-grow">
        <div className="relative overflow-hidden">
          <Image
            src={image}
            alt={name}
            width={400}
            height={300}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-3 left-3">
            <Badge className={`${getCategoryColor(category)} text-xs font-medium`}>
              {category.charAt(0) + category.slice(1).toLowerCase()}
            </Badge>
          </div>
          {!available && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <Badge variant="secondary" className="bg-white text-gray-800">
                Out of Stock
              </Badge>
            </div>
          )}
        </div>

        <CardContent className="p-4 flex-grow">
          <div className="space-y-3">
            <div>
              <h3 className="font-semibold text-lg text-gray-900 line-clamp-1">{name}</h3>
              <p className="text-gray-600 text-sm line-clamp-2 mt-1">{description}</p>
            </div>

            <div className="flex items-center justify-between text-sm text-gray-600">
              <div className="flex items-center space-x-1">
                <Zap className="w-4 h-4 text-yellow-500" />
                <span>{calories} cal</span>
              </div>
              <div className="flex items-center space-x-1">
                <User className="w-4 h-4 text-green-500" />
                <span>1 serving</span>
              </div>
            </div>

            <Separator />

            <div className="grid grid-cols-3 gap-2 text-xs text-gray-600">
              <div className="text-center">
                <div className="font-medium text-gray-900">{protein}g</div>
                <div>Protein</div>
              </div>
              <div className="text-center">
                <div className="font-medium text-gray-900">{carbs}g</div>
                <div>Carbs</div>
              </div>
              <div className="text-center">
                <div className="font-medium text-gray-900">{fat}g</div>
                <div>Fat</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Link>

      <CardFooter className="p-4 pt-0">
        <div className="w-full flex items-center justify-between">
          <div className="text-xl font-bold text-gray-900">
            ${price.toFixed(2)}
          </div>
          <Button
            onClick={handleAddToCart}
            disabled={!available}
            className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Plus className="w-4 h-4 mr-1" />
            Add to Cart
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}