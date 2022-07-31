import type OneRecord from "~src/class/record";
import { BombApiUtil } from "~src/util/bombApi";

const tableName = "Record";
const BombUtil = {

    addRecords: (data: OneRecord) => {
        return new Promise(resolve => {
            BombApiUtil.post(data).then();
        });
    },

    getRecords: () => {
        return new Promise(resolve => {
            BombApiUtil.get().then(res => {
                resolve(res);
            });
        });
    },

    deleteOne: (objectId) => {
        return new Promise(resolve => {
            BombApiUtil.deleteOne(objectId).then();
        });
    },

    deleteAll: () => {
        return new Promise(resolve => {
            BombUtil.getRecords().then(res => {
                let body = {
                    requests: []
                };
                // @ts-ignore
                res.forEach(e => {
                    let item = {
                        "method": "DELETE",
                        "path": `/1/classes/${tableName}/${e.objectId}`
                    };
                    body.requests.push(item);
                });

                BombApiUtil.deleteAll(body).then();
            });
        });
    },
    exportAll: (filename: string) => {
        return new Promise(resolve => {
            BombApiUtil.get().then(res => {
                let data = JSON.stringify(res);
                const element = document.createElement("a");
                element.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(data));
                element.setAttribute("download", filename);
                element.style.display = "none";
                document.body.appendChild(element);
                element.click();
                document.body.removeChild(element);
            });
        });
    }

};

export default BombUtil;
