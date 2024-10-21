// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
(function(modules, entry, mainEntry, parcelRequireName, globalName) {
    /* eslint-disable no-undef */ var globalObject = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {};
    /* eslint-enable no-undef */ // Save the require from previous bundle to this closure if any
    var previousRequire = typeof globalObject[parcelRequireName] === "function" && globalObject[parcelRequireName];
    var cache = previousRequire.cache || {};
    // Do not use `require` to prevent Webpack from trying to bundle this call
    var nodeRequire = typeof module !== "undefined" && typeof module.require === "function" && module.require.bind(module);
    function newRequire(name, jumped) {
        if (!cache[name]) {
            if (!modules[name]) {
                // if we cannot find the module within our internal map or
                // cache jump to the current global require ie. the last bundle
                // that was added to the page.
                var currentRequire = typeof globalObject[parcelRequireName] === "function" && globalObject[parcelRequireName];
                if (!jumped && currentRequire) return currentRequire(name, true);
                // If there are other bundles on this page the require from the
                // previous one is saved to 'previousRequire'. Repeat this as
                // many times as there are bundles until the module is found or
                // we exhaust the require chain.
                if (previousRequire) return previousRequire(name, true);
                // Try the node require function if it exists.
                if (nodeRequire && typeof name === "string") return nodeRequire(name);
                var err = new Error("Cannot find module '" + name + "'");
                err.code = "MODULE_NOT_FOUND";
                throw err;
            }
            localRequire.resolve = resolve;
            localRequire.cache = {};
            var module1 = cache[name] = new newRequire.Module(name);
            modules[name][0].call(module1.exports, localRequire, module1, module1.exports, this);
        }
        return cache[name].exports;
        function localRequire(x) {
            var res = localRequire.resolve(x);
            return res === false ? {} : newRequire(res);
        }
        function resolve(x) {
            var id = modules[name][1][x];
            return id != null ? id : x;
        }
    }
    function Module(moduleName) {
        this.id = moduleName;
        this.bundle = newRequire;
        this.exports = {};
    }
    newRequire.isParcelRequire = true;
    newRequire.Module = Module;
    newRequire.modules = modules;
    newRequire.cache = cache;
    newRequire.parent = previousRequire;
    newRequire.register = function(id, exports1) {
        modules[id] = [
            function(require, module1) {
                module1.exports = exports1;
            },
            {}
        ];
    };
    Object.defineProperty(newRequire, "root", {
        get: function() {
            return globalObject[parcelRequireName];
        }
    });
    globalObject[parcelRequireName] = newRequire;
    for(var i = 0; i < entry.length; i++)newRequire(entry[i]);
    if (mainEntry) {
        // Expose entry point to Node, AMD or browser globals
        // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
        var mainExports = newRequire(mainEntry);
        // CommonJS
        if (typeof exports === "object" && typeof module !== "undefined") module.exports = mainExports;
        else if (typeof define === "function" && define.amd) define(function() {
            return mainExports;
        });
        else if (globalName) this[globalName] = mainExports;
    }
})({
    "dZI1r": [
        function(require, module1, exports1) {
            var global1 = arguments[3];
            var HMR_HOST = null;
            var HMR_PORT = null;
            var HMR_SECURE = false;
            var HMR_ENV_HASH = "d6ea1d42532a7575";
            var HMR_USE_SSE = false;
            module1.bundle.HMR_BUNDLE_ID = "7dd44675b7a05eb9";
            "use strict";
            /* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
            var OldModule = module1.bundle.Module;
            function Module(moduleName) {
                OldModule.call(this, moduleName);
                this.hot = {
                    data: module1.bundle.hotData[moduleName],
                    _acceptCallbacks: [],
                    _disposeCallbacks: [],
                    accept: function(fn) {
                        this._acceptCallbacks.push(fn || function() {});
                    },
                    dispose: function(fn) {
                        this._disposeCallbacks.push(fn);
                    }
                };
                module1.bundle.hotData[moduleName] = undefined;
            }
            module1.bundle.Module = Module;
            module1.bundle.hotData = {};
            var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
            function getHostname() {
                return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
            }
            function getPort() {
                return HMR_PORT || location.port;
            }
            // eslint-disable-next-line no-redeclare
            var parent = module1.bundle.parent;
            if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
                var hostname = getHostname();
                var port = getPort();
                var protocol = HMR_SECURE || location.protocol == "https:" && ![
                    "localhost",
                    "127.0.0.1",
                    "0.0.0.0"
                ].includes(hostname) ? "wss" : "ws";
                var ws;
                if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
                else try {
                    ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
                } catch (err) {
                    if (err.message) console.error(err.message);
                    ws = {};
                }
                // Web extension context
                var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
                // Safari doesn't support sourceURL in error stacks.
                // eval may also be disabled via CSP, so do a quick check.
                var supportsSourceURL = false;
                try {
                    (0, eval)('throw new Error("test"); //# sourceURL=test.js');
                } catch (err) {
                    supportsSourceURL = err.stack.includes("test.js");
                }
                // $FlowFixMe
                ws.onmessage = async function(event /*: {data: string, ...} */ ) {
                    checkedAssets = {} /*: {|[string]: boolean|} */ ;
                    assetsToAccept = [];
                    assetsToDispose = [];
                    var data /*: HMRMessage */  = JSON.parse(event.data);
                    if (data.type === "update") {
                        // Remove error overlay if there is one
                        if (typeof document !== "undefined") removeErrorOverlay();
                        let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
                        // Handle HMR Update
                        let handled = assets.every((asset)=>{
                            return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module1.bundle.root, asset.id, asset.depsByBundle);
                        });
                        if (handled) {
                            console.clear();
                            // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                            if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                            await hmrApplyUpdates(assets);
                            // Dispose all old assets.
                            let processedAssets = {} /*: {|[string]: boolean|} */ ;
                            for(let i = 0; i < assetsToDispose.length; i++){
                                let id = assetsToDispose[i][1];
                                if (!processedAssets[id]) {
                                    hmrDispose(assetsToDispose[i][0], id);
                                    processedAssets[id] = true;
                                }
                            }
                            // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                            processedAssets = {};
                            for(let i = 0; i < assetsToAccept.length; i++){
                                let id = assetsToAccept[i][1];
                                if (!processedAssets[id]) {
                                    hmrAccept(assetsToAccept[i][0], id);
                                    processedAssets[id] = true;
                                }
                            }
                        } else fullReload();
                    }
                    if (data.type === "error") {
                        // Log parcel errors to console
                        for (let ansiDiagnostic of data.diagnostics.ansi){
                            let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                            console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
                        }
                        if (typeof document !== "undefined") {
                            // Render the fancy html overlay
                            removeErrorOverlay();
                            var overlay = createErrorOverlay(data.diagnostics.html);
                            // $FlowFixMe
                            document.body.appendChild(overlay);
                        }
                    }
                };
                if (ws instanceof WebSocket) {
                    ws.onerror = function(e) {
                        if (e.message) console.error(e.message);
                    };
                    ws.onclose = function() {
                        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
                    };
                }
            }
            function removeErrorOverlay() {
                var overlay = document.getElementById(OVERLAY_ID);
                if (overlay) {
                    overlay.remove();
                    console.log("[parcel] \u2728 Error resolved");
                }
            }
            function createErrorOverlay(diagnostics) {
                var overlay = document.createElement("div");
                overlay.id = OVERLAY_ID;
                let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
                for (let diagnostic of diagnostics){
                    let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
                        return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
                    }, "") : diagnostic.stack;
                    errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
                }
                errorHTML += "</div>";
                overlay.innerHTML = errorHTML;
                return overlay;
            }
            function fullReload() {
                if ("reload" in location) location.reload();
                else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
            }
            function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
                var modules = bundle.modules;
                if (!modules) return [];
                var parents = [];
                var k, d, dep;
                for(k in modules)for(d in modules[k][1]){
                    dep = modules[k][1][d];
                    if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
                        bundle,
                        k
                    ]);
                }
                if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
                return parents;
            }
            function updateLink(link) {
                var href = link.getAttribute("href");
                if (!href) return;
                var newLink = link.cloneNode();
                newLink.onload = function() {
                    if (link.parentNode !== null) link.parentNode.removeChild(link);
                };
                newLink.setAttribute("href", href.split("?")[0] + "?" + Date.now());
                // $FlowFixMe
                link.parentNode.insertBefore(newLink, link.nextSibling);
            }
            var cssTimeout = null;
            function reloadCSS() {
                if (cssTimeout) return;
                cssTimeout = setTimeout(function() {
                    var links = document.querySelectorAll('link[rel="stylesheet"]');
                    for(var i = 0; i < links.length; i++){
                        // $FlowFixMe[incompatible-type]
                        var href /*: string */  = links[i].getAttribute("href");
                        var hostname = getHostname();
                        var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
                        var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
                        if (!absolute) updateLink(links[i]);
                    }
                    cssTimeout = null;
                }, 50);
            }
            function hmrDownload(asset) {
                if (asset.type === "js") {
                    if (typeof document !== "undefined") {
                        let script = document.createElement("script");
                        script.src = asset.url + "?t=" + Date.now();
                        if (asset.outputFormat === "esmodule") script.type = "module";
                        return new Promise((resolve, reject)=>{
                            var _document$head;
                            script.onload = ()=>resolve(script);
                            script.onerror = reject;
                            (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
                        });
                    } else if (typeof importScripts === "function") {
                        // Worker scripts
                        if (asset.outputFormat === "esmodule") return __parcel__require__(asset.url + "?t=" + Date.now());
                        else return new Promise((resolve, reject)=>{
                            try {
                                importScripts(asset.url + "?t=" + Date.now());
                                resolve();
                            } catch (err) {
                                reject(err);
                            }
                        });
                    }
                }
            }
            async function hmrApplyUpdates(assets) {
                global1.parcelHotUpdate = Object.create(null);
                let scriptsToRemove;
                try {
                    // If sourceURL comments aren't supported in eval, we need to load
                    // the update from the dev server over HTTP so that stack traces
                    // are correct in errors/logs. This is much slower than eval, so
                    // we only do it if needed (currently just Safari).
                    // https://bugs.webkit.org/show_bug.cgi?id=137297
                    // This path is also taken if a CSP disallows eval.
                    if (!supportsSourceURL) {
                        let promises = assets.map((asset)=>{
                            var _hmrDownload;
                            return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                                // Web extension fix
                                if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global1 instanceof ServiceWorkerGlobalScope) {
                                    extCtx.runtime.reload();
                                    return;
                                }
                                throw err;
                            });
                        });
                        scriptsToRemove = await Promise.all(promises);
                    }
                    assets.forEach(function(asset) {
                        hmrApply(module1.bundle.root, asset);
                    });
                } finally{
                    delete global1.parcelHotUpdate;
                    if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
                        if (script) {
                            var _document$head2;
                            (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
                        }
                    });
                }
            }
            function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
                var modules = bundle.modules;
                if (!modules) return;
                if (asset.type === "css") reloadCSS();
                else if (asset.type === "js") {
                    let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
                    if (deps) {
                        if (modules[asset.id]) {
                            // Remove dependencies that are removed and will become orphaned.
                            // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                            let oldDeps = modules[asset.id][1];
                            for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                                let id = oldDeps[dep];
                                let parents = getParents(module1.bundle.root, id);
                                if (parents.length === 1) hmrDelete(module1.bundle.root, id);
                            }
                        }
                        if (supportsSourceURL) // support for source maps is better with eval.
                        (0, eval)(asset.output);
                        // $FlowFixMe
                        let fn = global1.parcelHotUpdate[asset.id];
                        modules[asset.id] = [
                            fn,
                            deps
                        ];
                    } else if (bundle.parent) hmrApply(bundle.parent, asset);
                }
            }
            function hmrDelete(bundle, id) {
                let modules = bundle.modules;
                if (!modules) return;
                if (modules[id]) {
                    // Collect dependencies that will become orphaned when this module is deleted.
                    let deps = modules[id][1];
                    let orphans = [];
                    for(let dep in deps){
                        let parents = getParents(module1.bundle.root, deps[dep]);
                        if (parents.length === 1) orphans.push(deps[dep]);
                    }
                    // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
                    delete modules[id];
                    delete bundle.cache[id];
                    // Now delete the orphans.
                    orphans.forEach((id)=>{
                        hmrDelete(module1.bundle.root, id);
                    });
                } else if (bundle.parent) hmrDelete(bundle.parent, id);
            }
            function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
                if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
                // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
                let parents = getParents(module1.bundle.root, id);
                let accepted = false;
                while(parents.length > 0){
                    let v = parents.shift();
                    let a = hmrAcceptCheckOne(v[0], v[1], null);
                    if (a) accepted = true;
                    else {
                        // Otherwise, queue the parents in the next level upward.
                        let p = getParents(module1.bundle.root, v[1]);
                        if (p.length === 0) {
                            // If there are no parents, then we've reached an entry without accepting. Reload.
                            accepted = false;
                            break;
                        }
                        parents.push(...p);
                    }
                }
                return accepted;
            }
            function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
                var modules = bundle.modules;
                if (!modules) return;
                if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
                    // If we reached the root bundle without finding where the asset should go,
                    // there's nothing to do. Mark as "accepted" so we don't reload the page.
                    if (!bundle.parent) return true;
                    return hmrAcceptCheck(bundle.parent, id, depsByBundle);
                }
                if (checkedAssets[id]) return true;
                checkedAssets[id] = true;
                var cached = bundle.cache[id];
                assetsToDispose.push([
                    bundle,
                    id
                ]);
                if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
                    assetsToAccept.push([
                        bundle,
                        id
                    ]);
                    return true;
                }
            }
            function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
                var cached = bundle.cache[id];
                bundle.hotData[id] = {};
                if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
                if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
                    cb(bundle.hotData[id]);
                });
                delete bundle.cache[id];
            }
            function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
                // Execute the module.
                bundle(id);
                // Run the accept callbacks in the new version of the module.
                var cached = bundle.cache[id];
                if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
                    var assetsToAlsoAccept = cb(function() {
                        return getParents(module1.bundle.root, id);
                    });
                    if (assetsToAlsoAccept && assetsToAccept.length) {
                        assetsToAlsoAccept.forEach(function(a) {
                            hmrDispose(a[0], a[1]);
                        });
                        // $FlowFixMe[method-unbinding]
                        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
                    }
                });
            }
        },
        {}
    ],
    "jeorp": [
        function(require, module1, exports1) {
            var _index = require("../core/index");
            var _appModule = require("./app.module");
            (0, _index.platformBrowserDynamic)().bootstrapModule(_appModule.AppModule);
        },
        {
            "./app.module": "22zsV",
            "../core/index": "2Ncl3"
        }
    ],
    "22zsV": [
        function(require, module1, exports1) {
            var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
            parcelHelpers.defineInteropFlag(exports1);
            parcelHelpers.export(exports1, "AppModule", ()=>AppModule);
            var _tsDecorate = require("@swc/helpers/_/_ts_decorate");
            var _decorator = require("../core/decorator");
            var _appComponent = require("./app.component");
            class AppModule {
            }
            AppModule = (0, _tsDecorate._)([
                (0, _decorator.NgModule)({
                    declarations: [
                        _appComponent.AppComponent
                    ],
                    imports: [],
                    exports: [],
                    providers: [],
                    bootstrap: _appComponent.AppComponent
                })
            ], AppModule);
        },
        {
            "@swc/helpers/_/_ts_decorate": "lX6TJ",
            "../core/decorator": "hwPC6",
            "./app.component": "6hjju",
            "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3"
        }
    ],
    "lX6TJ": [
        function(require, module1, exports1) {
            var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
            parcelHelpers.defineInteropFlag(exports1);
            parcelHelpers.export(exports1, "_", ()=>_tslib.__decorate);
            var _tslib = require("tslib");
        },
        {
            "tslib": "lRdW5",
            "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3"
        }
    ],
    "lRdW5": [
        function(require, module1, exports1) {
            /******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ /* global Reflect, Promise, SuppressedError, Symbol, Iterator */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
            parcelHelpers.defineInteropFlag(exports1);
            parcelHelpers.export(exports1, "__extends", ()=>__extends);
            parcelHelpers.export(exports1, "__assign", ()=>__assign);
            parcelHelpers.export(exports1, "__rest", ()=>__rest);
            parcelHelpers.export(exports1, "__decorate", ()=>__decorate);
            parcelHelpers.export(exports1, "__param", ()=>__param);
            parcelHelpers.export(exports1, "__esDecorate", ()=>__esDecorate);
            parcelHelpers.export(exports1, "__runInitializers", ()=>__runInitializers);
            parcelHelpers.export(exports1, "__propKey", ()=>__propKey);
            parcelHelpers.export(exports1, "__setFunctionName", ()=>__setFunctionName);
            parcelHelpers.export(exports1, "__metadata", ()=>__metadata);
            parcelHelpers.export(exports1, "__awaiter", ()=>__awaiter);
            parcelHelpers.export(exports1, "__generator", ()=>__generator);
            parcelHelpers.export(exports1, "__createBinding", ()=>__createBinding);
            parcelHelpers.export(exports1, "__exportStar", ()=>__exportStar);
            parcelHelpers.export(exports1, "__values", ()=>__values);
            parcelHelpers.export(exports1, "__read", ()=>__read);
            /** @deprecated */ parcelHelpers.export(exports1, "__spread", ()=>__spread);
            /** @deprecated */ parcelHelpers.export(exports1, "__spreadArrays", ()=>__spreadArrays);
            parcelHelpers.export(exports1, "__spreadArray", ()=>__spreadArray);
            parcelHelpers.export(exports1, "__await", ()=>__await);
            parcelHelpers.export(exports1, "__asyncGenerator", ()=>__asyncGenerator);
            parcelHelpers.export(exports1, "__asyncDelegator", ()=>__asyncDelegator);
            parcelHelpers.export(exports1, "__asyncValues", ()=>__asyncValues);
            parcelHelpers.export(exports1, "__makeTemplateObject", ()=>__makeTemplateObject);
            parcelHelpers.export(exports1, "__importStar", ()=>__importStar);
            parcelHelpers.export(exports1, "__importDefault", ()=>__importDefault);
            parcelHelpers.export(exports1, "__classPrivateFieldGet", ()=>__classPrivateFieldGet);
            parcelHelpers.export(exports1, "__classPrivateFieldSet", ()=>__classPrivateFieldSet);
            parcelHelpers.export(exports1, "__classPrivateFieldIn", ()=>__classPrivateFieldIn);
            parcelHelpers.export(exports1, "__addDisposableResource", ()=>__addDisposableResource);
            parcelHelpers.export(exports1, "__disposeResources", ()=>__disposeResources);
            var extendStatics = function(d, b) {
                extendStatics = Object.setPrototypeOf || ({
                    __proto__: []
                }) instanceof Array && function(d, b) {
                    d.__proto__ = b;
                } || function(d, b) {
                    for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
                };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
                extendStatics(d, b);
                function __() {
                    this.constructor = d;
                }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function() {
                __assign = Object.assign || function __assign(t) {
                    for(var s, i = 1, n = arguments.length; i < n; i++){
                        s = arguments[i];
                        for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function") {
                    for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
                }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
                else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function(target, key) {
                    decorator(target, key, paramIndex);
                };
            }
            function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
                function accept(f) {
                    if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
                    return f;
                }
                var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
                var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
                var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
                var _, done = false;
                for(var i = decorators.length - 1; i >= 0; i--){
                    var context = {};
                    for(var p in contextIn)context[p] = p === "access" ? {} : contextIn[p];
                    for(var p in contextIn.access)context.access[p] = contextIn.access[p];
                    context.addInitializer = function(f) {
                        if (done) throw new TypeError("Cannot add initializers after decoration has completed");
                        extraInitializers.push(accept(f || null));
                    };
                    var result = (0, decorators[i])(kind === "accessor" ? {
                        get: descriptor.get,
                        set: descriptor.set
                    } : descriptor[key], context);
                    if (kind === "accessor") {
                        if (result === void 0) continue;
                        if (result === null || typeof result !== "object") throw new TypeError("Object expected");
                        if (_ = accept(result.get)) descriptor.get = _;
                        if (_ = accept(result.set)) descriptor.set = _;
                        if (_ = accept(result.init)) initializers.unshift(_);
                    } else if (_ = accept(result)) {
                        if (kind === "field") initializers.unshift(_);
                        else descriptor[key] = _;
                    }
                }
                if (target) Object.defineProperty(target, contextIn.name, descriptor);
                done = true;
            }
            function __runInitializers(thisArg, initializers, value) {
                var useValue = arguments.length > 2;
                for(var i = 0; i < initializers.length; i++)value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
                return useValue ? value : void 0;
            }
            function __propKey(x) {
                return typeof x === "symbol" ? x : "".concat(x);
            }
            function __setFunctionName(f, name, prefix) {
                if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
                return Object.defineProperty(f, "name", {
                    configurable: true,
                    value: prefix ? "".concat(prefix, " ", name) : name
                });
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                function adopt(value) {
                    return value instanceof P ? value : new P(function(resolve) {
                        resolve(value);
                    });
                }
                return new (P || (P = Promise))(function(resolve, reject) {
                    function fulfilled(value) {
                        try {
                            step(generator.next(value));
                        } catch (e) {
                            reject(e);
                        }
                    }
                    function rejected(value) {
                        try {
                            step(generator["throw"](value));
                        } catch (e) {
                            reject(e);
                        }
                    }
                    function step(result) {
                        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
                    }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = {
                    label: 0,
                    sent: function() {
                        if (t[0] & 1) throw t[1];
                        return t[1];
                    },
                    trys: [],
                    ops: []
                }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
                return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
                    return this;
                }), g;
                function verb(n) {
                    return function(v) {
                        return step([
                            n,
                            v
                        ]);
                    };
                }
                function step(op) {
                    if (f) throw new TypeError("Generator is already executing.");
                    while(g && (g = 0, op[0] && (_ = 0)), _)try {
                        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                        if (y = 0, t) op = [
                            op[0] & 2,
                            t.value
                        ];
                        switch(op[0]){
                            case 0:
                            case 1:
                                t = op;
                                break;
                            case 4:
                                _.label++;
                                return {
                                    value: op[1],
                                    done: false
                                };
                            case 5:
                                _.label++;
                                y = op[1];
                                op = [
                                    0
                                ];
                                continue;
                            case 7:
                                op = _.ops.pop();
                                _.trys.pop();
                                continue;
                            default:
                                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                    _ = 0;
                                    continue;
                                }
                                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                                    _.label = op[1];
                                    break;
                                }
                                if (op[0] === 6 && _.label < t[1]) {
                                    _.label = t[1];
                                    t = op;
                                    break;
                                }
                                if (t && _.label < t[2]) {
                                    _.label = t[2];
                                    _.ops.push(op);
                                    break;
                                }
                                if (t[2]) _.ops.pop();
                                _.trys.pop();
                                continue;
                        }
                        op = body.call(thisArg, _);
                    } catch (e) {
                        op = [
                            6,
                            e
                        ];
                        y = 0;
                    } finally{
                        f = t = 0;
                    }
                    if (op[0] & 5) throw op[1];
                    return {
                        value: op[0] ? op[1] : void 0,
                        done: true
                    };
                }
            }
            var __createBinding = Object.create ? function(o, m, k, k2) {
                if (k2 === undefined) k2 = k;
                var desc = Object.getOwnPropertyDescriptor(m, k);
                if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
                    enumerable: true,
                    get: function() {
                        return m[k];
                    }
                };
                Object.defineProperty(o, k2, desc);
            } : function(o, m, k, k2) {
                if (k2 === undefined) k2 = k;
                o[k2] = m[k];
            };
            function __exportStar(m, o) {
                for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
            }
            function __values(o) {
                var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
                if (m) return m.call(o);
                if (o && typeof o.length === "number") return {
                    next: function() {
                        if (o && i >= o.length) o = void 0;
                        return {
                            value: o && o[i++],
                            done: !o
                        };
                    }
                };
                throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m) return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
                } catch (error) {
                    e = {
                        error: error
                    };
                } finally{
                    try {
                        if (r && !r.done && (m = i["return"])) m.call(i);
                    } finally{
                        if (e) throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for(var ar = [], i = 0; i < arguments.length; i++)ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for(var s = 0, i = 0, il = arguments.length; i < il; i++)s += arguments[i].length;
                for(var r = Array(s), k = 0, i = 0; i < il; i++)for(var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)r[k] = a[j];
                return r;
            }
            function __spreadArray(to, from, pack) {
                if (pack || arguments.length === 2) {
                    for(var i = 0, l = from.length, ar; i < l; i++)if (ar || !(i in from)) {
                        if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                        ar[i] = from[i];
                    }
                }
                return to.concat(ar || Array.prototype.slice.call(from));
            }
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function() {
                    return this;
                }, i;
                function awaitReturn(f) {
                    return function(v) {
                        return Promise.resolve(v).then(f, reject);
                    };
                }
                function verb(n, f) {
                    if (g[n]) {
                        i[n] = function(v) {
                            return new Promise(function(a, b) {
                                q.push([
                                    n,
                                    v,
                                    a,
                                    b
                                ]) > 1 || resume(n, v);
                            });
                        };
                        if (f) i[n] = f(i[n]);
                    }
                }
                function resume(n, v) {
                    try {
                        step(g[n](v));
                    } catch (e) {
                        settle(q[0][3], e);
                    }
                }
                function step(r) {
                    r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
                }
                function fulfill(value) {
                    resume("next", value);
                }
                function reject(value) {
                    resume("throw", value);
                }
                function settle(f, v) {
                    if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
                }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function(e) {
                    throw e;
                }), verb("return"), i[Symbol.iterator] = function() {
                    return this;
                }, i;
                function verb(n, f) {
                    i[n] = o[n] ? function(v) {
                        return (p = !p) ? {
                            value: __await(o[n](v)),
                            done: false
                        } : f ? f(v) : v;
                    } : f;
                }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
                    return this;
                }, i);
                function verb(n) {
                    i[n] = o[n] && function(v) {
                        return new Promise(function(resolve, reject) {
                            v = o[n](v), settle(resolve, reject, v.done, v.value);
                        });
                    };
                }
                function settle(resolve, reject, d, v) {
                    Promise.resolve(v).then(function(v) {
                        resolve({
                            value: v,
                            done: d
                        });
                    }, reject);
                }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) Object.defineProperty(cooked, "raw", {
                    value: raw
                });
                else cooked.raw = raw;
                return cooked;
            }
            var __setModuleDefault = Object.create ? function(o, v) {
                Object.defineProperty(o, "default", {
                    enumerable: true,
                    value: v
                });
            } : function(o, v) {
                o["default"] = v;
            };
            function __importStar(mod) {
                if (mod && mod.__esModule) return mod;
                var result = {};
                if (mod != null) {
                    for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
                }
                __setModuleDefault(result, mod);
                return result;
            }
            function __importDefault(mod) {
                return mod && mod.__esModule ? mod : {
                    default: mod
                };
            }
            function __classPrivateFieldGet(receiver, state, kind, f) {
                if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
                if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
            }
            function __classPrivateFieldSet(receiver, state, value, kind, f) {
                if (kind === "m") throw new TypeError("Private method is not writable");
                if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
                if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
            }
            function __classPrivateFieldIn(state, receiver) {
                if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
                return typeof state === "function" ? receiver === state : state.has(receiver);
            }
            function __addDisposableResource(env, value, async) {
                if (value !== null && value !== void 0) {
                    if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
                    var dispose, inner;
                    if (async) {
                        if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
                        dispose = value[Symbol.asyncDispose];
                    }
                    if (dispose === void 0) {
                        if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
                        dispose = value[Symbol.dispose];
                        if (async) inner = dispose;
                    }
                    if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
                    if (inner) dispose = function() {
                        try {
                            inner.call(this);
                        } catch (e) {
                            return Promise.reject(e);
                        }
                    };
                    env.stack.push({
                        value: value,
                        dispose: dispose,
                        async: async
                    });
                } else if (async) env.stack.push({
                    async: true
                });
                return value;
            }
            var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
                var e = new Error(message);
                return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
            };
            function __disposeResources(env) {
                function fail(e) {
                    env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
                    env.hasError = true;
                }
                var r, s = 0;
                function next() {
                    while(r = env.stack.pop())try {
                        if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
                        if (r.dispose) {
                            var result = r.dispose.call(r.value);
                            if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) {
                                fail(e);
                                return next();
                            });
                        } else s |= 1;
                    } catch (e) {
                        fail(e);
                    }
                    if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
                    if (env.hasError) throw env.error;
                }
                return next();
            }
            exports1.default = {
                __extends: __extends,
                __assign: __assign,
                __rest: __rest,
                __decorate: __decorate,
                __param: __param,
                __metadata: __metadata,
                __awaiter: __awaiter,
                __generator: __generator,
                __createBinding: __createBinding,
                __exportStar: __exportStar,
                __values: __values,
                __read: __read,
                __spread: __spread,
                __spreadArrays: __spreadArrays,
                __spreadArray: __spreadArray,
                __await: __await,
                __asyncGenerator: __asyncGenerator,
                __asyncDelegator: __asyncDelegator,
                __asyncValues: __asyncValues,
                __makeTemplateObject: __makeTemplateObject,
                __importStar: __importStar,
                __importDefault: __importDefault,
                __classPrivateFieldGet: __classPrivateFieldGet,
                __classPrivateFieldSet: __classPrivateFieldSet,
                __classPrivateFieldIn: __classPrivateFieldIn,
                __addDisposableResource: __addDisposableResource,
                __disposeResources: __disposeResources
            };
        },
        {
            "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3"
        }
    ],
    "gkKU3": [
        function(require, module1, exports1) {
            exports1.interopDefault = function(a) {
                return a && a.__esModule ? a : {
                    default: a
                };
            };
            exports1.defineInteropFlag = function(a) {
                Object.defineProperty(a, "__esModule", {
                    value: true
                });
            };
            exports1.exportAll = function(source, dest) {
                Object.keys(source).forEach(function(key) {
                    if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
                    Object.defineProperty(dest, key, {
                        enumerable: true,
                        get: function() {
                            return source[key];
                        }
                    });
                });
                return dest;
            };
            exports1.export = function(dest, destName, get) {
                Object.defineProperty(dest, destName, {
                    enumerable: true,
                    get: get
                });
            };
        },
        {}
    ],
    "hwPC6": [
        function(require, module1, exports1) {
            var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
            parcelHelpers.defineInteropFlag(exports1);
            parcelHelpers.export(exports1, "NgModule", ()=>NgModule);
            parcelHelpers.export(exports1, "Component", ()=>Component);
            function NgModule(metadata) {
                return function(constructor) {
                    constructor.prototype._ngModuleMeta = metadata;
                };
            }
            function Component(metadata) {
                return function(constructor) {
                    constructor.prototype._componentMeta = metadata;
                };
            }
        },
        {
            "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3"
        }
    ],
    "6hjju": [
        function(require, module1, exports1) {
            var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
            parcelHelpers.defineInteropFlag(exports1);
            parcelHelpers.export(exports1, "AppComponent", ()=>AppComponent);
            var _tsDecorate = require("@swc/helpers/_/_ts_decorate");
            var _decorator = require("../core/decorator");
            class AppComponent {
                constructor(){
                    //inject: Injector
                    this.name = "Angular App";
                    console.log("AppComponent initialized");
                }
                render() {
                    console.log(" vao render app component");
                    const meta = this.constructor.prototype._componentMeta;
                    const rootElement = document.getElementById("root");
                    if (rootElement && meta) rootElement.innerHTML = meta.template.replace("{{ name }}", this.name);
                }
            }
            AppComponent = (0, _tsDecorate._)([
                (0, _decorator.Component)({
                    selector: "app-root",
                    template: `<h1>Hello from {{ name }}!</h1>`
                })
            ], AppComponent);
        },
        {
            "@swc/helpers/_/_ts_decorate": "lX6TJ",
            "../core/decorator": "hwPC6",
            "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3"
        }
    ],
    "2Ncl3": [
        function(require, module1, exports1) {
            var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
            parcelHelpers.defineInteropFlag(exports1);
            parcelHelpers.export(exports1, "platformBrowserDynamic", ()=>platformBrowserDynamic);
            var _module = require("./module");
            class PlatformBrowserDynamic {
                bootstrapModule(moduleClass) {
                    console.log("Vao main");
                    // init module and render app
                    const moduleInstance = new moduleClass();
                    const metadata = moduleInstance._ngModuleMeta;
                    const appModule = new _module.Module(metadata.declarations, metadata.imports, metadata.providers, metadata.exports, metadata.bootstrap);
                    console.log(metadata.bootstrap, "metadata.bootstrap");
                    appModule.initializeModule();
                }
            }
            function platformBrowserDynamic() {
                return new PlatformBrowserDynamic();
            }
        },
        {
            "./module": "2ilVx",
            "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3"
        }
    ],
    "2ilVx": [
        function(require, module1, exports1) {
            var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
            parcelHelpers.defineInteropFlag(exports1);
            parcelHelpers.export(exports1, "Module", ()=>Module);
            var _provider = require("./provider");
            class Module {
                constructor(declarations, imports, providers, exports1, bootstrap){
                    this.declarations = declarations;
                    this.imports = imports;
                    this.providers = providers;
                    this.exports = exports1;
                    this.bootstrap = bootstrap;
                }
                initializeModule() {
                    console.log("vao app");
                    // register DI
                    const injector = new _provider.Injector(this.providers);
                    // init modules import
                    this.imports.forEach((importedModule)=>{
                        importedModule.initializeModule();
                    });
                    console.log(this.bootstrap);
                    if (this.bootstrap) {
                        console.log("vao app component");
                        const componentInstance = new this.bootstrap();
                        console.log(componentInstance, "componentInstance");
                        componentInstance.injector = injector;
                        componentInstance.render();
                    }
                }
            }
        },
        {
            "./provider": "3k8pe",
            "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3"
        }
    ],
    "3k8pe": [
        function(require, module1, exports1) {
            var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
            parcelHelpers.defineInteropFlag(exports1);
            parcelHelpers.export(exports1, "Injector", ()=>Injector);
            class Injector {
                constructor(providerConfigs){
                    this.providerConfigs = providerConfigs;
                    this.providers = new Map();
                    this.providerConfigs.forEach((providerConfig)=>{
                        const serviceInstance = new providerConfig.useClass();
                        this.providers.set(providerConfig.provide, serviceInstance);
                    });
                }
                get(token) {
                    return this.providers.get(token);
                }
            }
        },
        {
            "@parcel/transformer-js/src/esmodule-helpers.js": "gkKU3"
        }
    ]
}, [
    "dZI1r",
    "jeorp"
], "jeorp", "parcelRequirea810");

//# sourceMappingURL=index.efab9da4.js.map
