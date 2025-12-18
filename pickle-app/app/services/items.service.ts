import { GET, POST, PUT, DELETE } from "../helpers/apis";

export const getItemsAPI = () => GET("/api/items/");

export const addItemAPI = (data: any) => POST("/api/items/", data);

export const updateItemAPI = (id: string, data: any) =>
  PUT(`/api/items/${id}`, data);

export const deleteItemAPI = (id: string) =>
  DELETE(`/api/items/${id}`);
