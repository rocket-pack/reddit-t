RedditT.PostRoute = Ember.Route.extend({
  activate: function() {
    $(document).attr('title', this.modelFor(this.routeName).get('title'));
  },
  model: function(params) {
    return $.getJSON("https://pay.reddit.com/" + params.post_slug + ".json", {limit: 1})
          .then(function(api_response) {
            // Posts are returned within an array, subreddit/multireddit listings are not
            if (api_response instanceof Array) api_response = api_response[0];
            return api_response.data.children[0].data;
          })
          .then(function(post) {
            model = RedditT.Post.create(post);
            return model;
          });
  }
});