import { Meteor } from 'meteor/meteor';
import { Email } from 'meteor/email';
import { Events } from '../../api/events/events';

export default function mailRemind() {
  var events;
  events = Events.find(
    {
      date: {
        $gte: new Date()
      }
    },
    {sort: {date: 1}}
  ).fetch();

  const currentDate = new Date();
  events.map(function(event) {
    if(currentDate.getDate() == event.date.getDate() - 1) {
      event.attendees.map(function(attendee) {
        let email = Meteor.users.find({_id: attendee._id}).fetch()[0].emails[0].address;
        let username = Meteor.users.find({_id: attendee._id}).fetch()[0].username;
        sendMailReminder(email, username, event.title);
      });
    }
  });
}

function sendMailReminder(email, username, eventTitle) {
  Email.send({
    from: "contact@sainte-js.fr",
    to: email,
    subject: `Rappel : "${eventTitle}" aura lieu demain`,
    html: `yo`
  });
};
