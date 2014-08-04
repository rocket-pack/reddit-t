Ember.TEMPLATES.application=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var f,g,h="",i=this.escapeExpression;return e.buffer.push('<div class="container">\n  '),f={},g={},e.buffer.push(i(c._triageMustache.call(b,"outlet",{hash:{},contexts:[b],types:["ID"],hashContexts:g,hashTypes:f,data:e}))),e.buffer.push("\n</div>"),h}),Ember.TEMPLATES.index=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{},e.buffer.push('<section class="about">\n  <h1 class="title">Reddit<em>T</em></h1>\n  <p>\n    The easy-reading mode for long posts on Reddit.\n  </p>\n\n  <h3>Usage:</h3>\n  <p>\n    <ol>\n    <li>Go to <strong><a href="http://reddit.com">reddit.com</a></strong></li>\n    <li><strong>Find a post</strong> you\'re interested in, go ahead and <strong>click on it.</strong></li>\n    <li>Change the \'domain\' part of the address from: <strong>reddit.com</strong> to <strong>reddit-t.com</strong></li>\n    <li>Enjoy!</li>\n    </ol>\n  </p>\n\n  <h3>Examples:</h3>\n  <p>\n    <ul>\n      <li><a href="http://reddit-t.com/r/talesfromretail">/r/talesfromretail</a></li>\n      <li><a href="http://reddit-t.com/r/talesfromtechsupport/comments/203qxp/securityis_it_a_thing/">The beginning of Airz23\'s saga</a></li>\n    </ul>\n  </p>\n</section>')}),Ember.TEMPLATES.post=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){b.buffer.push("Next Post")}function g(a,b){b.buffer.push("Previous Post")}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var h,i,j,k,l,m="",n=this.escapeExpression,o=c.helperMissing,p=this;return e.buffer.push('<section class="post">\n  <h1>'),j={},k={},e.buffer.push(n(c._triageMustache.call(b,"title",{hash:{},contexts:[b],types:["ID"],hashContexts:k,hashTypes:j,data:e}))),e.buffer.push('</h1>\n  <span class="author">By <a rel="author" '),k={href:b},j={href:"ID"},l={hash:{href:"author_url"},contexts:[],types:[],hashContexts:k,hashTypes:j,data:e},e.buffer.push(n((h=c["bind-attr"]||b["bind-attr"],h?h.call(b,l):o.call(b,"bind-attr",l)))),e.buffer.push(">"),j={},k={},e.buffer.push(n(c._triageMustache.call(b,"author",{hash:{},contexts:[b],types:["ID"],hashContexts:k,hashTypes:j,data:e}))),e.buffer.push("</a></span>\n  "),k={unescaped:b},j={unescaped:"STRING"},i=c._triageMustache.call(b,"body",{hash:{unescaped:"true"},contexts:[b],types:["ID"],hashContexts:k,hashTypes:j,data:e}),(i||0===i)&&e.buffer.push(i),e.buffer.push("\n  <hr />\n  "),j={},k={},l={hash:{},inverse:p.noop,fn:p.program(1,f,e),contexts:[b,b],types:["STRING","ID"],hashContexts:k,hashTypes:j,data:e},h=c["link-to"]||b["link-to"],i=h?h.call(b,"post","nextPost.permalink",l):o.call(b,"link-to","post","nextPost.permalink",l),(i||0===i)&&e.buffer.push(i),e.buffer.push("\n  "),j={},k={},l={hash:{},inverse:p.noop,fn:p.program(3,g,e),contexts:[b,b],types:["STRING","ID"],hashContexts:k,hashTypes:j,data:e},h=c["link-to"]||b["link-to"],i=h?h.call(b,"post","previousPost.permalink",l):o.call(b,"link-to","post","previousPost.permalink",l),(i||0===i)&&e.buffer.push(i),e.buffer.push("\n  <a "),k={href:b},j={href:"ID"},l={hash:{href:"comments_url"},contexts:[],types:[],hashContexts:k,hashTypes:j,data:e},e.buffer.push(n((h=c["bind-attr"]||b["bind-attr"],h?h.call(b,l):o.call(b,"bind-attr",l)))),e.buffer.push(">"),j={},k={},e.buffer.push(n(c._triageMustache.call(b,"num_comments",{hash:{},contexts:[b],types:["ID"],hashContexts:k,hashTypes:j,data:e}))),e.buffer.push(" comments back on Reddit</a>\n</section>\n"),m});