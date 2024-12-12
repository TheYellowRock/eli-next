
import { prisma } from './db'

export async function getProducts() {
  try {
    const products = await prisma.product.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    })
    return products
  } catch (error) {
    console.error('Error fetching products:', error)
    return []
  }
}

export async function getRandomMenProducts() {
  try {
    const products = await prisma.product.findMany({
      where: {
        category: 'men',
      },
      orderBy: {
        createdAt: 'desc',
      },
      take: 5,
    });
    return products;
  } catch (error) {
    console.error('Error fetching men products:', error);
    return [];
  }
}

export async function getRandomWomenProducts() {
  try {
    const products = await prisma.product.findMany({
      where: {
        category: 'women',
      },
      orderBy: {
        createdAt: 'desc',
      },
      take: 5,
    });
    return products;
  } catch (error) {
    console.error('Error fetching women products:', error);
    return [];
  }
}

export async function getProduct(id: number) {
  try {
    const product = await prisma.product.findUnique({
      where: {
        id: id,
      },
    })
    return product
  } catch (error) {
    console.error('Error fetching product:', error)
    return null
  }
}

export async function createProduct(data: {
  name: string
  description: string
  price: number
  category: string
  imageUrl?: string
}) {
  try {
    const product = await prisma.product.create({
      data
    })
    return product
  } catch (error) {
    console.error('Error creating product:', error)
    throw error
  }
}