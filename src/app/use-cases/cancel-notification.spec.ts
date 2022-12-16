import { makeNotification } from '@test/factories/notification-facotry';
import { NotificationRepositoryInMemory } from '@test/repositories/in-memory-notifications-repository';
import { CancelNotification } from './cancel-notification';
import { NotificationNotFound } from './errors/notification-not-found';

describe('Cancel Notifications', () => {
  it('should be able cancel a notification', async () => {
    const notificationRepository = new NotificationRepositoryInMemory();
    const cancelNotification = new CancelNotification(notificationRepository);

    const notification = makeNotification();

    await notificationRepository.create(notification);

    await cancelNotification.execute({
      notificationId: notification.id,
    });

    expect(notificationRepository.notifications[0].cancelAt).toEqual(
      expect.any(Date),
    );
  });

  it('should not be able to cancel a non existing notification', async () => {
    const notificationsRepository = new NotificationRepositoryInMemory();
    const cancelNotification = new CancelNotification(notificationsRepository);

    expect(() => {
      return cancelNotification.execute({
        notificationId: 'any-recipientId',
      });
    }).rejects.toThrow(NotificationNotFound);
  });
});
