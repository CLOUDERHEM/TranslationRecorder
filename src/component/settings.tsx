import { Component } from "react";
import { Button, Divider } from "antd";

import "./index.css";
import OneRecord from "~src/class/record";
import bombUtil from "~src/util/bombUtil";
import { DeleteOutlined, DownloadOutlined, PlusOutlined } from "@ant-design/icons";
import { Data } from "~src/class/data";


class Settings extends Component<any, any> {

    flush = () => {
        bombUtil.deleteAll().then();
    };

    render() {

        return (
            <div>
                <div>
                    Insert a demo
                    <Button type="link" onClick={() => {
                        let one = Data.recordsDemos[Math.round(Math.random() * 1010) % Data.recordsDemos.length];
                        bombUtil.addRecords(new OneRecord(one.origin, one.target, one.date)).then();
                    }}><PlusOutlined /></Button>
                </div>
                <Divider dashed />
                <div>
                    Delete all records
                    <Button type="link" onClick={this.flush}>
                        <DeleteOutlined />
                    </Button>
                </div>
                <Divider dashed />
                <div>
                    Download all records
                    <Button type="link" onClick={() => {
                        bombUtil.exportAll("data.json").then();
                    }}><DownloadOutlined /></Button>
                </div>
            </div>
        );
    }
}

export default Settings;
