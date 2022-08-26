import type OneRecord from "~src/class/record";

import { StorageApi } from "~src/util/storageApi";

const tableName = "Record";
const StorageUtil = {

    addRecords: (data: OneRecord) => {
        return StorageApi.post(data);
    },

    getRecords: () => {
        return StorageApi.get();
    },

    deleteOne: (objectId) => {
        return StorageApi.deleteOne(objectId);
    },

    deleteAll: () => {
        return new Promise((resolve, reject) => {
            StorageUtil.getRecords().then(res => {
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

                StorageApi.deleteAll(body).then();
                resolve(res)
            }).catch(e => {
                reject(e);
            });
        });
    },
    exportAll: (filename: string) => {
        return new Promise((resolve, reject) => {
            StorageApi.get().then(res => {
                let data = JSON.stringify(res);
                const element = document.createElement("a");
                element.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(data));
                element.setAttribute("download", filename);
                element.style.display = "none";
                document.body.appendChild(element);
                element.click();
                document.body.removeChild(element);
                resolve(res);
            }).catch(e => {
                reject(e);
            });

        });

    }

};

export default StorageUtil;
