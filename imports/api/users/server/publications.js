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

Meteor.publish('usersListAdmin', function () {
  if(Roles.userIsInRole(this.userId, 'admin')) {
    return Meteor.users.find(
      {},
      {fields: {
        emails: 1,
        createdAt: 1,
        profile: 1,
        username: 1
      },
    });
  } else {
    return null;
  }

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

Meteor.publish('currentUser', function () {
  return Meteor.users.find(
    {_id: this.userId},
    {fields: {
      createdAt: 1,
      profile: 1,
      username: 1
    },
  });
});

Meteor.publish('usersCount', function() {
  Counts.publish(this, 'users-count', Meteor.users.find());
});
