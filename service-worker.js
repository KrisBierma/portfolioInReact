"use strict";var precacheConfig=[["https://www.krisbierma.com/index.html","23a2a0c287eb639dfd5716ca18b374d3"],["https://www.krisbierma.com/static/css/main.480feae6.css","630d54e957038d55b917ae29004ceb00"],["https://www.krisbierma.com/static/js/main.cd58b4f5.js","d71776ee4e6db811aa559b904091da93"],["https://www.krisbierma.com/static/media/bamazon.5258d21e.jpg","5258d21ee9562ee085d257d8b9aed61a"],["https://www.krisbierma.com/static/media/bootstrapIcon.93d11a3f.png","93d11a3fc5b158100e673c3ffa09ecde"],["https://www.krisbierma.com/static/media/bootstrapIcon2.35bf5483.png","35bf5483f98e76b72f14dceef926e1fb"],["https://www.krisbierma.com/static/media/cartoon-wars.5de8a746.png","5de8a74636c2c3b0c395da1bf85445cc"],["https://www.krisbierma.com/static/media/command-line.a0143799.png","a0143799c01b0737021c71badc23be0a"],["https://www.krisbierma.com/static/media/crystals-game.7a3c1ce6.png","7a3c1ce6a72b5b7348b60a164353e3f7"],["https://www.krisbierma.com/static/media/david.afbb5420.jpg","afbb5420f981bad07d7fc8572ebf8711"],["https://www.krisbierma.com/static/media/firebaseIcon.0475d934.png","0475d934d0dc2b47c3c287b8218ab5a7"],["https://www.krisbierma.com/static/media/friendfinder.65c7bf1b.png","65c7bf1b0aa913512c7f2ca53eae2993"],["https://www.krisbierma.com/static/media/gif-api.706ce94b.png","706ce94b5d4e1fde6e59132ece397517"],["https://www.krisbierma.com/static/media/hangman-game.706e5e75.jpg","706e5e75b7cd36833e8682e2b906de33"],["https://www.krisbierma.com/static/media/hbsIcon2.3b84a486.png","3b84a486e222126416f68d348192463d"],["https://www.krisbierma.com/static/media/jqueryIcon.e0f850ea.png","e0f850ead5e095cdc46a53905d777946"],["https://www.krisbierma.com/static/media/mongoIcon.c1fe2978.png","c1fe2978f3f659a59e88f097e1fe563c"],["https://www.krisbierma.com/static/media/mongoScraper.4bfced43.jpg","4bfced43bad370a8831c7dad455d5216"],["https://www.krisbierma.com/static/media/myVeggieEats.e460432f.png","e460432faf1af2aa05a599e5da7ab61a"],["https://www.krisbierma.com/static/media/mysqlIcon.859943c6.png","859943c64603e2265f652930c7906d16"],["https://www.krisbierma.com/static/media/node.1fea17d5.png","1fea17d555d6ac4d4fec1bc0c360d522"],["https://www.krisbierma.com/static/media/node2.f1bdaa67.png","f1bdaa67606d56be382ed465ab65affe"],["https://www.krisbierma.com/static/media/node3.acdb1976.png","acdb19761ea384647da9b613df482d93"],["https://www.krisbierma.com/static/media/node4.b4589cf0.png","b4589cf0c500896fec5393050c919ba1"],["https://www.krisbierma.com/static/media/node5.76012d04.png","76012d045821d7c0c5afe413e7117e1f"],["https://www.krisbierma.com/static/media/node6.c2d6b049.png","c2d6b04939c331131e0cb720446184a4"],["https://www.krisbierma.com/static/media/node7.ace52584.png","ace52584c48291a60ea7f3363273cd63"],["https://www.krisbierma.com/static/media/node8.9be45e9a.png","9be45e9ab2d5eadfa65e8eeeb47be037"],["https://www.krisbierma.com/static/media/nodeIcon.f7337d33.png","f7337d339216d05c1551688efb13a830"],["https://www.krisbierma.com/static/media/p3.1b3e106b.jpg","1b3e106b3440dd3418566c703a50f516"],["https://www.krisbierma.com/static/media/plantos.0776b0e6.jpg","0776b0e64456774847dd51c4f3af42c5"],["https://www.krisbierma.com/static/media/portfolio.1af52750.png","1af527502f40e07fe5826d40ffadaac5"],["https://www.krisbierma.com/static/media/profilePic.af5edaff.JPG","af5edaff12d63a6f17750df6460124fb"],["https://www.krisbierma.com/static/media/profilePic2.f141d010.jpg","f141d0104ce62ce2eb2464f615568075"],["https://www.krisbierma.com/static/media/reactGame.0ee99d4c.png","0ee99d4cfab96921e2a1a444d007a9f8"],["https://www.krisbierma.com/static/media/reactIcon2.771425c4.png","771425c449949fdc815e16e2f6a1ee9f"],["https://www.krisbierma.com/static/media/stockMarket.23d36016.png","23d36016b9640c15f2f16e5d5bd49f04"],["https://www.krisbierma.com/static/media/symphony.fcb1692c.png","fcb1692c32e9335e653f644cfb13d144"],["https://www.krisbierma.com/static/media/train.a1bc9c30.jpg","a1bc9c304874a4838d4ec96674f2c9bf"],["https://www.krisbierma.com/static/media/triviaGame.04b26c06.png","04b26c06d6df44513565e55836c91398"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var i=new URL(e);return c&&i.pathname.match(c)||(i.search+=(i.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),i.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),i=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),i]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var i="https://www.krisbierma.com/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(i,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});