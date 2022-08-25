import { Component } from "react";
import { List, message } from "antd";
import type OneRecord from "~src/class/record";
import BombUtil from "~src/util/bombUtil";

class RecordList extends Component<any, any> {

    constructor(props) {
        super(props);
        this.state = {
            dataSource: [],
            isLoading: false,
            clockLoading: false
        };
    }


    init = () => {
        BombUtil.getRecords().then(e => {
            // @ts-ignore
            e.reverse();
            this.setState({ dataSource: e });
        }).catch(e => {
            message.error(e.message).then();
        });
        setTimeout(() => {
        }, 2000);
    };

    componentWillMount() {
        this.init();
    }

    render() {

        return (
            <List
                // bordered
                dataSource={this.state.dataSource}
                renderItem={(item: OneRecord) => {

                    let now = new Date(item.date);
                    let nowStr = `${now.getMonth() + 1}-${now.getDate()}`;

                    return (<List.Item>
                        <strong>{
                            item.origin}</strong> : {item.target}
                        <span>
                            {nowStr}
                        </span>
                    </List.Item>);
                }}
            />
        );
    }
}

export default RecordList;
