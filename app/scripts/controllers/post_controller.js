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
