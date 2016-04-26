import {Meteor} from 'meteor/meteor';
import {Roles} from 'meteor/alanning:roles';

export default function() {
  if (Meteor.users.find().count() === 0) {
    let user = Accounts.createUser({
      username: 'maz-dev',
      email: 'contact@maz-dev.cc',
      password: 'stapplehorseschaipasquoi'
    });

    Roles.addUsersToRoles(user, 'admin', Roles.GLOBAL_GROUP);
  }
};
