import {RouteConfig} from 'aurelia-router';
import {PLATFORM} from 'aurelia-pal';

export const routes: RouteConfig[] = [
    { 
        route: ['', 'home'],  
        name: 'home',       
        moduleId: PLATFORM.moduleName('./home/home'),      
        nav: false, 
        title: 'Home' 
    },
    { 
        route: 'students',  
        name: 'students',       
        moduleId: PLATFORM.moduleName('./students/students'),      
        nav: true, 
        title: 'Students' 
    },
    { 
        route: 'student-details/:id?',  
        name: 'student-details',       
        moduleId: PLATFORM.moduleName('./students/student-details/student-details'),      
        nav: false, 
        title: 'Student Details' 
    },
    { 
        route: 'courses',           
        name: 'courses',          
        moduleId: PLATFORM.moduleName('./courses/courses'),            
        nav: true, 
        title: 'Courses' 
    },
    { 
        route: 'course-details/:id?',  
        name: 'course-details',       
        moduleId: PLATFORM.moduleName('./courses/course-details/course-details'),      
        nav: false, 
        title: 'Course Details' 
    },
    { 
        route: 'enrollments',           
        name: 'enrollments',          
        moduleId: PLATFORM.moduleName('./enrollments/enrollments'),            
        nav: true, 
        title: 'Enrollments' 
    }
]