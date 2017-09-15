import { autoinject, bindable } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import { CourseEvents } from '../../common/events-enum';
import { ICourse } from "../course";

@autoinject()
export class CourseCardCustomElement {
    @bindable course: ICourse;

    constructor(private eventAggregator: EventAggregator) {}

    deleteCourse() {
        if (confirm('Realmente desea eliminar este registro?')) {
            this.eventAggregator.publish(CourseEvents.CourseDeleted, this.course);
        }
    }
}