import { Grade } from "../common/events-enum";

export interface IEnrollment {
    enrollmentID: number | null; 
    courseId: number;
    studentId: number;
    grade?: Grade;
}