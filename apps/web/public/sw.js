if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,i)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const r=e=>a(e,c),u={module:{uri:c},exports:t,require:r};s[c]=Promise.all(n.map((e=>u[e]||r(e)))).then((e=>(i(...e),t)))}}define(["./workbox-b52a85cb"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/83AaZeO45RUSztKnHBSuV/_buildManifest.js",revision:"1d36db6a369bd35d5306ad941a7f140a"},{url:"/_next/static/83AaZeO45RUSztKnHBSuV/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/1045.283c8f490b971f4f.js",revision:"283c8f490b971f4f"},{url:"/_next/static/chunks/1291-78ad94895a15ba8e.js",revision:"83AaZeO45RUSztKnHBSuV"},{url:"/_next/static/chunks/1702-b65dc7023bd64768.js",revision:"83AaZeO45RUSztKnHBSuV"},{url:"/_next/static/chunks/1839.961c24384515846d.js",revision:"961c24384515846d"},{url:"/_next/static/chunks/1dd3208c-d637f0691b3318a8.js",revision:"83AaZeO45RUSztKnHBSuV"},{url:"/_next/static/chunks/21-887138a086a74ff8.js",revision:"83AaZeO45RUSztKnHBSuV"},{url:"/_next/static/chunks/2549.57df080dcf451e08.js",revision:"57df080dcf451e08"},{url:"/_next/static/chunks/2637.980ebf01dbc607a4.js",revision:"980ebf01dbc607a4"},{url:"/_next/static/chunks/3037-08e27bd8aa075320.js",revision:"83AaZeO45RUSztKnHBSuV"},{url:"/_next/static/chunks/3092.6682a80dbddfa593.js",revision:"6682a80dbddfa593"},{url:"/_next/static/chunks/3385-7cbcb69c7fc64f8b.js",revision:"83AaZeO45RUSztKnHBSuV"},{url:"/_next/static/chunks/3555-111e5a843cd8b039.js",revision:"83AaZeO45RUSztKnHBSuV"},{url:"/_next/static/chunks/3563.9e69ddd0823de972.js",revision:"9e69ddd0823de972"},{url:"/_next/static/chunks/3574.277e717f1cd930cc.js",revision:"277e717f1cd930cc"},{url:"/_next/static/chunks/359.f345a780b4b28a08.js",revision:"f345a780b4b28a08"},{url:"/_next/static/chunks/4627.e578e52e2fec524b.js",revision:"e578e52e2fec524b"},{url:"/_next/static/chunks/4691-11a799ec92cc8bf4.js",revision:"83AaZeO45RUSztKnHBSuV"},{url:"/_next/static/chunks/4747-ec8024bfef4b7ae5.js",revision:"83AaZeO45RUSztKnHBSuV"},{url:"/_next/static/chunks/477.4718ad59126cc082.js",revision:"4718ad59126cc082"},{url:"/_next/static/chunks/5042.635fe429a9d5b10d.js",revision:"635fe429a9d5b10d"},{url:"/_next/static/chunks/5058.69d87edd7781687f.js",revision:"69d87edd7781687f"},{url:"/_next/static/chunks/5111.b4d2cedf3d256baa.js",revision:"b4d2cedf3d256baa"},{url:"/_next/static/chunks/5450-4b54ad2a09a6eaab.js",revision:"83AaZeO45RUSztKnHBSuV"},{url:"/_next/static/chunks/5612-4e0a8bb287a4dc76.js",revision:"83AaZeO45RUSztKnHBSuV"},{url:"/_next/static/chunks/5662.20673b665ca0bc1e.js",revision:"20673b665ca0bc1e"},{url:"/_next/static/chunks/5880-628194b6d8095c73.js",revision:"83AaZeO45RUSztKnHBSuV"},{url:"/_next/static/chunks/5995-72f65ab70fe223e0.js",revision:"83AaZeO45RUSztKnHBSuV"},{url:"/_next/static/chunks/612.38cc7219019b9cbb.js",revision:"38cc7219019b9cbb"},{url:"/_next/static/chunks/648.2aec3e7e6d5b2513.js",revision:"2aec3e7e6d5b2513"},{url:"/_next/static/chunks/6558.05fc4fe29a44dfc2.js",revision:"05fc4fe29a44dfc2"},{url:"/_next/static/chunks/6657-4db5fd9dffd5db71.js",revision:"83AaZeO45RUSztKnHBSuV"},{url:"/_next/static/chunks/7031-6c75decd39cdda2e.js",revision:"83AaZeO45RUSztKnHBSuV"},{url:"/_next/static/chunks/7374-fbf47eb19832c8e6.js",revision:"83AaZeO45RUSztKnHBSuV"},{url:"/_next/static/chunks/7d384bb9-9890f61ba62e7dee.js",revision:"83AaZeO45RUSztKnHBSuV"},{url:"/_next/static/chunks/8327.a52b359e25dc8cf2.js",revision:"a52b359e25dc8cf2"},{url:"/_next/static/chunks/83f6239b-209c2989e02e9175.js",revision:"83AaZeO45RUSztKnHBSuV"},{url:"/_next/static/chunks/8412-ce7790920c95f1cc.js",revision:"83AaZeO45RUSztKnHBSuV"},{url:"/_next/static/chunks/8608.60256501a5da1db1.js",revision:"60256501a5da1db1"},{url:"/_next/static/chunks/8753.2fa62887488e7a5a.js",revision:"2fa62887488e7a5a"},{url:"/_next/static/chunks/9178.72f5e2ed84365b8b.js",revision:"72f5e2ed84365b8b"},{url:"/_next/static/chunks/921.77f6b8cee99e3847.js",revision:"77f6b8cee99e3847"},{url:"/_next/static/chunks/9708.d36da9f2338de140.js",revision:"d36da9f2338de140"},{url:"/_next/static/chunks/9966.350be8a439e3b467.js",revision:"350be8a439e3b467"},{url:"/_next/static/chunks/9d78c252.fe684ccd9e4e61e4.js",revision:"fe684ccd9e4e61e4"},{url:"/_next/static/chunks/app/(main)/about-me/page-c9df43cd4698501e.js",revision:"83AaZeO45RUSztKnHBSuV"},{url:"/_next/static/chunks/app/(main)/blog/%5Bslug%5D/page-e80b1e1e029dbd71.js",revision:"83AaZeO45RUSztKnHBSuV"},{url:"/_next/static/chunks/app/(main)/blog/error-e3d71b18b4919b52.js",revision:"83AaZeO45RUSztKnHBSuV"},{url:"/_next/static/chunks/app/(main)/blog/not-found-fbcdd480b72bd585.js",revision:"83AaZeO45RUSztKnHBSuV"},{url:"/_next/static/chunks/app/(main)/blog/page-cc4f95c62f3a2f52.js",revision:"83AaZeO45RUSztKnHBSuV"},{url:"/_next/static/chunks/app/(main)/course/page-0e2ba36209b04718.js",revision:"83AaZeO45RUSztKnHBSuV"},{url:"/_next/static/chunks/app/(main)/extensions/chatbot/page-13d696dfce5c8b67.js",revision:"83AaZeO45RUSztKnHBSuV"},{url:"/_next/static/chunks/app/(main)/extensions/git-roll/page-cee6a6f1385702c0.js",revision:"83AaZeO45RUSztKnHBSuV"},{url:"/_next/static/chunks/app/(main)/extensions/resume/page-829aba96c55c0b55.js",revision:"83AaZeO45RUSztKnHBSuV"},{url:"/_next/static/chunks/app/(main)/page-52e196b6115ef777.js",revision:"83AaZeO45RUSztKnHBSuV"},{url:"/_next/static/chunks/app/(main)/project/error-a3f6340363b18b2d.js",revision:"83AaZeO45RUSztKnHBSuV"},{url:"/_next/static/chunks/app/(main)/project/not-found-b4ca74f306cbcb87.js",revision:"83AaZeO45RUSztKnHBSuV"},{url:"/_next/static/chunks/app/(main)/project/page-3463dab6b327d790.js",revision:"83AaZeO45RUSztKnHBSuV"},{url:"/_next/static/chunks/app/(main)/setting/background/page-c9771843b6b6379d.js",revision:"83AaZeO45RUSztKnHBSuV"},{url:"/_next/static/chunks/app/(main)/setting/display/page-b02c556bef7079b3.js",revision:"83AaZeO45RUSztKnHBSuV"},{url:"/_next/static/chunks/app/(main)/setting/page-e723b38964d74921.js",revision:"83AaZeO45RUSztKnHBSuV"},{url:"/_next/static/chunks/app/_not-found/page-9b1011ede58bea1f.js",revision:"83AaZeO45RUSztKnHBSuV"},{url:"/_next/static/chunks/app/global-error-618682ba678f1c8c.js",revision:"83AaZeO45RUSztKnHBSuV"},{url:"/_next/static/chunks/app/layout-26eb3a0a4a76e69a.js",revision:"83AaZeO45RUSztKnHBSuV"},{url:"/_next/static/chunks/app/loading-70d665488dd71c72.js",revision:"83AaZeO45RUSztKnHBSuV"},{url:"/_next/static/chunks/app/not-found-1998b110a8a0939f.js",revision:"83AaZeO45RUSztKnHBSuV"},{url:"/_next/static/chunks/b6b9d1ec-179946f77a44f9c2.js",revision:"83AaZeO45RUSztKnHBSuV"},{url:"/_next/static/chunks/b7bbbec9-74f24e87e87dc2b9.js",revision:"83AaZeO45RUSztKnHBSuV"},{url:"/_next/static/chunks/framework-cfc5e5b8a6588d42.js",revision:"83AaZeO45RUSztKnHBSuV"},{url:"/_next/static/chunks/main-763996494ba82d69.js",revision:"83AaZeO45RUSztKnHBSuV"},{url:"/_next/static/chunks/main-app-080398bebcbeb084.js",revision:"83AaZeO45RUSztKnHBSuV"},{url:"/_next/static/chunks/pages/_app-985f9abd66cd8e91.js",revision:"83AaZeO45RUSztKnHBSuV"},{url:"/_next/static/chunks/pages/_error-29151b8311ee5445.js",revision:"83AaZeO45RUSztKnHBSuV"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-a288455c584fb024.js",revision:"83AaZeO45RUSztKnHBSuV"},{url:"/_next/static/css/330a9d9c1aafa584.css",revision:"330a9d9c1aafa584"},{url:"/_next/static/css/ef46db3751d8e999.css",revision:"ef46db3751d8e999"},{url:"/_next/static/media/10ca58f12dc31ec2.woff2",revision:"e0df918a07b640f09bb69751b040c517"},{url:"/_next/static/media/23f25237a0dd6e5e.woff2",revision:"95712b78a4a4cd25725d199575ce922c"},{url:"/_next/static/media/4211d34fd1c6f59f.woff2",revision:"10c49f8eebd781ea0feb134d5d895ae1"},{url:"/_next/static/media/527ad038b46df541.woff2",revision:"9d5d33aac7b433227908a50658ebb82c"},{url:"/_next/static/media/61b81e7bde89ba40.p.woff2",revision:"e7c8b3a1196384678e2b2044f8baa115"},{url:"/_next/static/media/d9eda00d614760a9-s.p.woff2",revision:"fc0227eb65c80ea9df8004153751c124"},{url:"/art.jpg",revision:"f7266e992ca741b2a75a11890369562e"},{url:"/audios/music.mp3",revision:"af958d066f6f9e4f78995a1e27e8f4c4"},{url:"/audios/tap.mp3",revision:"fe954c17d0778a1229cf7ea97a29693c"},{url:"/banner-dark.png",revision:"c9a2f98ce099d77120899c6f14611b8f"},{url:"/banner-light.png",revision:"340f83b8816261670dc26e8162082eb8"},{url:"/banner.png",revision:"06c43c43201acff4c0002dd86c253573"},{url:"/data/mockup.json",revision:"8d7d3c15144799e43701e4f75543bab2"},{url:"/icon-navigation/chat.svg",revision:"5f0e94bdd20760edf32f08bd21669ff5"},{url:"/icon-navigation/icon-about.png",revision:"53f9d629938f310b76fe674ea38434e1"},{url:"/icon-navigation/icon-blog.png",revision:"43998091bce9918f69828401c6d4160d"},{url:"/icon-navigation/icon-course.png",revision:"fce3f5ac59e38030eb089ab55127b80a"},{url:"/icon-navigation/icon-github.png",revision:"6227e4daef10685252a83fd70a42a06d"},{url:"/icon-navigation/icon-project.png",revision:"ed513098337aeba97e8c4ecd20a2fb3c"},{url:"/icon-navigation/icon-resume.png",revision:"7effd3dc9a7fdd8f9cccdb16d3e189da"},{url:"/icon-navigation/icon-setting.png",revision:"29037538403335ed564a7a3ffe5effba"},{url:"/icon-techstack/css.svg",revision:"b698699cfc3ce693dd39e12dd5cfa65c"},{url:"/icon-techstack/html.svg",revision:"fbb405b31efe1aa5d6091daf9cd4d3fc"},{url:"/icon-techstack/javascript.svg",revision:"869f93e66b5b53e1260275289d8bbfa8"},{url:"/icon-techstack/laravel.svg",revision:"48b585f94686ae8b13cfd7a99d8714c7"},{url:"/icon-techstack/nextjs.svg",revision:"45fbbdeaa673a2870de263e2c1e88b5b"},{url:"/icon-techstack/nodejs.svg",revision:"a15706a00171e4ec8549e55984a75403"},{url:"/icon-techstack/prisma.svg",revision:"f6d7266f6814be3dfccb5ba18435edfd"},{url:"/images/about-me/character.png",revision:"3b0cbde9cb8be9dff649af0649a0f64e"},{url:"/images/about-me/left-bg.png",revision:"5c00ebf6a7f5dcd4f679f931f92a736d"},{url:"/images/about-me/right-bg.png",revision:"7e2695d8a5ef9107700081392771f7bf"},{url:"/images/blog/book.gif",revision:"09004b0e38877ecdd4dd626ac0680d0c"},{url:"/images/blog/cat_illus.jpg",revision:"eae469bbe52eb1f21586a820e3a112ae"},{url:"/images/blog/my-cat.jpg",revision:"dd930a7a511fb1e1cfa88849d993e14b"},{url:"/images/blog/redirect.gif",revision:"f42d12657cd5d3b66feb958ac9ce9066"},{url:"/images/project/brush.png",revision:"e9ddfe1af5b1d3e3cf648bbf7757fd16"},{url:"/images/project/project-tag.png",revision:"3e8023dfdf8843cf7a320f633957b344"},{url:"/logo.png",revision:"fdb13fdf9ec03413e3d811f53bbdee66"},{url:"/mask-project.svg",revision:"e2901242c4abc24a595c7e8e86fde361"},{url:"/models/bird.glb",revision:"4751d666147cdfc86d4bed4edb9cc940"},{url:"/models/birds.glb",revision:"db023bb1db41ac04b055da34992e9aec"},{url:"/models/castle.glb",revision:"d7030ae8ab911bcc56ab431550ed4a93"},{url:"/models/city.glb",revision:"55481197ffce2e8d83049fc64a1419d4"},{url:"/models/farm.glb",revision:"aec015888875f408cc03a1206bb2ad89"},{url:"/models/mountain.glb",revision:"93983f79e4a7f4d2abfeaa1d5e258ce8"},{url:"/models/mysterious.glb",revision:"16d829b876231c6dbbe6f017abee3384"},{url:"/models/ocean.glb",revision:"9f36d0022538ce543468db12b9476978"},{url:"/models/restaurant.glb",revision:"f85abbb4cad5b5c7bd78288b5057459d"},{url:"/models/school.glb",revision:"0adfb481890fac41e0c0325b99c1ee45"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:s}})=>!(!e||s.startsWith("/api/auth/callback")||!s.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:s})=>s&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
