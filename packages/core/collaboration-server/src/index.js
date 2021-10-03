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
var automerge_1 = __importDefault(require("automerge"));
var DocSet_1 = require("./DocSet");
var nanoid_1 = require("nanoid");
var AutomergeServer = /** @class */ (function () {
    function AutomergeServer() {
        this.mongooseModels = {};
        this.receiveMessage = this.receiveMessage.bind(this);
        // this.subscribeDoc = this.subscribeDoc.bind(this);
        this.docSet = new DocSet_1.DocSet();
        this.clients = [];
    }
    AutomergeServer.prototype.loadMongoose = function (models) {
        var _this = this;
        models.forEach(function (model) {
            var name = model.modelName;
            var fields = Object.keys(model.schema.paths);
            _this.mongooseModels[name] = model;
        });
        this.docSet.setModels(this.mongooseModels);
        console.log(this.mongooseModels);
    };
    AutomergeServer.prototype.broadcast = function (action, data, ignore) {
        var clients = this.clients.slice();
        if (ignore) {
            clients = clients.filter(function (a) { return a.id && ignore.indexOf(a.id) < 0; });
            console.log("Broadcast called by " + ignore + " " + clients.map(function (x) { return x.id; }).join(','));
        }
        clients.forEach(function (client) {
            client.socket.send(JSON.stringify({ action: action, data: data }));
        });
    };
    AutomergeServer.prototype.docChanged = function (ws, msg) {
        return __awaiter(this, void 0, void 0, function () {
            var doc, changes, binaryChanges, _a, object, patch;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.docSet.getDoc(msg.data.collection, msg.data.id)];
                    case 1:
                        doc = _b.sent();
                        console.log("Doc change", ws.id, msg);
                        if (msg.data && msg.data.changes && msg.data.changes.length > 0) {
                            changes = msg.data.changes.map(function (x) { return Object.keys(x).map(function (y) { return x[y]; }); });
                            binaryChanges = changes.map(function (x) { return Uint8Array.from(x); });
                            _a = automerge_1.default.applyChanges(doc, binaryChanges), object = _a[0], patch = _a[1];
                            this.docSet.setDoc(msg.data.id, object);
                            console.log("Doc changed by ", ws.id);
                            console.log("Doc value", object);
                            if (ws.id)
                                this.broadcast('automerge', { changes: msg.data.changes, id: msg.data.id }, [ws.id]);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    // subscribeDoc(ws: AutomergeSocket, msg: {action: string, data: any}){
    //     console.log("Subscribe Doc")
    //     let doc = this.docSet.getDoc(msg.data.id)
    //     const syncMessage = Automerge.getChanges(Automerge.init(), doc)
    //    // console.log(syncMessage)
    //   //  const [ syncState, syncMessage ] = Automerge.generateSyncMessage(doc, Automerge.initSyncState())
    //     ws.socket.send(JSON.stringify({ action: 'subscribed', data: syncMessage }))
    // }
    AutomergeServer.prototype.initMerge = function (ws, msg) {
        return __awaiter(this, void 0, void 0, function () {
            var doc, initial;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.docSet.getDoc(msg.data.collection, msg.data.id)];
                    case 1:
                        doc = _a.sent();
                        initial = automerge_1.default.getChanges(automerge_1.default.init(), doc);
                        ws.socket.send(JSON.stringify({ action: 'automerge', data: {
                                id: msg.data.id,
                                changes: initial
                            } }));
                        return [2 /*return*/];
                }
            });
        });
    };
    AutomergeServer.prototype.receiveMessage = function (ws, msg) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = msg.action;
                        switch (_a) {
                            case 'automerge': return [3 /*break*/, 1];
                            case 'automerge:init': return [3 /*break*/, 3];
                        }
                        return [3 /*break*/, 4];
                    case 1: return [4 /*yield*/, this.docChanged(ws, msg)];
                    case 2:
                        _b.sent();
                        return [3 /*break*/, 5];
                    case 3:
                        this.initMerge(ws, msg);
                        _b.label = 4;
                    case 4: return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    AutomergeServer.prototype.handleWebsocket = function (ws) {
        var _this = this;
        var socket = {
            socket: ws,
            id: nanoid_1.nanoid()
        };
        //   if(!socket.id) socket.id = nanoid();
        var ix = this.clients.push(socket);
        ws.on('message', function (data) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.receiveMessage(socket, JSON.parse(data.toString()))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        ws.on('close', function () {
            console.log("Websocket closed ", _this.clients.length);
            _this.clients.splice(ix - 1, 1);
            console.log(_this.clients.length);
        });
        var subscribedDocuments = []; // Document[]
        var subscribingDocuments = []; // { id: string, cancel: boolean }[]
        var removeFromSubscribedDocuments = function (id) {
            subscribingDocuments = subscribingDocuments.filter(function (d) { return d.id !== id; });
            subscribedDocuments = subscribedDocuments.filter(function (d) { return d.id !== id; });
        };
        var send = function (action, data) {
            console.log('sending', action, data);
            ws.send(JSON.stringify(__assign({ action: action }, data)));
        };
        // const subscribeToDoc = id => {
        //   if (
        //     subscribingDocuments.some(a => a.id === id) ||
        //     subscribedDocuments.some(a => a.id === id)
        //   ) {
        //     send('error', {
        //       message: 'Already subscribed or subscribing',
        //       id,
        //     })
        //     return
        //   }
        //   subscribingDocuments.push({ id, cancel: false })
        //   this.checkAccess(id, req)
        //     .then(access => {
        //       if (access) {
        //         return this.getDoc(id)
        //       } else {
        //         send('error', {
        //           message: 'Access denied',
        //           id,
        //         })
        //         removeFromSubscribedDocuments(id)
        //         return null
        //       }
        //     })
        //     .then(doc => {
        //       if (doc === null) return
        //       if (doc === false) {
        //         // 404
        //         send('error', {
        //           message: 'Document not found',
        //           id,
        //         })
        //         removeFromSubscribedDocuments(id)
        //       } else {
        //         const { cancel } = subscribingDocuments.find(d => d.id === id)
        //         if (!cancel) {
        //           doc.addToSet(docSet)
        //           subscribedDocuments.push(doc)
        //           send('subscribed', { id })
        //         }
        //         subscribingDocuments = subscribingDocuments.filter(d => d.id !== id)
        //       }
        //     })
        //     .catch(e => {
        //       removeFromSubscribedDocuments(id)
        //       send('error', {
        //         message: 'Internal server error',
        //         id,
        //       })
        //       console.error('Error occurred while checking access for ' + id)
        //       console.error(e)
        //     })
    };
    return AutomergeServer;
}());
exports.default = AutomergeServer;
