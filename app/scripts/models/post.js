RedditT.Post =  Ember.Object.extend({
  author_url: function() { return "http://reddit.com/u/" + this.get('author'); }.property('author'),
  comments_url: function() { return this.get('url') + "comments"; }.property('url'),
  subreddit_url: function() { return "https://pay.reddit.com/r/" + this.get('subreddit'); }.property('subreddit'),
  body: function() {
    var decoded = $('<textarea />').html(this.get('selftext_html')).val();
    return Ember.String.htmlSafe(decoded);
  }.property('selftext_html'),
  next: function() {
    return $.getJSON(this.get('subreddit_url') + '.json', {limit: 1, after: this.get('name')})
            .then(function(api_response) {
              return RedditT.Post.create(api_response.data.children[0].data);
            });
  },
  previous: function() {
    current_model = this;
    return $.getJSON(this.get('subreddit_url') + '.json', {limit: 1, before: this.get('name')})
          .then(function(api_response) {
            if (api_response.data.children.length == 0) return current_model;
            return RedditT.Post.create(api_response.data.children[0].data);
          });
  }
})