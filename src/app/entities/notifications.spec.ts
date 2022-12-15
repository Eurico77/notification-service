import { Content } from './content';
import { Notification } from './notification';
import { randomUUID } from 'node:crypto';

let content: Content;
let notification: Notification;

beforeEach(() => {
  content = new Content('any-notification');
  notification = new Notification({
    content,
    category: 'any-category',
    recipientId: randomUUID(),
  });
});

describe('Notification ', () => {
  it('should be able to create a notification', () => {
    expect(notification).toBeTruthy();
  });
});
