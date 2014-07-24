RedditT.PostRoute = Ember.Route.extend({
  activate: function() {
    $(document).attr('title', this.modelFor(this.routeName).get('title'));
  },
  model: function(params) {
    return $.getJSON("https://pay.reddit.com/" + params.post_slug + ".json", {limit: 1})
          .then(function(api_response) {
          })
          .then(function(post) {
            model = RedditT.Post.create(post);
            return model;
          });
  }
});