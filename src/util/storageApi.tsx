import axios from "axios";
import Config from "~src/config";

const tableName = "Record";
const url = `${Config.serverURL}/1.1/classes/${tableName}`;
const batchUrl = `${Config.serverURL}/1.1/batch`;
const headers = {
    "X-LC-Id": Config.appId,
    "X-LC-Key": Config.appKey,
    "Content-Type": "application/json"
};

function get() {

    return new Promise((resolve, reject) => {
        axios.get(url, {
            headers
        }).then(res => {
            resolve(res.data.results);
        }).catch(e => {
            reject(e);
        });
    });
}

function post(data) {
    return new Promise((resolve, reject) => {
        axios.post(url, JSON.stringify(data), {
            headers
        }).then(res => {
            resolve(res.data)
            console.log(res.data);
        }).catch(e => {
            reject(e);
        });
    });
}

function deleteOne(objectId) {
    return new Promise((resolve, reject) => {
        axios.delete(`${url}/${objectId}`, {
            headers
        }).then(res => {
            resolve(res.data)
            console.log(res.data);
        }).catch(e => {
            reject(e);
        });
    });
}

function deleteAll(items) {
    return new Promise((resolve, reject) => {
        axios.post(batchUrl, JSON.stringify(items), {
            headers
        }).then(res => {
            resolve(res.data)
            console.log(res.data);
        }).catch(e => {
            reject(e);
        });
    });
}

export const StorageApi = {
    get, post, deleteOne, deleteAll
};
