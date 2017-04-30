/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["404.html","b6e1bc7b3c0c1dbec1ab634821069648"],["about.html","a5174e4c0eb57b753ff176c8a954f587"],["accessibility/2017/03/07/what-is-web-accessibility.html","875829fc46828ab0ca830c503cbeb976"],["css/2014/08/28/CSS3-Animations.html","e4799fbac38b6b903f60764706a3afaa"],["css/2017/02/16/CSS4-selectors.html","799fde844c610d688722ec76797674b7"],["css/about.css","9afd191ed533d6830bbfd514dc4a155b"],["css/base.css","e001b92f50cdc5bcc4f33a731a3c215b"],["css/examples.css","5f5bd2921558aa9cd2e39d8b13b01831"],["css/main.css","9e9bbff2e9b28b859c6018d5be775780"],["css/old.css","266e14e9fbf1e114a024dbd91626db73"],["css/post.css","5e5052e283bbfad6cb450f8d54226901"],["css/reset.css","7e9de0bae21fd193dd472c0d6f549a06"],["css/screens.css","8b15d59297d74d5395e6a7e948cb99e5"],["css/syntax.css","67c0120bac32be2da1a48b91c6bc040a"],["demo/ReactJS/google-maps/index.html","903ffb0715f0b2889208e3d5463d2a70"],["demo/ReactJS/hacker-news/index.html","bc6f4033a3043517a65fd9bbb6787dfb"],["demo/ReactJS/helloworld.html","690e99ecb9701a7e851d3175e0e910b6"],["demo/ReactJS/todo-list/index.html","4d03d42c132f1de96182f2657c8fdb65"],["demo/chrome-splash-screen/index.html","a02d13971c9ebbf951c76319a757fb8a"],["demo/css-spinner/index.html","077eded86bcb32118d7a7de85beaa841"],["demo/css/slideup-animation/demo.html","c4a10f0fb144e3701c5139879da2ff52"],["demo/hacker-news/index.html","3d0bba8ce3399aaa7ddce15bd683f773"],["demo/hamburger-menu/index.html","7cd58a31c58ffc0bcf5d9f0412f0e51c"],["demo/launchyard/about.html","28adeb4d57bf430186cc6634fc7ce276"],["demo/launchyard/case-studies.html","ff74d0db050a53e98adbb6ffa5e96758"],["demo/launchyard/index.html","321ddd80c49eae05d986fc5c7ffa7274"],["demo/notify/index.html","924c441890238282c7a2b9c33f437302"],["demo/pwa/bower_components/reveal.js/index.html","9190f89859decbf7f4991d2ab6b9f871"],["demo/pwa/bower_components/reveal.js/plugin/markdown/example.html","498d2e92badd185965611fe387ad339b"],["demo/pwa/bower_components/reveal.js/plugin/notes-server/notes.html","6e9a7c2bf7d8f285c57a2acd1c4ff0cd"],["demo/pwa/bower_components/reveal.js/plugin/notes/notes.html","1e5ecb3ce15d61a8b59a47d23877bbea"],["demo/pwa/index.html","ebfb212e18780fb774472158e521a2c4"],["demo/pwa/slides/Application-Shell-Architecture.html","5a36fb573a065d1a8b22a604ad362e02"],["demo/pwa/slides/Installtion-Example.html","2598f7a68f9524b486e872df3506e7fa"],["demo/pwa/slides/Splash-screen.html","1d8ea2dfb100e94f126f591bd810483b"],["demo/pwa/slides/Standalone.html","05d1e55960d035defaeb1cb948fd8f74"],["demo/pwa/slides/browser-support.html","36c29d0cc5cfa406dfadcec0e3ecd21b"],["demo/pwa/slides/cache-a-request-example.html","0da5b7e39b211b9787188765c1c8363d"],["demo/pwa/slides/cache-a-request.html","ecfe0759dba4ff269f30bd98a0312d04"],["demo/pwa/slides/examples-pwa.html","3e134b534473421629f15c814f379012"],["demo/pwa/slides/features-of-pwa.html","ba0b90c22220b45f728e73b07c28ac2f"],["demo/pwa/slides/installable-web-apps.html","77618ae49480b6176a07d275a4305a83"],["demo/pwa/slides/installable-webapps-example.html","1c47b80352e08f3038eb2f7bfc556915"],["demo/pwa/slides/manifest-reference.html","8de62872a1d8966cb8e47b6f65204995"],["demo/pwa/slides/offline.html","48a782da09292831eea902648edfad8d"],["demo/pwa/slides/progressive-web-apps.html","1cc1b54ed0a4b1e3703310724ce9fb80"],["demo/pwa/slides/sw-example.html","1d8cb6a9be309a6ceb3e8047b17c2ec9"],["demo/pwa/slides/sw-installation-steps.html","6b1c521db685673748bec053ff8751e4"],["demo/pwa/slides/sw-installation.html","9a58e3209d7d2eca1541c794f243c2a1"],["demo/pwa/slides/sw-reference.html","c82149026f1a316ecee7c1f0ec5d3b3e"],["demo/pwa/slides/thanks.html","5ebfe67e6e318cac3dd06db99554bd7a"],["demo/pwa/slides/update-sw.html","cd0ef8454644ce169630f90893eb7125"],["demo/react-material-spinner/index.html","565dfa0399e3dd3808c49758b307da58"],["demo/remote/remote.html","d68f85f964ca5403cb138d4f177b0b6a"],["demo/simple-sw/index.html","dfc8cf2baa9c7c91be64929da7293e11"],["demo/sw/index.html","fff7712aab360237a287ed80e1bbdc10"],["devtools/2014/09/12/Chrome-DevTools.html","f5c9776a9b5b2530da5ecd0b316c6edf"],["gulp/2014/10/27/Task-Automation-using-grunt-and-gulp.html","f75a87cfd53c17b68c24881aa9a809b8"],["images/avatar.jpg","99df130b746c53ad69a2d7247a75fc1f"],["images/email-circle.svg","1e913f94e4485c2edfe6f4cf918797de"],["images/github-circle.svg","bd82c189fb5645cc33dd8b81283e3ca1"],["images/link.svg","1101cf6e7e020a1ea315788e417f24eb"],["images/twitter-circle.svg","c2fa90e057692c5099882269184b8986"],["index.html","d5769a3c90e37b2041f954f3a932b86e"],["js/main.js","d302224d278b21b8941f775efb9d8884"],["performance/2014/12/15/Web-performance-optimization.html","e9e0cbf2763eb1d9b543808d410e1ed5"],["performance/2017/04/30/comparison-of-http-and-http2.html","5aab3b34535036548bcd9101708e3d7b"],["react/2015/02/28/Introduction-to-React-Framework.html","8069925f6d3ce59aa12badacaf3d72f4"],["ux/2017/03/14/Best-Practices-for-Push-Notifications.html","ef818a9247d1449779fd01d5d4c164ba"],["webpack/2017/02/03/how-to-setup-webpack-2.html","7a7a6c41edd290b5009646b8b2ca5927"]];
var cacheName = 'sw-precache-v3-sw-precache-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameter and see if we have that URL
    // in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







