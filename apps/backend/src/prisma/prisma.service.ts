import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaMariaDb } from '@prisma/adapter-mariadb';
import { PrismaClient } from '../../generated/prisma/client';
import * as bcrypt from 'bcrypt';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor() {
    const connString: string =
      process.env.DATABASE_URL ||
      'mysql://root:password@localhost:3306/procura';

    const adapter = new PrismaMariaDb(connString);

    super({ adapter });
  }

  async onModuleInit() {
    await this.$connect();
    const existingUser = await this.user.findUnique({
      where: { email: 'admin@procura.com' },
    });

    if (!existingUser) {
      const hashedPassword = await bcrypt.hash('password123', 10);

      await this.user.create({
        data: {
          email: 'admin@procura.com',
          fullName: 'Admin User',
          passwordHash: hashedPassword,
        },
      });

      console.log('🌱 Default user seeded successfully: admin@procura.com');
    }
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}
