// this is the serviceworker

self.addEventListener('push', function(event) {
  console.log('Received a push message');
  console.log(event);

  var title = 'Yay a message!';
  var body = 'We have received a push message.';
  var icon = 'https://cdn3.iconfinder.com/data/icons/supermario/PNG/retro-mushroom-super-2.png';
  var tag = 'simple-push-demo-notification-tag';

  event.waitUntil(
    self.registration.showNotification(title, {
      body: body,
      icon: icon,
      tag: tag
    })
  );
});