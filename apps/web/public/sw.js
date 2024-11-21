if (!self.define) {
  let e,
    s = {};
  const a = (a, c) => (
    (a = new URL(a + ".js", c).href),
    s[a] ||
      new Promise((s) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = a), (e.onload = s), document.head.appendChild(e);
        } else (e = a), importScripts(a), s();
      }).then(() => {
        let e = s[a];
        if (!e) throw new Error(`Module ${a} didn’t register its module`);
        return e;
      })
  );
  self.define = (c, i) => {
    const n =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (s[n]) return;
    let r = {};
    const t = (e) => a(e, n),
      o = { module: { uri: n }, exports: r, require: t };
    s[n] = Promise.all(c.map((e) => o[e] || t(e))).then((e) => (i(...e), r));
  };
}
define(["./workbox-b52a85cb"], function (e) {
  "use strict";
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: "/_next/static/chunks/1482-f47b82601ea49d2c.js",
          revision: "jBM33kkm5P3eJkKge1FKB",
        },
        {
          url: "/_next/static/chunks/1702-3db70af7d1f38557.js",
          revision: "jBM33kkm5P3eJkKge1FKB",
        },
        {
          url: "/_next/static/chunks/1dd3208c-d0ec7e0d36785781.js",
          revision: "jBM33kkm5P3eJkKge1FKB",
        },
        {
          url: "/_next/static/chunks/2115-4c09793b057f44f2.js",
          revision: "jBM33kkm5P3eJkKge1FKB",
        },
        {
          url: "/_next/static/chunks/2836.592db56e4b37a338.js",
          revision: "592db56e4b37a338",
        },
        {
          url: "/_next/static/chunks/3086-86f87524def2c276.js",
          revision: "jBM33kkm5P3eJkKge1FKB",
        },
        {
          url: "/_next/static/chunks/3188.130ad2e654451b9e.js",
          revision: "130ad2e654451b9e",
        },
        {
          url: "/_next/static/chunks/3387.08501f19067cee1f.js",
          revision: "08501f19067cee1f",
        },
        {
          url: "/_next/static/chunks/3522.226ac9472d565b84.js",
          revision: "226ac9472d565b84",
        },
        {
          url: "/_next/static/chunks/3678-645ad128b2167718.js",
          revision: "jBM33kkm5P3eJkKge1FKB",
        },
        {
          url: "/_next/static/chunks/3816-cf4d925f318065e3.js",
          revision: "jBM33kkm5P3eJkKge1FKB",
        },
        {
          url: "/_next/static/chunks/3837.72b168fd031d7f10.js",
          revision: "72b168fd031d7f10",
        },
        {
          url: "/_next/static/chunks/3884-cdec887bfd9f6258.js",
          revision: "jBM33kkm5P3eJkKge1FKB",
        },
        {
          url: "/_next/static/chunks/3920-9a98d5798d1334be.js",
          revision: "jBM33kkm5P3eJkKge1FKB",
        },
        {
          url: "/_next/static/chunks/3993-dab14cebd0d99089.js",
          revision: "jBM33kkm5P3eJkKge1FKB",
        },
        {
          url: "/_next/static/chunks/4090.cddde5427980a188.js",
          revision: "cddde5427980a188",
        },
        {
          url: "/_next/static/chunks/4154-be3c233d21cc9cd5.js",
          revision: "jBM33kkm5P3eJkKge1FKB",
        },
        {
          url: "/_next/static/chunks/420.271b6ffd1cb14721.js",
          revision: "271b6ffd1cb14721",
        },
        {
          url: "/_next/static/chunks/4388-09b314410f79a671.js",
          revision: "jBM33kkm5P3eJkKge1FKB",
        },
        {
          url: "/_next/static/chunks/4565-7e091e4a041b8b73.js",
          revision: "jBM33kkm5P3eJkKge1FKB",
        },
        {
          url: "/_next/static/chunks/4678-1f371f29c2959679.js",
          revision: "jBM33kkm5P3eJkKge1FKB",
        },
        {
          url: "/_next/static/chunks/5231-1e0b06844e46f387.js",
          revision: "jBM33kkm5P3eJkKge1FKB",
        },
        {
          url: "/_next/static/chunks/5513.9fadd7de400e8697.js",
          revision: "9fadd7de400e8697",
        },
        {
          url: "/_next/static/chunks/578.ec89f499432682c2.js",
          revision: "ec89f499432682c2",
        },
        {
          url: "/_next/static/chunks/5880-b451827e1516c54e.js",
          revision: "jBM33kkm5P3eJkKge1FKB",
        },
        {
          url: "/_next/static/chunks/6058-f8f6c55396c32ae0.js",
          revision: "jBM33kkm5P3eJkKge1FKB",
        },
        {
          url: "/_next/static/chunks/6139-86d853415fc9b411.js",
          revision: "jBM33kkm5P3eJkKge1FKB",
        },
        {
          url: "/_next/static/chunks/6186.9ee24e5d54077f9d.js",
          revision: "9ee24e5d54077f9d",
        },
        {
          url: "/_next/static/chunks/6226-f952255e4debc5f7.js",
          revision: "jBM33kkm5P3eJkKge1FKB",
        },
        {
          url: "/_next/static/chunks/6290-2b210dcaf4253581.js",
          revision: "jBM33kkm5P3eJkKge1FKB",
        },
        {
          url: "/_next/static/chunks/6385-946391ac47a81f5d.js",
          revision: "jBM33kkm5P3eJkKge1FKB",
        },
        {
          url: "/_next/static/chunks/662-25f5c5abdb4211be.js",
          revision: "jBM33kkm5P3eJkKge1FKB",
        },
        {
          url: "/_next/static/chunks/6938.274cd94954ec4b31.js",
          revision: "274cd94954ec4b31",
        },
        {
          url: "/_next/static/chunks/7031.1b964539643c3ca7.js",
          revision: "1b964539643c3ca7",
        },
        {
          url: "/_next/static/chunks/7376.54c1b91e01156cc9.js",
          revision: "54c1b91e01156cc9",
        },
        {
          url: "/_next/static/chunks/7447-e2affd4297c1c1f2.js",
          revision: "jBM33kkm5P3eJkKge1FKB",
        },
        {
          url: "/_next/static/chunks/7618.12ce0b1b5a4bd97d.js",
          revision: "12ce0b1b5a4bd97d",
        },
        {
          url: "/_next/static/chunks/7659-581fc6a9dffab563.js",
          revision: "jBM33kkm5P3eJkKge1FKB",
        },
        {
          url: "/_next/static/chunks/7710-af82160112708c78.js",
          revision: "jBM33kkm5P3eJkKge1FKB",
        },
        {
          url: "/_next/static/chunks/7d384bb9-0d683de7d7d17d8b.js",
          revision: "jBM33kkm5P3eJkKge1FKB",
        },
        {
          url: "/_next/static/chunks/8049.495cb54b54be69c3.js",
          revision: "495cb54b54be69c3",
        },
        {
          url: "/_next/static/chunks/83f6239b-209c2989e02e9175.js",
          revision: "jBM33kkm5P3eJkKge1FKB",
        },
        {
          url: "/_next/static/chunks/8438-6fcb6fdedc64c7ff.js",
          revision: "jBM33kkm5P3eJkKge1FKB",
        },
        {
          url: "/_next/static/chunks/8493.946fe59c0b4a4f0e.js",
          revision: "946fe59c0b4a4f0e",
        },
        {
          url: "/_next/static/chunks/8535.2d955b361ed75c34.js",
          revision: "2d955b361ed75c34",
        },
        {
          url: "/_next/static/chunks/8682-310d9c26da6b74e6.js",
          revision: "jBM33kkm5P3eJkKge1FKB",
        },
        {
          url: "/_next/static/chunks/8789-f5a685d0538baef5.js",
          revision: "jBM33kkm5P3eJkKge1FKB",
        },
        {
          url: "/_next/static/chunks/8bb4d8db-fa01a77ce7f0ac61.js",
          revision: "jBM33kkm5P3eJkKge1FKB",
        },
        {
          url: "/_next/static/chunks/9069-069b58bd92752c67.js",
          revision: "jBM33kkm5P3eJkKge1FKB",
        },
        {
          url: "/_next/static/chunks/933.67ffca05d93a52e3.js",
          revision: "67ffca05d93a52e3",
        },
        {
          url: "/_next/static/chunks/9723-59e2dcb15edf5f6b.js",
          revision: "jBM33kkm5P3eJkKge1FKB",
        },
        {
          url: "/_next/static/chunks/9912.0c2a614f389bd6bc.js",
          revision: "0c2a614f389bd6bc",
        },
        {
          url: "/_next/static/chunks/9d78c252.fe684ccd9e4e61e4.js",
          revision: "fe684ccd9e4e61e4",
        },
        {
          url: "/_next/static/chunks/af1682e6.1930c155c4760f07.js",
          revision: "1930c155c4760f07",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(pages)/%5Buser-name%5D/page-c0b0db0d3ef16bd5.js",
          revision: "jBM33kkm5P3eJkKge1FKB",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(pages)/about-me/layout-d759bf28b7e78f9a.js",
          revision: "jBM33kkm5P3eJkKge1FKB",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(pages)/about-me/page-62046816ede2b03b.js",
          revision: "jBM33kkm5P3eJkKge1FKB",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(pages)/auth/layout-4d4ca1ccd0c14261.js",
          revision: "jBM33kkm5P3eJkKge1FKB",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(pages)/auth/register/page-7067d19e6d824331.js",
          revision: "jBM33kkm5P3eJkKge1FKB",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(pages)/auth/signin/page-d847ef180c8ac5ef.js",
          revision: "jBM33kkm5P3eJkKge1FKB",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(pages)/blog/%5Bslug%5D/layout-87e53db0c707884e.js",
          revision: "jBM33kkm5P3eJkKge1FKB",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(pages)/blog/%5Bslug%5D/page-bb4a5b219c5d8ef5.js",
          revision: "jBM33kkm5P3eJkKge1FKB",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(pages)/blog/error-8baf2469f1e1b3a1.js",
          revision: "jBM33kkm5P3eJkKge1FKB",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(pages)/blog/layout-9525852d84b8dc69.js",
          revision: "jBM33kkm5P3eJkKge1FKB",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(pages)/blog/new/layout-783bad71cb93fadf.js",
          revision: "jBM33kkm5P3eJkKge1FKB",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(pages)/blog/new/page-510e6283f9b2128f.js",
          revision: "jBM33kkm5P3eJkKge1FKB",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(pages)/blog/not-found-8a491a72c8a56add.js",
          revision: "jBM33kkm5P3eJkKge1FKB",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(pages)/blog/page-b168b02b90ac35b0.js",
          revision: "jBM33kkm5P3eJkKge1FKB",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(pages)/course/layout-c15e25aacc726cd1.js",
          revision: "jBM33kkm5P3eJkKge1FKB",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(pages)/course/page-b3aff0c52014fa74.js",
          revision: "jBM33kkm5P3eJkKge1FKB",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(pages)/extensions/chatbot/page-6ade1b093e62322f.js",
          revision: "jBM33kkm5P3eJkKge1FKB",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(pages)/extensions/git-roll/page-34859af0c15afa84.js",
          revision: "jBM33kkm5P3eJkKge1FKB",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(pages)/extensions/resume/page-cde55a990747818d.js",
          revision: "jBM33kkm5P3eJkKge1FKB",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(pages)/layout-2f39ab6659038293.js",
          revision: "jBM33kkm5P3eJkKge1FKB",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(pages)/page-3ef5403209ac8dec.js",
          revision: "jBM33kkm5P3eJkKge1FKB",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(pages)/project/error-e6cb8507bd7db23d.js",
          revision: "jBM33kkm5P3eJkKge1FKB",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(pages)/project/layout-3a859c7ec2d95b88.js",
          revision: "jBM33kkm5P3eJkKge1FKB",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(pages)/project/not-found-d4e9a73ac47e4821.js",
          revision: "jBM33kkm5P3eJkKge1FKB",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(pages)/project/page-71001e7f82df658d.js",
          revision: "jBM33kkm5P3eJkKge1FKB",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(pages)/setting/background/page-7a26eabf64f95d63.js",
          revision: "jBM33kkm5P3eJkKge1FKB",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(pages)/setting/display/page-f9f8f4dc5a334f2c.js",
          revision: "jBM33kkm5P3eJkKge1FKB",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/(pages)/setting/page-fe788ceeabc76806.js",
          revision: "jBM33kkm5P3eJkKge1FKB",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/layout-ae3a341673f3334c.js",
          revision: "jBM33kkm5P3eJkKge1FKB",
        },
        {
          url: "/_next/static/chunks/app/%5Blocale%5D/not-found-3a6aec37b5b3b0e5.js",
          revision: "jBM33kkm5P3eJkKge1FKB",
        },
        {
          url: "/_next/static/chunks/app/_not-found/page-bc9b937c1a0df539.js",
          revision: "jBM33kkm5P3eJkKge1FKB",
        },
        {
          url: "/_next/static/chunks/b0045e08.ae41b324854aeecf.js",
          revision: "ae41b324854aeecf",
        },
        {
          url: "/_next/static/chunks/b6b9d1ec-9052525ec5ce278c.js",
          revision: "jBM33kkm5P3eJkKge1FKB",
        },
        {
          url: "/_next/static/chunks/b7bbbec9-ff58ee01620ae9f2.js",
          revision: "jBM33kkm5P3eJkKge1FKB",
        },
        {
          url: "/_next/static/chunks/framework-cfc5e5b8a6588d42.js",
          revision: "jBM33kkm5P3eJkKge1FKB",
        },
        {
          url: "/_next/static/chunks/main-823bae3657c634a7.js",
          revision: "jBM33kkm5P3eJkKge1FKB",
        },
        {
          url: "/_next/static/chunks/main-app-080398bebcbeb084.js",
          revision: "jBM33kkm5P3eJkKge1FKB",
        },
        {
          url: "/_next/static/chunks/pages/_app-985f9abd66cd8e91.js",
          revision: "jBM33kkm5P3eJkKge1FKB",
        },
        {
          url: "/_next/static/chunks/pages/_error-29151b8311ee5445.js",
          revision: "jBM33kkm5P3eJkKge1FKB",
        },
        {
          url: "/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",
          revision: "79330112775102f91e1010318bae2bd3",
        },
        {
          url: "/_next/static/chunks/webpack-04fb253b04de2e83.js",
          revision: "jBM33kkm5P3eJkKge1FKB",
        },
        {
          url: "/_next/static/css/2c9666a05cfbb683.css",
          revision: "2c9666a05cfbb683",
        },
        {
          url: "/_next/static/css/309e80c2888162d0.css",
          revision: "309e80c2888162d0",
        },
        {
          url: "/_next/static/css/b3d3ff71b127a761.css",
          revision: "b3d3ff71b127a761",
        },
        {
          url: "/_next/static/jBM33kkm5P3eJkKge1FKB/_buildManifest.js",
          revision: "1d36db6a369bd35d5306ad941a7f140a",
        },
        {
          url: "/_next/static/jBM33kkm5P3eJkKge1FKB/_ssgManifest.js",
          revision: "b6652df95db52feb4daf4eca35380933",
        },
        {
          url: "/_next/static/media/04ff47e1ca568747-s.p.woff2",
          revision: "7fa44513d75219a7f08354904847f470",
        },
        {
          url: "/_next/static/media/11b973e5d6a0f36f-s.woff2",
          revision: "73429853f43c52a1f5b0a66be001cee7",
        },
        {
          url: "/_next/static/media/3685d5506ce59a5b-s.p.woff2",
          revision: "aeb9bc90aacc596c561739a8765c2660",
        },
        {
          url: "/_next/static/media/3cf9d666e297f400-s.woff2",
          revision: "8f14a785783951142ef1ed2636c0e44c",
        },
        {
          url: "/_next/static/media/7d5aec55b00dccee-s.woff2",
          revision: "559a1a7b56597af07c4459238d578a7d",
        },
        {
          url: "/_next/static/media/8f20ceaa9dc39f1d-s.woff2",
          revision: "b01fa9c29578a19b57edbefd2bc76eba",
        },
        {
          url: "/_next/static/media/93a6e477e1480c92-s.woff2",
          revision: "63a7e6a745b18221c0c3b486a3317ae4",
        },
        {
          url: "/_next/static/media/d9eda00d614760a9-s.p.woff2",
          revision: "fc0227eb65c80ea9df8004153751c124",
        },
        {
          url: "/_next/static/media/e86ead60cc6c3034-s.p.woff2",
          revision: "7ded7d8498fa0acbe1dca61844eb0de0",
        },
        {
          url: "/android-chrome-192x192.png",
          revision: "b818c2f60dbf9fe923c049c292b0c2ea",
        },
        {
          url: "/android-chrome-512x512.png",
          revision: "42feec9fe6f4f6499eff6dae009c42c3",
        },
        {
          url: "/apple-touch-icon.png",
          revision: "0efcb90ae5ac66181ecffdb7ea6b24c5",
        },
        { url: "/art.jpg", revision: "f7266e992ca741b2a75a11890369562e" },
        {
          url: "/audios/music.mp3",
          revision: "af958d066f6f9e4f78995a1e27e8f4c4",
        },
        {
          url: "/audios/tap.mp3",
          revision: "fe954c17d0778a1229cf7ea97a29693c",
        },
        {
          url: "/banner-dark.png",
          revision: "c9a2f98ce099d77120899c6f14611b8f",
        },
        {
          url: "/banner-light.png",
          revision: "340f83b8816261670dc26e8162082eb8",
        },
        { url: "/banner.png", revision: "06c43c43201acff4c0002dd86c253573" },
        { url: "/bg-menu.webp", revision: "942a6d51656c65f01970ec3fb9c2176c" },
        { url: "/bg_menu.webp", revision: "5bac33a41cf03ed5902bd83c52779916" },
        {
          url: "/draco/draco_decoder.js",
          revision: "fddce5e322adc9ec55f9c51e539f6e5a",
        },
        {
          url: "/draco/draco_decoder.wasm",
          revision: "6e4128e70412764d83dfe188256af9cc",
        },
        {
          url: "/draco/draco_decoder_gltf.js",
          revision: "09a66e3e218ec37cc01f5844c9145f49",
        },
        {
          url: "/draco/draco_decoder_gltf.wasm",
          revision: "b0b236ca13685a2dc12a2aede6d0c29d",
        },
        {
          url: "/draco/draco_encoder.js",
          revision: "e86f9f2fc0389244d92bc26bc8be0bc2",
        },
        {
          url: "/draco/draco_encoder.wasm",
          revision: "f690f1fac5831b6e46f8c23bd49684cf",
        },
        {
          url: "/draco/draco_encoder_wrapper.js",
          revision: "8952b5321d37d4ee0f564420af8dba8b",
        },
        {
          url: "/draco/draco_wasm_wrapper.js",
          revision: "ff98aa743c3efb7b15a972ddf688a617",
        },
        {
          url: "/draco/draco_wasm_wrapper_gltf.js",
          revision: "d52bf7c678ed7cba0782260352c9fbdc",
        },
        {
          url: "/favicon-16x16.png",
          revision: "ee3f9623b16ab70191d27ceff63cec9a",
        },
        {
          url: "/favicon-32x32.png",
          revision: "fdbb7904e1bc576eb94a1b9aced0cbee",
        },
        { url: "/favicon.ico", revision: "0536534783a03b28515ee2f9e51f181c" },
        {
          url: "/icon-navigation/chat.svg",
          revision: "5f0e94bdd20760edf32f08bd21669ff5",
        },
        {
          url: "/icon-navigation/icon-about.png",
          revision: "53f9d629938f310b76fe674ea38434e1",
        },
        {
          url: "/icon-navigation/icon-blog.png",
          revision: "43998091bce9918f69828401c6d4160d",
        },
        {
          url: "/icon-navigation/icon-course.png",
          revision: "fce3f5ac59e38030eb089ab55127b80a",
        },
        {
          url: "/icon-navigation/icon-github.png",
          revision: "6227e4daef10685252a83fd70a42a06d",
        },
        {
          url: "/icon-navigation/icon-project.png",
          revision: "ed513098337aeba97e8c4ecd20a2fb3c",
        },
        {
          url: "/icon-navigation/icon-resume.png",
          revision: "7effd3dc9a7fdd8f9cccdb16d3e189da",
        },
        {
          url: "/icon-navigation/icon-setting.png",
          revision: "29037538403335ed564a7a3ffe5effba",
        },
        {
          url: "/icon-techstack/css.svg",
          revision: "b698699cfc3ce693dd39e12dd5cfa65c",
        },
        {
          url: "/icon-techstack/html.svg",
          revision: "fbb405b31efe1aa5d6091daf9cd4d3fc",
        },
        {
          url: "/icon-techstack/javascript.svg",
          revision: "869f93e66b5b53e1260275289d8bbfa8",
        },
        {
          url: "/icon-techstack/laravel.svg",
          revision: "48b585f94686ae8b13cfd7a99d8714c7",
        },
        {
          url: "/icon-techstack/nextjs.svg",
          revision: "45fbbdeaa673a2870de263e2c1e88b5b",
        },
        {
          url: "/icon-techstack/nodejs.svg",
          revision: "a15706a00171e4ec8549e55984a75403",
        },
        {
          url: "/icon-techstack/prisma.svg",
          revision: "f6d7266f6814be3dfccb5ba18435edfd",
        },
        {
          url: "/images/about-me/character.png",
          revision: "3b0cbde9cb8be9dff649af0649a0f64e",
        },
        {
          url: "/images/about-me/left-bg.png",
          revision: "5c00ebf6a7f5dcd4f679f931f92a736d",
        },
        {
          url: "/images/about-me/noise_bg.gif",
          revision: "9c5a3d9d99594ca29e901bf84bce475e",
        },
        {
          url: "/images/about-me/right-bg.png",
          revision: "7e2695d8a5ef9107700081392771f7bf",
        },
        {
          url: "/images/blog/anonymous.png",
          revision: "43225c57833d1567e720a921a4f919ab",
        },
        {
          url: "/images/blog/avatar.png",
          revision: "2cb66e983be2c7de86140120535dce33",
        },
        {
          url: "/images/blog/background.webp",
          revision: "6a0d9a35576bcff2e3cc432f95f37f87",
        },
        {
          url: "/images/blog/book.gif",
          revision: "09004b0e38877ecdd4dd626ac0680d0c",
        },
        {
          url: "/images/blog/cat_illus.jpg",
          revision: "eae469bbe52eb1f21586a820e3a112ae",
        },
        {
          url: "/images/blog/daily_dev_logo.jpg",
          revision: "76fb741f307da81e1d2ff255713e54a8",
        },
        {
          url: "/images/blog/dev_community_logo.png",
          revision: "2178e6e1285246f2fb21eaa1590a8a67",
        },
        {
          url: "/images/blog/github_logo.png",
          revision: "7ea17eeee93a54241c0af6510bbd551d",
        },
        {
          url: "/images/blog/medium_logo.png",
          revision: "4769fcdb6dfb1224ed13fb1e651525df",
        },
        {
          url: "/images/blog/people_all.svg",
          revision: "ab27e9d82b4844c7fd7a22a12531e0fd",
        },
        {
          url: "/images/blog/person_1.svg",
          revision: "c68bd7b9dd28e71087f621b143deacd5",
        },
        {
          url: "/images/blog/person_2.svg",
          revision: "e4ef47f04c503253d78e1b30b3836458",
        },
        {
          url: "/images/blog/person_3.svg",
          revision: "843a055db47b3d5030552ec1d51dfb37",
        },
        {
          url: "/images/blog/person_4.svg",
          revision: "e88fda9079115a7344f5bd7a982f8804",
        },
        {
          url: "/images/blog/person_5.svg",
          revision: "ab5cf73714a6d7ae534bb54076964de4",
        },
        {
          url: "/images/blog/redirect.gif",
          revision: "f42d12657cd5d3b66feb958ac9ce9066",
        },
        {
          url: "/images/blog/stackoverflow_logo.png",
          revision: "989183e901976e560032e1b593274005",
        },
        {
          url: "/images/blog/status_0.png",
          revision: "ee8eee68f5e004ba401526869ab2cf08",
        },
        {
          url: "/images/blog/status_1.png",
          revision: "e7478c22293c23b2d17523ad86925379",
        },
        {
          url: "/images/blog/status_2.png",
          revision: "b9d243088d67bb5490fe14da25b6af83",
        },
        {
          url: "/images/blog/status_3.png",
          revision: "a0a50ade940bc8e838e02f51d3f197ed",
        },
        {
          url: "/images/course/bg_1.webp",
          revision: "4ae2901d924f09d5293dc995cf8f2814",
        },
        {
          url: "/images/course/bg_1_new.webp",
          revision: "17ebbb4549618eab60d4e950e8075db1",
        },
        {
          url: "/images/course/bg_2.webp",
          revision: "4246e483ba4ba6c74bad35026a41ba7d",
        },
        {
          url: "/images/course/bg_2_new.webp",
          revision: "ea0d029fdfdd700c698c9e7e1e5764b3",
        },
        {
          url: "/images/course/character_1_1.webp",
          revision: "6fd6dad2d5e79e83a28bb7e3662bf4d6",
        },
        {
          url: "/images/course/character_1_2.webp",
          revision: "07689bb68a5b4696039276a05eb5f03d",
        },
        {
          url: "/images/course/character_2_1.webp",
          revision: "cd39da27de6e9957a619002552dc1671",
        },
        {
          url: "/images/course/character_2_2.webp",
          revision: "a2cd502bd36816006d5fb9251ae7242a",
        },
        {
          url: "/images/course/mask_1.webp",
          revision: "32b07f75b28424b027ac6adbdbeceabb",
        },
        {
          url: "/images/project/bg-brush.png",
          revision: "9ebe7673c619eeb8d0364aff251736ce",
        },
        {
          url: "/images/project/bg-brush.webp",
          revision: "533df46cc0120333e36014c1842cdc79",
        },
        {
          url: "/images/project/bg.jpg",
          revision: "d114d96f6942541f318be844d5304ccd",
        },
        {
          url: "/images/project/bg.webp",
          revision: "e219921b1182e64bd54cc812abee0848",
        },
        {
          url: "/images/project/picture.jpg",
          revision: "7b20a658b9fe9c3b159ad6cc038e0976",
        },
        {
          url: "/images/project/picture.webp",
          revision: "5c66bd72809306256db4f56a7d330895",
        },
        {
          url: "/images/project/tag.png",
          revision: "3e8023dfdf8843cf7a320f633957b344",
        },
        { url: "/logo.png", revision: "fdb13fdf9ec03413e3d811f53bbdee66" },
        {
          url: "/mask-project.svg",
          revision: "e2901242c4abc24a595c7e8e86fde361",
        },
        {
          url: "/models/ktx2_model_new.glb",
          revision: "854820cfd914d6c624db6272977d73d2",
        },
        {
          url: "/models/model_new.glb",
          revision: "49578b1a96efcb516e47a02df68ec5ce",
        },
        {
          url: "/models/optimized_ktx2_model_new.glb",
          revision: "e357802e179f19f00c09147aef205111",
        },
        {
          url: "/models/optimized_model_new.glb",
          revision: "b60987c3b62bea21ec28b686495f8f5e",
        },
        { url: "/next.svg", revision: "8e061864f388b47f33a1c3780831193e" },
        { url: "/robots.txt", revision: "ff69a482aee3a9f46e533140bb6427e0" },
        {
          url: "/translate/de.json",
          revision: "76a33843c687d4107e87495488f60271",
        },
        {
          url: "/translate/en.json",
          revision: "a2addce8fceff01fb00734f080d40163",
        },
        {
          url: "/translate/es.json",
          revision: "1a10099f806bbe167da08ef260eb2873",
        },
        {
          url: "/translate/fr.json",
          revision: "9987c548e97f3f143b613eff8c0ba8de",
        },
        {
          url: "/translate/hi.json",
          revision: "05f198285f85267c98760c3d6ad6821f",
        },
        {
          url: "/translate/ja.json",
          revision: "c5f066b7cc0bb5e79e3cf8ebc1de6ebd",
        },
        {
          url: "/translate/pt.json",
          revision: "971b8e8de9641866e9c0533a4becd43b",
        },
        {
          url: "/translate/vi.json",
          revision: "3ac668d5068335acb9d4c887db53e593",
        },
        {
          url: "/translate/zh.json",
          revision: "69dbb88632ed3464849f1f06b42a302a",
        },
      ],
      { ignoreURLParametersMatching: [/^utm_/, /^fbclid$/] },
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      "/",
      new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [
          {
            cacheWillUpdate: async ({ response: e }) =>
              e && "opaqueredirect" === e.type
                ? new Response(e.body, {
                    status: 200,
                    statusText: "OK",
                    headers: e.headers,
                  })
                : e,
          },
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: "google-fonts-webfonts",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 2592e3 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\/_next\/static.+\.js$/i,
      new e.CacheFirst({
        cacheName: "next-static-js-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-image",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: "static-audio-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:mp4|webm)$/i,
      new e.CacheFirst({
        cacheName: "static-video-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 48, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-data",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: "static-data-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      ({ sameOrigin: e, url: { pathname: s } }) =>
        !(!e || s.startsWith("/api/auth/callback") || !s.startsWith("/api/")),
      new e.NetworkFirst({
        cacheName: "apis",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      ({ request: e, url: { pathname: s }, sameOrigin: a }) =>
        "1" === e.headers.get("RSC") &&
        "1" === e.headers.get("Next-Router-Prefetch") &&
        a &&
        !s.startsWith("/api/"),
      new e.NetworkFirst({
        cacheName: "pages-rsc-prefetch",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      ({ request: e, url: { pathname: s }, sameOrigin: a }) =>
        "1" === e.headers.get("RSC") && a && !s.startsWith("/api/"),
      new e.NetworkFirst({
        cacheName: "pages-rsc",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      ({ url: { pathname: e }, sameOrigin: s }) => s && !e.startsWith("/api/"),
      new e.NetworkFirst({
        cacheName: "pages",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      ({ sameOrigin: e }) => !e,
      new e.NetworkFirst({
        cacheName: "cross-origin",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
        ],
      }),
      "GET",
    );
});
