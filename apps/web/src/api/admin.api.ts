import type { AdminDashboardData } from "../types/admin.types";
import { client } from "./client";

export const getAdminDashboardData = async (): Promise<AdminDashboardData> => {
  try {
    const token = localStorage.getItem("access_token");
    if (!token) {
      throw new Error("No token found in localStorage");
    }
    const response = await client.get("admin/dashboard", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("Response from getAdminDashboardData API:", response.data);
    return response.data;
  } catch (err) {
    if (err && typeof err === "object" && "response" in err) {
      const axiosError = err as { response?: { data?: unknown } };
      console.log(axiosError.response?.data);
    } else {
      console.log("An unexpected error occurred:", err);
    }
    throw err;
  }
};
