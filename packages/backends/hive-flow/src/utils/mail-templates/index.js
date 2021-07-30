var inviteEmail = require('./invite');
var resetEmail = require('./reset-password');

module.exports = {
  resetPassword: resetEmail,
  invite: inviteEmail
}
