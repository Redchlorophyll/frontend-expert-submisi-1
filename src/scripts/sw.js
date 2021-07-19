import 'regenerator-runtime'; // eslint-disable-line
import CacheHelper from './utils/cache-helper';

const { assets } = global.serviceWorkerOption;

/* eslint-disable no-restricted-globals */
self.addEventListener('install', (event) => {
  event.waitUntil(CacheHelper.cachingAppsShell([...assets, './']));

  // TODO: Caching App Shell Resource
});

self.addEventListener('activate', (event) => {
  event.waitUntil(CacheHelper.deleteOldCache());

  // TODO: Delete old caches
});

self.addEventListener('fetch', (event) => {
  event.respondWith(CacheHelper.revalidateCache(event.request));
  // TODO: Add/get fetch request to/from caches
});

/* eslint-enable no-restricted-globals */
