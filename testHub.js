if (Meteor.isClient) {

  Router.route('/', function() {
    this.render('home_page');
  });
   Router.route('/users', function() {
    this.render('user_page');
  });  
  Router.route('/oracle', function() {
    this.render('oracle_conf');
  });
    Router.route('/client-conf', function() {
    this.render('client_conf');
  });   
  Router.route('/access-logs', function() {
    this.render('access_logs');
  });
    Router.route('/services', function() {
    this.render('service_only');
  });
    Router.route('/clients', function() {
    this.render('client_only');
  });

}
