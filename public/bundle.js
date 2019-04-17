/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.tsx","vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/app.tsx":
/*!********************************!*\
  !*** ./src/components/app.tsx ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var character_selector_1 = __webpack_require__(/*! ./character-selector */ "./src/components/character-selector.tsx");
var prompt_reader_1 = __webpack_require__(/*! ./prompt-reader */ "./src/components/prompt-reader.tsx");
var App = function (props) {
    var _a = React.useState({
        percival: false,
        mordred: false,
        oberon: false,
        morgana: false
    }), choices = _a[0], setChoices = _a[1];
    return (React.createElement("div", null,
        React.createElement("h1", null, "Avalon Narrator"),
        React.createElement(character_selector_1.CharacterSelector, { choices: choices, onChange: function (newChoices) { return setChoices(newChoices); } }),
        React.createElement(prompt_reader_1.PromptReader, { choices: choices })));
};
exports.App = App;


/***/ }),

/***/ "./src/components/character-selector.tsx":
/*!***********************************************!*\
  !*** ./src/components/character-selector.tsx ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var checkbox_1 = __webpack_require__(/*! ./checkbox */ "./src/components/checkbox.tsx");
var CharacterSelector = function (_a) {
    var choices = _a.choices, onChange = _a.onChange;
    var updateChoice = function (update) {
        var full = __assign({}, choices, update);
        onChange(full);
    };
    return (React.createElement("div", { className: "character-selector" },
        React.createElement("h2", null, "Who's playing?"),
        React.createElement(checkbox_1.Checkbox, { checked: choices.percival, onChange: function (checked) { return updateChoice({ percival: checked }); } }),
        " Percival ",
        React.createElement("br", null),
        React.createElement(checkbox_1.Checkbox, { checked: choices.mordred, onChange: function (checked) { return updateChoice({ mordred: checked }); } }),
        " Mordred ",
        React.createElement("br", null),
        React.createElement(checkbox_1.Checkbox, { checked: choices.oberon, onChange: function (checked) { return updateChoice({ oberon: checked }); } }),
        " Oberon ",
        React.createElement("br", null),
        React.createElement(checkbox_1.Checkbox, { checked: choices.morgana, onChange: function (checked) { return updateChoice({ morgana: checked }); } }),
        " Morgana"));
};
exports.CharacterSelector = CharacterSelector;


/***/ }),

/***/ "./src/components/checkbox.tsx":
/*!*************************************!*\
  !*** ./src/components/checkbox.tsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var Checkbox = function (_a) {
    var checked = _a.checked, onChange = _a.onChange;
    return (React.createElement("input", { type: "checkbox", checked: checked, onChange: function (_a) {
            var target = _a.target;
            return onChange(target.checked);
        } }));
};
exports.Checkbox = Checkbox;


/***/ }),

/***/ "./src/components/prompt-list.tsx":
/*!****************************************!*\
  !*** ./src/components/prompt-list.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var getKey = function (prompt) { return prompt.replace(/\s+/, ""); };
var PromptList = function (_a) {
    var prompts = _a.prompts, currentPrompt = _a.currentPrompt;
    return (React.createElement("div", { className: "prompt-list" }, (prompts || []).map(function (value, index) { return (React.createElement("li", { key: index + getKey(value), className: (index === currentPrompt) ? "active" : "" }, value)); })));
};
exports.PromptList = PromptList;


/***/ }),

/***/ "./src/components/prompt-reader.tsx":
/*!******************************************!*\
  !*** ./src/components/prompt-reader.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var avalon_prompts_1 = __webpack_require__(/*! avalon-prompts */ "./node_modules/avalon-prompts/index.js");
var prompt_list_1 = __webpack_require__(/*! ./prompt-list */ "./src/components/prompt-list.tsx");
var speech_1 = __webpack_require__(/*! ../speech */ "./src/speech.ts");
var PromptReader = (function (_super) {
    __extends(PromptReader, _super);
    function PromptReader() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            prompts: null,
            currentPrompt: null
        };
        _this.startNarration = function () {
            var newPrompts = avalon_prompts_1.getPrompts(_this.props.choices);
            _this.setState({
                prompts: newPrompts,
                currentPrompt: 0
            }, function () { return __awaiter(_this, void 0, void 0, function () {
                var next;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (false) {}
                            return [4, this.narrateCurrentPrompt()];
                        case 1:
                            _a.sent();
                            next = this.getNextPrompt();
                            if (next === null) {
                                return [3, 3];
                            }
                            return [4, this.moveToPrompt(next)];
                        case 2:
                            _a.sent();
                            return [3, 0];
                        case 3:
                            this.setState({
                                currentPrompt: null,
                                prompts: null
                            });
                            return [2];
                    }
                });
            }); });
        };
        _this.getNextPrompt = function () {
            var _a = _this.state, prompts = _a.prompts, currentPrompt = _a.currentPrompt;
            if (prompts === null || currentPrompt === null) {
                return null;
            }
            var nextPrompt = currentPrompt + 1;
            return nextPrompt >= prompts.length ? null : nextPrompt;
        };
        _this.narrateCurrentPrompt = function () { return __awaiter(_this, void 0, void 0, function () {
            var _a, prompts, currentPrompt;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.state, prompts = _a.prompts, currentPrompt = _a.currentPrompt;
                        return [4, speech_1.speak(prompts[currentPrompt], 1000)];
                    case 1:
                        _b.sent();
                        return [2];
                }
            });
        }); };
        _this.moveToPrompt = function (index) {
            return new Promise(function (resolve) {
                _this.setState({
                    currentPrompt: index
                }, resolve);
            });
        };
        return _this;
    }
    PromptReader.prototype.render = function () {
        var _a = this.state, prompts = _a.prompts, currentPrompt = _a.currentPrompt;
        return (React.createElement("div", { className: "prompt-reader" },
            React.createElement("button", { onClick: this.startNarration, disabled: currentPrompt !== null }, "Start narration"),
            prompts !== null
                && React.createElement(prompt_list_1.PromptList, { prompts: prompts, currentPrompt: currentPrompt })));
    };
    return PromptReader;
}(React.Component));
exports.PromptReader = PromptReader;


/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
var app_1 = __webpack_require__(/*! ./components/app */ "./src/components/app.tsx");
ReactDOM.render(React.createElement(app_1.App, null), document.getElementById("approot"));


/***/ }),

/***/ "./src/speech.ts":
/*!***********************!*\
  !*** ./src/speech.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
exports.__esModule = true;
var delay = function (time) { return new Promise(function (resolve) { return setTimeout(function () { return resolve(); }, time); }); };
var storeUtteranceToPreventGC = function (utterance) {
    if (window.utterances === undefined) {
        window.utterances = [];
    }
    window.utterances.push(utterance);
};
var getVoices = function () {
    return new Promise(function (resolve) {
        window.speechSynthesis.onvoiceschanged = function () {
            resolve(window.speechSynthesis.getVoices());
        };
        var voices = window.speechSynthesis.getVoices();
        if (voices.length > 0) {
            window.speechSynthesis.onvoiceschanged = function () { return undefined; };
            resolve(voices);
        }
    });
};
var getVoice = function () { return __awaiter(_this, void 0, void 0, function () {
    var voices;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, getVoices()];
            case 1:
                voices = _a.sent();
                return [2, voices.find(function (v) { return v.voiceURI === "Microsoft Hazel Desktop - English (Great Britain)"; })
                        || voices.find(function (v) { return v.voiceURI === "Google UK English Female"; })
                        || voices.find(function (v) { return v.voiceURI === "Google UK English Male"; })
                        || voices.find(function (v) { return v.lang === "en-GB"; })
                        || voices.find(function (v) { return v.lang === "en-US"; })];
        }
    });
}); };
exports.speak = function (text, endDelay) {
    return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
        var utterance, _a;
        var _this = this;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    utterance = new SpeechSynthesisUtterance(text);
                    storeUtteranceToPreventGC(utterance);
                    _a = utterance;
                    return [4, getVoice()];
                case 1:
                    _a.voice = _b.sent();
                    utterance.pitch = 0.8;
                    utterance.rate = 0.7;
                    utterance.onend = function () { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4, delay(endDelay)];
                                case 1:
                                    _a.sent();
                                    resolve();
                                    return [2];
                            }
                        });
                    }); };
                    window.speechSynthesis.speak(utterance);
                    return [2];
            }
        });
    }); });
};


/***/ })

/******/ });