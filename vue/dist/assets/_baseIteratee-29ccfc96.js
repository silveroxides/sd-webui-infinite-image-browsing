import{cq as _,cr as d,bN as c,aJ as g,b3 as E,cs as O,b5 as P,ct as p,b1 as y,bl as C}from"./index-25d56352.js";function I(n){return function(r){return r==null?void 0:r[n]}}var L=1,b=2;function D(n,r,e,t){var i=e.length,A=i,a=!t;if(n==null)return!A;for(n=Object(n);i--;){var f=e[i];if(a&&f[2]?f[1]!==n[f[0]]:!(f[0]in n))return!1}for(;++i<A;){f=e[i];var u=f[0],s=n[u],o=f[1];if(a&&f[2]){if(s===void 0&&!(u in n))return!1}else{var l=new _;if(t)var R=t(s,o,u,n,r,l);if(!(R===void 0?d(o,s,L|b,t,l):R))return!1}}return!0}function h(n){return n===n&&!c(n)}function G(n){for(var r=g(n),e=r.length;e--;){var t=r[e],i=n[t];r[e]=[t,i,h(i)]}return r}function M(n,r){return function(e){return e==null?!1:e[n]===r&&(r!==void 0||n in Object(e))}}function w(n){var r=G(n);return r.length==1&&r[0][2]?M(r[0][0],r[0][1]):function(e){return e===n||D(e,n,r)}}function F(n,r,e){var t=n==null?void 0:E(n,r);return t===void 0?e:t}var N=1,S=2;function m(n,r){return O(n)&&h(r)?M(P(n),r):function(e){var t=F(e,n);return t===void 0&&t===r?p(e,n):d(r,t,N|S)}}function q(n){return function(r){return E(r,n)}}function x(n){return O(n)?I(P(n)):q(n)}function T(n){return typeof n=="function"?n:n==null?y:typeof n=="object"?C(n)?m(n[0],n[1]):w(n):x(n)}export{T as b};
