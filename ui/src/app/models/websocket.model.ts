/**
 * @author Ritesh Kumar
 * @description Used to Define All the Fields Required for Any WebSocket Topic.
 */
export const WebSocketTopic = {
    RULE: {
        type: 'RuleNotificationsCriteria',
        event: '/app/ruleNotifications/subscribe',
        dest: '/user/queue/ruleNotifications',
    },
};
