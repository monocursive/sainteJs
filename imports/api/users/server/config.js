import { Accounts } from 'meteor/accounts-base';
import { Gravatar } from 'meteor/jparker:gravatar';

Accounts.onCreateUser(function(options, user) {
  user.profile = user.profile || {};
  if (!user.profile.avatar) {
    const email = ((allEmails = user.emails) !== undefined ? (firstEmail = allEmails[0]) !== undefined ? firstEmail.address : undefined : undefined) || '';
    const hash = Gravatar.hash(email);
    user.profile = { avatar: hash };
  }
  user.profile.notif_email = false;
  return user;
});

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

Accounts.config({
    sendVerificationEmail: true
});
