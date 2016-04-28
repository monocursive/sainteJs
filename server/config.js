smtp = {
    username: Meteor.settings.smtp.username,
    password: Meteor.settings.smtp.password,
    server:   Meteor.settings.smtp.url,
    port: 587
 };



process.env.MAIL_URL = 'smtp://' + encodeURIComponent(smtp.username) + ':' + encodeURIComponent(smtp.password) + '@' + encodeURIComponent(smtp.server) + ':' + smtp.port;
