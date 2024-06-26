'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"flutter_bootstrap.js": "e6defe34fbea7a48c9d9373a5e401d72",
"index.html": "af6c9644cf574d4bf6b8ad9895347def",
"/": "af6c9644cf574d4bf6b8ad9895347def",
"version.json": "6c5f23e0a3f4d4f12ad7b0483d9889df",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/NOTICES": "337d17d815c1d4aef5fe5d0206492df2",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/refs/heads/main": "8057c812e964abef90a606d2ac37b7ad",
".git/refs/remotes/origin/main": "8057c812e964abef90a606d2ac37b7ad",
".git/objects/22/f3597156042ae583010263e1b95e4f266da017": "0e450a3bd98d6303ee3975c13ca2f9da",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/69/b2c6d19847053bd78fe9da134941c567c2add2": "303f1afa9dcf92af425e7ec30430aff1",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/7d/abf4f802c410be3007eb54f04d9179d69f3358": "230f097f971865edd5366ecf965959a9",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/ca/0c8cd65f1846ea3686ec80f37fc8e311641e18": "59da3569908a4a305c5b37e1d9c197a9",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/ba/914d27fb6372ce1ec7970ce42f16564382a652": "c9e3899afcb6e144c32469135a6c5122",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d1/03d6a03372584ee3baa2fba68a428130d303cc": "8db34dde6c1c671a0f0fe8a12dd21978",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/18/1acf5907809c615a1e39e47dae4660b957cc4a": "72c7d84411adbecf7ad1a9c4273ced51",
".git/objects/18/f56fa495dd9fcf4ff4630c38a9953055894d80": "614b9bc6b4c0559d724755adcaf440b8",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/94/7b2eb70671a0b2e43ebf23ffaf1889aa854a85": "eec3189608f8f263aeee41ef6f5a60c4",
".git/objects/8b/582bef3ff3c53c38e92f8fe9e5820b01f66775": "5a6aaf5243e9a513ce1357464c7b75a7",
".git/objects/7c/955cfa4b550ae93250dae53aee92484217acb4": "91fc76da071fce1709b966416037cff9",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/a7/c5d213267c9c2f1ed9f3372ade37b503d01305": "b434859e31a372cc64b64a2f845a6383",
".git/objects/92/d2e7cac38ac8b338aa159aef514c326e90190b": "4f8afd2df8e117daf74df2e7d9601a42",
".git/objects/42/d10f487eb29856331796adb154345e9f350e58": "5f0a2f210474d9a31a64a9c4092b6dd2",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/4b/805897c4e849fa1f88b4558e29055a3bcc61e2": "75d88ab6512c895d104c7f0e00d04f33",
".git/objects/4b/7991ead3e75b9ece888870430ea189d5576775": "b57a1a848b0c362b11c7fb76138eb271",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/15/d70eedbec48c8fb52fb6a74c6bb10b86f6a365": "07fb6a1755dc1024cd612088df28c8c0",
".git/objects/17/ee550a615ff64f82a0dd7cf0cf6caab3685460": "df91fae96fb92757456d6affba74be2b",
".git/objects/17/aab350d8335fb515cda8572a3bc69841747033": "16b54169718e6904a6d5c4bfe5cca2cd",
".git/objects/17/c6d3b678492e190b9bb83a038785d35ce026e4": "a1e26a3bf5753208dfbba4ac7ebce5df",
".git/objects/fd/694636e9310b166e5c405a8a6ef5789cac31f1": "4929e3bf3fceabbb42581780f3f78c54",
".git/objects/08/533d45ecada42be3a308f661761e427ee63030": "4f31b3ef383b6251a08cc0210a635619",
".git/objects/73/449dee9ccb1f33949b53965b3289180d9ab40c": "66a43ac79e77a343a5231531e51765df",
".git/objects/4d/bf8eefe68593f6c29cca93345890be89f09e1e": "3948796e0290bdb6439391cd51909e77",
".git/objects/91/ad9787c1f731100746276b64d923ede114900e": "de9e589fc35cf4653edca40714aaa6da",
".git/objects/7a/aba7ce2c62712a3b2754929bedf740a9cfec25": "417e2b252323d6c48bacc97a33159ccd",
".git/objects/da/72687e94623120a4b542392b92af7e1938b744": "54ab5a21e6eed14f6b409c99be07b634",
".git/objects/84/7343efd0b37e50236e6b74faa7ce2c2d5227ba": "6f4cc97b38789ddc585947475f12f10d",
".git/objects/84/aefdf6fc054f02798a8bafd515b35fc8594aae": "8eca02b5df3671aad74aceeb2e710521",
".git/objects/f9/1ff6a33adcc5d77b993acf3eb47ce8620c960f": "8b1b0dc406ec0c00f2014421a1625fee",
".git/objects/f9/1849f7e39900a43c0184cbd6341a794158f21b": "cfb5b5d9ecd7e6be6f2d75b7bc9805f0",
".git/objects/05/749a6bcf45351d0b214c1d614e7521d679499b": "cacfeab76d67a623adb581e49cd1c4f9",
".git/objects/9d/a346c7219b33c7d962318d3046d58ed152489a": "d16276ceedec865490d93891875fe7e8",
".git/objects/d5/0511dd155cf24afb283120534174a81a11c0f9": "be4f03592e2fcaf089eeb9a9dd45acd5",
".git/objects/d5/6770487ff75d686dfed6bc9ad075cca084a4b4": "2eea615f68755038da83e6531d3264bb",
".git/objects/a3/7aaa64607fbf9dc2550e9ef57fd413cda1c1e9": "df0760d2b4c27231e64e9550c19e4e4c",
".git/objects/10/2fdfcad62cb953a903384aa577309294f15fd8": "de0e9dc28476d9ebd2e00df0cd41cfdb",
".git/objects/57/760e0fa50a9e3f3110ef2f98304dc378207cc6": "248b3cb7eed4c345bd3331cd21b4182b",
".git/objects/65/cac265497ff96d01e035edbc7526fdeb883961": "0af5f1c8ab816847b174b0f146ce4b63",
".git/objects/b2/b51919088f3aaa4d7b6b052a2a386a2f590a0b": "2405157a28ada15043fe124668bc0ea0",
".git/objects/b2/325c6c9b1334e73b20ba3e6b93ccbdc4abe7c0": "6ad4dad8f4d954e711465825d3b601d1",
".git/objects/b2/c2a02af4bb7afd4a9db149adf570747f487c3f": "686cc03c013bb084a00ccd72fdc6c59b",
".git/objects/13/87fb831345e71172cdea0af1a1b4e78ad4a3bd": "23072443508b6a9911ec57b9d9553154",
".git/objects/6d/b2cdfda9f8fe2af7901f18a3e68f0f7a7b9824": "e97fb00d6464f27cf8d82cab170e45ea",
".git/objects/72/65d72932bafdd24122b83b91fa68d0487bdbf1": "c84e187bcade5cbeb44235580ce12410",
".git/objects/72/aec8b7f05c6b2822698d6f7bfc8d213250072a": "4b34773fded326a476665975b0c43593",
".git/objects/b5/94ce35ab9810d4e3da29223c861391604070d0": "cdfd49a886657b3456ba865a47da1ee1",
".git/objects/f1/2f2ed1876fe9f6aa74791c06a378a17f9ffbec": "5094d5453d74bb5e26e41d7e210abf7c",
".git/objects/53/4422c4ec66ac8e4d90a54c6822e2ca8b4579b8": "94dd5a78faebe8a23960d3d878d72abc",
".git/objects/c0/192f8091790446268825504e0e2bf899581417": "f883781a6286a5003c6961b5a4a2e97a",
".git/objects/97/05090f6c36118f5bf89e88c7e36be6fa6f2e09": "b9a63de8bf2bbfa40202704c07af1326",
".git/objects/a4/7e05a1631f0f3ede23ebe32111b174da4f4937": "3f19705c83dbedf31c57caef1b5f29e2",
".git/objects/a0/f528d0dacfcabbcd1bf2677c234042afd56092": "455c609ad0868195be9b60438a50a40d",
".git/objects/41/8279d93fa8f0c48b51b3aa83f4c262f62d4140": "c613f160ca645bafe331a6860f18b578",
".git/objects/38/4c1d33de65737e6d9a9a2693fd500bc5315d6f": "094a2a58f58966b4514cb192e2e7bf91",
".git/objects/d3/cf1b3382a983b15bda94bba27b55976ee3a70e": "b105cd621f1adf49a3c857d4dee91390",
".git/objects/fa/1cc63e0af8f0d8d22db8958b08beaeea840cae": "4eb23d2f2c9248dae54760fe903a29b3",
".git/objects/6b/069e2767eeca5d4729b39b5cbf5be4be775af1": "54a260c2bafd6d59654cb2fe39a1282f",
".git/objects/30/6942f19f7cc2b770dbd753f315ff13bdddbb19": "d839a3a222654f184960cd604ce6cd04",
".git/objects/a1/e7b243b4a64d58b0a93587888156e60e42a390": "22365766808261503193998a5eb0cf15",
".git/COMMIT_EDITMSG": "7488758941543879836eff05bf47efd5",
".git/logs/HEAD": "83c6d87d1b2196f6205b7c76bb521754",
".git/logs/refs/heads/main": "e08b8a5dd77cf9c24cfb8c2c51ee4d6f",
".git/logs/refs/remotes/origin/main": "ff4f0335eec25f1147f5b0ac101cd5cc",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/config": "55271e81cee94669d9cf89596702585b",
".git/index": "ac28195e72dce6ad1aa8f5546479a21c",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"main.dart.js": "eaa24be69bbbe917399137b8eeb46750",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"manifest.json": "e05cdd0dcf67ff264d00882bbe329ef4"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
