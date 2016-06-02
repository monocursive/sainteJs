import { Meteor } from 'meteor/meteor';
import { Email } from 'meteor/email';
import { Events } from '../../api/events/events';

export default function mailRemind() {

  const events = Events.find(
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
        let user = Meteor.users.find({_id: attendee._id}).fetch()[0];
        if(user.profile.notif_email == true) {
          let email = user.emails[0].address;
          let username = user.username;
          sendMailReminder(email, username, event.title, event.venue, event.address.formattedAddress, event.hour);
        }
      });
    }
  });
}

function sendMailReminder(email, username, eventTitle, eventVenue, eventAddress, hour) {
  Email.send({
    from: "SaintéJS <contact@sainte-js.fr>",
    to: email,
    subject: `Rappel : "${eventTitle}" aura lieu demain`,
    text: `Hello ${username}, \n`
      + `"${eventTitle}" aura lieu après-demain à ${eventVenue}, ${eventAddress} à ${hour}. \n\n`
      + "A très vite!"
  });
};
