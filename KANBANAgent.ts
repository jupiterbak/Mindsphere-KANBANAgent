// Copyright (C), Jupiter Bakakeu
import { DataPointValue, MindConnectAgent, MindsphereStandardEvent, retry, TimeStampedDataPoint } from "@mindconnect/mindconnect-nodejs";

(async function () {

    const sleep = (ms: any) => new Promise(resolve => setTimeout(resolve, ms));
    const configuration = require("../KanbanAgentConfig.json");
    const agent = new MindConnectAgent(configuration);
    const log = (text: any) => { console.log(`[${new Date().toISOString()}] ${text.toString()}`); };
    const RETRYTIMES = 5; // retry the operation before giving up and throwing exception

    const ProducerNames = ["FATH","FATH","SIEMENS","SIEMENS","ZNT"];
    const MachineNames = ["FATHMachine01","FATHMachine02","SiemensMachine01","SiemensMachine02","ZNTMAchine01"];
    const ArticleNames = ["FATHProduct01","FATHProduct02","SiemensProduct01","SiemensProduct02","ZNTProduct01"];
    const ProAlphas = ["123001","123002", "123003","123004","123005"];
    const Selektions = ["093WA421","093WA422","093WA423","093WA424","093WA425"];
    const Farbes = ["black","red","green","yellow","grey" ];
    const Materials = ["PA 6 GF 30","PA 6 GF 15","PA 6 GF 30","PA 6 GF 60","PA 6 GF 15"];
    const Kavitaets = ["2-Fach","4-Fach","6-Fach","8-Fach","2-Fach"];
    const Werkzeugs = ["KFKL-1004", "KFKL-1005","KFKL-1006","KFKL-1008","KFKL-1009" ];
    const Restbestands = [2204, 1684, 1580, 1400, 2452];
    const Bestands = [2204, 1684, 1080, 1400, 1952];
    const Auftrags = [0,0,80,100,400];
   

    for (let index = 0; index < 1000000; index++) {
        try {

            log(`Iteration : ${index}`);
            // onboarding the agent
            if (!agent.IsOnBoarded()) {
                // wrapping the call in the retry function makes the agent a bit more resilliant
                // if you don't want to retry the operations you can always just call await agent.OnBoard(); instaead.
                await retry(RETRYTIMES, () => agent.OnBoard());
                log("Agent onboarded");
            }

            if (!agent.HasDataSourceConfiguration()) {
                await retry(RETRYTIMES, () => agent.GetDataSourceConfiguration());
                log("Configuration aquired");
            }

            for (let i = 0; i < 9; i++) {
                const aviability  = (Math.random() * 20) + 80;
                const performance  = (Math.random() * 20) + 80;
                const quality  = (Math.random() * 20) + 80;

                const values: DataPointValue[] = [
                    { "dataPointId": "1553122480509", "qualityCode": "0", "value": Math.floor(Math.random() * 100).toString() },
                    /*{ "dataPointId": "1552793320173", "qualityCode": "0", "value": MachineNames[index % 5].toString() },
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
                    { "dataPointId": "1552793521085", "qualityCode": "0", "value": (Math.floor ( (Math.random() * 100) + 400)).toString() },
                    { "dataPointId": "1552793532788", "qualityCode": "0", "value": (Math.floor ( (Math.random() * 4))).toString() },
                    { "dataPointId": "1552793552994", "qualityCode": "0", "value": "Lampe_" + i },
                    // OEE ZNT
                    
                    { "dataPointId": "1552852312440", "qualityCode": "0", "value": MachineNames[index % 5].toString() },
                    { "dataPointId": "1552852351277", "qualityCode": "0", "value": ArticleNames[index % 5].toString() },
                    
                    { "dataPointId": "1552852404325", "qualityCode": "0", "value": aviability.toString() },
                    { "dataPointId": "1552852439970", "qualityCode": "0", "value": performance.toString() },
                    { "dataPointId": "1552852454870", "qualityCode": "0", "value": quality.toString() },
                    { "dataPointId": "1552852419233", "qualityCode": "0", "value": (aviability*performance*quality).toString() },
                    { "dataPointId": "1552852493121", "qualityCode": "0", "value": (1).toString() }*/

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
                
                await retry(RETRYTIMES, () => agent.PostData(values));
                log("Data posted --> " + i);
                await sleep(1000);
            }
            log("Data posted end.");
            await sleep(1000);
            

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
            await sleep(1000);

        } catch (err) {
            // add proper error handling (e.g. store data somewhere, retry later etc. )
            console.error(err);
        }
    }
})();