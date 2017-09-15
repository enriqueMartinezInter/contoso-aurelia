import { autoinject } from 'aurelia-framework';
import { NotificationService, Notifications } from '../../common/notification-service';
import { StudentService } from '../student-service';
import { Student } from '../student';
import { Helper } from "../../common/helper";

@autoinject()
export class StudentDetails {
    student: Student;

    constructor(
        private studentService: StudentService, 
        private notificationService: NotificationService) {}

    async activate(params) {
        if (params.id) {
            const id = Number(params.id);
            return await this.getStudent(id);
        } 
    }

    async getStudent(id: number) {
        try {
            this.student = await this.studentService.getById(id);
        } catch (error) {
            this.notificationService.warning(error.message);
        }
    }

    async save() {
        if (this.student.studentId) {
            await this.updateStudent();
        } else {
            await this.createStudent();
        }
    }

    async createStudent() {
        const newStudent = Object.assign({}, this.student, { enrollmentDate: Helper.StringtoISODate(this.student.enrollmentDate)});
        try {
            this.student = await this.studentService.create(newStudent);
            this.notificationService.success(Notifications.SuccessfulCreation);
        } catch (error) {
            this.notificationService.warning(error.message);
        }
    }

    async updateStudent() {
        const updatedStudent = Object.assign({}, this.student, { enrollmentDate: Helper.StringtoISODate(this.student.enrollmentDate)});
        try {
            await this.studentService.update(updatedStudent.studentId, updatedStudent);
            this.notificationService.success(Notifications.SuccessfulUpdate);
        } catch (error) {
            this.notificationService.warning(error.message);
        }
    }
}
