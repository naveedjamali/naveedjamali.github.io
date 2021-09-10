'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "favicon.png": "5dcef449791fa27946b3d35ad8803796",
"index.html": "28827de54ba31e194aefda008bbba47d",
"/": "28827de54ba31e194aefda008bbba47d",
"README.md": "878054544ba48ab6ad98ec7f294475d4",
"main.dart.js": "bc03e5516a2b84549f4aa936537b37e3",
"version.json": "5ee5869f682ca0176ea634987936366d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"_config.yml": "932865e374757d33e321eeb2d5e88b6b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/NOTICES": "bde9ee889e7cdb2c908965b81d635c52",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"manifest.json": "cc606cefe79b5d9a9a85ce1f3e08e507",
".git/info/exclude": "d718c267464b76000574e4fb4d9cbafd",
".git/index": "b0791d62f5c4257efa9dadf9d54cb65e",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/objects/79/332fed4eaff18728ca491ac9bc665af306d644": "cb4a50d986888af05e9d0772b31bb69d",
".git/objects/ba/09485d540a8f7133a3a5cde181d702ebb30b32": "7cf69826553ffd0a02baa9b97867eaf2",
".git/objects/b7/c6739743b104a7d614185cd20b5488b88c01a8": "8e64eebad9af06ba61e93c2ca1e8cb08",
".git/objects/af/dcb8bc0cf81fd3bbef3506b17698f59e0a228c": "3bea57bb63129a148ab2b5a2054ea2ed",
".git/objects/21/3a964e57ed4d95caa2749a79a6421e28ed1803": "294a2d5d97a573e32fbd3d84d34dad2f",
".git/objects/f9/35dcbeca970dcf4d8180f9adefd00f0aab0071": "97017712121f47867f4fb9345b75684e",
".git/objects/52/5a2fb3e0a047104d8ccdd755c5a16f7f8255f7": "7abb53a3827dc8559f5c6cfb551abe29",
".git/objects/d5/68fb86805614a211f68e8ca0c7e6d98a404406": "d1b5ca23fd591e97a05c0fbfbb8c004e",
".git/objects/7a/1e0160a68b1477a6fa8b35fc1891e7d4ec8269": "f3fa2c8058bcfed13e77322160c09e7c",
".git/objects/b6/da04dd12ac67bc97ec9930b880eddf0d93f7df": "6d824ef220816aff6985176fe3b8db02",
".git/objects/7f/4f769e8c68121aacee92876f87fed1c74998c9": "497c37bfdaf79c0826801463eda48490",
".git/objects/0b/756843c9d0e3659e8a9cfebf3045eb926fb1ed": "b0fa704a25a4613c66da85c628af1f6b",
".git/objects/68/43f98e5a1e5ab8b313804e4d9eb18358b5493a": "8c3e5085a1e035d54e54354b89f7328a",
".git/objects/c3/434767c6c14f604249a064bfa44778e25bf864": "58230169d2a2d2fcb82b2988bb1f440c",
".git/objects/f2/ca20b39bad68031040867e20ad2ab4113f0600": "0fc137234f1306d53053cf0a7c6e2b14",
".git/objects/be/4a454006dfe975f4940e63ebf73774a19beb95": "03155ebb1ddb31ce434c2c967fb4ede3",
".git/objects/pack/pack-f27631e75d461e59db42f112e80607a877565c19.pack": "4f17d049c88dc954ad6b25d8c83a0efe",
".git/objects/pack/pack-4317da06764b1305dc9951c5810b34807402bd25.pack": "9dbe0d3993172a07e0209a06f38a77f0",
".git/objects/pack/pack-f27631e75d461e59db42f112e80607a877565c19.idx": "5ba21825609cc966d19b8e636f51bbf6",
".git/objects/pack/pack-4317da06764b1305dc9951c5810b34807402bd25.idx": "b17313286f8234db21c484452b6ca39c",
".git/objects/92/a0bded044516df3ac545f9ada258d4a56b53c6": "1a8ebe1ff9b3462330bbcc3d3bbf350e",
".git/objects/b9/cc067dba21597a7da423e19a841210e7f5e8d6": "a5fd73536c88b3eae6951b6dd5b97852",
".git/objects/e6/3e414d70a6d9b9ab715349e6720da50cc459c6": "c43392a52d4150dbc57802f5967f40a2",
".git/objects/a6/a68773655aa025f275f43c9af2444b710c9134": "a5ae56be5cb4ef75644b7e0776ec46b5",
".git/FETCH_HEAD": "0ece10bfcea71c6d91a7695e7c8ac61c",
".git/logs/HEAD": "7e3d726fb7f37e60af53371235cf7023",
".git/logs/refs/stash": "cf3e04aaa2ada41cf4d33766cf40519a",
".git/logs/refs/heads/master": "7e3d726fb7f37e60af53371235cf7023",
".git/logs/refs/remotes/origin/dev": "d8bdd33e9255eaa6c9e443f326884409",
".git/logs/refs/remotes/origin/qa": "d8bdd33e9255eaa6c9e443f326884409",
".git/logs/refs/remotes/origin/master": "4b07573fff1df5efa7ac5638dde1c91b",
".git/config": "c5abbc14f0e2f00ef221cd58404abebb",
".git/hooks/README.sample": "d82bea07313becc69a9abcb4556a924f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/refs/stash": "92194a6ce0f4192213d6bbea16716459",
".git/refs/heads/master": "64f8433ccb165430e4dd83d13cfdc627",
".git/refs/remotes/origin/dev": "f4272f2c195d94cc94cca75fe4ec21ca",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/qa": "f4272f2c195d94cc94cca75fe4ec21ca",
".git/refs/remotes/origin/master": "64f8433ccb165430e4dd83d13cfdc627"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
