import { autoinject } from 'aurelia-framework';
import { EventAggregator, Subscription } from 'aurelia-event-aggregator';
import { NotificationService, Notifications } from '../common/notification-service';
import { StudentEvents } from '../common/events-enum';
import { StudentService } from './student-service';
import { Student } from './student';

@autoinject()
export class Students {
    subscription: Subscription;
    students: Student[];

    constructor(
        private studentService: StudentService, 
        private eventAggregator: EventAggregator,
        private notificationService: NotificationService) {}

    async activate() {
        this.subscription = this.eventAggregator.subscribe(StudentEvents.StudentDeleted, this.deleteStudent);
        return await this.getStudents();
    }

    async getStudents() {
        try {
            this.students = await this.studentService.getAll();
        } catch (error) {
            this.notificationService.error(error);
        }
    }

    deleteStudent = async (student) => {
        try {
            await this.studentService.delete(student.studentId);
            this.students = this.students.filter(({ studentId }) => studentId !== student.studentId);
            this.notificationService.success(Notifications.SuccessfulDeletion);
        } catch (error) {
            this.notificationService.error(error);
        }
    }

    deactivate(): void {
        this.subscription.dispose();
    }

}