import { autoinject } from 'aurelia-framework';
import { Prompt } from './prompt';
import { NotificationService, Notifications } from '../common/notification-service';
import { CourseService } from './course-service';
import { ICourse } from './course';
import { CourseEvents } from '../common/events-enum';

@autoinject()
export class Courses {
    courses: ICourse[] = [];

    constructor(
        private courseService: CourseService, 
        private notificationService: NotificationService) {}

    async activate() {
        return await this.getCourses();
    }

    async getCourses() {
        try {
            this.courses = await this.courseService.getAll();
        } catch (error) {
            this.notificationService.error(error);
        }
    }

    async deleteCourse(course: ICourse) {
        const confirmDelete = confirm('Do you really want to delete this record?');

        if (confirmDelete) {
            try {
                await this.courseService.delete(course.courseId);
                this.courses = this.courses.filter(({ courseId }) => courseId !== course.courseId);
                this.notificationService.success(Notifications.SuccessfulDeletion);
            } catch (error) {
                this.notificationService.error(error);
            }
        }
    }

    submit(){
        
      }
    
}