RedditT.PostRoute = Ember.Route.extend({
  model: function(params) {
    return $.getJSON("https://pay.reddit.com/" + params.post_slug + ".json")
          .then(function(api_response) {
            return api_response[0].data.children[0].data;
          })
          .then(function(post) {
            decoded = $('<textarea />').html(post.selftext_html).val();
            post.body = Ember.String.htmlSafe(decoded);
            return post;
          });
  }
});