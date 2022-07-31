import axios from "axios";
import Config from "~src/config";

const tableName = "Record";
const url = `https://api2.bmob.cn/1/classes/${tableName}`;
const batchUrl = "https://api2.bmob.cn/1/batch";
const headers = {
    "X-Bmob-Application-Id": Config.applicationId,
    "X-Bmob-REST-API-Key": Config.restApi,
    "Content-Type": "application/json"
};

function get() {

    return new Promise(resolve => {
        axios.get(url, {
            headers
        }).then(res => {
            resolve(res.data.results);
        }).catch(e => {
            console.log(e);
        });
    });
}

function post(data) {
    return new Promise(resolve => {
        axios.post(url, JSON.stringify(data), {
            headers
        }).then(res => {
            console.log(res);
        }).catch(e => {
            console.log(e);
        });
    });
}

function deleteOne(objectId) {
    return new Promise(resolve => {
        axios.delete(`${url}/${objectId}`, {
            headers
        }).then(res => {
            console.log(res);
        }).catch(e => {
            console.log(e);
        });
    });
}

function deleteAll(items) {
    return new Promise(resolve => {
        axios.post(batchUrl, JSON.stringify(items), {
            headers
        }).then();
    });
}

export const BombApiUtil = {
    get, post, deleteOne, deleteAll
};
