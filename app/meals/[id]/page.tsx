'use client'

import { useEffect } from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { CategoryMenu } from '@/components/CategoryMenu'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { ArrowLeft, ChevronLeft, ChevronRight, Info, Plus, Star, Clock, Truck, Shield, ChefHat, Snowflake, Leaf } from 'lucide-react'
import { useState, useRef } from 'react'
import { FaCanadianMapleLeaf } from "react-icons/fa"
import Marquee from 'react-fast-marquee'
import { useCart } from '@/hooks/useCart'
import toast from 'react-hot-toast'
import { MealCard } from '@/components/meals/MealCard'
import { RecipeCard } from '@/components/meals/RecipeCard'

interface Meal {
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

export default function MealDetailPage() {
  const params = useParams()
  const id = params.id as string
  const [meal, setMeal] = useState<Meal | null>(null)
  const [allMeals, setAllMeals] = useState<Meal[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedSize, setSelectedSize] = useState('REGULIER')
  const [testimonialIdx, setTestimonialIdx] = useState(0)
  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const { addItem } = useCart()

  // Testimonials data
  const testimonials = [
    {
      title: "Repas savoureux",
      text: "Repas savoureux, équilibrés et surtout abordables. Qualité des repas hors pair. De plus, service à la clientèle irréprochable. Merci Wecook!",
      author: "Laury",
      date: "19 janvier 2024"
    },
    {
      title: "Service rapide",
      text: "Livraison toujours à l'heure, plats variés et délicieux. Je recommande à tous!",
      author: "Marc",
      date: "2 février 2024"
    },
    {
      title: "Facile et pratique",
      text: "Commande simple, repas prêts en quelques minutes. Idéal pour les semaines chargées.",
      author: "Sophie",
      date: "10 mars 2024"
    }
  ]

  useEffect(() => {
    if (id) {
      // Fetch current meal
      fetch(`/api/meals/${id}`)
        .then(res => res.json())
        .then(data => {
          setMeal(data)
        })
        .catch(() => setLoading(false))

      // Fetch all meals for navigation
      fetch('/api/meals')
        .then(res => res.json())
        .then(data => {
          setAllMeals(data)
          setLoading(false)
        })
        .catch(() => setLoading(false))
    }
  }, [id])

  const handleAddToCart = () => {
    if (!meal || !meal.available) return

    addItem({
      id: meal.id,
      name: meal.name,
      price: meal.price,
      image: meal.image
    })

    toast.success(`${meal.name} ajouté au panier!`)
  }

  const getCurrentMealIndex = () => {
    if (!meal) return -1
    return allMeals.findIndex(m => m.id === id)
  }

  const getPreviousMeal = () => {
    if (!meal) return null
    const currentIndex = getCurrentMealIndex()
    if (currentIndex > 0) {
      return allMeals[currentIndex - 1]
    }
    return null
  }

  const getNextMeal = () => {
    if (!meal) return null
    const currentIndex = getCurrentMealIndex()
    if (currentIndex < allMeals.length - 1) {
      return allMeals[currentIndex + 1]
    }
    return null
  }

  const navigateToMeal = (mealId: string) => {
    window.location.href = `/meals/${mealId}`
  }

  // Carousel functions
  const cardWidth = 256 // w-64 = 256px
  const gap = 16 // gap-4 = 16px
  const itemWidth = cardWidth + gap

  const canGoLeft = meal ? currentIndex > 0 : false
  const canGoRight = meal ? currentIndex < Math.max(0, allMeals.length - 3) : false // Show 3 cards at a time
  const maxIndex = Math.max(0, allMeals.length - 3)
  const progressPercentage = maxIndex > 0 ? (currentIndex / maxIndex) * 100 : 0

  const slideLeft = () => {
    if (canGoLeft) {
      const newIndex = currentIndex - 1
      setCurrentIndex(newIndex)
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollTo({
          left: newIndex * itemWidth,
          behavior: 'smooth'
        })
      }
    }
  }

  const slideRight = () => {
    if (canGoRight) {
      const newIndex = currentIndex + 1
      setCurrentIndex(newIndex)
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollTo({
          left: newIndex * itemWidth,
          behavior: 'smooth'
        })
      }
    }
  }

  const getCategoryColor = (category: string) => {
    if (!meal) return 'bg-gray-100 text-gray-800'
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

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading meal details...</p>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  // Check if meal exists
  if (!meal) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Repas non trouvé</h1>
            <p className="text-gray-600 mb-6">Le repas que vous recherchez n'existe pas.</p>
            <Button asChild>
              <Link href="/meals">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Retour aux repas
              </Link>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Weekly Menu Header */}
      <div className="w-full  py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-3">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#00894d] tracking-normal">
              Menu de la semaine
            </h2>
            <p className="text-ls lg:text-xl font-semibold  text-gray-700 tracking-wide">
              Semaine du 31 août
            </p>
          </div>
        </div>
      </div>

      <CategoryMenu />

      {/* Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <ArrowLeft className="w-5 h-5 mr-2 text-gray-700" />
            <Link href="/meals" className="text-gray-700 hover:text-gray-900 font-medium">
              Retour au menu
            </Link>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => {
                const prevMeal = getPreviousMeal()
                if (prevMeal) navigateToMeal(prevMeal.id)
              }}
              disabled={!getPreviousMeal()}
              className="w-9 h-9 bg-[#00894d] hover:bg-[#007a42] disabled:bg-gray-300 disabled:cursor-not-allowed rounded-full flex items-center justify-center text-white transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => {
                const nextMeal = getNextMeal()
                if (nextMeal) navigateToMeal(nextMeal.id)
              }}
              disabled={!getNextMeal()}
              className="w-9 h-9 bg-[#00894d] hover:bg-[#007a42] disabled:bg-gray-300 disabled:cursor-not-allowed rounded-full flex items-center justify-center text-white transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left Column - Meal Image */}
          <div className="flex justify-center items-center">
            <div className="w-full max-w-2xl bg-white rounded-2xl shadow-sm overflow-hidden flex justify-center items-center">
              <Image
                src={meal.image}
                alt={meal.name}
                width={800}
                height={800}
                className="w-[800px] h-[500px] object-cover rounded-2xl"
                priority
              />
            </div>
          </div>

          {/* Right Column - Information */}
          <div className="w-full">
            <div className="bg-white rounded-2xl shadow-sm p-8 space-y-6">
              {/* Title */}
              <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                {meal.name}
              </h1>

              {/* CTA Button */}
              <Button
                onClick={handleAddToCart}
                disabled={!meal.available}
                className="bg-[#00894d] hover:bg-[#007a42] text-white px-6 py-3 text-base font-bold rounded-lg shadow-md hover:shadow-lg transition-all duration-200 flex items-center"
                style={{ width: '180px', height: '44px' }}
              >
                <Plus className="w-4 h-4 mr-2" />
                Je veux y goûter !
              </Button>

              <Separator className="my-4" />

              {/* Info Box */}
              <div className="flex items-center space-x-2 p-3 bg-[#faf9f6] rounded-lg border border-gray-100">
                <Info className="w-5 h-5 text-gray-500 flex-shrink-0" />
                <span className="text-sm text-gray-700">
                  Ce repas n'a pas de choix d'accompagnement
                </span>
              </div>

              {/* Size Options */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Taille</h3>
                <div className="flex gap-6">
                  <button
                    onClick={() => setSelectedSize('PETIT')}
                    className={`text-base font-medium transition-all relative pb-1 ${
                      selectedSize === 'PETIT'
                        ? 'text-[#00894d] border-b-2 border-[#00894d]'
                        : 'text-gray-700 hover:text-gray-900'
                    }`}
                  >
                    Petit
                  </button>
                  <button
                    onClick={() => setSelectedSize('REGULIER')}
                    className={`text-base font-medium transition-all relative pb-1 ${
                      selectedSize === 'REGULIER'
                        ? 'text-[#00894d] border-b-2 border-[#00894d]'
                        : 'text-gray-700 hover:text-gray-900'
                    }`}
                  >
                    Régulier
                  </button>
                </div>
              </div>

              {/* Accordion Sections */}
              <Accordion type="single" collapsible className="w-full space-y-3 mt-4">
                <AccordionItem value="ingredients" className="bg-[#faf9f6] border border-gray-100 rounded-lg px-6">
                  <AccordionTrigger className="text-base font-semibold text-gray-900 hover:text-[#00894d] hover:no-underline py-4">
                    Ingrédients
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 pt-0 pb-4">
                    <p className="text-sm leading-relaxed">
                      {meal.description}
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="allergens" className="bg-[#faf9f6] border border-gray-100 rounded-lg px-6">
                  <AccordionTrigger className="text-base font-semibold text-gray-900 hover:text-[#00894d] hover:no-underline py-4">
                    Allergènes
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 pt-0 pb-4">
                    <p className="text-sm leading-relaxed">
                      Contient: Gluten (nouilles de blé), soja. Peut contenir: Sésame.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="nutrition" className="bg-[#faf9f6] border border-gray-100 rounded-lg px-6">
                  <AccordionTrigger className="text-base font-semibold text-gray-900 hover:text-[#00894d] hover:no-underline py-4">
                    Valeurs nutritives
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 pt-0 pb-4">
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span>Calories</span>
                        <span className="font-semibold">{meal.calories} kcal</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Protéines</span>
                        <span className="font-semibold">{meal.protein}g</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Glucides</span>
                        <span className="font-semibold">{meal.carbs}g</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Lipides</span>
                        <span className="font-semibold">{meal.fat}g</span>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              {/* Price */}
              <div className="pt-6 border-t border-gray-100">
                <div className="text-3xl font-bold text-gray-900">
                  ${meal.price.toFixed(2)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>




      

      {/* Featured Meals */}
      <section className="py-20 bg-[#faf9f6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={slideLeft}
                disabled={!canGoLeft}
                className="rounded-full bg-gray-100 hover:bg-gray-200 w-10 h-10 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>

              <div>
                <h2 className="text-2xl font-semibold text-green-700 mb-1">
                  Aussi au menu cette semaine
                </h2>
                <div className="h-1 bg-gray-200 rounded-full w-96 relative overflow-hidden">
                  <div
                    className="h-full bg-green-600 rounded-full transition-all duration-300 ease-out"
                    style={{ width: `${Math.max(33.33, progressPercentage)}%` }}
                  />
                </div>
              </div>
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={slideRight}
              disabled={!canGoRight}
              className="rounded-full bg-gray-100 hover:bg-gray-200 w-10 h-10 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Recipe Cards Carousel */}
          <div className="relative overflow-hidden">
  {loading ? (
    <div className="text-center text-gray-500 py-8">Loading meals...</div>
  ) : allMeals.length === 0 ? (
    <div className="text-center text-gray-500 py-8">No meals available.</div>
  ) : (
    <div
      ref={scrollContainerRef}
      className="flex gap-12 overflow-x-auto pb-6 scrollbar-hide scroll-smooth px-4"
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
    >
      {allMeals.map((mealItem) =>
        typeof mealItem === 'object' && mealItem !== null ? (
          <div
            key={mealItem.id}
            className="transition-opacity duration-300 flex-shrink-0"
          >
            <RecipeCard
              id={mealItem.id}
              name={mealItem.name}
              image={mealItem.image}
              category={mealItem.category}
              available={mealItem.available}
            />
          </div>
        ) : null
      )}
    </div>
  )}

  {/* Gradient overlays for visual effect */}
  {/* 
  <div className="absolute left-0 top-0 bottom-4 w-8 bg-gradient-to-r from-white to-transparent pointer-events-none" />
  <div className="absolute right-0 top-0 bottom-4 w-8 bg-gradient-to-l from-white to-transparent pointer-events-none" />
  */}
</div>


          {/* Start Button */}
          <div className="flex justify-center mt-8">
            <Button
              size="lg"
              className="bg-green-600 text-white hover:bg-green-700 px-8 py-3 rounded-lg font-medium"
              asChild
            >
              <Link href="/meals">
                Voir tous les repas
              </Link>
            </Button>
          </div>
        </div>
      </section>





      {/* Testimonials Section */}
      <section className="py-7 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-2">
                Le choix de prêt-à-manger numéro 1 au pays
              </h2>
              <p className="text-lg text-gray-700">
                Pionnier du prêt-à-manger : Nos plats définissent les normes de goût et qualité,
                <br className="hidden sm:block"/> au Québec, en Ontario et dans les Maritimes
              </p>
            </div>
  
            <div className="flex flex-col lg:flex-row items-center lg:items-stretch w-full">
              {/* Left: Image */}
              <div className="flex-shrink-0 flex justify-center items-center w-full lg:w-[50%]">
                <img
                  src="https://cdn.wecookmeals.ca/static/testimonials/clients-testimonials-03.jpg"
                  alt="Clients avec plats"
                  className="object-cover w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none"
                />
              </div>
  
              {/* Right: Testimonial Card */}
              <div className="flex-1 w-full flex items-center">
                <div className="bg-green-900 rounded-b-2xl lg:rounded-r-2xl lg:rounded-bl-none p-8 text-white relative flex flex-col w-full h-[300px] sm:h-[400px] lg:h-[500px] transition-all duration-500 overflow-hidden">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl md:text-3xl font-bold">Ce que nos clients disent sur nous</h3>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setTestimonialIdx((idx) => (idx === 0 ? testimonials.length - 1 : idx - 1))}
                        className="w-10 h-10 rounded-full bg-green-100 text-green-900 flex items-center justify-center hover:bg-green-200 transition"
                      >
                        <svg width="22" height="22" fill="none" viewBox="0 0 20 20">
                          <path d="M13 15l-5-5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                      <button
                        onClick={() => setTestimonialIdx((idx) => (idx === testimonials.length - 1 ? 0 : idx + 1))}
                        className="w-10 h-10 rounded-full bg-green-100 text-green-900 flex items-center justify-center hover:bg-green-200 transition"
                      >
                        <svg width="22" height="22" fill="none" viewBox="0 0 20 20">
                          <path d="M7 5l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                    </div>
                  </div>
  
                  <div className="border-t border-green-700 mb-6" />
  
                  <div className="flex-1 flex flex-col justify-center items-center relative">
                    <div className="bg-white text-green-900 rounded-lg p-6 shadow-md mb-6 relative w-full max-w-lg h-[160px] sm:h-[200px] flex flex-col justify-center items-start transition-all duration-500">
                      <div className="font-bold mb-2 text-lg md:text-xl w-full" key={testimonialIdx}>
                        {testimonials[testimonialIdx].title}
                      </div>
                      <div className="text-gray-700 text-base md:text-lg w-full" key={testimonialIdx + '-text'}>
                        {testimonials[testimonialIdx].text}
                      </div>
                      <div className="absolute left-8 -bottom-4 w-6 h-6 bg-white rotate-45" style={{boxShadow: '0 2px 8px rgba(0,0,0,0.04)'}}></div>
                    </div>
                    <div className="flex items-center gap-4 mt-2 text-base md:text-lg">
                      <div className="flex items-center gap-1">
                        <span className="bg-green-700 text-white rounded-full px-3 py-1 font-bold text-lg">5★</span>
                        <span className="font-semibold">{testimonials[testimonialIdx].author}</span>
                      </div>
                      <span className="text-green-100 text-sm">{testimonials[testimonialIdx].date}</span>
                      <span className="font-semibold flex items-center gap-1 text-green-100">
                        <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                          <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="2"/>
                          <text x="10" y="15" textAnchor="middle" fontSize="10" fill="currentColor">★</text>
                        </svg>
                        Trustpilot
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>




        {/* Contact Section */}
    <section className="bg-[#faf9f6] relative mt-20">
  <div className="grid grid-cols-1 lg:grid-cols-12 lg:min-h-[620px] relative">
    
    {/* Left: image pleine largeur */}
    <div className="lg:col-span-7 relative">
      <img
        src="https://cdn.wecookmeals.ca/static/v2/subscribe-box-7.jpg"
        alt="Personne mangeant un plat"
        className="w-full h-[260px] sm:h-[340px] lg:h-[620px] object-cover object-left"
      />
    </div>

    {/* Right: zone de la carte centrée */}
    <div className="lg:col-span-5 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 w-full max-w-[600px]">
        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-[#0f6b3a] mb-8 text-center lg:text-left">
          WeCook, on<br />cuisine pour vous
        </h1>

        <form className="space-y-6">
          {/* Champ email */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Courriel
            </label>
            <input
              type="email"
              placeholder="exemple@email.com"
              className="w-full h-[56px] md:h-[64px] rounded-xl border border-gray-300 px-4 text-lg outline-none focus:ring-4 focus:ring-green-200 focus:border-green-600"
            />
          </div>

          {/* Bouton */}
          <button
            type="submit"
            className="inline-flex items-center justify-center h-[56px] md:h-[64px] px-8 rounded-xl bg-[#138a4b] text-white text-lg font-bold hover:bg-[#0f7a42] transition w-full"
          >
            Commencer
          </button>

          {/* Lien de connexion */}
          <p className="text-sm text-gray-600 text-center">
            Vous avez un compte ?{" "}
            <a href="#" className="underline hover:text-gray-800">
              S’identifier
            </a>
          </p>
        </form>
      </div>
    </div>
  </div>
</section>



      <Footer />
    </div>
  )
}