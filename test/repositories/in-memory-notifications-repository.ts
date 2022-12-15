import { Notification } from '../../src/app/entities/notification';
import { NotificationRepository } from '../../src/app/repositories/notification-repository';

export class NotificationRepositoryInMemory implements NotificationRepository {
  public notifications: Notification[] = [];

  async create(notification: Notification) {
    await this.notifications.push(notification);
  }
}
