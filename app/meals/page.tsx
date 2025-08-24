'use client'

import { useState, useMemo } from 'react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { MealCard } from '@/components/meals/MealCard'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { Slider } from '@/components/ui/slider'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Search, Filter, X } from 'lucide-react'

// Sample meals data
const meals = [
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
  },
  {
    id: '5',
    name: 'Keto Beef Bowl',
    description: 'Grass-fed beef with cauliflower rice and avocado cream',
    image: 'https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 26.99,
    calories: 520,
    protein: 40,
    carbs: 8,
    fat: 38,
    category: 'KETO',
    available: true
  },
  {
    id: '6',
    name: 'Vegan Buddha Bowl',
    description: 'Mixed greens, quinoa, roasted vegetables, and tahini dressing',
    image: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 19.99,
    calories: 350,
    protein: 12,
    carbs: 52,
    fat: 14,
    category: 'VEGAN',
    available: true
  },
  {
    id: '7',
    name: 'Turkey Meatballs',
    description: 'Lean turkey meatballs with marinara sauce and zucchini noodles',
    image: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 21.99,
    calories: 380,
    protein: 32,
    carbs: 28,
    fat: 16,
    category: 'PROTEIN',
    available: false
  },
  {
    id: '8',
    name: 'Chocolate Protein Mousse',
    description: 'Rich chocolate mousse made with protein powder and avocado',
    image: 'https://images.pexels.com/photos/1640778/pexels-photo-1640778.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 12.99,
    calories: 280,
    protein: 20,
    carbs: 18,
    fat: 16,
    category: 'DESSERT',
    available: true
  }
]

const categories = [
  'All',
  'BREAKFAST',
  'LUNCH',
  'DINNER',
  'SNACK',
  'DESSERT',
  'VEGETARIAN',
  'VEGAN',
  'KETO',
  'PROTEIN'
]

export default function MealsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [priceRange, setPriceRange] = useState([0, 50])
  const [calorieRange, setCalorieRange] = useState([0, 600])
  const [sortBy, setSortBy] = useState('name')
  const [showFilters, setShowFilters] = useState(false)

  const filteredMeals = useMemo(() => {
    let filtered = meals.filter(meal => {
      const matchesSearch = meal.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           meal.description.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === 'All' || meal.category === selectedCategory
      const matchesPrice = meal.price >= priceRange[0] && meal.price <= priceRange[1]
      const matchesCalories = meal.calories >= calorieRange[0] && meal.calories <= calorieRange[1]
      
      return matchesSearch && matchesCategory && matchesPrice && matchesCalories
    })

    // Sort meals
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price
        case 'price-high':
          return b.price - a.price
        case 'calories-low':
          return a.calories - b.calories
        case 'calories-high':
          return b.calories - a.calories
        default:
          return a.name.localeCompare(b.name)
      }
    })

    return filtered
  }, [searchTerm, selectedCategory, priceRange, calorieRange, sortBy])

  const clearFilters = () => {
    setSearchTerm('')
    setSelectedCategory('All')
    setPriceRange([0, 50])
    setCalorieRange([0, 600])
    setSortBy('name')
  }

  const activeFiltersCount = [
    searchTerm,
    selectedCategory !== 'All',
    priceRange[0] > 0 || priceRange[1] < 50,
    calorieRange[0] > 0 || calorieRange[1] < 600
  ].filter(Boolean).length

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Fresh Meals Catalog
          </h1>
          <p className="text-lg text-gray-600">
            Discover our selection of chef-prepared, nutritionally balanced meals
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="lg:w-80">
            <Card className="sticky top-24">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
                <CardTitle className="text-lg">Filters</CardTitle>
                <div className="flex items-center space-x-2">
                  {activeFiltersCount > 0 && (
                    <Badge variant="secondary">{activeFiltersCount}</Badge>
                  )}
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowFilters(!showFilters)}
                    className="lg:hidden"
                  >
                    <Filter className="w-4 h-4" />
                  </Button>
                </div>
              </CardHeader>
              
              <CardContent className={`space-y-6 ${showFilters ? 'block' : 'hidden lg:block'}`}>
                {/* Search */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Search</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <Input
                      placeholder="Search meals..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-9"
                    />
                  </div>
                </div>

                {/* Category */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Category</label>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map(category => (
                        <SelectItem key={category} value={category}>
                          {category === 'All' ? 'All Categories' : category.charAt(0) + category.slice(1).toLowerCase()}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Price Range */}
                <div className="space-y-3">
                  <label className="text-sm font-medium">Price Range</label>
                  <div className="px-2">
                    <Slider
                      value={priceRange}
                      onValueChange={setPriceRange}
                      max={50}
                      step={1}
                      className="w-full"
                    />
                  </div>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>

                {/* Calorie Range */}
                <div className="space-y-3">
                  <label className="text-sm font-medium">Calories</label>
                  <div className="px-2">
                    <Slider
                      value={calorieRange}
                      onValueChange={setCalorieRange}
                      max={600}
                      step={10}
                      className="w-full"
                    />
                  </div>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>{calorieRange[0]} cal</span>
                    <span>{calorieRange[1]} cal</span>
                  </div>
                </div>

                {/* Sort By */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Sort By</label>
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="name">Name (A-Z)</SelectItem>
                      <SelectItem value="price-low">Price (Low to High)</SelectItem>
                      <SelectItem value="price-high">Price (High to Low)</SelectItem>
                      <SelectItem value="calories-low">Calories (Low to High)</SelectItem>
                      <SelectItem value="calories-high">Calories (High to Low)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Clear Filters */}
                {activeFiltersCount > 0 && (
                  <Button
                    variant="outline"
                    onClick={clearFilters}
                    className="w-full"
                  >
                    <X className="w-4 h-4 mr-2" />
                    Clear All Filters
                  </Button>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Results Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-sm text-gray-600">
                  Showing {filteredMeals.length} of {meals.length} meals
                </p>
              </div>
            </div>

            {/* Meals Grid */}
            {filteredMeals.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredMeals.map((meal) => (
                  <MealCard key={meal.id} {...meal} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <Search className="w-12 h-12 mx-auto" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No meals found</h3>
                <p className="text-gray-600 mb-4">
                  Try adjusting your filters or search terms
                </p>
                <Button variant="outline" onClick={clearFilters}>
                  Clear All Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}