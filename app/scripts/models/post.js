RedditT.Post =  Ember.Object.extend({
  author_url: function() { return "http://reddit.com/u/" + this.get('author'); }.property('author'),
  comments_url: function() { return this.get('url') + "comments"; }.property('url'),
  subreddit_url: function() { return "https://pay.reddit.com/r/" + this.get('subreddit'); }.property('subreddit'),
  body: function() {
    var decoded = $('<textarea />').html(this.get('selftext_html')).val();
    return Ember.String.htmlSafe(decoded);
  }.property('selftext_html'),
})