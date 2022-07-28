import { Component } from "react";
import { Button, Card, Divider } from "antd";

import "./index.css";
import storeUtil from "~src/util/storeUtil";
import OneRecord from "~src/class/record";


class Settings extends Component<any, any> {

    flush = () => {
        storeUtil.deleteAll();
    };

    render() {
        const en = ["fafafsdf", "asdfasf", "asdfasf", "asdfasf"];
        const zh = ["手动阀", "阿斯蒂芬", "ad所发生的", "爱上对方是否"];

        return (
            <div>
                Clear all records:
                <Button type="link" onClick={this.flush}>
                    Clear
                </Button>
                <Divider dashed />
                Insert a demo record:
                <Button type="link" onClick={() => {
                    storeUtil.addRecords(new OneRecord(en[Math.round(Math.random() * 1010) % zh.length],
                        zh[Math.round(Math.random() * 1010) % zh.length], new Date().getTime())).then();
                }}>Insert</Button>
                <Divider dashed />
                Export records as txt:
                <Button type="link" onClick={() => {
                    storeUtil.exportAll("export.txt").then();
                }}>Export</Button>
            </div>
        );
    }
}

export default Settings;
