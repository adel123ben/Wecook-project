import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { MealCard } from '@/components/meals/MealCard'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Star, Clock, Truck, Shield, ChefHat } from 'lucide-react'

// Sample featured meals data
const featuredMeals = [
  {
    id: '1',
    name: 'Grilled Salmon with Quinoa',
    description: 'Fresh Atlantic salmon with organic quinoa and seasonal vegetables',
    image: 'https://images.pexels.com/photos/1199960/pexels-photo-1199960.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 24.99,
    calories: 420,
    protein: 35,
    carbs: 25,
    fat: 18,
    category: 'DINNER',
    available: true
  },
  {
    id: '2',
    name: 'Mediterranean Bowl',
    description: 'Chickpeas, feta, olives, and fresh herbs with olive oil dressing',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 18.99,
    calories: 380,
    protein: 15,
    carbs: 45,
    fat: 16,
    category: 'VEGETARIAN',
    available: true
  },
  {
    id: '3',
    name: 'Protein Power Breakfast',
    description: 'Scrambled eggs, turkey sausage, avocado, and sweet potato hash',
    image: 'https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 16.99,
    calories: 450,
    protein: 28,
    carbs: 35,
    fat: 22,
    category: 'BREAKFAST',
    available: true
  },
  {
    id: '4',
    name: 'Asian Stir-Fry',
    description: 'Teriyaki chicken with mixed vegetables and jasmine rice',
    image: 'https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 22.99,
    calories: 390,
    protein: 30,
    carbs: 42,
    fat: 12,
    category: 'LUNCH',
    available: true
  }
]

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

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 to-orange-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                  ✨ Fresh Meals Delivered Daily
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Healthy Meals
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-orange-600">
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
                  src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1000"
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {featuredMeals.map((meal) => (
              <MealCard key={meal.id} {...meal} />
            ))}
          </div>

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

      {/* Features */}
      <section className="py-20 bg-gray-50">
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
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-orange-600">
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
      </section>

      <Footer />
    </div>
  )
}