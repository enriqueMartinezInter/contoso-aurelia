import * as Notification from 'toastr';

export const enum Notifications {
    SuccessfulCreation = 'Registro Exitoso',
    SuccessfulDeletion = 'Eliminacion Exitosa',
    SuccessfulUpdate = 'Actualizacion Exitosa'
}

export class NotificationService {
    constructor() {}

    success(message) {
        Notification.success('OK', message, { positionClass: "toast-top-center", timeOut: 2000});
    }

    info(message) {
        Notification.info('Info', message, { positionClass: "toast-top-center", timeOut: 2000});
    }

    warning(message) {
        Notification.warning('Warning', message, { positionClass: "toast-top-center", timeOut: 2000});
    }

    error(message) {
        Notification.error('Error', message, { positionClass: "toast-top-center", timeOut: 2000});
    }
}