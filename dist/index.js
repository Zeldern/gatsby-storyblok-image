function t(){return t=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a])}return t},t.apply(this,arguments)}var e=/^(https?:)?\/\/a.storyblok.com\/f\/*[0-9]+\/*[0-9]*x*[0-9]*\/[A-Za-z0-9]+\/[\S]+\.[a-zA-Z]+/;function r(t){var r=null,a=null;if("string"==typeof t&&(r=t),"object"==typeof t&&(r=t.image,a=t.base64?t.base64:null),!(r=e.test(r)?r:null))return!1;var i=r.replace(/^(https?:)?\/\/a.storyblok.com\//,""),n=i.split("/"),o=n[4],u=n[2].split("x").map(function(t){return parseInt(t,10)}),l=u[0],s=u[1];return{originalPath:i,extension:o.split(".")[1],metadata:{dimensions:{width:l,height:s,aspectRatio:l/s},lqip:a}}}var a=[1,1.5,2,3],i=[.25,.5,1,1.5,2,3],n={quality:100,smartCrop:!0,format:null,fill:null,toFormat:null,base64:null,useBase64:!0},o=t({},n,{maxWidth:800,maxHeight:null}),u=t({},n,{width:400,height:null});function l(t){var e=t.includes("filters:format(webp)"),r=/[a-f0-9]+-\d+x\d+\.webp/.test(t);return e||r}function s(t,e,r){var a=e.width,i=e.height,n=e.smartCrop,o=e.quality,u=e.format,l=e.fill,s=t.split("."),h="https://img2.storyblok.com";a&&i&&(h+="/"+a+"x"+i),n&&(h+="/smart");var p=[o&&"quality("+o+")"].concat([u&&u!==s[1]&&"format("+u+")"],[l&&"fill("+l+")"]);return(p=p.filter(function(t){return!0===Boolean(t)})).length>0&&(h+=function(t){return t.reduce(function(t,e,r){return t+":"+e},"/filters")}(p)),h+="/"+t,console.log(h),h=h.replace("filters:quality(100)","filters:quality(100):rotate("+r+")"),console.log(h),h}function h(t,e,r){var a=e.height;return s(t,{width:(e.width/3).toFixed(0),height:(a/3).toFixed(0),quality:10},r)}exports.getFixedGatsbyImage=function(e,i){void 0===i&&(i={});var n=r(e);if(!n)return null;var o=t({},u,i),p=o.width,c=o.height,f=n.metadata.dimensions,d=n.originalPath,m=f.aspectRatio;o.height&&(m=p/o.height);var b=null;o.toFormat?b=o.toFormat:l(d)&&(b="jpg");var g=a.map(function(t){return Math.round(p*t)}).filter(function(t){return t<f.width}).reduce(function(e,r,i){var n=a[i]+"x",u=Math.round(r/m),l=t({},o,{width:r,height:u}),h=s(d,t({},l,{format:"webp"})),p=s(d,t({},l,b&&{format:b}));return e.webp.push(h+" "+n),e.base.push(p+" "+n),e},{webp:[],base:[]}),w=Math.round(c||p/m),v=t({},o,{width:p,height:w}),x=s(d,t({},v,b&&{format:b})),y=s(d,t({},v,{format:"webp"}));return{base64:h(d,{width:p,height:c,aspectRatio:m}),aspectRatio:m,width:Math.round(p),height:w,src:x,srcWebp:y,srcSet:g.base.join(",\n")||null,srcSetWebp:g.webp.join(",\n")||null}},exports.getFluidGatsbyImage=function(e,a,n){void 0===a&&(a={}),void 0===n&&(n=0);var u=r(e);if(!u)return null;var p=t({},o,a),c=p.maxWidth,f=u.metadata.dimensions,d=u.originalPath,m=f.aspectRatio;p.maxHeight&&(m=c/p.maxHeight);var b=p.maxHeight||Math.round(c/f.aspectRatio),g=null;p.toFormat?g=p.toFormat:l(d)&&(g="jpg");var w=p.sizes||"(max-width: "+c+"px) 100vw, "+c+"px",v=i.map(function(t){return Math.round(c*t)}).filter(function(t){return t<f.width}).concat(f.width).filter(function(t){return t<f.width}).reduce(function(e,r){var a={width:r,height:Math.round(r/m)},i=s(d,t({},p,a,{format:"webp"}),n),o=s(d,t({},p,a,{format:g}),n);return e.webp.push(i+" "+r+"w"),e.base.push(o+" "+r+"w"),e},{webp:[],base:[]}),x={width:c,height:b},y=s(d,t({},p,x,{format:g}),n),j=s(d,t({},p,x,{format:"webp"}),n);return{base64:h(d,{width:c,height:b,aspectRatio:m},n),aspectRatio:m,src:y,srcWebp:j,srcSet:v.base.join(",\n")||null,srcSetWebp:v.webp.join(",\n")||null,sizes:w}};
//# sourceMappingURL=index.js.map
