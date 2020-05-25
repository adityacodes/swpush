var push = require('web-push');

let vapidkeys = {
    publicKey: 'BNed_tsYMGLvqpver8siEEWF6mdJrfJJfZfy7SpE7ibjnpmdpEeagDQweTDs5pMqlrXDjLiDJb8WAV3AQu4ogqI',
    privateKey: 'JOCe-cg6rWOhqxMS0BcItGHJNqU2vVW8VXSlpktlr90'
  }

push.setVapidDetails('mailto:adityapadhi1996@gmail.com', vapidkeys.publicKey, vapidkeys.privateKey);

let sub = {};
push.sendNotification(sub, 'Test Message');