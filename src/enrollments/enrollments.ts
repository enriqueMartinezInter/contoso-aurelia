import { autoinject } from 'aurelia-framework';
import { NotificationService } from "../common/notification-service";
import { StudentService } from "../students/student-service";
import { CourseService } from "../courses/course-service";
import { ICourse } from "../courses/course";
import { Student } from "../students/student";
import { IEnrollment } from './enrollment';

@autoinject()
export class Enrollments {
    selectedStudent: Student;
    selectedCourse: ICourse;
    enrollment: IEnrollment;
    
    constructor(
        private studentService: StudentService, 
        private courseService: CourseService, 
        private notificationService: NotificationService) {}

    changedStudent(selectedStudent: Student) {
        this.selectedStudent = selectedStudent;
    }

    changedCourse(selectedCourse: ICourse) {
        this.selectedCourse = selectedCourse;
    }

    assign() {
        //this.enrollment = new Enrollment()
    }
}