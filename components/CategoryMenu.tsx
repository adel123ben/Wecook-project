'use client'

import { useState, useEffect, useRef } from 'react'
import { ShoppingCart, Cookie, GlassWater, Egg, Utensils, Dumbbell } from 'lucide-react'

interface Category {
  id: string
  name: string
  icon: React.ComponentType<{ className?: string }>
}

const categories: Category[] = [
  { id: 'ready-meals', name: 'Repas prêt-à-manger', icon: ShoppingCart },
  { id: 'family-meals', name: 'Repas familial', icon: ShoppingCart },
  { id: 'snacks', name: 'Collations', icon: Cookie },
  { id: 'juices', name: 'Jus et Smoothies', icon: GlassWater },
  { id: 'breakfasts', name: 'Déjeuners', icon: Egg },
  { id: 'porridges', name: 'Gruaux', icon: Utensils },
  { id: 'proteins', name: 'Protéines', icon: Dumbbell }
]

interface CategoryMenuProps {
  activeCategory?: string
  onCategoryChange?: (categoryId: string) => void
}

export function CategoryMenu({ activeCategory = 'ready-meals', onCategoryChange }: CategoryMenuProps) {
  const [selectedCategory, setSelectedCategory] = useState(activeCategory)
  const [isSticky, setIsSticky] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (menuRef.current) {
        const menuTop = menuRef.current.offsetTop
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop

        if (scrollTop > menuTop) {
          setIsSticky(true)
        } else {
          setIsSticky(false)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(categoryId)
    onCategoryChange?.(categoryId)
  }

  return (
    <>
      {/* Spacer to prevent content jump when menu becomes sticky */}
      {!isSticky && <div className="h-12"></div>}

      <div
        ref={menuRef}
        className={`w-full bg-white border-b border-gray-100 transition-all duration-300 ${
          isSticky
            ? 'fixed top-0 left-0 right-0 z-50 shadow-lg pt-2 pb-2'
            : 'relative pt-2'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center py-2">
            <div className="flex items-center space-x-4 overflow-x-auto scrollbar-hide [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {categories.map((category) => {
              const Icon = category.icon
              const isActive = selectedCategory === category.id

              return (
                <div key={category.id} className="relative">
                  <button
                    onClick={() => handleCategoryClick(category.id)}
                    className={`
                      flex items-center space-x-2 px-2 py-1 rounded-lg transition-all duration-200 whitespace-nowrap
                      ${isActive
                        ? 'bg-[#E6F4EC] text-gray-900 font-semibold'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                      }
                    `}
                  >
                    {/* Icon Circle */}
                    <div className={`
                      ${isSticky ? 'w-6 h-6' : 'w-8 h-8'} rounded-full flex items-center justify-center
                      ${isActive ? 'bg-[#E6F4EC]' : 'bg-gray-100'}
                    `}>
                      <Icon className={`
                        ${isSticky ? 'w-3 h-3' : 'w-4 h-4'}
                        ${isActive ? 'text-[#00894D]' : 'text-gray-500'}
                      `} />
                    </div>

                    {/* Text */}
                    <span className={`${isSticky ? 'text-xs' : 'text-sm'}`}>{category.name}</span>
                  </button>

                  {/* Active Underline */}
                  {isActive && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-[#00894D] rounded-full"></div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
    </>
  )
}