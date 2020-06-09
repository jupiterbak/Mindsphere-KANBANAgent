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
Object.defineProperty(exports, "__esModule", { value: true });
// Copyright (C), Jupiter Bakakeu
var mindconnect_nodejs_1 = require("@mindconnect/mindconnect-nodejs");
(function () {
    return __awaiter(this, void 0, void 0, function () {
        var sleep, configuration, agent, log, RETRYTIMES, ProducerNames, MachineNames, ArticleNames, ProAlphas, Selektions, Farbes, Materials, Kavitaets, Werkzeugs, Restbestands, Bestands, Auftrags, index, _loop_1, i, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    sleep = function (ms) { return new Promise(function (resolve) { return setTimeout(resolve, ms); }); };
                    configuration = require("../KanbanAgentConfig.json");
                    agent = new mindconnect_nodejs_1.MindConnectAgent(configuration);
                    log = function (text) { console.log("[" + new Date().toISOString() + "] " + text.toString()); };
                    RETRYTIMES = 5;
                    ProducerNames = ["FATH", "FATH", "SIEMENS", "SIEMENS", "ZNT"];
                    MachineNames = ["FATHMachine01", "FATHMachine02", "SiemensMachine01", "SiemensMachine02", "ZNTMAchine01"];
                    ArticleNames = ["FATHProduct01", "FATHProduct02", "SiemensProduct01", "SiemensProduct02", "ZNTProduct01"];
                    ProAlphas = ["123001", "123002", "123003", "123004", "123005"];
                    Selektions = ["093WA421", "093WA422", "093WA423", "093WA424", "093WA425"];
                    Farbes = ["black", "red", "green", "yellow", "grey"];
                    Materials = ["PA 6 GF 30", "PA 6 GF 15", "PA 6 GF 30", "PA 6 GF 60", "PA 6 GF 15"];
                    Kavitaets = ["2-Fach", "4-Fach", "6-Fach", "8-Fach", "2-Fach"];
                    Werkzeugs = ["KFKL-1004", "KFKL-1005", "KFKL-1006", "KFKL-1008", "KFKL-1009"];
                    Restbestands = [2204, 1684, 1580, 1400, 2452];
                    Bestands = [2204, 1684, 1080, 1400, 1952];
                    Auftrags = [0, 0, 80, 100, 400];
                    index = 0;
                    _a.label = 1;
                case 1:
                    if (!(index < 1000000)) return [3 /*break*/, 15];
                    _a.label = 2;
                case 2:
                    _a.trys.push([2, 13, , 14]);
                    log("Iteration : " + index);
                    if (!!agent.IsOnBoarded()) return [3 /*break*/, 4];
                    // wrapping the call in the retry function makes the agent a bit more resilliant
                    // if you don't want to retry the operations you can always just call await agent.OnBoard(); instaead.
                    return [4 /*yield*/, mindconnect_nodejs_1.retry(RETRYTIMES, function () { return agent.OnBoard(); })];
                case 3:
                    // wrapping the call in the retry function makes the agent a bit more resilliant
                    // if you don't want to retry the operations you can always just call await agent.OnBoard(); instaead.
                    _a.sent();
                    log("Agent onboarded");
                    _a.label = 4;
                case 4:
                    if (!!agent.HasDataSourceConfiguration()) return [3 /*break*/, 6];
                    return [4 /*yield*/, mindconnect_nodejs_1.retry(RETRYTIMES, function () { return agent.GetDataSourceConfiguration(); })];
                case 5:
                    _a.sent();
                    log("Configuration aquired");
                    _a.label = 6;
                case 6:
                    _loop_1 = function (i) {
                        var aviability, performance_1, quality, values;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    aviability = (Math.random() * 20) + 80;
                                    performance_1 = (Math.random() * 20) + 80;
                                    quality = (Math.random() * 20) + 80;
                                    values = [
                                        { "dataPointId": "1552793270832", "qualityCode": "0", "value": ProducerNames[index % 5].toString() },
                                        { "dataPointId": "1552793320173", "qualityCode": "0", "value": MachineNames[index % 5].toString() },
                                        { "dataPointId": "1552793343515", "qualityCode": "0", "value": ArticleNames[index % 5].toString() },
                                        { "dataPointId": "1552793357762", "qualityCode": "0", "value": ProAlphas[index % 5].toString() },
                                        { "dataPointId": "1552793371838", "qualityCode": "0", "value": Auftrags[index % 5].toString() },
                                        { "dataPointId": "1552793402152", "qualityCode": "0", "value": Bestands[index % 5].toString() },
                                        { "dataPointId": "1552793428353", "qualityCode": "0", "value": Farbes[index % 5].toString() },
                                        { "dataPointId": "1552793445076", "qualityCode": "0", "value": Kavitaets[index % 5].toString() },
                                        { "dataPointId": "1552793459833", "qualityCode": "0", "value": Materials[index % 5].toString() },
                                        { "dataPointId": "1552793473852", "qualityCode": "0", "value": Restbestands[index % 5].toString() },
                                        { "dataPointId": "1552793490766", "qualityCode": "0", "value": Selektions[index % 5].toString() },
                                        { "dataPointId": "1552793506155", "qualityCode": "0", "value": Werkzeugs[index % 5].toString() },
                                        { "dataPointId": "1552793521085", "qualityCode": "0", "value": (Math.floor((Math.random() * 100) + 400)).toString() },
                                        { "dataPointId": "1552793532788", "qualityCode": "0", "value": (Math.floor((Math.random() * 4))).toString() },
                                        { "dataPointId": "1552793552994", "qualityCode": "0", "value": "Lampe_" + i },
                                        // OEE ZNT
                                        { "dataPointId": "1552852312440", "qualityCode": "0", "value": MachineNames[index % 5].toString() },
                                        { "dataPointId": "1552852351277", "qualityCode": "0", "value": ArticleNames[index % 5].toString() },
                                        { "dataPointId": "1552852404325", "qualityCode": "0", "value": aviability.toString() },
                                        { "dataPointId": "1552852439970", "qualityCode": "0", "value": performance_1.toString() },
                                        { "dataPointId": "1552852454870", "qualityCode": "0", "value": quality.toString() },
                                        { "dataPointId": "1552852419233", "qualityCode": "0", "value": (aviability * performance_1 * quality).toString() },
                                        { "dataPointId": "1552852493121", "qualityCode": "0", "value": (1).toString() }
                                    ];
                                    /*
                                    const values: DataPointValue[] = [
                                        { "dataPointId": "ProducerName", "qualityCode": "0", "value": ProducerNames[index % 5].toString() },
                                        { "dataPointId": "MachineName", "qualityCode": "0", "value": MachineNames[index % 5].toString() },
                                        { "dataPointId": "ArticleName", "qualityCode": "0", "value": ArticleNames[index % 5].toString() },
                                        { "dataPointId": "ProAlpha", "qualityCode": "0", "value": ProAlphas[index % 5].toString() },
                                        { "dataPointId": "Auftrag", "qualityCode": "0", "value": Auftrags[index % 5].toString() },
                                        { "dataPointId": "Bestand", "qualityCode": "0", "value": Bestands[index % 5].toString() },
                                        { "dataPointId": "Farbe", "qualityCode": "0", "value": Farbes[index % 5].toString() },
                                        { "dataPointId": "Kavitaet", "qualityCode": "0", "value": Kavitaets[index % 5].toString() },
                                        { "dataPointId": "Material", "qualityCode": "0", "value": Materials[index % 5].toString() },
                                        { "dataPointId": "Restbestand", "qualityCode": "0", "value": Restbestands[index % 5].toString() },
                                        { "dataPointId": "Selektion", "qualityCode": "0", "value": Selektions[index % 5].toString() },
                                        { "dataPointId": "Werkzeug", "qualityCode": "0", "value": Werkzeugs[index % 5].toString() },
                                        { "dataPointId": "Lampen_Wert", "qualityCode": "0", "value": (Math.floor ( (Math.random() * 100) + 400)).toString() },
                                        { "dataPointId": "Lampe_Prio", "qualityCode": "0", "value": (Math.floor ( (Math.random() * 4))).toString() },
                                        { "dataPointId": "Lampe_Bezeichnung", "qualityCode": "0", "value": "Lampe_" + i }
                                    ];
                                    */
                                    // same like above, you can also just call  await agent.PostData(values) if you don't want to retry the operation
                                    // this is how to send the data with specific timestamp
                                    // await agent.PostData(values, new Date(Date.now() - 86400 * 1000));
                                    return [4 /*yield*/, mindconnect_nodejs_1.retry(RETRYTIMES, function () { return agent.PostData(values); })];
                                case 1:
                                    /*
                                    const values: DataPointValue[] = [
                                        { "dataPointId": "ProducerName", "qualityCode": "0", "value": ProducerNames[index % 5].toString() },
                                        { "dataPointId": "MachineName", "qualityCode": "0", "value": MachineNames[index % 5].toString() },
                                        { "dataPointId": "ArticleName", "qualityCode": "0", "value": ArticleNames[index % 5].toString() },
                                        { "dataPointId": "ProAlpha", "qualityCode": "0", "value": ProAlphas[index % 5].toString() },
                                        { "dataPointId": "Auftrag", "qualityCode": "0", "value": Auftrags[index % 5].toString() },
                                        { "dataPointId": "Bestand", "qualityCode": "0", "value": Bestands[index % 5].toString() },
                                        { "dataPointId": "Farbe", "qualityCode": "0", "value": Farbes[index % 5].toString() },
                                        { "dataPointId": "Kavitaet", "qualityCode": "0", "value": Kavitaets[index % 5].toString() },
                                        { "dataPointId": "Material", "qualityCode": "0", "value": Materials[index % 5].toString() },
                                        { "dataPointId": "Restbestand", "qualityCode": "0", "value": Restbestands[index % 5].toString() },
                                        { "dataPointId": "Selektion", "qualityCode": "0", "value": Selektions[index % 5].toString() },
                                        { "dataPointId": "Werkzeug", "qualityCode": "0", "value": Werkzeugs[index % 5].toString() },
                                        { "dataPointId": "Lampen_Wert", "qualityCode": "0", "value": (Math.floor ( (Math.random() * 100) + 400)).toString() },
                                        { "dataPointId": "Lampe_Prio", "qualityCode": "0", "value": (Math.floor ( (Math.random() * 4))).toString() },
                                        { "dataPointId": "Lampe_Bezeichnung", "qualityCode": "0", "value": "Lampe_" + i }
                                    ];
                                    */
                                    // same like above, you can also just call  await agent.PostData(values) if you don't want to retry the operation
                                    // this is how to send the data with specific timestamp
                                    // await agent.PostData(values, new Date(Date.now() - 86400 * 1000));
                                    _a.sent();
                                    log("Data posted --> " + i);
                                    return [4 /*yield*/, sleep(1000)];
                                case 2:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    };
                    i = 0;
                    _a.label = 7;
                case 7:
                    if (!(i < 9)) return [3 /*break*/, 10];
                    return [5 /*yield**/, _loop_1(i)];
                case 8:
                    _a.sent();
                    _a.label = 9;
                case 9:
                    i++;
                    return [3 /*break*/, 7];
                case 10:
                    log("Data posted end.");
                    return [4 /*yield*/, sleep(1000)];
                case 11:
                    _a.sent();
                    /*
                    const event: MindsphereStandardEvent = {
                        "entityId": agent.ClientId(), // use assetid if you want to send event somewhere else :)
                        "sourceType": "Event",
                        "sourceId": "application",
                        "source": "Meowz",
                        "severity": 20, // 0-99 : 20:error, 30:warning, 40: information
                        "timestamp": new Date().toISOString(),
                        "description": "Test"
                    };
        
                    // send event with current timestamp; you can also just call agent.PostEvent(event) if you don't want to retry the operation
                    await retry(RETRYTIMES, () => agent.PostEvent(event));
                    log("event posted");
                    await sleep(1000);
        
                    // upload file;  you can also just call await agent.Upload(...) if you don't want to retry the operation
                    await retry(RETRYTIMES, () => agent.Upload("package.json", "application/json", "Demo File"));
                    log("file uploaded");
                    await sleep(1000);
        
                    const yesterday = new Date();
                    yesterday.setDate(yesterday.getDate() - 1);
                    const bulk: TimeStampedDataPoint[] =
                        [{
                            "timestamp": yesterday.toISOString(),
                            "values":
                                [{ "dataPointId": "DP-Temperature", "qualityCode": "0", "value": "10" },
                                { "dataPointId": "DP-Pressure", "qualityCode": "0", "value": "10" }]
                        },
                        {
                            "timestamp": new Date().toISOString(),
                            "values": [{ "dataPointId": "DP-Temperature", "qualityCode": "0", "value": "10" },
                            { "dataPointId": "DP-Pressure", "qualityCode": "0", "value": "10" }]
                        }];
        
                    await retry(RETRYTIMES, () => agent.BulkPostData(bulk));
                    log("bulk data uploaded");
                    */
                    return [4 /*yield*/, sleep(1000)];
                case 12:
                    /*
                    const event: MindsphereStandardEvent = {
                        "entityId": agent.ClientId(), // use assetid if you want to send event somewhere else :)
                        "sourceType": "Event",
                        "sourceId": "application",
                        "source": "Meowz",
                        "severity": 20, // 0-99 : 20:error, 30:warning, 40: information
                        "timestamp": new Date().toISOString(),
                        "description": "Test"
                    };
        
                    // send event with current timestamp; you can also just call agent.PostEvent(event) if you don't want to retry the operation
                    await retry(RETRYTIMES, () => agent.PostEvent(event));
                    log("event posted");
                    await sleep(1000);
        
                    // upload file;  you can also just call await agent.Upload(...) if you don't want to retry the operation
                    await retry(RETRYTIMES, () => agent.Upload("package.json", "application/json", "Demo File"));
                    log("file uploaded");
                    await sleep(1000);
        
                    const yesterday = new Date();
                    yesterday.setDate(yesterday.getDate() - 1);
                    const bulk: TimeStampedDataPoint[] =
                        [{
                            "timestamp": yesterday.toISOString(),
                            "values":
                                [{ "dataPointId": "DP-Temperature", "qualityCode": "0", "value": "10" },
                                { "dataPointId": "DP-Pressure", "qualityCode": "0", "value": "10" }]
                        },
                        {
                            "timestamp": new Date().toISOString(),
                            "values": [{ "dataPointId": "DP-Temperature", "qualityCode": "0", "value": "10" },
                            { "dataPointId": "DP-Pressure", "qualityCode": "0", "value": "10" }]
                        }];
        
                    await retry(RETRYTIMES, () => agent.BulkPostData(bulk));
                    log("bulk data uploaded");
                    */
                    _a.sent();
                    return [3 /*break*/, 14];
                case 13:
                    err_1 = _a.sent();
                    // add proper error handling (e.g. store data somewhere, retry later etc. )
                    console.error(err_1);
                    return [3 /*break*/, 14];
                case 14:
                    index++;
                    return [3 /*break*/, 1];
                case 15: return [2 /*return*/];
            }
        });
    });
})();
