import { NotificationRepositoryInMemory } from '@test/repositories/in-memory-notifications-repository';
import { SendNotification } from './send-notification';

describe('Send Notifications', () => {
  it('should be able send a notification', async () => {
    const notificationRepository = new NotificationRepositoryInMemory();
    const sendNotification = new SendNotification(notificationRepository);

    const { notification } = await sendNotification.execute({
      category: 'any-category',
      content: 'any-content',
      recipientId: 'any-recipientId',
    });

    expect(notificationRepository.notifications).toHaveLength(1);
    expect(notificationRepository.notifications[0]).toEqual(notification);
  });
});
