!function (e) { if ("object" == typeof exports && "undefined" != typeof module) module.exports = e(); else if ("function" == typeof define && define.amd) define([], e); else { ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).ackeeTracker = e() } }((function () { return function e(t, r, n) { function i(a, l) { if (!r[a]) { if (!t[a]) { var s = "function" == typeof require && require; if (!l && s) return s(a, !0); if (o) return o(a, !0); var c = new Error("Cannot find module '" + a + "'"); throw c.code = "MODULE_NOT_FOUND", c } var u = r[a] = { exports: {} }; t[a][0].call(u.exports, (function (e) { return i(t[a][1][e] || e) }), u, u.exports, e, t, r, n) } return r[a].exports } for (var o = "function" == typeof require && require, a = 0; a < n.length; a++)i(n[a]); return i }({ 1: [function (e, t, r) { (function (e) { (function () { "use strict"; var n = { function: !0, object: !0 }, i = n[typeof window] && window || this, o = n[typeof r] && r, a = n[typeof t] && t && !t.nodeType && t, l = o && a && "object" == typeof e && e; !l || l.global !== l && l.window !== l && l.self !== l || (i = l); var s = Math.pow(2, 53) - 1, c = /\bOpera/, u = Object.prototype, b = u.hasOwnProperty, d = u.toString; function p(e) { return (e = String(e)).charAt(0).toUpperCase() + e.slice(1) } function f(e) { return e = x(e), /^(?:webOS|i(?:OS|P))/.test(e) ? e : p(e) } function h(e, t) { for (var r in e) b.call(e, r) && t(e[r], r, e) } function m(e) { return null == e ? p(e) : d.call(e).slice(8, -1) } function S(e) { return String(e).replace(/([ -])(?!$)/g, "$1?") } function g(e, t) { var r = null; return function (e, t) { var r = -1, n = e ? e.length : 0; if ("number" == typeof n && n > -1 && n <= s) for (; ++r < n;)t(e[r], r, e); else h(e, t) }(e, (function (n, i) { r = t(r, n, i, e) })), r } function x(e) { return String(e).replace(/^ +| +$/g, "") } var y = function e(t) { var r = i, n = t && "object" == typeof t && "String" != m(t); n && (r = t, t = null); var o = r.navigator || {}, a = o.userAgent || ""; t || (t = a); var l, s, u, b, p, y = n ? !!o.likeChrome : /\bChrome\b/.test(t) && !/internal|\n/i.test(d.toString()), O = n ? "Object" : "ScriptBridgingProxyObject", v = n ? "Object" : "Environment", w = n && r.java ? "JavaPackage" : m(r.java), E = n ? "Object" : "RuntimeObject", M = /\bJava/.test(w) && r.java, P = M && m(r.environment) == v, C = M ? "a" : "α", k = M ? "b" : "β", R = r.document || {}, B = r.operamini || r.opera, W = c.test(W = n && B ? B["[[Class]]"] : m(B)) ? W : B = null, I = t, A = [], T = null, j = t == a, F = j && B && "function" == typeof B.version && B.version(), $ = g([{ label: "EdgeHTML", pattern: "Edge" }, "Trident", { label: "WebKit", pattern: "AppleWebKit" }, "iCab", "Presto", "NetFront", "Tasman", "KHTML", "Gecko"], (function (e, r) { return e || RegExp("\\b" + (r.pattern || S(r)) + "\\b", "i").exec(t) && (r.label || r) })), G = function (e) { return g(e, (function (e, r) { return e || RegExp("\\b" + (r.pattern || S(r)) + "\\b", "i").exec(t) && (r.label || r) })) }(["Adobe AIR", "Arora", "Avant Browser", "Breach", "Camino", "Electron", "Epiphany", "Fennec", "Flock", "Galeon", "GreenBrowser", "iCab", "Iceweasel", "K-Meleon", "Konqueror", "Lunascape", "Maxthon", { label: "Microsoft Edge", pattern: "(?:Edge|Edg|EdgA|EdgiOS)" }, "Midori", "Nook Browser", "PaleMoon", "PhantomJS", "Raven", "Rekonq", "RockMelt", { label: "Samsung Internet", pattern: "SamsungBrowser" }, "SeaMonkey", { label: "Silk", pattern: "(?:Cloud9|Silk-Accelerated)" }, "Sleipnir", "SlimBrowser", { label: "SRWare Iron", pattern: "Iron" }, "Sunrise", "Swiftfox", "Vivaldi", "Waterfox", "WebPositive", { label: "Yandex Browser", pattern: "YaBrowser" }, { label: "UC Browser", pattern: "UCBrowser" }, "Opera Mini", { label: "Opera Mini", pattern: "OPiOS" }, "Opera", { label: "Opera", pattern: "OPR" }, "Chromium", "Chrome", { label: "Chrome", pattern: "(?:HeadlessChrome)" }, { label: "Chrome Mobile", pattern: "(?:CriOS|CrMo)" }, { label: "Firefox", pattern: "(?:Firefox|Minefield)" }, { label: "Firefox for iOS", pattern: "FxiOS" }, { label: "IE", pattern: "IEMobile" }, { label: "IE", pattern: "MSIE" }, "Safari"]), N = L([{ label: "BlackBerry", pattern: "BB10" }, "BlackBerry", { label: "Galaxy S", pattern: "GT-I9000" }, { label: "Galaxy S2", pattern: "GT-I9100" }, { label: "Galaxy S3", pattern: "GT-I9300" }, { label: "Galaxy S4", pattern: "GT-I9500" }, { label: "Galaxy S5", pattern: "SM-G900" }, { label: "Galaxy S6", pattern: "SM-G920" }, { label: "Galaxy S6 Edge", pattern: "SM-G925" }, { label: "Galaxy S7", pattern: "SM-G930" }, { label: "Galaxy S7 Edge", pattern: "SM-G935" }, "Google TV", "Lumia", "iPad", "iPod", "iPhone", "Kindle", { label: "Kindle Fire", pattern: "(?:Cloud9|Silk-Accelerated)" }, "Nexus", "Nook", "PlayBook", "PlayStation Vita", "PlayStation", "TouchPad", "Transformer", { label: "Wii U", pattern: "WiiU" }, "Wii", "Xbox One", { label: "Xbox 360", pattern: "Xbox" }, "Xoom"]), X = function (e) { return g(e, (function (e, r, n) { return e || (r[N] || r[/^[a-z]+(?: +[a-z]+\b)*/i.exec(N)] || RegExp("\\b" + S(n) + "(?:\\b|\\w*\\d)", "i").exec(t)) && n })) }({ Apple: { iPad: 1, iPhone: 1, iPod: 1 }, Alcatel: {}, Archos: {}, Amazon: { Kindle: 1, "Kindle Fire": 1 }, Asus: { Transformer: 1 }, "Barnes & Noble": { Nook: 1 }, BlackBerry: { PlayBook: 1 }, Google: { "Google TV": 1, Nexus: 1 }, HP: { TouchPad: 1 }, HTC: {}, Huawei: {}, Lenovo: {}, LG: {}, Microsoft: { Xbox: 1, "Xbox One": 1 }, Motorola: { Xoom: 1 }, Nintendo: { "Wii U": 1, Wii: 1 }, Nokia: { Lumia: 1 }, Oppo: {}, Samsung: { "Galaxy S": 1, "Galaxy S2": 1, "Galaxy S3": 1, "Galaxy S4": 1 }, Sony: { PlayStation: 1, "PlayStation Vita": 1 }, Xiaomi: { Mi: 1, Redmi: 1 } }), K = function (e) { return g(e, (function (e, r) { var n = r.pattern || S(r); return !e && (e = RegExp("\\b" + n + "(?:/[\\d.]+|[ \\w.]*)", "i").exec(t)) && (e = function (e, t, r) { var n = { "10.0": "10", 6.4: "10 Technical Preview", 6.3: "8.1", 6.2: "8", 6.1: "Server 2008 R2 / 7", "6.0": "Server 2008 / Vista", 5.2: "Server 2003 / XP 64-bit", 5.1: "XP", 5.01: "2000 SP1", "5.0": "2000", "4.0": "NT", "4.90": "ME" }; return t && r && /^Win/i.test(e) && !/^Windows Phone /i.test(e) && (n = n[/[\d.]+$/.exec(e)]) && (e = "Windows " + n), e = String(e), t && r && (e = e.replace(RegExp(t, "i"), r)), e = f(e.replace(/ ce$/i, " CE").replace(/\bhpw/i, "web").replace(/\bMacintosh\b/, "Mac OS").replace(/_PowerPC\b/i, " OS").replace(/\b(OS X) [^ \d]+/i, "$1").replace(/\bMac (OS X)\b/, "$1").replace(/\/(\d)/, " $1").replace(/_/g, ".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, "").replace(/\bx86\.64\b/gi, "x86_64").replace(/\b(Windows Phone) OS\b/, "$1").replace(/\b(Chrome OS \w+) [\d.]+\b/, "$1").split(" on ")[0]) }(e, n, r.label || r)), e })) }(["Windows Phone", "KaiOS", "Android", "CentOS", { label: "Chrome OS", pattern: "CrOS" }, "Debian", { label: "DragonFly BSD", pattern: "DragonFly" }, "Fedora", "FreeBSD", "Gentoo", "Haiku", "Kubuntu", "Linux Mint", "OpenBSD", "Red Hat", "SuSE", "Ubuntu", "Xubuntu", "Cygwin", "Symbian OS", "hpwOS", "webOS ", "webOS", "Tablet OS", "Tizen", "Linux", "Mac OS X", "Macintosh", "Mac", "Windows 98;", "Windows "]); function L(e) { return g(e, (function (e, r) { var n = r.pattern || S(r); return !e && (e = RegExp("\\b" + n + " *\\d+[.\\w_]*", "i").exec(t) || RegExp("\\b" + n + " *\\w+-[\\w]*", "i").exec(t) || RegExp("\\b" + n + "(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)", "i").exec(t)) && ((e = String(r.label && !RegExp(n, "i").test(r.label) ? r.label : e).split("/"))[1] && !/[\d.]+/.test(e[0]) && (e[0] += " " + e[1]), r = r.label || r, e = f(e[0].replace(RegExp(n, "i"), r).replace(RegExp("; *(?:" + r + "[_-])?", "i"), " ").replace(RegExp("(" + r + ")[-_.]?(\\w)", "i"), "$1 $2"))), e })) } function D(e) { return g(e, (function (e, r) { return e || (RegExp(r + "(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)", "i").exec(t) || 0)[1] || null })) } if ($ && ($ = [$]), /\bAndroid\b/.test(K) && !N && (l = /\bAndroid[^;]*;(.*?)(?:Build|\) AppleWebKit)\b/i.exec(t)) && (N = x(l[1]).replace(/^[a-z]{2}-[a-z]{2};\s*/i, "") || null), X && !N ? N = L([X]) : X && N && (N = N.replace(RegExp("^(" + S(X) + ")[-_.\\s]", "i"), X + " ").replace(RegExp("^(" + S(X) + ")[-_.]?(\\w)", "i"), X + " $2")), (l = /\bGoogle TV\b/.exec(N)) && (N = l[0]), /\bSimulator\b/i.test(t) && (N = (N ? N + " " : "") + "Simulator"), "Opera Mini" == G && /\bOPiOS\b/.test(t) && A.push("running in Turbo/Uncompressed mode"), "IE" == G && /\blike iPhone OS\b/.test(t) ? (X = (l = e(t.replace(/like iPhone OS/, ""))).manufacturer, N = l.product) : /^iP/.test(N) ? (G || (G = "Safari"), K = "iOS" + ((l = / OS ([\d_]+)/i.exec(t)) ? " " + l[1].replace(/_/g, ".") : "")) : "Konqueror" == G && /^Linux\b/i.test(K) ? K = "Kubuntu" : X && "Google" != X && (/Chrome/.test(G) && !/\bMobile Safari\b/i.test(t) || /\bVita\b/.test(N)) || /\bAndroid\b/.test(K) && /^Chrome/.test(G) && /\bVersion\//i.test(t) ? (G = "Android Browser", K = /\bAndroid\b/.test(K) ? K : "Android") : "Silk" == G ? (/\bMobi/i.test(t) || (K = "Android", A.unshift("desktop mode")), /Accelerated *= *true/i.test(t) && A.unshift("accelerated")) : "UC Browser" == G && /\bUCWEB\b/.test(t) ? A.push("speed mode") : "PaleMoon" == G && (l = /\bFirefox\/([\d.]+)\b/.exec(t)) ? A.push("identifying as Firefox " + l[1]) : "Firefox" == G && (l = /\b(Mobile|Tablet|TV)\b/i.exec(t)) ? (K || (K = "Firefox OS"), N || (N = l[1])) : !G || (l = !/\bMinefield\b/i.test(t) && /\b(?:Firefox|Safari)\b/.exec(G)) ? (G && !N && /[\/,]|^[^(]+?\)/.test(t.slice(t.indexOf(l + "/") + 8)) && (G = null), (l = N || X || K) && (N || X || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(K)) && (G = /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(K) ? K : l) + " Browser")) : "Electron" == G && (l = (/\bChrome\/([\d.]+)\b/.exec(t) || 0)[1]) && A.push("Chromium " + l), F || (F = D(["(?:Cloud9|CriOS|CrMo|Edge|Edg|EdgA|EdgiOS|FxiOS|HeadlessChrome|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$)|UCBrowser|YaBrowser)", "Version", S(G), "(?:Firefox|Minefield|NetFront)"])), (l = ("iCab" == $ && parseFloat(F) > 3 ? "WebKit" : /\bOpera\b/.test(G) && (/\bOPR\b/.test(t) ? "Blink" : "Presto")) || /\b(?:Midori|Nook|Safari)\b/i.test(t) && !/^(?:Trident|EdgeHTML)$/.test($) && "WebKit" || !$ && /\bMSIE\b/i.test(t) && ("Mac OS" == K ? "Tasman" : "Trident") || "WebKit" == $ && /\bPlayStation\b(?! Vita\b)/i.test(G) && "NetFront") && ($ = [l]), "IE" == G && (l = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(t) || 0)[1]) ? (G += " Mobile", K = "Windows Phone " + (/\+$/.test(l) ? l : l + ".x"), A.unshift("desktop mode")) : /\bWPDesktop\b/i.test(t) ? (G = "IE Mobile", K = "Windows Phone 8.x", A.unshift("desktop mode"), F || (F = (/\brv:([\d.]+)/.exec(t) || 0)[1])) : "IE" != G && "Trident" == $ && (l = /\brv:([\d.]+)/.exec(t)) && (G && A.push("identifying as " + G + (F ? " " + F : "")), G = "IE", F = l[1]), j) { if (b = "global", p = null != (u = r) ? typeof u[b] : "number", /^(?:boolean|number|string|undefined)$/.test(p) || "object" == p && !u[b]) m(l = r.runtime) == O ? (G = "Adobe AIR", K = l.flash.system.Capabilities.os) : m(l = r.phantom) == E ? (G = "PhantomJS", F = (l = l.version || null) && l.major + "." + l.minor + "." + l.patch) : "number" == typeof R.documentMode && (l = /\bTrident\/(\d+)/i.exec(t)) ? (F = [F, R.documentMode], (l = +l[1] + 4) != F[1] && (A.push("IE " + F[1] + " mode"), $ && ($[1] = ""), F[1] = l), F = "IE" == G ? String(F[1].toFixed(1)) : F[0]) : "number" == typeof R.documentMode && /^(?:Chrome|Firefox)\b/.test(G) && (A.push("masking as " + G + " " + F), G = "IE", F = "11.0", $ = ["Trident"], K = "Windows"); else if (M && (I = (l = M.lang.System).getProperty("os.arch"), K = K || l.getProperty("os.name") + " " + l.getProperty("os.version")), P) { try { F = r.require("ringo/engine").version.join("."), G = "RingoJS" } catch (e) { (l = r.system) && l.global.system == r.system && (G = "Narwhal", K || (K = l[0].os || null)) } G || (G = "Rhino") } else "object" == typeof r.process && !r.process.browser && (l = r.process) && ("object" == typeof l.versions && ("string" == typeof l.versions.electron ? (A.push("Node " + l.versions.node), G = "Electron", F = l.versions.electron) : "string" == typeof l.versions.nw && (A.push("Chromium " + F, "Node " + l.versions.node), G = "NW.js", F = l.versions.nw)), G || (G = "Node.js", I = l.arch, K = l.platform, F = (F = /[\d.]+/.exec(l.version)) ? F[0] : null)); K = K && f(K) } if (F && (l = /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(F) || /(?:alpha|beta)(?: ?\d)?/i.exec(t + ";" + (j && o.appMinorVersion)) || /\bMinefield\b/i.test(t) && "a") && (T = /b/i.test(l) ? "beta" : "alpha", F = F.replace(RegExp(l + "\\+?$"), "") + ("beta" == T ? k : C) + (/\d+\+?/.exec(l) || "")), "Fennec" == G || "Firefox" == G && /\b(?:Android|Firefox OS|KaiOS)\b/.test(K)) G = "Firefox Mobile"; else if ("Maxthon" == G && F) F = F.replace(/\.[\d.]+/, ".x"); else if (/\bXbox\b/i.test(N)) "Xbox 360" == N && (K = null), "Xbox 360" == N && /\bIEMobile\b/.test(t) && A.unshift("mobile mode"); else if (!/^(?:Chrome|IE|Opera)$/.test(G) && (!G || N || /Browser|Mobi/.test(G)) || "Windows CE" != K && !/Mobi/i.test(t)) if ("IE" == G && j) try { null === r.external && A.unshift("platform preview") } catch (e) { A.unshift("embedded") } else (/\bBlackBerry\b/.test(N) || /\bBB10\b/.test(t)) && (l = (RegExp(N.replace(/ +/g, " *") + "/([.\\d]+)", "i").exec(t) || 0)[1] || F) ? (K = ((l = [l, /BB10/.test(t)])[1] ? (N = null, X = "BlackBerry") : "Device Software") + " " + l[0], F = null) : this != h && "Wii" != N && (j && B || /Opera/.test(G) && /\b(?:MSIE|Firefox)\b/i.test(t) || "Firefox" == G && /\bOS X (?:\d+\.){2,}/.test(K) || "IE" == G && (K && !/^Win/.test(K) && F > 5.5 || /\bWindows XP\b/.test(K) && F > 8 || 8 == F && !/\bTrident\b/.test(t))) && !c.test(l = e.call(h, t.replace(c, "") + ";")) && l.name && (l = "ing as " + l.name + ((l = l.version) ? " " + l : ""), c.test(G) ? (/\bIE\b/.test(l) && "Mac OS" == K && (K = null), l = "identify" + l) : (l = "mask" + l, G = W ? f(W.replace(/([a-z])([A-Z])/g, "$1 $2")) : "Opera", /\bIE\b/.test(l) && (K = null), j || (F = null)), $ = ["Presto"], A.push(l)); else G += " Mobile"; (l = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(t) || 0)[1]) && (l = [parseFloat(l.replace(/\.(\d)$/, ".0$1")), l], "Safari" == G && "+" == l[1].slice(-1) ? (G = "WebKit Nightly", T = "alpha", F = l[1].slice(0, -1)) : F != l[1] && F != (l[2] = (/\bSafari\/([\d.]+\+?)/i.exec(t) || 0)[1]) || (F = null), l[1] = (/\b(?:Headless)?Chrome\/([\d.]+)/i.exec(t) || 0)[1], 537.36 == l[0] && 537.36 == l[2] && parseFloat(l[1]) >= 28 && "WebKit" == $ && ($ = ["Blink"]), j && (y || l[1]) ? ($ && ($[1] = "like Chrome"), l = l[1] || ((l = l[0]) < 530 ? 1 : l < 532 ? 2 : l < 532.05 ? 3 : l < 533 ? 4 : l < 534.03 ? 5 : l < 534.07 ? 6 : l < 534.1 ? 7 : l < 534.13 ? 8 : l < 534.16 ? 9 : l < 534.24 ? 10 : l < 534.3 ? 11 : l < 535.01 ? 12 : l < 535.02 ? "13+" : l < 535.07 ? 15 : l < 535.11 ? 16 : l < 535.19 ? 17 : l < 536.05 ? 18 : l < 536.1 ? 19 : l < 537.01 ? 20 : l < 537.11 ? "21+" : l < 537.13 ? 23 : l < 537.18 ? 24 : l < 537.24 ? 25 : l < 537.36 ? 26 : "Blink" != $ ? "27" : "28")) : ($ && ($[1] = "like Safari"), l = (l = l[0]) < 400 ? 1 : l < 500 ? 2 : l < 526 ? 3 : l < 533 ? 4 : l < 534 ? "4+" : l < 535 ? 5 : l < 537 ? 6 : l < 538 ? 7 : l < 601 ? 8 : l < 602 ? 9 : l < 604 ? 10 : l < 606 ? 11 : l < 608 ? 12 : "12"), $ && ($[1] += " " + (l += "number" == typeof l ? ".x" : /[.+]/.test(l) ? "" : "+")), "Safari" == G && (!F || parseInt(F) > 45) ? F = l : "Chrome" == G && /\bHeadlessChrome/i.test(t) && A.unshift("headless")), "Opera" == G && (l = /\bzbov|zvav$/.exec(K)) ? (G += " ", A.unshift("desktop mode"), "zvav" == l ? (G += "Mini", F = null) : G += "Mobile", K = K.replace(RegExp(" *" + l + "$"), "")) : "Safari" == G && /\bChrome\b/.exec($ && $[1]) ? (A.unshift("desktop mode"), G = "Chrome Mobile", F = null, /\bOS X\b/.test(K) ? (X = "Apple", K = "iOS 4.3+") : K = null) : /\bSRWare Iron\b/.test(G) && !F && (F = D("Chrome")), F && 0 == F.indexOf(l = /[\d.]+$/.exec(K)) && t.indexOf("/" + l + "-") > -1 && (K = x(K.replace(l, ""))), K && -1 != K.indexOf(G) && !RegExp(G + " OS").test(K) && (K = K.replace(RegExp(" *" + S(G) + " *"), "")), $ && !/\b(?:Avant|Nook)\b/.test(G) && (/Browser|Lunascape|Maxthon/.test(G) || "Safari" != G && /^iOS/.test(K) && /\bSafari\b/.test($[1]) || /^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|SRWare Iron|Vivaldi|Web)/.test(G) && $[1]) && (l = $[$.length - 1]) && A.push(l), A.length && (A = ["(" + A.join("; ") + ")"]), X && N && N.indexOf(X) < 0 && A.push("on " + X), N && A.push((/^on /.test(A[A.length - 1]) ? "" : "on ") + N), K && (l = / ([\d.+]+)$/.exec(K), s = l && "/" == K.charAt(K.length - l[0].length - 1), K = { architecture: 32, family: l && !s ? K.replace(l[0], "") : K, version: l ? l[1] : null, toString: function () { var e = this.version; return this.family + (e && !s ? " " + e : "") + (64 == this.architecture ? " 64-bit" : "") } }), (l = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(I)) && !/\bi686\b/i.test(I) ? (K && (K.architecture = 64, K.family = K.family.replace(RegExp(" *" + l), "")), G && (/\bWOW64\b/i.test(t) || j && /\w(?:86|32)$/.test(o.cpuClass || o.platform) && !/\bWin64; x64\b/i.test(t)) && A.unshift("32-bit")) : K && /^OS X/.test(K.family) && "Chrome" == G && parseFloat(F) >= 39 && (K.architecture = 64), t || (t = null); var H = {}; return H.description = t, H.layout = $ && $[0], H.manufacturer = X, H.name = G, H.prerelease = T, H.product = N, H.ua = t, H.version = G && F, H.os = K || { architecture: null, family: null, version: null, toString: function () { return "null" } }, H.parse = e, H.toString = function () { return this.description || "" }, H.version && A.unshift(F), H.name && A.unshift(G), K && G && (K != String(K).split(" ")[0] || K != G.split(" ")[0] && !N) && A.push(N ? "(" + K + ")" : "on " + K), A.length && (H.description = A.join(" ")), H }(); o && a ? h(y, (function (e, t) { o[t] = e })) : i.platform = y }).call(this) }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}) }, {}], 2: [function (e, t, r) { "use strict"; Object.defineProperty(r, "__esModule", { value: !0 }), r.create = r.detect = r.attributes = void 0; var n, i = (n = e("platform")) && n.__esModule ? n : { default: n }; function o(e, t) { var r = Object.keys(e); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); t && (n = n.filter((function (t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), r.push.apply(r, n) } return r } function a(e) { for (var t = 1; t < arguments.length; t++) { var r = null != arguments[t] ? arguments[t] : {}; t % 2 ? o(Object(r), !0).forEach((function (t) { l(e, t, r[t]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : o(Object(r)).forEach((function (t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t)) })) } return e } function l(e, t, r) { return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e } var s = "undefined" != typeof window, c = function () { var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], t = { siteLocation: window.location.href, siteReferrer: document.referrer }, r = { siteLanguage: (navigator.language || navigator.userLanguage).substr(0, 2), screenWidth: screen.width, screenHeight: screen.height, screenColorDepth: screen.colorDepth, deviceName: i.default.product, deviceManufacturer: i.default.manufacturer, osName: i.default.os.family, osVersion: i.default.os.version, browserName: i.default.name, browserVersion: i.default.version, browserWidth: document.documentElement.clientWidth || window.outerWidth, browserHeight: document.documentElement.clientHeight || window.outerHeight }; return a(a({}, t), !0 === e ? r : {}) }; r.attributes = c; var u = function (e, t, r, n) { var i = new XMLHttpRequest; i.open("POST", e), i.onload = function () { if (200 === i.status || 201 === i.status) { var e = null; try { e = JSON.parse(i.responseText) } catch (e) { return n(new Error("Failed to parse response from server")) } return null != e.errors ? n(new Error(e.errors[0].message)) : n(null, e) } return n(new Error("Server returned with an unhandled status")) }, i.setRequestHeader("Content-Type", "application/json;charset=UTF-8"), i.send(JSON.stringify({ query: t, variables: r })) }, b = function (e, t, r, n, i) { if (!0 === n.ignoreLocalhost && !0 == ("" === (o = location.hostname) || "localhost" === o || "127.0.0.1" === o || "::1" === o)) return console.warn("Ackee ignores you because you are on localhost"); var o, a = function (e) { var t = "/" === e.substr(-1); return e + (!0 === t ? "" : "/") + "api" }(e); u(a, "\n\t\tmutation createRecord($domainId: ID!, $input: CreateRecordInput!) {\n\t\t\tcreateRecord(domainId: $domainId, input: $input) {\n\t\t\t\tpayload {\n\t\t\t\t\tid\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t", { domainId: t, input: r }, (function (e, t) { if (null != e) return console.error(e); var r = t.data.createRecord.payload.id, n = setInterval((function () { if (!1 !== i()) { u(a, "\n\t\t\t\tmutation updateRecord($id: ID!) {\n\t\t\t\t\tupdateRecord(id: $id) {\n\t\t\t\t\t\tsuccess\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t", { id: r }, (function (e) { if (null != e) return console.error(e) })) } else clearInterval(n) }), 15e3) })) }, d = function () { var e = document.querySelector("[data-ackee-domain-id]"); if (null != e) { var t = e.getAttribute("data-ackee-server") || "", r = e.getAttribute("data-ackee-domain-id"), n = e.getAttribute("data-ackee-opts") || "{}"; p({ server: t, domainId: r }, JSON.parse(n)).record() } }; r.detect = d; var p = function (e, t) { var r, n = e.server, i = e.domainId; t = function () { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = {}; return t.ignoreLocalhost = !1 !== e.ignoreLocalhost, t.detailed = !0 === e.detailed, t }(t); return { record: function () { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c(t.detailed), o = !1, a = r = Date.now(), l = function () { return !1 === o && a === r }, s = function () { o = !0 }; return b(n, i, e, t, l), { stop: s } } } }; r.create = p, !0 === s ? d() : console.warn("Ackee is not executing automatically because you are using it in an environment without a `window` object") }, { platform: 1 }] }, {}, [2])(2) }));