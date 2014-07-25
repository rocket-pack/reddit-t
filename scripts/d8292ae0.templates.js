Ember.TEMPLATES.application=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var f,g,h="",i=this.escapeExpression;return e.buffer.push('<div class="container">\n  '),f={},g={},e.buffer.push(i(c._triageMustache.call(b,"outlet",{hash:{},contexts:[b],types:["ID"],hashContexts:g,hashTypes:f,data:e}))),e.buffer.push("\n</div>"),h}),Ember.TEMPLATES.index=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{},e.buffer.push('<section class="about">\n  <h1 class="title">Reddit<em>T</em></h1>\n  <p>\n    The easy-reading mode for long posts on Reddit.\n  </p>\n\n  <h3>Usage:</h3>\n  <p>\n    <ol>\n    <li>Go to <strong><a href="http://reddit.com">reddit.com</a></strong></li>\n    <li><strong>Find a post</strong> you\'re interested in, go ahead and <strong>click on it.</strong></li>\n    <li>Change the \'domain\' part of the address from: <strong>reddit.com</strong> to <strong>reddit-t.com</strong></li>\n    <li>Enjoy!</li>\n    </ol>\n  </p>\n\n  <h3>Examples:</h3>\n  <p>\n    <ul>\n      <li><a href="http://reddit-t.com/r/talesfromretail">/r/talesfromretail</a></li>\n      <li><a href="http://reddit-t.com/r/talesfromtechsupport/comments/203qxp/securityis_it_a_thing/">The beginning of Airz23\'s saga</a></li>\n    </ul>\n  </p>\n</section>')}),Ember.TEMPLATES.post=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var f,g,h,i,j,k="",l=this.escapeExpression,m=c.helperMissing;return e.buffer.push('<section class="post">\n  <h1>'),h={},i={},e.buffer.push(l(c._triageMustache.call(b,"title",{hash:{},contexts:[b],types:["ID"],hashContexts:i,hashTypes:h,data:e}))),e.buffer.push('</h1>\n  <span class="author">By <a rel="author" '),i={href:b},h={href:"ID"},j={hash:{href:"author_url"},contexts:[],types:[],hashContexts:i,hashTypes:h,data:e},e.buffer.push(l((f=c["bind-attr"]||b["bind-attr"],f?f.call(b,j):m.call(b,"bind-attr",j)))),e.buffer.push(">"),h={},i={},e.buffer.push(l(c._triageMustache.call(b,"author",{hash:{},contexts:[b],types:["ID"],hashContexts:i,hashTypes:h,data:e}))),e.buffer.push("</a></span>\n  "),i={unescaped:b},h={unescaped:"STRING"},g=c._triageMustache.call(b,"body",{hash:{unescaped:"true"},contexts:[b],types:["ID"],hashContexts:i,hashTypes:h,data:e}),(g||0===g)&&e.buffer.push(g),e.buffer.push("\n  <hr />\n  <button "),h={},i={},e.buffer.push(l(c.action.call(b,"goToNextPost",{hash:{},contexts:[b],types:["STRING"],hashContexts:i,hashTypes:h,data:e}))),e.buffer.push(">Next Post</button>\n  <button "),h={},i={},e.buffer.push(l(c.action.call(b,"goToPreviousPost",{hash:{},contexts:[b],types:["STRING"],hashContexts:i,hashTypes:h,data:e}))),e.buffer.push(">Previous Post</button>\n  <a "),i={href:b},h={href:"ID"},j={hash:{href:"comments_url"},contexts:[],types:[],hashContexts:i,hashTypes:h,data:e},e.buffer.push(l((f=c["bind-attr"]||b["bind-attr"],f?f.call(b,j):m.call(b,"bind-attr",j)))),e.buffer.push(">"),h={},i={},e.buffer.push(l(c._triageMustache.call(b,"num_comments",{hash:{},contexts:[b],types:["ID"],hashContexts:i,hashTypes:h,data:e}))),e.buffer.push(" comments back on Reddit</a>\n</section>"),k});