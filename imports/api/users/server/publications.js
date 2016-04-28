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

Meteor.publish('singleUser', function (id) {
  return Meteor.users.find(
    {_id: id},
    {fields: {
      profile: 1,
      username: 1
    },
  });
});
