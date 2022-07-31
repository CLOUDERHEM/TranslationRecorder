import { Component } from "react";
import { List } from "antd";
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
            console.error("init");
            console.error(e);
            this.setState({ dataSource: e });
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
                renderItem={(item: OneRecord) => (
                    <List.Item>
                        <strong>{
                            item.origin}</strong> : {item.target}
                    </List.Item>
                )}
            />
        );
    }
}

export default RecordList;
