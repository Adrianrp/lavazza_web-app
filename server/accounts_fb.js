Accounts.onCreateUser(function (options, user) {
  if (!user.services.facebook) {
    return user;
  }
 user.username = user.services.facebook.name;
  user.emails = user.services.facebook.email;
  //user._id = user.services.facebook.id;
  user.roles = [];
  return user
});