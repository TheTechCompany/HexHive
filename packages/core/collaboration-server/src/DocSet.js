"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocSet = void 0;
var automerge_1 = __importDefault(require("automerge"));
var DocSet = /** @class */ (function () {
    function DocSet() {
        this.models = {};
        this.docs = {};
        this.handlers = [];
    }
    DocSet.prototype.setModels = function (models) {
        this.models = models;
    };
    Object.defineProperty(DocSet.prototype, "docIds", {
        get: function () {
            return Object.keys(this.docs);
        },
        enumerable: false,
        configurable: true
    });
    DocSet.prototype.getDoc = function (collection, docId) {
        return __awaiter(this, void 0, void 0, function () {
            var doc, tmp_doc;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        doc = this.docs[docId];
                        if (!!doc) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.models[collection].findById(docId)];
                    case 1:
                        tmp_doc = _a.sent();
                        console.log("Get doc by id", docId, doc);
                        doc = automerge_1.default.from({
                            title: tmp_doc.title,
                            children: tmp_doc.children || [],
                            _id: tmp_doc.id
                        });
                        this.docs[docId] = doc;
                        _a.label = 2;
                    case 2: return [2 /*return*/, doc];
                }
            });
        });
    };
    DocSet.prototype.removeDoc = function (docId) {
        delete this.docs[docId];
    };
    DocSet.prototype.setDoc = function (docId, doc) {
        this.docs[docId] = doc;
        for (var _i = 0, _a = this.handlers; _i < _a.length; _i++) {
            var handler = _a[_i];
            handler(docId, doc);
        }
    };
    DocSet.prototype.applyChanges = function (docId, changes) {
        var doc = this.docs[docId] || automerge_1.default.init();
        doc = automerge_1.default.applyChanges(doc, changes);
        this.setDoc(docId, doc);
        return doc;
    };
    DocSet.prototype.registerHandler = function (handler) {
        this.handlers.push(handler);
    };
    DocSet.prototype.unregisterHandler = function (handler) {
        this.handlers = this.handlers.filter(function (h) { return h !== handler; });
    };
    return DocSet;
}());
exports.DocSet = DocSet;
