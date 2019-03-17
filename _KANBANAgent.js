var mindconnect_nodejs = require("@mindconnect/mindconnect-nodejs");
var agent = new mindconnect_nodejs_1.MindConnectAgent(configuration);
var log = function (text) { console.log("[" + new Date().toISOString() + "] " + text.toString()); };

