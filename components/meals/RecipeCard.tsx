// 'use client'

// import { Card } from '@/components/ui/card'
// import { Badge } from '@/components/ui/badge'
// import { Check } from 'lucide-react'
// import Link from 'next/link'

// interface RecipeCardProps {
//   id: string
//   name: string
//   image: string
//   category: string
//   available: boolean
// }

// export function RecipeCard({ id, name, image, category, available }: RecipeCardProps) {
//   // Determine if meal is premium based on category or other logic
//   const isPremium = ['DINNER', 'LUNCH'].includes(category.toUpperCase());
//   const isFamilyFormat = category.toUpperCase() === 'FAMILY';

//   return (
//     <Link href={`/meals/${id}`}>
//       <div className="bg-white rounded-xl   transition-shadow duration-300 cursor-pointer w-72 flex flex-col justify-between" style={{ minHeight: '340px' }}>
//         <div className="rounded-t-xl overflow-hidden aspect-[4/3]">
//           <img
//             src={image}
//             alt={name}
//             className="w-full h-full object-cover"
//           />
//         </div>
//         {(isPremium || isFamilyFormat) && (
//           <div className="bg-green-700 text-white flex items-center px-4 py-2 rounded-b-xl" style={{ minHeight: '40px' }}>
//             {isPremium && (
//               <span className="flex items-center gap-2 text-sm font-semibold">
//                 <Check className="w-4 h-4" /> Repas premium
//               </span>
//             )}
//             {isFamilyFormat && (
//               <span className="ml-auto text-xs font-medium bg-white text-green-700 border border-green-700 rounded-full px-3 py-1">Format familial disponible</span>
//             )}
//             {!isPremium && !isFamilyFormat && <span className="flex-1" />}
//             <span className="ml-auto"><svg width="18" height="18" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#fff"/><text x="50%" y="55%" textAnchor="middle" fill="#00894d" fontSize="16" fontWeight="bold" dy=".3em">i</text></svg></span>
//           </div>
//         )}
//         <div className="px-4 py-3">
//           <h3 className="font-medium text-base leading-relaxed text-gray-900 line-clamp-2">
//             {name}
//           </h3>
//         </div>
//       </div>
//     </Link>
//   );
// }

// 'use client'

// import Link from 'next/link'
// import { Check } from 'lucide-react'

// interface RecipeCardProps {
//   id: string
//   name: string
//   image: string
//   category: string
//   available: boolean
// }

// export function RecipeCard({ id, name, image, category }: RecipeCardProps) {
//   const isPremium = ['DINNER', 'LUNCH'].includes(category.toUpperCase());
//   const isFamilyFormat = category.toUpperCase() === 'FAMILY';

//   return (
//     <Link href={`/meals/${id}`}>
//       <div className="bg-white rounded-xl shadow transition-shadow duration-300 cursor-pointer overflow-hidden w-72 flex flex-col">
        
//         {/* Image */}
//         <div className="relative aspect-[4/3]">
//           <img
//             src={image}
//             alt={name}
//             className="w-full h-full object-cover"
//           />

//           {/* Badge Premium en overlay */}
//           {isPremium && (
//             <div className="absolute bottom-0 left-0 w-full bg-[#138a4b] text-white flex items-center justify-between px-4 py-2">
//               <span className="flex items-center gap-2 text-sm font-semibold">
//                 <Check className="w-4 h-4" /> Repas premium
//               </span>
//               <span className="w-5 h-5 flex items-center justify-center bg-white text-[#138a4b] font-bold rounded-full text-xs">
//                 i
//               </span>
//             </div>
//           )}
//         </div>

//         {/* Contenu texte */}
//         <div className="p-4">
//           {/* Badge Format Familial */}
//           {isFamilyFormat && (
//             <span className="inline-block mb-2 text-xs font-medium border border-[#138a4b] text-[#138a4b] rounded-full px-3 py-1">
//               Format familial disponible
//             </span>
//           )}

//           {/* Titre */}
//           <h3 className="font-medium text-base leading-relaxed text-gray-900 line-clamp-2">
//             {name}
//           </h3>
//         </div>
//       </div>
//     </Link>
//   );
// }

// 'use client'

// import Link from 'next/link'
// import { Check } from 'lucide-react'

// interface RecipeCardProps {
//   id: string
//   name: string
//   image: string
//   category: string
//   available: boolean
// }

// export function RecipeCard({ id, name, image, category }: RecipeCardProps) {
//   const isPremium = ['DINNER', 'LUNCH'].includes(category.toUpperCase());
//   const isFamilyFormat = category.toUpperCase() === 'FAMILY';

//   return (
//     <Link href={`/meals/${id}`}>
//       <div
//         className="bg-white rounded-lg  flex flex-col overflow-hidden flex-shrink-0 w-60 md:w-64 lg:w-64"
//         style={{ minHeight: '340px' }} // même hauteur pour toutes
//       >
//         {/* Image */}
//         <div className="relative aspect-[4/3]">
//           <img
//             src={image}
//             alt={name}
//             className="w-full h-full object-cover"
//           />

//           {/* Badge Premium en overlay */}
//           {isPremium && (
//             <div className="absolute bottom-0 left-0 w-full bg-[#138a4b] text-white flex items-center justify-between px-4 py-2">
//               <span className="flex items-center gap-2 text-sm font-semibold">
//                 <Check className="w-4 h-4" /> Repas premium
//               </span>
//               <span className="w-5 h-5 flex items-center justify-center bg-white text-[#138a4b] font-bold rounded-full text-xs">
//                 i
//               </span>
//             </div>
//           )}
//         </div>

//         {/* Contenu texte */}
//         <div className="p-4 flex flex-col justify-between flex-1">
//           {/* Badge Format Familial */}
//           {isFamilyFormat && (
//             <span className="inline-block mb-2 text-xs font-medium   text-[#138a4b] rounded-full px-3 py-1">
//               Format familial disponible
//             </span>
//           )}

//           {/* Titre (fixer la hauteur pour uniformité) */}
//           <h3 className="font-medium text-base leading-relaxed text-gray-900 line-clamp-2 min-h-[48px]">
//             {name}
//           </h3>
//         </div>
//       </div>
//     </Link>
//   );
// }




'use client'

import Link from 'next/link'
import { Check } from 'lucide-react'

interface RecipeCardProps {
  id: string
  name: string
  image: string
  category: string
  available: boolean
}

export function RecipeCard({ id, name, image, category }: RecipeCardProps) {
  const isPremium = ['DINNER', 'LUNCH'].includes(category.toUpperCase());
  const isFamilyFormat = category.toUpperCase() === 'FAMILY';

  return (
    <Link href={`/meals/${id}`}>
      <div
        className="bg-white rounded-lg flex flex-col overflow-hidden flex-shrink-0 w-60 md:w-64 lg:w-64"
        style={{ minHeight: '340px' }}
      >
        {/* Image */}
        <div className="relative aspect-[4/3]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />

          {/* Badge Premium en overlay */}
          {isPremium && (
            <div className="absolute bottom-0 left-0 w-full bg-green-900 text-white flex items-center justify-between px-4 py-2">
              <span className="flex items-center gap-2 text-sm font-normal">
                <Check className="w-4 h-4" /> Repas premium
              </span>
              <span className="w-5 h-5 flex items-center justify-center bg-white text-green-900 font-bold rounded-full text-xs">
                i
              </span>
            </div>
          )}
        </div>

        {/* Contenu texte */}
        <div className="p-4 flex flex-col justify-between flex-1">
          {/* Badge Format Familial */}
          {isFamilyFormat && (
            <span className="inline-block mb-2 text-xs font-normal text-green-900 border border-green-900 rounded-full px-3 py-1">
              Format familial disponible
            </span>
          )}

          {/* Titre (fixer la hauteur pour uniformité) */}
          <h3 className="font-light text-base leading-relaxed text-gray-900 line-clamp-2 min-h-[48px]">
            {name}
          </h3>
        </div>
      </div>
    </Link>
  );
}


// 'use client'

// import Link from 'next/link'
// import { Check } from 'lucide-react'

// interface RecipeCardProps {
//   id: string
//   name: string
//   image: string
//   category: string
//   available: boolean
// }

// export function RecipeCard({ id, name, image, category }: RecipeCardProps) {
//   const isPremium = ['DINNER', 'LUNCH'].includes(category.toUpperCase());
//   const isFamilyFormat = category.toUpperCase() === 'FAMILY';

//   return (
//     <Link href={`/meals/${id}`}>
//       <div
//         className="bg-white rounded-lg flex flex-col overflow-hidden flex-shrink-0 w-60 md:w-64 lg:w-64"
//         style={{ minHeight: '340px' }}
//       >
//         {/* Image */}
//         <div className="relative aspect-[4/3] overflow-hidden">
//           <img
//             src={image}
//             alt={name}
//             className="w-full h-full object-cover scale-105"
//           />

//           {/* Badge Premium en overlay (fin comme sur ton screenshot) */}
//           {isPremium && (
//             <div className="absolute bottom-0 left-0 w-full bg-green-900 text-white flex items-center justify-between px-3 py-1">
//               <span className="flex items-center gap-2 text-xs font-normal">
//                 <Check className="w-3 h-3" /> Repas premium
//               </span>
//               <span className="w-4 h-4 flex items-center justify-center bg-white text-green-900 font-bold rounded-full text-[10px]">
//                 i
//               </span>
//             </div>
//           )}
//         </div>

//         {/* Contenu texte */}
//         <div className="p-4 flex flex-col justify-between flex-1">
//           {/* Badge Format Familial */}
//           {isFamilyFormat && (
//             <span className="inline-block mb-2 text-xs font-normal text-green-900 border border-green-900 rounded-full px-3 py-1">
//               Format familial disponible
//             </span>
//           )}

//           {/* Titre (fixer la hauteur pour uniformité) */}
//           <h3 className="font-light text-base leading-relaxed text-gray-900 line-clamp-2 min-h-[48px]">
//             {name}
//           </h3>
//         </div>
//       </div>
//     </Link>
//   );
// }



