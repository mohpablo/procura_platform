import { useQuery } from "@tanstack/react-query";
import { getAdminDashboardData } from "../api/admin.api";

export function useAdminDashboard() {
  const { data, error, isPending } = useQuery({
    queryKey: ["adminDashboard"],
    queryFn: async () => await getAdminDashboardData(),
  });
  return { data, error, isPending };
}
