Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', hashTypes, hashContexts, escapeExpression=this.escapeExpression;


  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<section class=\"hero-unit hero-unit-full-width\">\n  <section class=\"hero-unit-inner\">\n    <h1 class=\"title\">Reddit T</h1>\n\n    <p class=\"tagline\">\n      Reddit-T is a convenient service for reading posts on <a href=\"http://reddit.com\">Reddit</a>\n      with a focus on clean design and typography optimized for hours of enjoyment.\n    </p>\n  </section>\n</section>\n\n<section id=\"how-to-use\" class=\"container\">\n  <ul class=\"accordion-tabs-minimal\">\n    <li class=\"tab-header-and-content\">\n      <a href=\"#\" class=\"tab-link is-active\">Subreddit</a>\n      <div class=\"tab-content is-open\">\n        <div class=\"address-box\">\n          <span class=\"reddit-address\">http://reddit.com</span>/r/talesfromretail\n        </div>\n\n        <h3 class=\"subtle-title\">becomes:</h3>\n\n        <div class=\"address-box\">\n          <span class=\"reddit-t-address\">http://reddit-t.com</span>/r/talesfromretail\n        </div>\n\n        <a class=\"btn-home\" href=\"/#/r/talesfromretail\">Try it!</a>\n      </div>\n    </li>\n    <li class=\"tab-header-and-content\">\n      <a href=\"#\" class=\"tab-link\">Multi Reddit</a>\n      <div class=\"tab-content\">\n        <div class=\"address-box\">\n          <span class=\"reddit-address\">http://reddit.com</span>/r/talesfromretail+talesfromtechsupport\n        </div>\n\n        <h3 class=\"subtle-title\">becomes:</h3>\n\n        <div class=\"address-box\">\n          <span class=\"reddit-t-address\">http://reddit-t.com</span>/r/talesfromretail+talesfromtechsupport\n        </div>\n\n        <a class=\"btn-home\" href=\"/#/r/talesfromretail+talesfromtechsupport\">Try it!</a>\n      </div>\n    </li>\n    <li class=\"tab-header-and-content\">\n      <a href=\"#\" class=\"tab-link\">Post</a>\n      <div class=\"tab-content\">\n        <div class=\"address-box\">\n          <span class=\"reddit-address\">http://reddit.com</span>/r/TalesFromRetail/comments/2fhck7/you_sold_me_a_bad_nickelback_cd/\n        </div>\n\n        <h3 class=\"subtle-title\">becomes:</h3>\n\n        <div class=\"address-box\">\n          <span class=\"reddit-t-address\">http://reddit-t.com</span>/r/TalesFromRetail/comments/2fhck7/you_sold_me_a_bad_nickelback_cd/\n        </div>\n        <a class=\"btn-home\" href=\"/#/r/TalesFromRetail/comments/2fhck7/you_sold_me_a_bad_nickelback_cd/\">Try it!</a>\n      </div>\n    </li>\n  </ul>\n\n\n</section>\n\n");
  
});

Ember.TEMPLATES["loading"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div class=\"loading-container\">\n  <div class=\"loading-indicator\"></div>\n  <h1>Loading...</h1>\n</div>\n");
  
});

Ember.TEMPLATES["post"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  
  data.buffer.push("Previous Post");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("Next Post");
  }

  data.buffer.push("<section class=\"container\">\n  <section class=\"post\">\n    <h1>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "title", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</h1>\n    <span class=\"author\">By <a rel=\"author\" ");
  hashContexts = {'href': depth0};
  hashTypes = {'href': "ID"};
  options = {hash:{
    'href': ("author_url")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || depth0['bind-attr']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "author", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</a></span>\n    ");
  hashContexts = {'unescaped': depth0};
  hashTypes = {'unescaped': "STRING"};
  stack2 = helpers._triageMustache.call(depth0, "body", {hash:{
    'unescaped': ("true")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n\n    <div class=\"panel post-controls\">\n      <div class=\"control\">\n        ");
  hashContexts = {'classNames': depth0};
  hashTypes = {'classNames': "STRING"};
  options = {hash:{
    'classNames': ("btn")
  },inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "post", "previousPost.permalink", options) : helperMissing.call(depth0, "link-to", "post", "previousPost.permalink", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n      </div>\n      <div class=\"control control-label\">\n        <a ");
  hashContexts = {'href': depth0};
  hashTypes = {'href': "ID"};
  options = {hash:{
    'href': ("comments_url")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || depth0['bind-attr']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "num_comments", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" comments back on Reddit</a>\n      </div>\n      <div class=\"control\">\n        ");
  hashContexts = {'classNames': depth0};
  hashTypes = {'classNames': "STRING"};
  options = {hash:{
    'classNames': ("btn")
  },inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "post", "nextPost.permalink", options) : helperMissing.call(depth0, "link-to", "post", "nextPost.permalink", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n      </div>\n    </div>\n  </section>\n</section>\n");
  return buffer;
  
});