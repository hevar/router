"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[671],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,g=d["".concat(l,".").concat(m)]||d[m]||c[m]||a;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9881:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={title:"Introduction",sidebar_position:1},i=void 0,p={unversionedId:"intro",id:"intro",title:"Introduction",description:"Expo Router is in the earliest stage of development. The API is subject to breaking changes. The documentation is incomplete and may be inaccurate. The project is not yet ready for production use. Please contribute to the discussion if you have any ideas or suggestions on how we can improve the convention.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/router/docs/intro",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Introduction",sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Features",permalink:"/router/docs/category/features"}},l={},s=[{value:"Features",id:"features",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Beta setup",id:"beta-setup",level:2},{value:"Metro web setup",id:"metro-web-setup",level:2},{value:"Usage",id:"usage",level:2},{value:"Next Steps",id:"next-steps",level:2}],u={toc:s};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"Beta Release",type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"Expo Router is in the earliest stage of development. The API is subject to breaking changes. The documentation is incomplete and may be inaccurate. The project is not yet ready for production use. Please ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/expo/router/discussions/1"},"contribute to the discussion")," if you have any ideas or suggestions on how we can improve the convention.")),(0,o.kt)("p",null,"Expo router is a new system for building complex native iOS and Android apps based on the project's file system. Expo router is built on top of our powerful ",(0,o.kt)("a",{parentName:"p",href:"https://reactnavigation.org/"},"React Navigation suite")," of libraries, making it easy to bring your existing React Navigation code to the new router."),(0,o.kt)("h2",{id:"features"},"Features"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Native")," Truly native navigation with the most cutting-edge developer experience."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Deep linking")," Every screen in your app is automatically deep linkable. Making any part of your app shareable."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Offline-first")," Apps are cached and run offline-first, with automatic updates when you publish a new version. Handles all incoming native URLs without a network connection or server."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Scale")," Apps are built with a modular architecture that scales to any size. Refactoring and upgrading are a breeze due to the declarative nature of the API."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Iteration")," Universal Fast Refresh across iOS, Android, and web along with intelligent artifact memoziation in the bundler keep you moving fast at scale.")),(0,o.kt)("h2",{id:"getting-started"},"Getting Started"),(0,o.kt)("p",null,"Ensure your computer is ",(0,o.kt)("a",{parentName:"p",href:"https://docs.expo.dev/get-started/installation/"},"setup for running an Expo app"),"."),(0,o.kt)("p",null,"Create a new Expo project:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx create-expo-app\n")),(0,o.kt)("p",null,"Install ",(0,o.kt)("inlineCode",{parentName:"p"},"expo-router"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx expo install expo-router\n")),(0,o.kt)("h2",{id:"beta-setup"},"Beta setup"),(0,o.kt)("p",null,"During the beta, you'll also need to use the latest version of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/expo/expo/blob/main/packages/%40expo/cli/README.md#contributing"},"Expo CLI")," from the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/expo/expo/compare/%40evanbacon/cli/touch-middleware"},(0,o.kt)("inlineCode",{parentName:"a"},"@evanbacon/cli/touch-middleware"))," branch."),(0,o.kt)("p",null,"And you'll need to configure your ",(0,o.kt)("inlineCode",{parentName:"p"},"metro.config.js")," file as such:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=metro.config.js",title:"metro.config.js"},'// NOTE: `expo-router/metro-config` is a temporary version of `expo/metro-config`.\nconst { getDefaultConfig } = require("expo-router/metro-config");\nmodule.exports = require("expo-router/metro-config").getDefaultConfig(\n  __dirname\n);\n')),(0,o.kt)("p",null,"You'll also need to resolve the latest version of Metro bundler to use our upstreamed features (this is required for Expo SDK 46):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:"title=package.json",title:"package.json"},'{\n  "resolutions": {\n    "metro": "0.72.3"\n  }\n}\n')),(0,o.kt)("p",null,"Configure the babel plugin:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=babel.config.js",title:"babel.config.js"},'module.exports = function (api) {\n  api.cache(true);\n  return {\n    presets: ["babel-preset-expo"],\n    plugins: [\n      "react-native-reanimated/plugin",\n      // NOTE: `expo-router/babel` is a temporary extension to `babel-preset-expo`.\n      require.resolve("expo-router/babel"),\n    ],\n  };\n};\n')),(0,o.kt)("p",null,"Configure the entry point in your ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:"title=package.json",title:"package.json"},'{\n  "main": "index.js"\n}\n')),(0,o.kt)("p",null,"Now create a new ",(0,o.kt)("inlineCode",{parentName:"p"},"index.js")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"title=index.js",title:"index.js"},'// Only required for Metro web\nimport "@bacons/expo-metro-runtime";\n\nimport { registerRootComponent } from "expo";\nimport { ExpoRoot } from "expo-router";\n\n// Must be exported or Fast Refresh won\'t update the context module\nexport function App() {\n  const ctx = require.context("./app");\n  return <ExpoRoot context={ctx} />;\n}\n\nregisterRootComponent(App);\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This will be replaced with a single ",(0,o.kt)("inlineCode",{parentName:"p"},"expo-router/entry")," import in the future, but it requires ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/expo/expo/pull/19231"},"extra CLI functionality"),".")),(0,o.kt)("h2",{id:"metro-web-setup"},"Metro web setup"),(0,o.kt)("p",null,"The router is tied to the bundler which is currently only built for Metro. If you want to use the router with web, you'll need to enable Expo CLI's experimental Metro web support:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=app.json",title:"app.json"},'{\n  "expo": {\n    "web": {\n      "bundler": "metro"\n    }\n  }\n}\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Metro web font icons don't work: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/expo/expo/pull/19234"},"pending PR"),".")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"Start the server with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"yarn expo start\n")),(0,o.kt)("p",null,"Then open by pressing ",(0,o.kt)("inlineCode",{parentName:"p"},"i"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"a"),", or ",(0,o.kt)("inlineCode",{parentName:"p"},"w")," for web (only tested against Metro web)."),(0,o.kt)("p",null,"Create files in the ",(0,o.kt)("inlineCode",{parentName:"p"},"app")," directory and they will be automatically added to the app."),(0,o.kt)("h2",{id:"next-steps"},"Next Steps"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/category/guides"},"Guides"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/category/features"},"Features and conventions"),".")))}c.isMDXComponent=!0}}]);