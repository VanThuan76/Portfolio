if(!self.define){let e,s={};const c=(c,a)=>(c=new URL(c+".js",a).href,s[c]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=s,document.head.appendChild(e)}else e=c,importScripts(c),s()})).then((()=>{let e=s[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(a,i)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let o={};const t=e=>c(e,n),r={module:{uri:n},exports:o,require:t};s[n]=Promise.all(a.map((e=>r[e]||t(e)))).then((e=>(i(...e),o)))}}define(["./workbox-b52a85cb"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/TQfNuWZ6ws7oaoFq6bIGc/_buildManifest.js",revision:"1d36db6a369bd35d5306ad941a7f140a"},{url:"/_next/static/TQfNuWZ6ws7oaoFq6bIGc/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/1045.62e94fc3af04cbcc.js",revision:"62e94fc3af04cbcc"},{url:"/_next/static/chunks/1702-1d8ccc48fdacaaae.js",revision:"TQfNuWZ6ws7oaoFq6bIGc"},{url:"/_next/static/chunks/1839.a9b08682a39550dc.js",revision:"a9b08682a39550dc"},{url:"/_next/static/chunks/1dd3208c-f35a7215f25230cb.js",revision:"TQfNuWZ6ws7oaoFq6bIGc"},{url:"/_next/static/chunks/2321.ac87844ebc1ae9e1.js",revision:"ac87844ebc1ae9e1"},{url:"/_next/static/chunks/260.c5dc42160ef4074b.js",revision:"c5dc42160ef4074b"},{url:"/_next/static/chunks/2750-874b616fa2dcffe7.js",revision:"TQfNuWZ6ws7oaoFq6bIGc"},{url:"/_next/static/chunks/3105-1546a6c93b030684.js",revision:"TQfNuWZ6ws7oaoFq6bIGc"},{url:"/_next/static/chunks/3188.130ad2e654451b9e.js",revision:"130ad2e654451b9e"},{url:"/_next/static/chunks/359.441a115f9210026c.js",revision:"441a115f9210026c"},{url:"/_next/static/chunks/3685.1e6e5d8b72f58b24.js",revision:"1e6e5d8b72f58b24"},{url:"/_next/static/chunks/3816-62f88acd72b3c037.js",revision:"TQfNuWZ6ws7oaoFq6bIGc"},{url:"/_next/static/chunks/4110-84c1f3de984697fc.js",revision:"TQfNuWZ6ws7oaoFq6bIGc"},{url:"/_next/static/chunks/4158.5607a299d902fc3d.js",revision:"5607a299d902fc3d"},{url:"/_next/static/chunks/5042.40aafcb52ee2106e.js",revision:"40aafcb52ee2106e"},{url:"/_next/static/chunks/5150-e638eb0011238f1e.js",revision:"TQfNuWZ6ws7oaoFq6bIGc"},{url:"/_next/static/chunks/5395-ca1ca4acfc9ccea0.js",revision:"TQfNuWZ6ws7oaoFq6bIGc"},{url:"/_next/static/chunks/560-8b4f8407214f6f0b.js",revision:"TQfNuWZ6ws7oaoFq6bIGc"},{url:"/_next/static/chunks/5610.0dfb07e1cdbc4dd8.js",revision:"0dfb07e1cdbc4dd8"},{url:"/_next/static/chunks/562.6bcb342a64939698.js",revision:"6bcb342a64939698"},{url:"/_next/static/chunks/5662.ae6faa865e2764de.js",revision:"ae6faa865e2764de"},{url:"/_next/static/chunks/5880-37806cfa361ccb4f.js",revision:"TQfNuWZ6ws7oaoFq6bIGc"},{url:"/_next/static/chunks/6320.dfba739c43735907.js",revision:"dfba739c43735907"},{url:"/_next/static/chunks/6385-946391ac47a81f5d.js",revision:"TQfNuWZ6ws7oaoFq6bIGc"},{url:"/_next/static/chunks/6558.000a073476d68891.js",revision:"000a073476d68891"},{url:"/_next/static/chunks/6561.a2428e762bb83c07.js",revision:"a2428e762bb83c07"},{url:"/_next/static/chunks/7031-95ef86725de46831.js",revision:"TQfNuWZ6ws7oaoFq6bIGc"},{url:"/_next/static/chunks/7167.e0682efe07a13719.js",revision:"e0682efe07a13719"},{url:"/_next/static/chunks/7255.57dd5205ac0998ba.js",revision:"57dd5205ac0998ba"},{url:"/_next/static/chunks/7376.5f6a781136e502ac.js",revision:"5f6a781136e502ac"},{url:"/_next/static/chunks/7659-b5628ada70ad48f3.js",revision:"TQfNuWZ6ws7oaoFq6bIGc"},{url:"/_next/static/chunks/792-5f1ae70060f8454a.js",revision:"TQfNuWZ6ws7oaoFq6bIGc"},{url:"/_next/static/chunks/7932-91c5d543caedb956.js",revision:"TQfNuWZ6ws7oaoFq6bIGc"},{url:"/_next/static/chunks/7d384bb9-5b9a2d8dfafa7984.js",revision:"TQfNuWZ6ws7oaoFq6bIGc"},{url:"/_next/static/chunks/8105.49dae40d2d011b01.js",revision:"49dae40d2d011b01"},{url:"/_next/static/chunks/83f6239b-209c2989e02e9175.js",revision:"TQfNuWZ6ws7oaoFq6bIGc"},{url:"/_next/static/chunks/8438-d17f109f563198e9.js",revision:"TQfNuWZ6ws7oaoFq6bIGc"},{url:"/_next/static/chunks/8493.946fe59c0b4a4f0e.js",revision:"946fe59c0b4a4f0e"},{url:"/_next/static/chunks/8519.603e73e833b2158c.js",revision:"603e73e833b2158c"},{url:"/_next/static/chunks/8608.f3774adf60ad1c46.js",revision:"f3774adf60ad1c46"},{url:"/_next/static/chunks/8753.a5166eb0cd6c4c43.js",revision:"a5166eb0cd6c4c43"},{url:"/_next/static/chunks/8763-177b3301c9b1ac2b.js",revision:"TQfNuWZ6ws7oaoFq6bIGc"},{url:"/_next/static/chunks/8780-c408dad20025f39a.js",revision:"TQfNuWZ6ws7oaoFq6bIGc"},{url:"/_next/static/chunks/8814-4bed3f7cb7f2ff1e.js",revision:"TQfNuWZ6ws7oaoFq6bIGc"},{url:"/_next/static/chunks/9132-90f8d0c6b5ffb3c0.js",revision:"TQfNuWZ6ws7oaoFq6bIGc"},{url:"/_next/static/chunks/9370.cb01f46d027fc552.js",revision:"cb01f46d027fc552"},{url:"/_next/static/chunks/9389-f940827ba81f5753.js",revision:"TQfNuWZ6ws7oaoFq6bIGc"},{url:"/_next/static/chunks/9431.a7f810db315c023a.js",revision:"a7f810db315c023a"},{url:"/_next/static/chunks/9578.ecb3ec6b29a02dc1.js",revision:"ecb3ec6b29a02dc1"},{url:"/_next/static/chunks/9662.1c949efdd5fa2659.js",revision:"1c949efdd5fa2659"},{url:"/_next/static/chunks/968.218a1748f276176d.js",revision:"218a1748f276176d"},{url:"/_next/static/chunks/9836.961e34ccde85122e.js",revision:"961e34ccde85122e"},{url:"/_next/static/chunks/9900.8ec4824fb10c60fd.js",revision:"8ec4824fb10c60fd"},{url:"/_next/static/chunks/9912.9fe93474afb384b1.js",revision:"9fe93474afb384b1"},{url:"/_next/static/chunks/9966.b93d6c22bb5f328d.js",revision:"b93d6c22bb5f328d"},{url:"/_next/static/chunks/9d78c252.fe684ccd9e4e61e4.js",revision:"fe684ccd9e4e61e4"},{url:"/_next/static/chunks/app/%5Blocale%5D/about-me/page-1b02931053a64489.js",revision:"TQfNuWZ6ws7oaoFq6bIGc"},{url:"/_next/static/chunks/app/%5Blocale%5D/blog/%5Bslug%5D/page-d6b99851ea3e5bba.js",revision:"TQfNuWZ6ws7oaoFq6bIGc"},{url:"/_next/static/chunks/app/%5Blocale%5D/blog/error-17f1e248f605d891.js",revision:"TQfNuWZ6ws7oaoFq6bIGc"},{url:"/_next/static/chunks/app/%5Blocale%5D/blog/not-found-809944aa17aee2f3.js",revision:"TQfNuWZ6ws7oaoFq6bIGc"},{url:"/_next/static/chunks/app/%5Blocale%5D/blog/page-9b300e35abed0076.js",revision:"TQfNuWZ6ws7oaoFq6bIGc"},{url:"/_next/static/chunks/app/%5Blocale%5D/course/page-a1eec1c89f6f162c.js",revision:"TQfNuWZ6ws7oaoFq6bIGc"},{url:"/_next/static/chunks/app/%5Blocale%5D/extensions/chatbot/page-b8b5e39fc3328838.js",revision:"TQfNuWZ6ws7oaoFq6bIGc"},{url:"/_next/static/chunks/app/%5Blocale%5D/extensions/git-roll/page-dd06249bfb55d8f4.js",revision:"TQfNuWZ6ws7oaoFq6bIGc"},{url:"/_next/static/chunks/app/%5Blocale%5D/extensions/resume/page-6d43702e36dc80e8.js",revision:"TQfNuWZ6ws7oaoFq6bIGc"},{url:"/_next/static/chunks/app/%5Blocale%5D/layout-ae6ec8ac6ca54b19.js",revision:"TQfNuWZ6ws7oaoFq6bIGc"},{url:"/_next/static/chunks/app/%5Blocale%5D/not-found-5098e314d26f67e1.js",revision:"TQfNuWZ6ws7oaoFq6bIGc"},{url:"/_next/static/chunks/app/%5Blocale%5D/page-b9c8db340e178c30.js",revision:"TQfNuWZ6ws7oaoFq6bIGc"},{url:"/_next/static/chunks/app/%5Blocale%5D/project/error-52db1a251e9ce46e.js",revision:"TQfNuWZ6ws7oaoFq6bIGc"},{url:"/_next/static/chunks/app/%5Blocale%5D/project/not-found-ddd22d5e9204d521.js",revision:"TQfNuWZ6ws7oaoFq6bIGc"},{url:"/_next/static/chunks/app/%5Blocale%5D/project/page-5cd5aac5f88a2117.js",revision:"TQfNuWZ6ws7oaoFq6bIGc"},{url:"/_next/static/chunks/app/%5Blocale%5D/setting/background/page-7c86d63574f6e1e7.js",revision:"TQfNuWZ6ws7oaoFq6bIGc"},{url:"/_next/static/chunks/app/%5Blocale%5D/setting/display/page-d022ac8bacea04a2.js",revision:"TQfNuWZ6ws7oaoFq6bIGc"},{url:"/_next/static/chunks/app/%5Blocale%5D/setting/page-9430427d3d29f82b.js",revision:"TQfNuWZ6ws7oaoFq6bIGc"},{url:"/_next/static/chunks/app/_not-found/page-aa3c5c09a3b354c5.js",revision:"TQfNuWZ6ws7oaoFq6bIGc"},{url:"/_next/static/chunks/b0045e08.ae41b324854aeecf.js",revision:"ae41b324854aeecf"},{url:"/_next/static/chunks/b6b9d1ec-f8ef59992275c319.js",revision:"TQfNuWZ6ws7oaoFq6bIGc"},{url:"/_next/static/chunks/b7bbbec9-7639beee6ee274a6.js",revision:"TQfNuWZ6ws7oaoFq6bIGc"},{url:"/_next/static/chunks/framework-cfc5e5b8a6588d42.js",revision:"TQfNuWZ6ws7oaoFq6bIGc"},{url:"/_next/static/chunks/main-8ab8ef046a5eeb5e.js",revision:"TQfNuWZ6ws7oaoFq6bIGc"},{url:"/_next/static/chunks/main-app-68e054f63389c746.js",revision:"TQfNuWZ6ws7oaoFq6bIGc"},{url:"/_next/static/chunks/pages/_app-985f9abd66cd8e91.js",revision:"TQfNuWZ6ws7oaoFq6bIGc"},{url:"/_next/static/chunks/pages/_error-29151b8311ee5445.js",revision:"TQfNuWZ6ws7oaoFq6bIGc"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-7d2c901c8494532d.js",revision:"TQfNuWZ6ws7oaoFq6bIGc"},{url:"/_next/static/css/1b46c49c658b73c2.css",revision:"1b46c49c658b73c2"},{url:"/_next/static/css/ef46db3751d8e999.css",revision:"ef46db3751d8e999"},{url:"/_next/static/media/10ca58f12dc31ec2.woff2",revision:"e0df918a07b640f09bb69751b040c517"},{url:"/_next/static/media/23f25237a0dd6e5e.woff2",revision:"95712b78a4a4cd25725d199575ce922c"},{url:"/_next/static/media/4211d34fd1c6f59f.woff2",revision:"10c49f8eebd781ea0feb134d5d895ae1"},{url:"/_next/static/media/527ad038b46df541.woff2",revision:"9d5d33aac7b433227908a50658ebb82c"},{url:"/_next/static/media/61b81e7bde89ba40.p.woff2",revision:"e7c8b3a1196384678e2b2044f8baa115"},{url:"/_next/static/media/d9eda00d614760a9-s.p.woff2",revision:"fc0227eb65c80ea9df8004153751c124"},{url:"/android-chrome-192x192.png",revision:"b818c2f60dbf9fe923c049c292b0c2ea"},{url:"/android-chrome-512x512.png",revision:"42feec9fe6f4f6499eff6dae009c42c3"},{url:"/apple-touch-icon.png",revision:"0efcb90ae5ac66181ecffdb7ea6b24c5"},{url:"/art.jpg",revision:"f7266e992ca741b2a75a11890369562e"},{url:"/audios/music.mp3",revision:"af958d066f6f9e4f78995a1e27e8f4c4"},{url:"/audios/tap.mp3",revision:"fe954c17d0778a1229cf7ea97a29693c"},{url:"/banner-dark.png",revision:"c9a2f98ce099d77120899c6f14611b8f"},{url:"/banner-light.png",revision:"340f83b8816261670dc26e8162082eb8"},{url:"/banner.png",revision:"06c43c43201acff4c0002dd86c253573"},{url:"/favicon-16x16.png",revision:"ee3f9623b16ab70191d27ceff63cec9a"},{url:"/favicon-32x32.png",revision:"fdbb7904e1bc576eb94a1b9aced0cbee"},{url:"/favicon.ico",revision:"0536534783a03b28515ee2f9e51f181c"},{url:"/icon-navigation/chat.svg",revision:"5f0e94bdd20760edf32f08bd21669ff5"},{url:"/icon-navigation/icon-about.png",revision:"53f9d629938f310b76fe674ea38434e1"},{url:"/icon-navigation/icon-blog.png",revision:"43998091bce9918f69828401c6d4160d"},{url:"/icon-navigation/icon-course.png",revision:"fce3f5ac59e38030eb089ab55127b80a"},{url:"/icon-navigation/icon-github.png",revision:"6227e4daef10685252a83fd70a42a06d"},{url:"/icon-navigation/icon-project.png",revision:"ed513098337aeba97e8c4ecd20a2fb3c"},{url:"/icon-navigation/icon-resume.png",revision:"7effd3dc9a7fdd8f9cccdb16d3e189da"},{url:"/icon-navigation/icon-setting.png",revision:"29037538403335ed564a7a3ffe5effba"},{url:"/icon-techstack/css.svg",revision:"b698699cfc3ce693dd39e12dd5cfa65c"},{url:"/icon-techstack/html.svg",revision:"fbb405b31efe1aa5d6091daf9cd4d3fc"},{url:"/icon-techstack/javascript.svg",revision:"869f93e66b5b53e1260275289d8bbfa8"},{url:"/icon-techstack/laravel.svg",revision:"48b585f94686ae8b13cfd7a99d8714c7"},{url:"/icon-techstack/nextjs.svg",revision:"45fbbdeaa673a2870de263e2c1e88b5b"},{url:"/icon-techstack/nodejs.svg",revision:"a15706a00171e4ec8549e55984a75403"},{url:"/icon-techstack/prisma.svg",revision:"f6d7266f6814be3dfccb5ba18435edfd"},{url:"/images/about-me/character.png",revision:"3b0cbde9cb8be9dff649af0649a0f64e"},{url:"/images/about-me/left-bg.png",revision:"5c00ebf6a7f5dcd4f679f931f92a736d"},{url:"/images/about-me/right-bg.png",revision:"7e2695d8a5ef9107700081392771f7bf"},{url:"/images/blog/book.gif",revision:"09004b0e38877ecdd4dd626ac0680d0c"},{url:"/images/blog/cat_illus.jpg",revision:"eae469bbe52eb1f21586a820e3a112ae"},{url:"/images/blog/my-cat.jpg",revision:"dd930a7a511fb1e1cfa88849d993e14b"},{url:"/images/blog/redirect.gif",revision:"f42d12657cd5d3b66feb958ac9ce9066"},{url:"/images/project/bg-brush.png",revision:"9ebe7673c619eeb8d0364aff251736ce"},{url:"/images/project/brush.png",revision:"e9ddfe1af5b1d3e3cf648bbf7757fd16"},{url:"/images/project/tag.png",revision:"3e8023dfdf8843cf7a320f633957b344"},{url:"/logo.png",revision:"fdb13fdf9ec03413e3d811f53bbdee66"},{url:"/mask-project.svg",revision:"e2901242c4abc24a595c7e8e86fde361"},{url:"/models/birds.glb",revision:"db023bb1db41ac04b055da34992e9aec"},{url:"/models/castle.glb",revision:"d7030ae8ab911bcc56ab431550ed4a93"},{url:"/models/compressed_caffe.glb",revision:"557ed226a863c9f7658e80699ff992e8"},{url:"/models/compressed_city_background.glb",revision:"9f6237350026ad734bea002ebeb927a3"},{url:"/models/compressed_department.glb",revision:"f60982ee286bb318175bd379216aba08"},{url:"/models/compressed_mysterious.glb",revision:"de2f1e1420d7780b68f4ab0956d50f96"},{url:"/models/compressed_restaurant.glb",revision:"8f4a2b9826115f678351fdda8c1e2efb"},{url:"/models/compressed_school.glb",revision:"107fa0ffd5bd89d6c3dc232d22406db0"},{url:"/models/compressed_school_park.glb",revision:"8ce105e1d6a427cffbc18842e320397c"},{url:"/models/falling_snow.glb",revision:"dd40726a76cd7c5b3bece685b9680f5b"},{url:"/models/farm.glb",revision:"aec015888875f408cc03a1206bb2ad89"},{url:"/models/mountain.glb",revision:"93983f79e4a7f4d2abfeaa1d5e258ce8"},{url:"/models/ocean.glb",revision:"9f36d0022538ce543468db12b9476978"},{url:"/models/optimized_birds.glb",revision:"e8366d13dda6a3b44cee6a82f916f8e2"},{url:"/models/optimized_caffe.glb",revision:"624192bc684fdba33db1ee5616b8945a"},{url:"/models/optimized_castle.glb",revision:"1d021a6b2e6a0c48f2dfdbe9048e0f97"},{url:"/models/optimized_city.glb",revision:"e2b46942e5e65ab4fc77fb5764404255"},{url:"/models/optimized_department.glb",revision:"3270bfbc07c1b4f5aec600590399ec05"},{url:"/models/optimized_falling_snow.glb",revision:"51afe7b347831dec56ec3c9bc11673ee"},{url:"/models/optimized_farm.glb",revision:"04a7d865e14d001d8824a01360d5dd62"},{url:"/models/optimized_mountain.glb",revision:"ececfe3699f0e83696f7f53e48935017"},{url:"/models/optimized_mysterious.glb",revision:"4b9238c526b16dae85fa1a78f97d9a9c"},{url:"/models/optimized_restaurant.glb",revision:"4d43ba5f25547c697c19bcda23d824f6"},{url:"/models/optimized_school.glb",revision:"66d6494a0a1ebabfb834e03dde961797"},{url:"/models/optimized_school_park.glb",revision:"c8dc0ee43e32d165399d2cdc90b1c764"},{url:"/models/school_hallway.glb",revision:"acfdcc2c034a74ccd5160daafe2107a6"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/translate/en.json",revision:"48ced1e39315db06d06659c604ea19c1"},{url:"/translate/ja.json",revision:"ddafcc98fb14a8907b68297b059db007"},{url:"/translate/vi.json",revision:"d0d51fd76c4c36e5bceab71a747d885c"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:s}})=>!(!e||s.startsWith("/api/auth/callback")||!s.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:c})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&c&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:c})=>"1"===e.headers.get("RSC")&&c&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:s})=>s&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
