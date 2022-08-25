import type OneRecord from "~src/class/record";
import { BombApiUtil } from "~src/util/bombApi";

const tableName = "Record";
const BombUtil = {

    addRecords: (data: OneRecord) => {
        return BombApiUtil.post(data);
    },

    getRecords: () => {
        return BombApiUtil.get();
    },

    deleteOne: (objectId) => {
        return BombApiUtil.deleteOne(objectId);
    },

    deleteAll: () => {
        return new Promise((resolve, reject) => {
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
            }).catch(e => {
                reject(e);
            });
        });
    },
    exportAll: (filename: string) => {
        return new Promise((resolve, reject) => {
            BombApiUtil.get().then(res => {
                let data = JSON.stringify(res);
                const element = document.createElement("a");
                element.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(data));
                element.setAttribute("download", filename);
                element.style.display = "none";
                document.body.appendChild(element);
                element.click();
                document.body.removeChild(element);
            }).catch(e => {
                reject(e);
            });

        });

    }

};

export default BombUtil;
