const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
  try {
    // Delete existing records
    await prisma.product.deleteMany()

    // Create sample products
    const products = [
      {
        name: 'Wireless Headphones',
        description: 'High-quality wireless headphones with noise cancellation',
        price: 199.99,
        imageUrl: '/images/products/headphones.jpg',
      },
      {
        name: 'Smart Watch',
        description: 'Feature-rich smartwatch with fitness tracking',
        price: 299.99,
        imageUrl: '/images/products/smartwatch.jpg',
      },
      {
        name: 'Laptop Backpack',
        description: 'Durable laptop backpack with multiple compartments',
        price: 49.99,
        imageUrl: '/images/products/backpack.jpg',
      }
    ]

    for (const product of products) {
      await prisma.product.create({
        data: product
      })
    }

    console.log('✅ Seed data inserted successfully')
  } catch (error) {
    console.error('❌ Error seeding database:', error)
    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }
}

main()