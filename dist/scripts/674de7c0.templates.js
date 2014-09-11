Ember.TEMPLATES.application=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var f,g,h="",i=this.escapeExpression;return f={},g={},e.buffer.push(i(c._triageMustache.call(b,"outlet",{hash:{},contexts:[b],types:["ID"],hashContexts:g,hashTypes:f,data:e}))),e.buffer.push("\n"),h}),Ember.TEMPLATES.index=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{},e.buffer.push('<section class="hero-unit hero-unit-full-width">\n  <section class="hero-unit-inner">\n    <h1 class="title">Reddit T</h1>\n\n    <p class="tagline">\n      Reddit-T is a convenient service for reading posts on <a href="http://reddit.com">Reddit</a>\n      with a focus on clean design and typography optimized for hours of enjoyment.\n    </p>\n  </section>\n</section>\n\n<section id="how-to-use" class="container">\n  <h2 class="subtle-title accented-title">Reddit-T accepts just about any Reddit URL...</h2>\n\n  <ul class="accordion-tabs-minimal">\n    <li class="tab-header-and-content">\n      <a href="#" class="tab-link is-active">Subreddit</a>\n      <div class="tab-content is-open">\n        <div class="address-box">\n          <span class="reddit-address">http://reddit.com</span>/r/talesfromretail\n        </div>\n\n        <h3 class="subtle-title">becomes:</h3>\n\n        <div class="address-box">\n          <span class="reddit-t-address">http://reddit-t.com</span>/r/talesfromretail\n        </div>\n      </div>\n    </li>\n    <li class="tab-header-and-content">\n      <a href="#" class="tab-link">Post</a>\n      <div class="tab-content">\n        <div class="address-box">\n          <span class="reddit-address">http://reddit.com</span>/r/TalesFromRetail/comments/2fhck7/you_sold_me_a_bad_nickelback_cd/\n        </div>\n\n        <h3 class="subtle-title">becomes:</h3>\n\n        <div class="address-box">\n          <span class="reddit-t-address">http://reddit-t.com</span>/r/TalesFromRetail/comments/2fhck7/you_sold_me_a_bad_nickelback_cd/\n        </div>\n      </div>\n    </li>\n  </ul>\n\n\n</section>\n\n')}),Ember.TEMPLATES.loading=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{},e.buffer.push('<div class="loading-container">\n  <div class="loading-indicator"></div>\n  <h1>Loading...</h1>\n</div>\n')}),Ember.TEMPLATES.post=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){b.buffer.push("Previous Post")}function g(a,b){b.buffer.push("Next Post")}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var h,i,j,k,l,m="",n=this.escapeExpression,o=c.helperMissing,p=this;return e.buffer.push('<section class="container">\n  <section class="post">\n    <h1>'),j={},k={},e.buffer.push(n(c._triageMustache.call(b,"title",{hash:{},contexts:[b],types:["ID"],hashContexts:k,hashTypes:j,data:e}))),e.buffer.push('</h1>\n    <span class="author">By <a rel="author" '),k={href:b},j={href:"ID"},l={hash:{href:"author_url"},contexts:[],types:[],hashContexts:k,hashTypes:j,data:e},e.buffer.push(n((h=c["bind-attr"]||b["bind-attr"],h?h.call(b,l):o.call(b,"bind-attr",l)))),e.buffer.push(">"),j={},k={},e.buffer.push(n(c._triageMustache.call(b,"author",{hash:{},contexts:[b],types:["ID"],hashContexts:k,hashTypes:j,data:e}))),e.buffer.push("</a></span>\n    "),k={unescaped:b},j={unescaped:"STRING"},i=c._triageMustache.call(b,"body",{hash:{unescaped:"true"},contexts:[b],types:["ID"],hashContexts:k,hashTypes:j,data:e}),(i||0===i)&&e.buffer.push(i),e.buffer.push('\n\n    <div class="panel post-controls">\n      <div class="control">\n        '),k={classNames:b},j={classNames:"STRING"},l={hash:{classNames:"btn"},inverse:p.noop,fn:p.program(1,f,e),contexts:[b,b],types:["STRING","ID"],hashContexts:k,hashTypes:j,data:e},h=c["link-to"]||b["link-to"],i=h?h.call(b,"post","previousPost.permalink",l):o.call(b,"link-to","post","previousPost.permalink",l),(i||0===i)&&e.buffer.push(i),e.buffer.push('\n      </div>\n      <div class="control control-label">\n        <a '),k={href:b},j={href:"ID"},l={hash:{href:"comments_url"},contexts:[],types:[],hashContexts:k,hashTypes:j,data:e},e.buffer.push(n((h=c["bind-attr"]||b["bind-attr"],h?h.call(b,l):o.call(b,"bind-attr",l)))),e.buffer.push(">"),j={},k={},e.buffer.push(n(c._triageMustache.call(b,"num_comments",{hash:{},contexts:[b],types:["ID"],hashContexts:k,hashTypes:j,data:e}))),e.buffer.push(' comments back on Reddit</a>\n      </div>\n      <div class="control">\n        '),k={classNames:b},j={classNames:"STRING"},l={hash:{classNames:"btn"},inverse:p.noop,fn:p.program(3,g,e),contexts:[b,b],types:["STRING","ID"],hashContexts:k,hashTypes:j,data:e},h=c["link-to"]||b["link-to"],i=h?h.call(b,"post","nextPost.permalink",l):o.call(b,"link-to","post","nextPost.permalink",l),(i||0===i)&&e.buffer.push(i),e.buffer.push("\n      </div>\n    </div>\n  </section>\n</section>\n"),m});