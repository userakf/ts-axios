import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import type { AxiosInstance } from 'axios'


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
}