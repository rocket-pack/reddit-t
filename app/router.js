import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.reopen({
    location: 'hash'
});

export default Router.map(function() {
  this.resource('post', {path: '*post_slug'});
});
