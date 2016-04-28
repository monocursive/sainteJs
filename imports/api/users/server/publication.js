import {Meteor} from 'meteor/meteor';

Meteor.publish('usersList', function () {
  return Meteor.users.find(
    {},
    {fields: {
      profile: 1,
      username: 1
    },
  });
});
