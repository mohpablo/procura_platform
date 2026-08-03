import {
  Role,
  BusinessType,
  OrderStatus,
  DocumentStatus,
  Category,
} from '../generated/prisma';
import * as bcrypt from 'bcrypt';
import { faker } from '@faker-js/faker';
import { PrismaService } from '../src/prisma/prisma.service';

const prisma = new PrismaService();

async function main() {
  console.log('🌱 Starting database seeding with Faker...');

  // 1. Clean existing data
  console.log('🧹 Cleaning existing data...');
  await prisma.shipment.deleteMany();
  await prisma.orderItem.deleteMany();
  await prisma.order.deleteMany();
  await prisma.productImage.deleteMany();
  await prisma.product.deleteMany();
  await prisma.category.deleteMany();
  await prisma.address.deleteMany();
  await prisma.verificationDocument.deleteMany();
  await prisma.business.deleteMany();
  await prisma.user.deleteMany();

  const hashedPassword = await bcrypt.hash('Password123!', 10);

  // 2. Create Admin User Manually
  console.log('👑 Seeding Admin User...');
  await prisma.user.create({
    data: {
      email: 'admin@procura.com',
      passwordHash: hashedPassword,
      fullName: 'System Administrator',
      role: Role.ADMIN,
      phoneNumber: '+201000000000',
    },
  });

  // 3. Create Categories (Parent + Subcategories)
  console.log('📂 Seeding Categories...');
  const categoryNames = [
    'Agriculture & Food',
    'Electronics & Tools',
    'Packaging & Supplies',
  ];
  const createdCategories: Category[] = [];

  for (const catName of categoryNames) {
    const parent = await prisma.category.create({ data: { name: catName } });

    // Create 2 subcategories for each
    for (let i = 0; i < 2; i++) {
      const sub = await prisma.category.create({
        data: {
          name: faker.commerce.department(),
          parentId: parent.id,
        },
      });
      createdCategories.push(sub);
    }
  }

  // 4. Create Multiple Suppliers & Buyers
  console.log('👤🏢 Seeding Users, Businesses, Addresses & Documents...');
  const suppliers: any[] = [];
  const buyers: any[] = [];

  // Create 3 Suppliers
  for (let i = 0; i < 3; i++) {
    const user = await prisma.user.create({
      data: {
        email: faker.internet.email(),
        passwordHash: hashedPassword,
        fullName: faker.person.fullName(),
        role: Role.SUPPLIER,
        phoneNumber: faker.phone.number(),
      },
    });

    const business = await prisma.business.create({
      data: {
        userId: user.id,
        type: BusinessType.SUPPLIER,
        companyName: faker.company.name() + ' Supplies',
        isVerified: true,
        logoUrl: faker.image.url(),
      },
    });

    await prisma.verificationDocument.create({
      data: {
        businessId: business.id,
        type: 'COMMERCIAL_REGISTER',
        fileUrl: faker.internet.url(),
        status: DocumentStatus.APPROVED,
      },
    });

    await prisma.address.create({
      data: {
        businessId: business.id,
        addressLine: faker.location.streetAddress(),
        city: faker.location.city(),
        latitude: faker.location.latitude(),
        longitude: faker.location.longitude(),
      },
    });

    suppliers.push(business);
  }

  // Create 3 Buyers
  for (let i = 0; i < 3; i++) {
    const user = await prisma.user.create({
      data: {
        email: faker.internet.email(),
        passwordHash: hashedPassword,
        fullName: faker.person.fullName(),
        role: Role.BUYER,
        phoneNumber: faker.phone.number(),
      },
    });

    const business = await prisma.business.create({
      data: {
        userId: user.id,
        type: BusinessType.BUYER,
        companyName: faker.company.name() + ' Retail',
        isVerified: true,
        logoUrl: faker.image.url(),
      },
    });

    const address = await prisma.address.create({
      data: {
        businessId: business.id,
        addressLine: faker.location.streetAddress(),
        city: faker.location.city(),
        latitude: faker.location.latitude(),
        longitude: faker.location.longitude(),
      },
    });

    buyers.push({ business, address });
  }

  // 5. Create Products for Suppliers
  console.log('📦 Seeding Products...');
  const createdProducts: any[] = [];

  for (const supplier of suppliers) {
    // Each supplier gets 4 products
    for (let i = 0; i < 4; i++) {
      const randomCategory = faker.helpers.arrayElement(createdCategories);
      const product = await prisma.product.create({
        data: {
          supplierId: supplier.id,
          categoryId: randomCategory.id,
          name: faker.commerce.productName(),
          description: faker.commerce.productDescription(),
          unitType: faker.helpers.arrayElement(['KG', 'BOX', 'BAG', 'LITER']),
          pricePerUnit: parseFloat(faker.commerce.price({ min: 10, max: 500 })),
          minOrderQty: faker.number.int({ min: 5, max: 50 }),
          coverImageUrl: faker.image.url(),
          isAvailable: true,
          isApproved: true,
        },
      });
      createdProducts.push(product);
    }
  }

  // 6. Create Orders & Order Items
  console.log('🛒 Seeding Orders...');
  for (const buyerData of buyers) {
    // Each buyer makes 2 random orders
    for (let i = 0; i < 2; i++) {
      const randomSupplier = faker.helpers.arrayElement(suppliers);
      const supplierProducts = createdProducts.filter(
        (p) => p.supplierId === randomSupplier.id,
      );

      if (supplierProducts.length === 0) continue;

      const orderProducts = faker.helpers.arrayElements(
        supplierProducts,
        Math.min(2, supplierProducts.length),
      );

      let totalAmount = 0;
      const orderItemsData = orderProducts.map((prod) => {
        const qty = faker.number.int({ min: 10, max: 30 });
        const unitPrice = Number(prod.pricePerUnit);
        const totalPrice = qty * unitPrice;
        totalAmount += totalPrice;

        return {
          productId: prod.id,
          quantity: qty,
          unitPrice: unitPrice,
          totalPrice: totalPrice,
        };
      });

      await prisma.order.create({
        data: {
          buyerId: buyerData.business.id,
          supplierId: randomSupplier.id,
          shippingAddressId: buyerData.address.id,
          status: faker.helpers.enumValue(OrderStatus),
          totalAmount: totalAmount,
          items: {
            create: orderItemsData,
          },
          shipment: {
            create: {
              logisticsPartner: faker.company.name() + ' Logistics',
              trackingNumber: faker.string.alphanumeric(10).toUpperCase(),
              status: 'DISPATCHED',
            },
          },
        },
      });
    }
  }

  console.log(
    '✅ Mass seeding completed successfully with manual Admin and Faker data!',
  );
}

main()
  .catch((e) => {
    console.error('❌ Error during seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
