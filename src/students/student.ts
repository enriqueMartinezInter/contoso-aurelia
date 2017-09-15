import { Helper } from "../common/helper";

export class Student {
    studentId: number | null = null;
    lastName: string = '';
    firstMidName: string = '';
    enrollmentDate: string = Helper.FromDateToDateString(new Date(), 'DD-MM-YYYY');
    enrollments = [];

    static fromObject(src)	{	
        const student = Object.assign(new Student(), src);			
        if (student.enrollmentDate) {
            student.enrollmentDate = Helper.FromJsonDateToDateString(student.enrollmentDate, 'DD-MM-YYYY');
        }
        return student;
    }
}