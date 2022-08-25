import axios from "axios";
import Config from "~src/config";

const tableName = "Record";
const url = `https://api2.bmobapp.com/1/classes/${tableName}`;
const batchUrl = "https://api2.bmobapp.com/1/batch";
const headers = {
    "X-Bmob-Application-Id": Config.applicationId,
    "X-Bmob-REST-API-Key": Config.restApi,
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
            console.log(res.data);
        }).catch(e => {
            reject(e);
        });
    });
}

export const BombApiUtil = {
    get, post, deleteOne, deleteAll
};
