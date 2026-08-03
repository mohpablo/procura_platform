type productsByCategory = {
  category: string;
  count: number;
};

type recentUser = {
  fullName: string;
  createdAt: string;
};

type recentBusiness = {
  companyName: string;
  isVerified: boolean;
  createdAt: string;
};

type recentProduct = {
  name: string;
  isApproved: boolean;
  createdAt: string;
};

type recentOrder = {
  id: string;
  createdAt: string;
};

type AdminDashboardData = {
  kpiCards: {
    totalUsers: number;
    totalBuyers: number;
    totalSuppliers: number;
    verifiedSuppliers: number;
    pendingSupplierVerifications: number;
    totalProducts: number;
    pendingProductApprovals: number;
    totalCategories: number;
    totalOrders: number;
    totalRevenue: string | number;
  };
  orderStatus: {
    pending: number;
    accepted: number;
    inTransit: number;
    delivered: number;
    cancelled: number;
  };
  charts: {
    productsByCategory: productsByCategory[];
  };
  recentActivity: {
    recentUsers: recentUser[];
    recentBusinesses: recentBusiness[];
    recentProducts: recentProduct[];
    recentOrders: recentOrder[];
  };
};

export type { AdminDashboardData };
