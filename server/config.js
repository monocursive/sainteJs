Accounts.config({
    sendVerificationEmail: true
});

smtp = {
    username: Meteor.settings.smtp.username,
    password: Meteor.settings.smtp.password,
    server:   Meteor.settings.smtp.url,
    port: 587
 };

Accounts.emailTemplates.siteName = "SaintéJS";
Accounts.emailTemplates.from = "SaintéJS <contact@sainte-js.fr>";
Accounts.emailTemplates.verifyEmail.subject = function (user) {
    return "Bienvenue au sein de SaintéJS";
};
Accounts.emailTemplates.verifyEmail.text = function (user, url) {
   return "Bienvenue au sein de SaintéJS.\n"
     + "Pour activer votre compte veuillez cliquer sur le lien ci-dessous:\n\n"
     + url;
};

process.env.MAIL_URL = 'smtp://' + encodeURIComponent(smtp.username) + ':' + encodeURIComponent(smtp.password) + '@' + encodeURIComponent(smtp.server) + ':' + smtp.port;
