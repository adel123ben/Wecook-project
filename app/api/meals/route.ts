import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET() {
  // Récupère tous les produits
  const meals = await prisma.meal.findMany()
  return NextResponse.json(meals)
}

export async function POST(req: Request) {
  // Crée un nouveau produit
  const data = await req.json()
  const meal = await prisma.meal.create({ data })
  return NextResponse.json(meal)
}

export async function PUT(req: Request) {
  // Modifie un produit
  const data = await req.json()
  const { id, ...update } = data
  const meal = await prisma.meal.update({ where: { id }, data: update })
  return NextResponse.json(meal)
}

export async function DELETE(req: Request) {
  // Supprime un produit
  const { id } = await req.json()
  await prisma.meal.delete({ where: { id } })
  return NextResponse.json({ success: true })
}
