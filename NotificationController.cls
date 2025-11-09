public with sharing class NotificationController {
    @AuraEnabled(cacheable=true)
    public static List<Notification__c> getNotifications() {
        return [
            SELECT Id, Title__c, Description__c, Active__c
            FROM Notification__c
            WHERE Active__c = TRUE
            ORDER BY CreatedDate DESC
            LIMIT 10
        ];
    }
}