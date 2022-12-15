import { Content } from './content';

describe('Notification Content', () => {
  it('should be able to create a notification content', () => {
    const content = new Content('any-content');

    expect(content).toBeTruthy();
  });

  it('should not be able to create a notification content with less than 5 characters', () => {
    expect(() => new Content('any')).toThrow('Content Length is not permitted');
  });

  it('should not be able to create a notification content with more than 240 characters', () => {
    expect(() => new Content('any'.repeat(241))).toThrow(
      'Content Length is not permitted',
    );
  });
});
