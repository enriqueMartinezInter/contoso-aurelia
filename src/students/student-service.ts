import { autoinject } from 'aurelia-framework';
import { HttpClient } from 'aurelia-fetch-client';
import { ApiService } from '../common/api-service'
import { Student } from './student';

@autoinject()
export class StudentService extends ApiService<Student> {
    constructor(http: HttpClient, actionUrl: string) {
        super(http, 'students');
    }

    async getAll() {	
        try {
            const students = await super.getAll();
            return new Promise<Student[]>(resolve => resolve(students.map(Student.fromObject)));
        } catch (error) {
            return this.handleError(error);
        }							         
    }	

    async getById(id: number) {		
        try {
            const student = await super.getById(id);
            return new Promise<Student>(resolve => resolve(Student.fromObject(student)));
        } catch (error) {
            return this.handleError(error);
        }			
    }	
    
    async create(student: Student) {	
        try {
            const createdStudent = await super.create(student);
            return new Promise<Student>(resolve => resolve(Student.fromObject(createdStudent)));
        } catch (error) {
            return this.handleError(error);
        }				
    }	

    async search(searchTerm: string) {	
        try {
            const students = await super.search(searchTerm);
            return new Promise<Student[]>(resolve => resolve(students.map(Student.fromObject)));
        } catch (error) {
            return this.handleError(error);
        }							         
    }

    handleError(error) {
        console.error('StudentService:handleError', error);
        return Promise.reject(error);
    }
}