import axios, { AxiosRequestConfig } from "axios";

const BASE_URL = "http://localhost:8080";

const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

// 🔐 Attach token globally
api.interceptors.request.use(
    (config: any) => {
        const token = localStorage.getItem("token");
        if (token && config.headers) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error: any) => Promise.reject(error)
);

// ❌ Global error handling
api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            localStorage.clear();
            window.location.href = "/pages/login"
        }
        return Promise.reject(error);
    }
);

/* ===============================
   GLOBAL HTTP METHODS
================================ */

export const GET = async <T>(
    url: string,
    config?: AxiosRequestConfig
): Promise<T> => {
    const res = await api.get<T>(url, config);
    return res.data;
};

export const POST = async <T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
): Promise<T> => {
    console.log("api_post_", url, data, config);

    const res = await api.post<T>(url, data, config);

    return res.data;
};

export const PUT = async <T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
): Promise<T> => {
    const res = await api.put<T>(url, data, config);
    return res.data;
};

export const DELETE = async <T>(
    url: string,
    config?: AxiosRequestConfig
): Promise<T> => {
    const res = await api.delete<T>(url, config);
    return res.data;
};

export default api;
