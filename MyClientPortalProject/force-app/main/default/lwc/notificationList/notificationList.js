import { LightningElement, wire } from 'lwc';
import getNotifications from '@salesforce/apex/NotificationController.getNotifications';

export default class NotificationList extends LightningElement {
    notifications;
    error;

    @wire(getNotifications)
    wiredNotifications({ error, data }) {
        if (data) {
            this.notifications = data;
            this.error = undefined;
        } else if (error) {
            this.error = error;
            this.notifications = undefined;
            console.error('Error fetching notifications:', error);
        }
    }
}