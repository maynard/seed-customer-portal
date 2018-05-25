const passport = require('passport');

module.exports = (app) => {
  app.get(
    '/auth/google', 
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  app.get(
    '/auth/google/callback',
    passport.authenticate('google'))

  app.get('/', (req, res) => {
     res.send({ hi: 'buddy'});
  });

  app.get('/api/current_user', (req, res) => {
    console.log('current_user: ' + req.user)
  	res.send('CURRENT USER:  ' + req.user);
  });

app.get('/api/logout', (req, res) => {
	req.logout();
	res.redirect('http://seed-customer-portal.s3-website.us-east-2.amazonaws.com');
});

};
