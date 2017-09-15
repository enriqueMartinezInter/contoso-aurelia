import { autoinject, bindable } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import { Student } from '../student';
import { StudentEvents } from '../../common/events-enum';

@autoinject()
export class StudentCardCustomElement {
    @bindable student: Student;

    constructor(private eventAggregator: EventAggregator) {}

    deleteStudent() {
        if (confirm('Realmente desea eliminar este registro?')) {
            this.eventAggregator.publish(StudentEvents.StudentDeleted, this.student);
        }
    }
}