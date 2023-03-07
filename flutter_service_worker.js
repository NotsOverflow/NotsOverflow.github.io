'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "f413989255d93017da59782cf69b903d",
"assets/blogs/autority-heroku_go.md": "19f1fe4d51974a0d3628aacc9f71a0ed",
"assets/blogs/doc-ppa_deb.md": "869e57e02f58c39fa6bc1fca98eca826",
"assets/blogs/doc-rails_windows.md": "957aac520947b48b0178615c38df3520",
"assets/blogs/finger-libvm_setup.md": "f045ca74c1622d796dc39dc84e3d0640",
"assets/blogs/wheel-godot_game_engine.md": "aeb4a83f46739afa98d19de222fc2a7e",
"assets/FontManifest.json": "402f372e0319f02089afa280eeee1704",
"assets/fonts/codePro/SourceCodePro-Black.ttf": "15314c03e3648f6e6531abccea341e99",
"assets/fonts/codePro/SourceCodePro-BlackItalic.ttf": "408c7a66c3e2d66e72817074c373c596",
"assets/fonts/codePro/SourceCodePro-Bold.ttf": "bcb5e0a6c22cd10aac69f14bb5b0ecb1",
"assets/fonts/codePro/SourceCodePro-BoldItalic.ttf": "80a4fd1c5e5e623e1e3832ae6498b8cf",
"assets/fonts/codePro/SourceCodePro-ExtraBold.ttf": "7afda4e5d499dc2da6d3c2fa8f9016d3",
"assets/fonts/codePro/SourceCodePro-ExtraBoldItalic.ttf": "25561e896616c51ed806aebe5aa9510e",
"assets/fonts/codePro/SourceCodePro-ExtraLight.ttf": "f989325b91b155aea1fe1785d1ca29b9",
"assets/fonts/codePro/SourceCodePro-ExtraLightItalic.ttf": "d9475166f2926f93171962fe03e9b670",
"assets/fonts/codePro/SourceCodePro-Italic.ttf": "c9ef71914ebe8752dd0ce7955aae6733",
"assets/fonts/codePro/SourceCodePro-Light.ttf": "ce3df95ccba87a5ccee17327835d631f",
"assets/fonts/codePro/SourceCodePro-LightItalic.ttf": "e3983972193585ce141501e361a89602",
"assets/fonts/codePro/SourceCodePro-Medium.ttf": "818bd08e02b082f895e71061311eeced",
"assets/fonts/codePro/SourceCodePro-MediumItalic.ttf": "eb8a356fcb1d818b46ebbefa193ef4ab",
"assets/fonts/codePro/SourceCodePro-Regular.ttf": "846ad017921bac28ddb313763eb7c6ad",
"assets/fonts/codePro/SourceCodePro-SemiBold.ttf": "e1fdaf4f876a2473d978bdeced8dd701",
"assets/fonts/codePro/SourceCodePro-SemiBoldItalic.ttf": "61eef3e9bcac16ef556abdc362a30a72",
"assets/fonts/LobsterTwo/LobsterTwo-Bold.ttf": "b3848d2a043205b88cb752af77d0fe05",
"assets/fonts/LobsterTwo/LobsterTwo-BoldItalic.ttf": "1f8e62b22970e748d4e9a9e7f74d0dc4",
"assets/fonts/LobsterTwo/LobsterTwo-Italic.ttf": "aeb48750ac6d1dfaec2dfe21d580b523",
"assets/fonts/LobsterTwo/LobsterTwo-Regular.ttf": "6d3f44fa5b7f6ce27aea91f8ea715069",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/fonts/Montserrat/Montserrat-Black.ttf": "9c1278c56276b018109f295c1a751a69",
"assets/fonts/Montserrat/Montserrat-BlackItalic.ttf": "a943ff860cf7bda5ce3722cad5c1dc06",
"assets/fonts/Montserrat/Montserrat-Bold.ttf": "1f023b349af1d79a72740f4cc881a310",
"assets/fonts/Montserrat/Montserrat-BoldItalic.ttf": "9d216a715551da3b92a4a9b0e8994868",
"assets/fonts/Montserrat/Montserrat-ExtraBold.ttf": "bd8fb30c6473177cfb9a5544c9ad8fdb",
"assets/fonts/Montserrat/Montserrat-ExtraBoldItalic.ttf": "e07b3f35e3e0073b2cde4c5a951cc24e",
"assets/fonts/Montserrat/Montserrat-ExtraLight.ttf": "fca7947b08333e5ffcb80c069755b5c9",
"assets/fonts/Montserrat/Montserrat-ExtraLightItalic.ttf": "e4d0c1f4d67a7f3d23a1f2f78d24ea57",
"assets/fonts/Montserrat/Montserrat-Italic.ttf": "761177c558bb3a0084aa85704315b990",
"assets/fonts/Montserrat/Montserrat-Light.ttf": "e65ae7ed560da1a63db603bd8584cfdb",
"assets/fonts/Montserrat/Montserrat-LightItalic.ttf": "e70e5d8d5129f35418fe2cfaa6132c1d",
"assets/fonts/Montserrat/Montserrat-Medium.ttf": "b3ba703c591edd4aad57f8f4561a287b",
"assets/fonts/Montserrat/Montserrat-MediumItalic.ttf": "2e7c02a0a4a5fd318b0625d120ad2033",
"assets/fonts/Montserrat/Montserrat-Regular.ttf": "3fe868a1a9930b59d94d2c1d79461e3c",
"assets/fonts/Montserrat/Montserrat-SemiBold.ttf": "fb428a00b04d4e93deb4d7180814848b",
"assets/fonts/Montserrat/Montserrat-SemiBoldItalic.ttf": "d41c0a341637c2e35ae019730b2d45a5",
"assets/fonts/Montserrat/Montserrat-Thin.ttf": "4b73d125bab54f94ed2510590c237f73",
"assets/fonts/Montserrat/Montserrat-ThinItalic.ttf": "59cdce8fbd384a39ab0fd14b9f693de5",
"assets/fonts/PlayfairDisplay/PlayfairDisplay-Black.ttf": "299c0b90ec08297dbbdaf5e486486612",
"assets/fonts/PlayfairDisplay/PlayfairDisplay-BlackItalic.ttf": "aeb8226df0086da0c5a917826c0f2813",
"assets/fonts/PlayfairDisplay/PlayfairDisplay-Bold.ttf": "48ebb38b5445196e567f948e132230ca",
"assets/fonts/PlayfairDisplay/PlayfairDisplay-BoldItalic.ttf": "f99d1cf8601ad1f748da5d968a258065",
"assets/fonts/PlayfairDisplay/PlayfairDisplay-ExtraBold.ttf": "26279823698dbec699aa7e12077924c5",
"assets/fonts/PlayfairDisplay/PlayfairDisplay-ExtraBoldItalic.ttf": "315e45f4a9e0d087f309923ecf607a73",
"assets/fonts/PlayfairDisplay/PlayfairDisplay-Italic.ttf": "c1d6f318369e39a88e910b40d2d70bca",
"assets/fonts/PlayfairDisplay/PlayfairDisplay-Medium.ttf": "0f3ea302305126e3d1e2112920c4ff85",
"assets/fonts/PlayfairDisplay/PlayfairDisplay-MediumItalic.ttf": "c212a6af05a32818673bcf2526d8ebb7",
"assets/fonts/PlayfairDisplay/PlayfairDisplay-Regular.ttf": "a96ecd13655587d30a21265c547cd8aa",
"assets/fonts/PlayfairDisplay/PlayfairDisplay-SemiBold.ttf": "f542d2274f16f5e03c74b245908c3055",
"assets/fonts/PlayfairDisplay/PlayfairDisplay-SemiBoldItalic.ttf": "31220ced2b743b5a2dfcaa139a9bdaad",
"assets/fonts/Poppins/Poppins-Black.ttf": "14d00dab1f6802e787183ecab5cce85e",
"assets/fonts/Poppins/Poppins-BlackItalic.ttf": "e9c5c588e39d0765d30bcd6594734102",
"assets/fonts/Poppins/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/fonts/Poppins/Poppins-BoldItalic.ttf": "19406f767addf00d2ea82cdc9ab104ce",
"assets/fonts/Poppins/Poppins-ExtraBold.ttf": "d45bdbc2d4a98c1ecb17821a1dbbd3a4",
"assets/fonts/Poppins/Poppins-ExtraBoldItalic.ttf": "8afe4dc13b83b66fec0ea671419954cc",
"assets/fonts/Poppins/Poppins-ExtraLight.ttf": "6f8391bbdaeaa540388796c858dfd8ca",
"assets/fonts/Poppins/Poppins-ExtraLightItalic.ttf": "a9bed017984a258097841902b696a7a6",
"assets/fonts/Poppins/Poppins-Italic.ttf": "c1034239929f4651cc17d09ed3a28c69",
"assets/fonts/Poppins/Poppins-Light.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/fonts/Poppins/Poppins-LightItalic.ttf": "0613c488cf7911af70db821bdd05dfc4",
"assets/fonts/Poppins/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/fonts/Poppins/Poppins-MediumItalic.ttf": "cf5ba39d9ac24652e25df8c291121506",
"assets/fonts/Poppins/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/fonts/Poppins/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/fonts/Poppins/Poppins-SemiBoldItalic.ttf": "9841f3d906521f7479a5ba70612aa8c8",
"assets/fonts/Poppins/Poppins-Thin.ttf": "9ec263601ee3fcd71763941207c9ad0d",
"assets/fonts/Poppins/Poppins-ThinItalic.ttf": "01555d25092b213d2ea3a982123722c9",
"assets/fonts/Roboto/Roboto-Black.ttf": "d6a6f8878adb0d8e69f9fa2e0b622924",
"assets/fonts/Roboto/Roboto-BlackItalic.ttf": "c3332e3b8feff748ecb0c6cb75d65eae",
"assets/fonts/Roboto/Roboto-Bold.ttf": "b8e42971dec8d49207a8c8e2b919a6ac",
"assets/fonts/Roboto/Roboto-BoldItalic.ttf": "fd6e9700781c4aaae877999d09db9e09",
"assets/fonts/Roboto/Roboto-Italic.ttf": "cebd892d1acfcc455f5e52d4104f2719",
"assets/fonts/Roboto/Roboto-Light.ttf": "881e150ab929e26d1f812c4342c15a7c",
"assets/fonts/Roboto/Roboto-LightItalic.ttf": "5788d5ce921d7a9b4fa0eaa9bf7fec8d",
"assets/fonts/Roboto/Roboto-Medium.ttf": "68ea4734cf86bd544650aee05137d7bb",
"assets/fonts/Roboto/Roboto-MediumItalic.ttf": "c16d19c2c0fd1278390a82fc245f4923",
"assets/fonts/Roboto/Roboto-Regular.ttf": "8a36205bd9b83e03af0591a004bc97f4",
"assets/fonts/Roboto/Roboto-Thin.ttf": "66209ae01f484e46679622dd607fcbc5",
"assets/fonts/Roboto/Roboto-ThinItalic.ttf": "7bcadd0675fe47d69c2d8aaef683416f",
"assets/fonts/Ubuntu/Ubuntu-Bold.ttf": "896a60219f6157eab096825a0c9348a8",
"assets/fonts/Ubuntu/Ubuntu-BoldItalic.ttf": "c16e64c04752a33fc51b2b17df0fb495",
"assets/fonts/Ubuntu/Ubuntu-Italic.ttf": "9f353a170ad1caeba1782d03dd8656b5",
"assets/fonts/Ubuntu/Ubuntu-Light.ttf": "c9d68f61bf89fde6a24da697bc45d6f9",
"assets/fonts/Ubuntu/Ubuntu-LightItalic.ttf": "b242f3fdf0e61d01f35f0dec0170b200",
"assets/fonts/Ubuntu/Ubuntu-Medium.ttf": "d3c3b35e6d478ed149f02fad880dd359",
"assets/fonts/Ubuntu/Ubuntu-MediumItalic.ttf": "89af35d9567dcc3a76f3db4f9544658b",
"assets/fonts/Ubuntu/Ubuntu-Regular.ttf": "84ea7c5c9d2fa40c070ccb901046117d",
"assets/img/cccp.png": "24d28814c29b3a3831bf9dd873505de8",
"assets/img/colab.png": "933d4e8ac29e4e62b97e9ad378dbfb9b",
"assets/img/github.png": "cae716f9f0dee25011156b9eed3c7317",
"assets/img/profile.png": "3070d4e5a2d511b617dbce00e9059860",
"assets/NOTICES": "c70d39991b7221688bcdb023e79b1ebf",
"assets/other/demos.d": "38a1f858993bbc94d93a48994f73377e",
"assets/other/tools.d": "d000c2431799ea019c817083716281a1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5b531d125fa4f7849a7ee40c02deb780",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/apple-touch-icon.png": "ab29118630efddc149e1db204033ba1b",
"icons/favicon-16x16.png": "5b531d125fa4f7849a7ee40c02deb780",
"icons/favicon-32x32.png": "53cb0914b41320ca3a2aca786675da45",
"icons/favicon.ico": "46e90a751c8d472c05045262cfa5b861",
"icons/Icon-192.png": "50700f6f8e7fb34b16e01347dc034e42",
"icons/Icon-512.png": "4324af4b8991d9fada4528728279fca8",
"icons/Icon-maskable-192.png": "50700f6f8e7fb34b16e01347dc034e42",
"icons/Icon-maskable-512.png": "4324af4b8991d9fada4528728279fca8",
"index.html": "6e1abe4b5262ac987ba10440cd6eeb53",
"/": "6e1abe4b5262ac987ba10440cd6eeb53",
"main.dart.js": "4e72136efb4fdaa9e584472e76d55840",
"manifest.json": "65ee87766a3c5e4368e42029e72c66a5",
"version.json": "dada9c910de355b042b659bbf6f919ce"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
