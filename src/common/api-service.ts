import { HttpClient, json } from 'aurelia-fetch-client';
import environment from '../environment';

export abstract class ApiService<T>{
    constructor(protected http: HttpClient, protected actionUrl: string) {
        this.http.configure(config =>	
                            config
                                .useStandardConfiguration()
                                .withDefaults({ 
                                    headers: { 
                                        pragma: "no-cache",
                                        cache: "no-cache" 
                                    } 
                                })
                                .withBaseUrl(environment.baseAPIUrl)
                        );
    }

    async getAll() {
        try {
            const response = await this.http.fetch(this.actionUrl);
            return response.json() as Promise<T[]>;
        } catch (error) {
            return Promise.reject(new Error(error.statusText));
        }
    }

    async getById(id: number) {
        try {
            const response = await this.http.fetch(`${this.actionUrl}/${id}`);
            return response.json() as Promise<T>;
        } catch (error) {
            return Promise.reject(new Error(error.statusText));
        }
    }

    async create(T) {	
        try {
            const response = await this.http.fetch(this.actionUrl, { method: 'POST', body: json(T) });
            return response.json() as Promise<T>;
        } catch (error) {
            return Promise.reject(new Error(error.statusText));
        }				
    }	

    async update(id: number, T) {	
        try {
            await this.http.fetch(`${this.actionUrl}/${id}`, { method: 'PUT', body: json(T) });
        } catch (error) {
            return Promise.reject(new Error(error.statusText));
        }			
    }	
    
    async delete(id) {					
        try {
            await this.http.fetch(`${this.actionUrl}/${id}`, { method: 'DELETE' });
        } catch (error) {
            return Promise.reject(new Error(error.statusText));
        }			
    }	

    async search(searchTerm: string) {
        try {
            const response = await this.http.fetch(`${this.actionUrl}?searchTerm=${searchTerm}`);
            return response.json() as Promise<T[]>;
        } catch (error) {
            return Promise.reject(new Error(error.statusText));
        }
    }
} 