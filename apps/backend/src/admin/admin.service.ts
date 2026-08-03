import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AdminService {
  constructor(private prisma: PrismaService) {}

  async getDashboardData() {
    // 1. KPI Counts
    const [
      totalUsers,
      totalBuyers,
      totalSuppliers,
      verifiedSuppliers,
      pendingSupplierVerifications,
      totalProducts,
      pendingProductApprovals,
      totalCategories,
      totalOrders,
      totalRevenueResult,
      orderStatusCounts,
    ] = await Promise.all([
      this.prisma.user.count({ where: { deletedAt: null } }),
      this.prisma.user.count({ where: { role: 'BUYER', deletedAt: null } }),
      this.prisma.business.count({
        where: { type: 'SUPPLIER', deletedAt: null },
      }),
      this.prisma.business.count({
        where: { type: 'SUPPLIER', isVerified: true, deletedAt: null },
      }),
      this.prisma.business.count({
        where: { type: 'SUPPLIER', isVerified: false, deletedAt: null },
      }),
      this.prisma.product.count({ where: { deletedAt: null } }),
      this.prisma.product.count({
        where: { isApproved: false, deletedAt: null },
      }),
      this.prisma.category.count({ where: { deletedAt: null } }),
      this.prisma.order.count({ where: { deletedAt: null } }),
      this.prisma.order.aggregate({
        where: { deletedAt: null, status: 'DELIVERED' },
        _sum: { totalAmount: true },
      }),
      this.prisma.order.groupBy({
        by: ['status'],
        where: { deletedAt: null },
        _count: { status: true },
      }),
    ]);

    const totalRevenue = totalRevenueResult._sum.totalAmount ?? 0;

    // 2. Format Order Status Distribution
    const orderStatusMap = orderStatusCounts.reduce(
      (acc, curr) => {
        acc[curr.status] = curr._count.status;
        return acc;
      },
      {} as Record<string, number>,
    );

    const orderStatusDistribution = {
      pending: orderStatusMap['PENDING'] || 0,
      accepted: orderStatusMap['ACCEPTED'] || 0,
      inTransit: orderStatusMap['IN_TRANSIT'] || 0,
      delivered: orderStatusMap['DELIVERED'] || 0,
      cancelled: orderStatusMap['CANCELLED'] || 0,
    };

    // 3. Products by Category
    const productsByCategoryRaw = await this.prisma.category.findMany({
      where: { deletedAt: null },
      select: {
        name: true,
        _count: {
          select: { products: { where: { deletedAt: null } } },
        },
      },
    });

    const productsByCategory = productsByCategoryRaw.map((cat) => ({
      category: cat.name,
      count: cat._count.products,
    }));

    // 4. Recent Activity Logs (Combined feed)
    const [recentUsers, recentBusinesses, recentProducts, recentOrders] =
      await Promise.all([
        this.prisma.user.findMany({
          take: 3,
          orderBy: { createdAt: 'desc' },
          select: { fullName: true, createdAt: true },
        }),
        this.prisma.business.findMany({
          take: 3,
          orderBy: { createdAt: 'desc' },
          select: { companyName: true, isVerified: true, createdAt: true },
        }),
        this.prisma.product.findMany({
          take: 3,
          orderBy: { createdAt: 'desc' },
          select: { name: true, isApproved: true, createdAt: true },
        }),
        this.prisma.order.findMany({
          take: 3,
          orderBy: { createdAt: 'desc' },
          select: { id: true, createdAt: true },
        }),
      ]);

    return {
      kpiCards: {
        totalUsers,
        totalBuyers,
        totalSuppliers,
        verifiedSuppliers,
        pendingSupplierVerifications,
        totalProducts,
        pendingProductApprovals,
        totalCategories,
        totalOrders,
        totalRevenue,
      },
      orderStatus: orderStatusDistribution,
      charts: {
        productsByCategory,
      },
      recentActivity: {
        recentUsers,
        recentBusinesses,
        recentProducts,
        recentOrders,
      },
    };
  }
}
