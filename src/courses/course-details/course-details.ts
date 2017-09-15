import { autoinject } from 'aurelia-framework';
import { NotificationService, Notifications } from '../../common/notification-service';
import { CourseService } from '../course-service';
import { ICourse } from '../course';

@autoinject()
export class CourseDetails {
    course: ICourse;

    constructor(
        private courseService: CourseService, 
        private notificationService: NotificationService) {}

    async activate(params) {
        if (params.id) {
            const id = Number(params.id);
            return await this.getCourse(id);
        } 
    }

    async getCourse(id: number) {
        try {
            this.course = await this.courseService.getById(id);
        } catch (error) {
            this.notificationService.warning(error.message);
        }
    }

    async save() {
        if (this.course.courseId) {
            await this.updateCourse();
        } else {
            await this.createCourse();
        }
    }

    async createCourse() {
        try {
            this.course = await this.courseService.create(this.course);
            this.notificationService.success(Notifications.SuccessfulCreation);
        } catch (error) {
            this.notificationService.warning(error.message);
        }
    }

    async updateCourse() {
        try {
            await this.courseService.update(this.course.courseId, this.course);
            this.notificationService.success(Notifications.SuccessfulUpdate);
        } catch (error) {
            this.notificationService.warning(error.message);
        }
    }
}
