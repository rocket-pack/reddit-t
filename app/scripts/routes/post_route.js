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
