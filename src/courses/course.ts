import { IEnrollment } from "../enrollments/enrollment";

export interface ICourse {
    courseId: number | null;
    title: string;
    credits: number;
    enrollments: IEnrollment[];
}