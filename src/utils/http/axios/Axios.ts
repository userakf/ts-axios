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

    private getTransform() {
        const { transformRequest } = this.options
        return transformRequest
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
        return this.request({ ...config, method: 'GET' }, options)
    }
    post<T = any>(config: AxiosRequestConfig, options?: RequestOptions): Promise<T> {
        return this.request({ ...config, method: 'POST' }, options)
    }
    put<T = any>(config: AxiosRequestConfig, options?: RequestOptions): Promise<T> {
        return this.request({ ...config, method: 'PUT' }, options)
    }
    delete<T = any>(config: AxiosRequestConfig, options?: RequestOptions): Promise<T> {
        return this.request({ ...config, method: 'DELETE' }, options)
    }
    request<T = any>(config: AxiosRequestConfig, options?: RequestOptions): Promise<T> {
        let conf = config
        const transform = this.getTransform()
        const { transformRequest } = this.options
        const opt: RequestOptions = Object.assign({}, transformRequest, options)
        return null
    }

}
