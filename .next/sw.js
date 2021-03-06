/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("/_next/static/workbox-v4.2.0/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "/_next/static/workbox-v4.2.0"});

importScripts(
  "/_next/static/precache-manifest.393fdd4d9dfda34113a43e40fbe3de94.js"
);

workbox.core.setCacheNameDetails({prefix: "remote-configurator"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^https?:\/\/[^\/]+\/ws.*/, new workbox.strategies.NetworkOnly(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/.*/, new workbox.strategies.NetworkFirst(), 'GET');
