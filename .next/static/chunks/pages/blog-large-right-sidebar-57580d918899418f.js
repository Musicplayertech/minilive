(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[166],{3002:function(e,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog-large-right-sidebar",function(){return a(5108)}])},1551:function(e,s,a){"use strict";function i(e,s){(null==s||s>e.length)&&(s=e.length);for(var a=0,i=new Array(s);a<s;a++)i[a]=e[a];return i}function l(e,s){return function(e){if(Array.isArray(e))return e}(e)||function(e,s){var a=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var i,l,r=[],n=!0,t=!1;try{for(a=a.call(e);!(n=(i=a.next()).done)&&(r.push(i.value),!s||r.length!==s);n=!0);}catch(c){t=!0,l=c}finally{try{n||null==a.return||a.return()}finally{if(t)throw l}}return r}}(e,s)||function(e,s){if(!e)return;if("string"===typeof e)return i(e,s);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(a);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return i(e,s)}(e,s)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}s.default=void 0;var r,n=(r=a(7294))&&r.__esModule?r:{default:r},t=a(1003),c=a(880),o=a(9246);var d={};function h(e,s,a,i){if(e&&t.isLocalURL(s)){e.prefetch(s,a,i).catch((function(e){0}));var l=i&&"undefined"!==typeof i.locale?i.locale:e&&e.locale;d[s+"%"+a+(l?"%"+l:"")]=!0}}var u=function(e){var s,a=!1!==e.prefetch,i=c.useRouter(),r=n.default.useMemo((function(){var s=l(t.resolveHref(i,e.href,!0),2),a=s[0],r=s[1];return{href:a,as:e.as?t.resolveHref(i,e.as):r||a}}),[i,e.href,e.as]),u=r.href,m=r.as,j=e.children,f=e.replace,x=e.shallow,p=e.scroll,g=e.locale;"string"===typeof j&&(j=n.default.createElement("a",null,j));var v=(s=n.default.Children.only(j))&&"object"===typeof s&&s.ref,b=l(o.useIntersection({rootMargin:"200px"}),2),N=b[0],y=b[1],w=n.default.useCallback((function(e){N(e),v&&("function"===typeof v?v(e):"object"===typeof v&&(v.current=e))}),[v,N]);n.default.useEffect((function(){var e=y&&a&&t.isLocalURL(u),s="undefined"!==typeof g?g:i&&i.locale,l=d[u+"%"+m+(s?"%"+s:"")];e&&!l&&h(i,u,m,{locale:s})}),[m,u,y,g,a,i]);var k={ref:w,onClick:function(e){s.props&&"function"===typeof s.props.onClick&&s.props.onClick(e),e.defaultPrevented||function(e,s,a,i,l,r,n,c){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var s=e.currentTarget.target;return s&&"_self"!==s||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&t.isLocalURL(a))&&(e.preventDefault(),s[l?"replace":"push"](a,i,{shallow:r,locale:c,scroll:n}))}(e,i,u,m,f,x,p,g)},onMouseEnter:function(e){s.props&&"function"===typeof s.props.onMouseEnter&&s.props.onMouseEnter(e),t.isLocalURL(u)&&h(i,u,m,{priority:!0})}};if(e.passHref||"a"===s.type&&!("href"in s.props)){var M="undefined"!==typeof g?g:i&&i.locale,I=i&&i.isLocaleDomain&&t.getDomainLocale(m,M,i&&i.locales,i&&i.domainLocales);k.href=I||t.addBasePath(t.addLocale(m,M,i&&i.defaultLocale))}return n.default.cloneElement(s,k)};s.default=u},9246:function(e,s,a){"use strict";function i(e,s){(null==s||s>e.length)&&(s=e.length);for(var a=0,i=new Array(s);a<s;a++)i[a]=e[a];return i}function l(e,s){return function(e){if(Array.isArray(e))return e}(e)||function(e,s){var a=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var i,l,r=[],n=!0,t=!1;try{for(a=a.call(e);!(n=(i=a.next()).done)&&(r.push(i.value),!s||r.length!==s);n=!0);}catch(c){t=!0,l=c}finally{try{n||null==a.return||a.return()}finally{if(t)throw l}}return r}}(e,s)||function(e,s){if(!e)return;if("string"===typeof e)return i(e,s);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(a);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return i(e,s)}(e,s)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(s,"__esModule",{value:!0}),s.useIntersection=function(e){var s=e.rootRef,a=e.rootMargin,i=e.disabled||!t,d=r.useRef(),h=l(r.useState(!1),2),u=h[0],m=h[1],j=l(r.useState(s?s.current:null),2),f=j[0],x=j[1],p=r.useCallback((function(e){d.current&&(d.current(),d.current=void 0),i||u||e&&e.tagName&&(d.current=function(e,s,a){var i=function(e){var s,a={root:e.root||null,margin:e.rootMargin||""},i=o.find((function(e){return e.root===a.root&&e.margin===a.margin}));i?s=c.get(i):(s=c.get(a),o.push(a));if(s)return s;var l=new Map,r=new IntersectionObserver((function(e){e.forEach((function(e){var s=l.get(e.target),a=e.isIntersecting||e.intersectionRatio>0;s&&a&&s(a)}))}),e);return c.set(a,s={id:a,observer:r,elements:l}),s}(a),l=i.id,r=i.observer,n=i.elements;return n.set(e,s),r.observe(e),function(){if(n.delete(e),r.unobserve(e),0===n.size){r.disconnect(),c.delete(l);var s=o.findIndex((function(e){return e.root===l.root&&e.margin===l.margin}));s>-1&&o.splice(s,1)}}}(e,(function(e){return e&&m(e)}),{root:f,rootMargin:a}))}),[i,f,a,u]);return r.useEffect((function(){if(!t&&!u){var e=n.requestIdleCallback((function(){return m(!0)}));return function(){return n.cancelIdleCallback(e)}}}),[u]),r.useEffect((function(){s&&x(s.current)}),[s]),[p,u]};var r=a(7294),n=a(4686),t="undefined"!==typeof IntersectionObserver;var c=new Map,o=[]},5108:function(e,s,a){"use strict";a.r(s);var i=a(5893),l=a(2282),r=a(1660),n=a(1664);s.default=function(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l.Z,{}),(0,i.jsxs)("div",{className:"page-content bg-white",children:[(0,i.jsx)("div",{className:"dlab-bnr-inr overlay-primary-dark",style:{backgroundImage:"url(images/banner/bnr1.jpg)"},children:(0,i.jsx)("div",{className:"container",children:(0,i.jsxs)("div",{className:"dlab-bnr-inr-entry",children:[(0,i.jsx)("h1",{children:"Blog Large"}),(0,i.jsx)("nav",{"aria-label":"breadcrumb",className:"breadcrumb-row",children:(0,i.jsxs)("ul",{className:"breadcrumb",children:[(0,i.jsx)("li",{className:"breadcrumb-item",children:(0,i.jsx)(n.default,{href:"/",children:(0,i.jsx)("a",{children:"Home"})})}),(0,i.jsx)("li",{className:"breadcrumb-item active","aria-current":"page",children:"Blog"})]})})]})})}),(0,i.jsx)("section",{className:"content-inner bg-img-fix",style:{backgroundImage:"url(images/background/bg1.png)"},children:(0,i.jsx)("div",{className:"container",children:(0,i.jsxs)("div",{className:"row",children:[(0,i.jsxs)("div",{className:"col-xl-8 col-lg-8 m-b50",children:[(0,i.jsxs)("div",{className:"dlab-blog style-1 bg-white text-center m-b50",children:[(0,i.jsx)("div",{className:"dlab-media dlab-img-effect zoom",children:(0,i.jsx)("img",{src:"images/blog/default/thum1.jpg",alt:""})}),(0,i.jsxs)("div",{className:"dlab-info",children:[(0,i.jsx)("h4",{className:"dlab-title",children:(0,i.jsx)("a",{href:"/blog-details-1",children:"Fusce sem ligula, imperdiet sed nisi sit amet, euismod posuere dolor. Vestibulum in ante ut tortor eleifend venenatis."})}),(0,i.jsx)("p",{className:"m-b0",children:"Sed auctor magna lacus, in placerat nisl sollicitudin ut. Morbi feugiat ante velit, eget convallis arcu iaculis vel. Fusce in rhoncus quam. Integer dolor arcu, ullamcorper sed auctor vitae, porttitor quis erat. Donec sit amet semper massa."}),(0,i.jsx)("div",{className:"dlab-meta meta-bottom",children:(0,i.jsxs)("ul",{children:[(0,i.jsxs)("li",{className:"post-date",children:[(0,i.jsx)("i",{className:"flaticon-clock m-r10"}),"7 March, 2020"]}),(0,i.jsxs)("li",{className:"post-author",children:[(0,i.jsx)("i",{className:"flaticon-user m-r10"}),"By Johne Doe"]}),(0,i.jsx)("li",{className:"post-comment",children:(0,i.jsxs)("a",{href:"javascript:void(0);",children:[(0,i.jsx)("i",{className:"flaticon-speech-bubble"}),(0,i.jsx)("span",{children:"15"})]})}),(0,i.jsxs)("li",{className:"post-share",children:[(0,i.jsx)("i",{className:"flaticon-share"}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:(0,i.jsx)("a",{className:"fa fa-facebook",href:"https://en-gb.facebook.com/"})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{className:"fa fa-twitter",href:"https://twitter.com/login?lang=en"})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{className:"fa fa-linkedin",href:"https://www.linkedin.com/login"})})]})]})]})})]})]}),(0,i.jsxs)("div",{className:"dlab-blog style-1 bg-white text-center m-b50",children:[(0,i.jsx)("div",{className:"dlab-media dlab-img-effect zoom",children:(0,i.jsx)("img",{src:"images/blog/default/thum2.jpg",alt:""})}),(0,i.jsxs)("div",{className:"dlab-info",children:[(0,i.jsx)("h4",{className:"dlab-title",children:(0,i.jsx)("a",{href:"/blog-details-1",children:"Quisque egestas iaculis felis eget placerat ut pulvinar mi elitauctor nec."})}),(0,i.jsx)("p",{className:"m-b0",children:"Sed auctor magna lacus, in placerat nisl sollicitudin ut. Morbi feugiat ante velit, eget convallis arcu iaculis vel. Fusce in rhoncus quam. Integer dolor arcu, ullamcorper sed auctor vitae, porttitor quis erat. Donec sit amet semper massa."}),(0,i.jsx)("div",{className:"dlab-meta meta-bottom",children:(0,i.jsxs)("ul",{children:[(0,i.jsxs)("li",{className:"post-date",children:[(0,i.jsx)("i",{className:"flaticon-clock m-r10"}),"7 March, 2020"]}),(0,i.jsxs)("li",{className:"post-author",children:[(0,i.jsx)("i",{className:"flaticon-user m-r10"}),"By Johne Doe"]}),(0,i.jsx)("li",{className:"post-comment",children:(0,i.jsxs)("a",{href:"javascript:void(0);",children:[(0,i.jsx)("i",{className:"flaticon-speech-bubble"}),(0,i.jsx)("span",{children:"15"})]})}),(0,i.jsxs)("li",{className:"post-share",children:[(0,i.jsx)("i",{className:"flaticon-share"}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:(0,i.jsx)("a",{className:"fa fa-facebook",href:"https://en-gb.facebook.com/"})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{className:"fa fa-twitter",href:"https://twitter.com/login?lang=en"})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{className:"fa fa-linkedin",href:"https://www.linkedin.com/login"})})]})]})]})})]})]}),(0,i.jsxs)("div",{className:"dlab-blog style-1 bg-white text-center m-b50",children:[(0,i.jsx)("div",{className:"dlab-media dlab-img-effect zoom",children:(0,i.jsx)("img",{src:"images/blog/default/thum3.jpg",alt:""})}),(0,i.jsxs)("div",{className:"dlab-info",children:[(0,i.jsx)("h4",{className:"dlab-title",children:(0,i.jsx)("a",{href:"/blog-details-1",children:"Quisque sem tortor, convallis in arcu eu, accumsan finibus massa donec et sapien risus."})}),(0,i.jsx)("p",{className:"m-b0",children:"Sed auctor magna lacus, in placerat nisl sollicitudin ut. Morbi feugiat ante velit, eget convallis arcu iaculis vel. Fusce in rhoncus quam. Integer dolor arcu, ullamcorper sed auctor vitae, porttitor quis erat. Donec sit amet semper massa."}),(0,i.jsx)("div",{className:"dlab-meta meta-bottom",children:(0,i.jsxs)("ul",{children:[(0,i.jsxs)("li",{className:"post-date",children:[(0,i.jsx)("i",{className:"flaticon-clock m-r10"}),"7 March, 2020"]}),(0,i.jsxs)("li",{className:"post-author",children:[(0,i.jsx)("i",{className:"flaticon-user m-r10"}),"By Johne Doe"]}),(0,i.jsx)("li",{className:"post-comment",children:(0,i.jsxs)("a",{href:"javascript:void(0);",children:[(0,i.jsx)("i",{className:"flaticon-speech-bubble"}),(0,i.jsx)("span",{children:"15"})]})}),(0,i.jsxs)("li",{className:"post-share",children:[(0,i.jsx)("i",{className:"flaticon-share"}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:(0,i.jsx)("a",{className:"fa fa-facebook",href:"https://en-gb.facebook.com/"})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{className:"fa fa-twitter",href:"https://twitter.com/login?lang=en"})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{className:"fa fa-linkedin",href:"https://www.linkedin.com/login"})})]})]})]})})]})]}),(0,i.jsx)("nav",{"aria-label":"Blog Pagination",children:(0,i.jsxs)("ul",{className:"pagination text-center p-t20",children:[(0,i.jsx)("li",{className:"page-item",children:(0,i.jsx)("a",{className:"page-link prev",href:"javascript:void(0);",children:"Prev"})}),(0,i.jsx)("li",{className:"page-item",children:(0,i.jsx)("a",{className:"page-link active",href:"javascript:void(0);",children:"1"})}),(0,i.jsx)("li",{className:"page-item",children:(0,i.jsx)("a",{className:"page-link",href:"javascript:void(0);",children:"2"})}),(0,i.jsx)("li",{className:"page-item",children:(0,i.jsx)("a",{className:"page-link",href:"javascript:void(0);",children:"3"})}),(0,i.jsx)("li",{className:"page-item",children:(0,i.jsx)("a",{className:"page-link next",href:"javascript:void(0);",children:"Next"})})]})})]}),(0,i.jsx)("div",{className:"col-xl-4 col-lg-4 m-b30",children:(0,i.jsxs)("aside",{className:"side-bar sticky-top",children:[(0,i.jsx)("div",{className:"widget",children:(0,i.jsx)("div",{className:"search-bx",children:(0,i.jsx)("form",{role:"search",method:"post",children:(0,i.jsxs)("div",{className:"input-group",children:[(0,i.jsx)("div",{className:"input-group-prepend",children:(0,i.jsx)("span",{className:"input-group-text",children:(0,i.jsx)("i",{className:"la la-search"})})}),(0,i.jsx)("input",{name:"text",className:"form-control",placeholder:"Search",type:"text"}),(0,i.jsx)("span",{className:"input-group-btn",children:(0,i.jsx)("button",{type:"submit",className:"btn btn-primary",children:(0,i.jsx)("i",{className:"la la-long-arrow-right"})})})]})})})}),(0,i.jsxs)("div",{className:"widget widget_archive",children:[(0,i.jsx)("h2",{className:"widget-title",children:"Category"}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:(0,i.jsxs)("a",{href:"javascript:void(0);",children:["Design",(0,i.jsx)("span",{children:"05"})]})}),(0,i.jsx)("li",{children:(0,i.jsxs)("a",{href:"javascript:void(0);",children:["Development",(0,i.jsx)("span",{children:"25"})]})}),(0,i.jsx)("li",{children:(0,i.jsxs)("a",{href:"javascript:void(0);",children:["SEO",(0,i.jsx)("span",{children:"20"})]})}),(0,i.jsx)("li",{children:(0,i.jsxs)("a",{href:"javascript:void(0);",children:["App Design",(0,i.jsx)("span",{children:"08"})]})}),(0,i.jsx)("li",{children:(0,i.jsxs)("a",{href:"javascript:void(0);",children:["Branding",(0,i.jsx)("span",{children:"22"})]})})]})]}),(0,i.jsxs)("div",{className:"widget recent-posts-entry",children:[(0,i.jsx)("h2",{className:"widget-title",children:"Recent Posts"}),(0,i.jsxs)("div",{className:"widget-post-bx",children:[(0,i.jsxs)("div",{className:"widget-post clearfix",children:[(0,i.jsx)("div",{className:"dlab-media",children:(0,i.jsx)("img",{src:"images/blog/recent-blog/pic1.jpg",alt:""})}),(0,i.jsxs)("div",{className:"dlab-info",children:[(0,i.jsx)("h4",{className:"title",children:(0,i.jsx)("a",{href:"/blog-details-1",children:"Fusce mollis felis quis tristique"})}),(0,i.jsx)("div",{className:"dlab-meta",children:(0,i.jsx)("ul",{children:(0,i.jsx)("li",{className:"post-date",children:" 7 March, 2020 "})})})]})]}),(0,i.jsxs)("div",{className:"widget-post clearfix",children:[(0,i.jsx)("div",{className:"dlab-media",children:(0,i.jsx)("img",{src:"images/blog/recent-blog/pic2.jpg",alt:""})}),(0,i.jsxs)("div",{className:"dlab-info",children:[(0,i.jsx)("h4",{className:"title",children:(0,i.jsx)("a",{href:"/blog-details-1",children:"Fusce mollis felis quis tristique"})}),(0,i.jsx)("div",{className:"dlab-meta",children:(0,i.jsx)("ul",{children:(0,i.jsx)("li",{className:"post-date",children:" 7 March, 2020 "})})})]})]}),(0,i.jsxs)("div",{className:"widget-post clearfix",children:[(0,i.jsx)("div",{className:"dlab-media",children:(0,i.jsx)("img",{src:"images/blog/recent-blog/pic3.jpg",alt:""})}),(0,i.jsxs)("div",{className:"dlab-info",children:[(0,i.jsx)("h4",{className:"title",children:(0,i.jsx)("a",{href:"/blog-details-1",children:"Fusce mollis felis quis tristique"})}),(0,i.jsx)("div",{className:"dlab-meta",children:(0,i.jsx)("ul",{children:(0,i.jsx)("li",{className:"post-date",children:" 7 March, 2020 "})})})]})]}),(0,i.jsxs)("div",{className:"widget-post clearfix",children:[(0,i.jsx)("div",{className:"dlab-media",children:(0,i.jsx)("img",{src:"images/blog/recent-blog/pic3.jpg",alt:""})}),(0,i.jsxs)("div",{className:"dlab-info",children:[(0,i.jsx)("h4",{className:"title",children:(0,i.jsx)("a",{href:"/blog-details-1",children:"Fusce mollis felis quis tristique"})}),(0,i.jsx)("div",{className:"dlab-meta",children:(0,i.jsx)("ul",{children:(0,i.jsx)("li",{className:"post-date",children:" 7 March, 2020 "})})})]})]})]})]}),(0,i.jsxs)("div",{className:"widget widget_archive",children:[(0,i.jsx)("h2",{className:"widget-title",children:"Archives"}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:(0,i.jsxs)("a",{href:"javascript:void(0);",children:["January",(0,i.jsx)("span",{children:"05"})]})}),(0,i.jsx)("li",{children:(0,i.jsxs)("a",{href:"javascript:void(0);",children:["Fabruary",(0,i.jsx)("span",{children:"25"})]})}),(0,i.jsx)("li",{children:(0,i.jsxs)("a",{href:"javascript:void(0);",children:["March",(0,i.jsx)("span",{children:"20"})]})}),(0,i.jsx)("li",{children:(0,i.jsxs)("a",{href:"javascript:void(0);",children:["April",(0,i.jsx)("span",{children:"08"})]})}),(0,i.jsx)("li",{children:(0,i.jsxs)("a",{href:"javascript:void(0);",children:["May",(0,i.jsx)("span",{children:"22"})]})}),(0,i.jsx)("li",{children:(0,i.jsxs)("a",{href:"javascript:void(0);",children:["Jun",(0,i.jsx)("span",{children:"11"})]})}),(0,i.jsx)("li",{children:(0,i.jsxs)("a",{href:"javascript:void(0);",children:["July",(0,i.jsx)("span",{children:"19"})]})})]})]}),(0,i.jsxs)("div",{className:"widget widget_tag_cloud",children:[(0,i.jsx)("h2",{className:"widget-title",children:"Tags"}),(0,i.jsxs)("div",{className:"tagcloud",children:[(0,i.jsx)("a",{href:"javascript:void(0);",children:"Business"}),(0,i.jsx)("a",{href:"javascript:void(0);",children:"News"}),(0,i.jsx)("a",{href:"javascript:void(0);",children:"Brand"}),(0,i.jsx)("a",{href:"javascript:void(0);",children:"Website"}),(0,i.jsx)("a",{href:"javascript:void(0);",children:"Internal"}),(0,i.jsx)("a",{href:"javascript:void(0);",children:"Strategy"}),(0,i.jsx)("a",{href:"javascript:void(0);",children:"Brand"}),(0,i.jsx)("a",{href:"javascript:void(0);",children:"Mission"})]})]})]})})]})})}),(0,i.jsx)("section",{style:{backgroundImage:"url(images/background/bg5.jpg)",backgroundSize:"cover"},children:(0,i.jsx)("div",{className:"container",children:(0,i.jsxs)("div",{className:"row action-box style-1 align-items-center",children:[(0,i.jsx)("div",{className:"col-xl-7 col-lg-8 col-md-8 wow fadeIn","data-wow-duration":"2s","data-wow-delay":"0.2s",children:(0,i.jsxs)("div",{className:"section-head style-1",children:[(0,i.jsx)("h6",{className:"sub-title bgl-primary m-b20 text-primary",children:"More With Us"}),(0,i.jsx)("h2",{className:"title",children:"You Want To Showcase Your Website In Top Join With Us"})]})}),(0,i.jsx)("div",{className:"col-xl-5 col-lg-4 col-md-4 text-right m-b30 wow fadeIn","data-wow-duration":"2s","data-wow-delay":"0.4s",children:(0,i.jsxs)("a",{href:"/contact-us-1",className:"btn btn-link d-inline-flex align-items-center",children:[(0,i.jsx)("i",{className:"fa fa-angle-right m-r10"}),"Join Now"]})})]})})})]}),(0,i.jsx)(r.Z,{})]})}},1664:function(e,s,a){e.exports=a(1551)}},function(e){e.O(0,[776,774,888,179],(function(){return s=3002,e(e.s=s);var s}));var s=e.O();_N_E=s}]);