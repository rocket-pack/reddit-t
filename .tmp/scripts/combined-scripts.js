(function() {

var RedditT = window.RedditT = Ember.Application.create();

/* Order and include as you please. */


})();

(function() {

RedditT.PostController = Ember.ObjectController.extend({
  actions: {
    goToNextPost: function() {
      var controller = this;
      this.get('model').next().then(function(next_model) {
        controller.set('model', next_model);
        window.scrollTo(0, 0);
      });
    },
    goToPreviousPost: function() {
      var controller = this;
      this.get('model').previous().then(function(previous_model) {
        controller.set('model', previous_model);
        window.scrollTo(0, 0);
      });
    }
  }
});


})();

(function() {

RedditT.ApplicationAdapter = DS.FixtureAdapter;


})();

(function() {

/* global $:false */

RedditT.Post =  Ember.Object.extend({
  author_url: function() { return "http://reddit.com/u/" + this.get('author'); }.property('author'),
  comments_url: function() { return this.get('url') + "comments"; }.property('url'),
  subreddit_url: function() { return "https://pay.reddit.com/r/" + this.get('subreddit'); }.property('subreddit'),
  body: function() {
    var decoded = $('<textarea />').html(this.get('selftext_html')).val();
    return Ember.String.htmlSafe(decoded);
  }.property('selftext_html'),
  nextPost: function() {
    var model = this;

    return $.getJSON(this.get('subreddit_url') + '.json', {limit: 1, after: this.get('name')})
            .then(function(api_response) {
              model.set('nextPost', RedditT.Post.create(api_response.data.children[0].data));
              return model;
            });
  }.property('subreddit_url'),
  previousPost: function() {
    var model = this;

    return $.getJSON(this.get('subreddit_url') + '.json', {limit: 1, before: this.get('name')})
          .then(function(api_response) {
            if (api_response.data.children.length === 0) return model;
            model.set('previousPost', RedditT.Post.create(api_response.data.children[0].data));
            return model;
          });
  }.property('subreddit_url')
});


})();

(function() {

RedditT.ApplicationRoute = Ember.Route.extend({
    // admittedly, this should be in IndexRoute and not in the
    // top level ApplicationRoute; we're in transition... :-)
    model: function () {
        return ['red', 'yellow', 'blue'];
    }
});


})();

(function() {

/* global $:false */

RedditT.PostRoute = Ember.Route.extend({
  actions: {
    didTransition: function() {
      document.title = this.modelFor('post').get('title');
      window.scrollTo(0, 0);
    }
  },
  model: function(params) {
    return $.getJSON("https://pay.reddit.com/" + params.post_slug + ".json", {limit: 1})
          .then(function(api_response) {
            // Posts are returned within an array, subreddit/multireddit listings are not
            if (api_response instanceof Array) api_response = api_response[0];
            return api_response.data.children[0].data;
          })
          .then(function(post) {
            var model = RedditT.Post.create(post);
            return model;
          });
  }
});


})();

(function() {

RedditT.Router.map(function () {
  this.resource('post', {path: '*post_slug'});
});


})();

(function() {

$(document).ready(function () {
  $(document).on('click', '.accordion-tabs-minimal li > a', function(event) {
    if (!$(this).hasClass('is-active')) {
      event.preventDefault();
      var accordionTabs = $(this).closest('.accordion-tabs-minimal')
      accordionTabs.find('.is-open').removeClass('is-open')

      $(this).next().toggleClass('is-open');
      accordionTabs.find('.is-active').removeClass('is-active');
      $(this).addClass('is-active');
    } else {
      event.preventDefault();
    }
  });
});


})();