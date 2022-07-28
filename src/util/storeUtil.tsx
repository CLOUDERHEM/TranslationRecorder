import { Storage } from "@plasmohq/storage";
import type OneRecord from "~src/class/record";

const KEY = "records";
const store = new Storage({
    area: "sync"
});
const StoreUtil = {

    addRecords: async (data: OneRecord) => {
        try {
            let records = [];
            let items = await store.get(KEY);
            if (items !== null && items !== "" && items !== undefined) {
                let parse = JSON.parse(items);
                if (parse != null) {
                    parse.forEach(e => {
                        records.push(e);
                    });
                }
            }
            records.push(data);
            store.set(KEY, JSON.stringify(records)).then();
        } catch (e) {
            console.error(e);
        }
    },

    getRecords: async () => {
        try {
            let s = await store.get(KEY);
            if (s === null || s === "" || s === undefined) {
                return [];
            }
            console.log(s);
            return JSON.parse(s);
        } catch (e) {
            console.error(e);
        }
    },
    deleteAll: () => {
        store.remove(KEY).then(r => console.log(r));
    },

    exportAll: async (filename: string) => {
        const element = document.createElement("a");
        element.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(await store.get(KEY)));
        element.setAttribute("download", filename);
        element.style.display = "none";
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    }

};

export default StoreUtil;
