import { GET, PUT } from "../helpers/apis";

export const getOrdersAPI = () => GET("/orders");

export const updateOrderStatusAPI = (
  orderId: string,
  status: "accepted" | "rejected"
) =>
  PUT(`/orders/${orderId}/status`, { status });
