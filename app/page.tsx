'use client'

import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { MealCard } from '@/components/meals/MealCard'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Star, Clock, Truck, Shield, ChefHat, Snowflake, Leaf } from 'lucide-react'
import { FaCanadianMapleLeaf } from "react-icons/fa"
import { useEffect, useState } from 'react'
import Marquee from 'react-fast-marquee'

// Supprime le tableau featuredMeals et utilise l'état meals
export default function HomePage() {
  // Testimonials data & state
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
  ];
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const [meals, setMeals] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/meals')
      .then(res => res.json())
      .then(data => {
        setMeals(data)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  const features = [
    {
      icon: ChefHat,
      title: 'Chef-Prepared',
      description: 'Meals crafted by professional chefs using premium ingredients'
    },
    {
      icon: Clock,
      title: 'Ready in Minutes',
      description: 'Heat and eat in under 5 minutes, perfect for busy lifestyles'
    },
    {
      icon: Truck,
      title: 'Fresh Delivery',
      description: 'Delivered fresh to your door with temperature-controlled packaging'
    },
    {
      icon: Shield,
      title: 'Quality Guaranteed',
      description: 'Satisfaction guaranteed or your money back, no questions asked'
    }
  ]

  // Options pour personnaliser le repas
  const mealOptions = [
    {
      label: "Riz et légumes",
      img: "https://cdn.wecookmeals.ca/static/personalize_sides_01.webp"
    },
    {
      label: "Patates et légumes",
      img: "https://cdn.wecookmeals.ca/static/personalize_sides_07.webp"
    },
    {
      label: "Légumes seulement",
      img: "https://cdn.wecookmeals.ca/static/personalize_sides_03.webp"
    },
    {
      label: "Quinoa et légumes",
      img: "https://cdn.wecookmeals.ca/static/personalize_sides_05.webp"
    }
  ];
  const [selectedOption, setSelectedOption] = useState(0);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      {/* default style for the texte: text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-orange-600 */}
      <section className="relative bg-[#fbf9f4] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                  ✨ Fresh Meals Delivered Daily
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Healthy Meals
                  <span className="text-green-700 font-bold"> 
                    {' '}Delivered{' '}
                  </span>
                  Fresh
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Skip the prep, skip the cleanup. Get chef-prepared, nutritionally balanced meals delivered to your door. 
                  Made with premium ingredients and lots of love.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8" asChild>
                  <Link href="/meals">
                    Browse Meals
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="border-green-200 hover:bg-green-50" asChild>
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-8 h-8 bg-gradient-to-r from-green-400 to-orange-400 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold">
                        {i}
                      </div>
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">2,500+ happy customers</span>
                </div>
                <div className="flex items-center space-x-1">
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">4.9/5 rating</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative">
                <Image
                  src="https://cdn.wecookmeals.ca/uploads/daEjC452QxfS1MpaNheDRmukXVqRkQ4ljdsa048K.jpg"
                  alt="Healthy meal bowl"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-lg">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">Fresh ingredients today</span>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 bg-white p-4 rounded-xl shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">420</div>
                    <div className="text-xs text-gray-600">calories</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Marquee Section (moved below hero) */}
      {/* default style border-b border-gray-100 */}
      <div className="w-full bg-white">
        <Marquee
          gradient={false}
          speed={120}
          className="py-6"
        >
          <div className="flex items-center gap-24 md:gap-32 lg:gap-40 text-lg font-semibold text-gray-700">
            {/* Repeat icons/text for seamless scroll */}
            {[...Array(2)].map((_, repeatIdx) => (
              <>
                <span className="flex items-center gap-4 min-w-[180px] md:min-w-[220px] lg:min-w-[240px]" key={`montreal-${repeatIdx}`}> {/* Canada maple leaf icon for Montreal */}
                  <FaCanadianMapleLeaf className="h-10 w-10 text-red-600" />
                  <span>Entreprise fondée à Montréal</span>
                </span>
                <span className="flex items-center gap-4 min-w-[180px] md:min-w-[220px] lg:min-w-[240px]" key={`chef-${repeatIdx}`}> <ChefHat className="h-10 w-10 text-green-500" /> <span>Pas de préparation ni de cuisine</span> </span>
                <span className="flex items-center gap-4 min-w-[180px] md:min-w-[220px] lg:min-w-[240px]" key={`truck-${repeatIdx}`}> <Truck className="h-10 w-10 text-orange-500" /> <span>Livraison à domicile ou au bureau</span> </span>
                <span className="flex items-center gap-4 min-w-[180px] md:min-w-[220px] lg:min-w-[240px]" key={`snow-${repeatIdx}`}> <Snowflake className="h-10 w-10 text-blue-400" /> <span>Frais, jamais congelé</span> </span>
                <span className="flex items-center gap-4 min-w-[180px] md:min-w-[220px] lg:min-w-[240px]" key={`leaf-${repeatIdx}`}> <Leaf className="h-10 w-10 text-green-600" /> <span>Ingrédients sains</span> </span>
                <span className="flex items-center gap-4 min-w-[180px] md:min-w-[220px] lg:min-w-[240px]" key={`clock-${repeatIdx}`}> <Clock className="h-10 w-10 text-yellow-500" /> <span>Prêt en 2 minutes</span> </span>
              </>
            ))}
          </div>
        </Marquee>
      </div>

      {/* How It Works Section (moved directly below brand slider) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left side: Title, description, button */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-green-700">Comment ça fonctionne ?</h2>
              <p className="text-lg text-gray-700">Économisez du temps et profitez de repas prêts-à-manger nutritifs en 3 étapes faciles.</p>
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 rounded-md">Commencer</Button>
            </div>
            {/* Right side: Steps */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="flex flex-col items-center text-center">
                <div className="text-6xl font-bold text-green-600 mb-2">1</div>
                <div className="mb-4">
                  <img src="https://cdn.wecookmeals.ca/static/v2/how-it-works-v2-1.jpg" alt="Sélectionnez vos repas" className="rounded-xl w-full max-w-xs object-cover mx-auto" />
                </div>
                <div className="font-semibold text-green-600 mb-1">Sélectionnez vos repas</div>
                <div className="text-gray-700 text-sm">Plus de 14 nouveaux repas personnalisables chaque semaine.</div>
              </div>
              {/* Step 2 */}
              <div className="flex flex-col items-center text-center">
                <div className="text-6xl font-bold text-green-600 mb-2">2</div>
                <div className="mb-4">
                  <img src="https://cdn.wecookmeals.ca/static/v2/how-it-works-v2-2.jpg" alt="On cuisine pour vous" className="rounded-xl w-full max-w-xs object-cover mx-auto" />
                </div>
                <div className="font-semibold text-green-600 mb-1">On cuisine pour vous</div>
                <div className="text-gray-700 text-sm">Recevez vos repas préparés par nos chefs directement à votre porte.</div>
              </div>
              {/* Step 3 */}
              <div className="flex flex-col items-center text-center">
                <div className="text-6xl font-bold text-green-600 mb-2">3</div>
                <div className="mb-4">
                  <img src="https://cdn.wecookmeals.ca/static/v2/how-it-works-v2-3.jpg" alt="Chauffez, savourez, répétez" className="rounded-xl w-full max-w-xs object-cover mx-auto" />
                </div>
                <div className="font-semibold text-green-600 mb-1">Chauffez, savourez, répétez</div>
                <div className="text-gray-700 text-sm">Prêt à manger en 2 minutes ou moins, pas de cuisine ni de vaisselle.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personnalisez vos repas Section */}
      <section className="py-20 bg-green-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
          {/* Left: Titre, description, options */}
          <div className="flex-1 w-full mb-12 lg:mb-0 flex flex-col items-center lg:items-start">
            <div className="w-full max-w-lg">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center lg:text-left">Personnalisez vos repas</h2>
              <p className="text-lg text-white mb-8 text-center lg:text-left">
                Adaptez vos repas à vos besoins avec une sélection d'accompagnements équilibrés.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                {mealOptions.map((option, idx) => (
                  <button
                    key={option.label}
                    onClick={() => setSelectedOption(idx)}
                    className={`relative rounded-2xl px-6 py-8 text-lg font-semibold transition-all duration-150
                      ${selectedOption === idx
                        ? "bg-green-100 text-green-900 shadow-lg border-2 border-green-400"
                        : "bg-white text-green-900 hover:bg-green-50 border border-transparent"}
                    `}
                    style={{ minHeight: 120 }}
                  >
                    {option.label}
                    {selectedOption === idx && (
                      <span className="absolute top-2 right-2 bg-green-400 text-white rounded-full w-6 h-6 flex items-center justify-center">
                        ✓
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
          {/* Right: Image dynamique avec border-radius plus prononcé */}
          <div className="flex-1 w-full flex justify-center items-center">
            <img
              src={mealOptions[selectedOption].img}
              alt={mealOptions[selectedOption].label}
              className="rounded-[48px] bg-white shadow-xl object-cover w-full max-w-2xl h-auto"
              style={{ minWidth: 320, maxWidth: 520, width: '100%' }}
            />
          </div>
        </div>
      </section>

      {/* Featured Meals */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <Badge className="bg-orange-100 text-orange-800">Weekly Featured</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              This Week's Fresh Selections
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Handpicked by our chefs, these meals showcase the best seasonal ingredients and flavors
            </p>
          </div>

          {loading ? (
            <div className="text-center text-gray-500">Loading meals...</div>
          ) : meals.length === 0 ? (
            <div className="text-center text-gray-500">No meals available.</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {meals.map((meal) =>
                typeof meal === 'object' && meal !== null ? (
                  <MealCard key={meal.id} {...meal} />
                ) : null
              )}
            </div>
          )}

          <div className="text-center">
            <Button size="lg" variant="outline" className="border-green-200 hover:bg-green-50" asChild>
              <Link href="/meals">
                View All Meals
                <ArrowRight className="w-5 h-5 ml-2" />
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



{/* contact informations sections */}
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
    





      {/* Features */}
      {/* <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Why Choose MealDelivery?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're committed to bringing you the highest quality meals with unmatched convenience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      {/* <section className="py-20 bg-gradient-to-r from-green-600 to-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-white">
                Ready to Start Your Healthy Journey?
              </h2>
              <p className="text-xl text-green-100">
                Join thousands of satisfied customers who've made healthy eating effortless
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 px-8" asChild>
                <Link href="/meals">Order Your First Meal</Link>
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-green-600" asChild>
                <Link href="/auth/signup">Create Free Account</Link>
              </Button>
            </div>

            <div className="flex items-center justify-center space-x-8 pt-8 text-green-100">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">Free</div>
                <div className="text-sm">Delivery on orders $40+</div>
              </div>
              <div className="w-px h-8 bg-green-300"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">24/7</div>
                <div className="text-sm">Customer support</div>
              </div>
              <div className="w-px h-8 bg-green-300"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">100%</div>
                <div className="text-sm">Satisfaction guaranteed</div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <Footer />
    </div>
  )
}