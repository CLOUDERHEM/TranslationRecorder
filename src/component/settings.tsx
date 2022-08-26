import { Component } from "react";
import { Button, Divider, message } from "antd";

import "./index.css";
import OneRecord from "~src/class/record";
import StorageUtil from "~src/util/storageUtil";
import { DeleteOutlined, DownloadOutlined, PlusOutlined } from "@ant-design/icons";
import { Data } from "~src/class/data";


class Settings extends Component<any, any> {

    flush = () => {
        StorageUtil.deleteAll().then();
    };

    insertDemo = () => {
        let one = Data.recordsDemos[Math.round(Math.random() * 1010) % Data.recordsDemos.length];
        StorageUtil.addRecords(new OneRecord(one.origin, one.target, one.date)).then(() => {
            message.success(`demo: ${one.origin} => ${one.target}`).then();
        }).catch(e => {
            message.error(e.message).then();
        });
    };

    exportAll = () => {
        StorageUtil.exportAll("data.json").catch(e => {
            message.error(e.message).then();
        });
    };

    render() {

        return (
            <div>
                <div>
                    Insert a demo
                    <Button type="link" onClick={this.insertDemo}>
                        <PlusOutlined />
                    </Button>
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
                    <Button type="link" onClick={this.exportAll}>
                        <DownloadOutlined />
                    </Button>
                </div>
            </div>
        )
            ;
    }
}

export default Settings;
