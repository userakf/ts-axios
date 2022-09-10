import axios from "axios";
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

interface RequestOptions {

}

export class QKAxios {
    private axiosInstance: AxiosInstance
    private readonly options: AxiosRequestConfig
    constructor(options: AxiosRequestConfig) {
        this.options = options
        this.axiosInstance = axios.create(options)
        this.setupInterceptors()
    }

    setupInterceptors() {
        this.axiosInstance.interceptors.request.use((config: AxiosRequestConfig) => {
            console.log('请求拦截');

            return config
        }, undefined)

        this.axiosInstance.interceptors.response.use((res: AxiosResponse<any>) => {
            console.log('响应拦截');

            return res
        }, undefined)
    }
    get<T = any>(config: AxiosRequestConfig, options?: RequestOptions): Promise<T> {
        return null
    }
    post<T = any>(config: AxiosRequestConfig, options?: RequestOptions): Promise<T> {
        return null
    }
    put<T = any>(config: AxiosRequestConfig, options?: RequestOptions): Promise<T> {
        return null
    }
    del<T = any>(config: AxiosRequestConfig, options?: RequestOptions): Promise<T> {
        return null
    }
    request<T = any>(config: AxiosRequestConfig, options?: RequestOptions): Promise<T> {
        return null
    }
}
