import {Meteor} from 'meteor/meteor';

Meteor.publish('usersList', function () {
  return Meteor.users.find(
    {},
    {fields: {
      createdAt: 1,
      profile: 1,
      username: 1
    },
  });
});

Meteor.publish('singleUser', function (id) {
  return Meteor.users.find(
    {_id: id},
    {fields: {
      createdAt: 1,
      profile: 1,
      username: 1
    },
  });
});
