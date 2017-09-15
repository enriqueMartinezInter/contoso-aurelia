import { autoinject } from 'aurelia-framework';
import { HttpClient } from 'aurelia-fetch-client';
import { ApiService } from '../common/api-service'
import { ICourse } from './course';

@autoinject()
export class CourseService extends ApiService<ICourse> {
    constructor(http: HttpClient, actionUrl: string) {
        super(http, 'courses');
    }

    async getAll() : Promise<ICourse[]> {	
        try {
            return await super.getAll();
        } catch (error) {
            return this.handleError(error);
        }							         
    }	

    async getById(id: number) : Promise<ICourse> {		
        try {
            return await super.getById(id);
        } catch (error) {
            return this.handleError(error);
        }			
    }	
    
    async create(course: ICourse): Promise<ICourse> {	
        try {
            return await super.create(course);
        } catch (error) {
            return this.handleError(error);
        }				
    }	

    async search(searchTerm: string): Promise<ICourse[]> {	
        try {
            return await super.search(searchTerm);
        } catch (error) {
            return this.handleError(error);
        }							         
    }

    handleError(error) {
        console.error('CourseService:handleError', error);
        return Promise.reject(error);
    }
}

