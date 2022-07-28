import { Component } from "react";
import { List } from "antd";
import storeUtil from "~src/util/storeUtil";
import type OneRecord from "~src/class/record";

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
        storeUtil.getRecords().then(e => {
            this.setState({ dataSource: e });
        });
        setTimeout(() => {
        }, 2000);
    };

    componentWillMount() {
        this.init();
        // storeUtil.deleteAll()
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
