import { Notification } from '../entities/notification';
import { SendNotification } from './send-notification';

const notifications: Notification[] = [];

const notificationRepository = {
  async create(notification: Notification) {
    notifications.push(notification);
  },
};

describe('Send Notifications', () => {
  it('should be able send a notification', async () => {
    const sendNotification = new SendNotification(notificationRepository);

    const { notification } = await sendNotification.execute({
      category: 'any-category',
      content: 'any-content',
      recipientId: 'any-recipientId',
    });

    expect(notification).toBeTruthy();
  });
});
