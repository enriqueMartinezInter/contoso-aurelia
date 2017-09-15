import * as moment from 'moment';

export class Helper {
    static FromJsonDateToDateString(date: string, format: string) {
        return moment(new Date(date)).format(format);
    }

    static FromDateToDateString(date: Date, format: string) {
        return moment(date).format(format);
    }

    static StringtoISODate(date: string) {
        const convertedDate = date.split('-');
        const year = parseInt(convertedDate[2]);
        const month = parseInt(convertedDate[1]);
        const day = parseInt(convertedDate[0]);
        return new Date(year, month - 1, day, 0, 0, 0)
    }

}