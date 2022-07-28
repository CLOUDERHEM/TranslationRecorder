import { Component } from "react";
import { Button, Card, Table, Tabs } from "antd";
import RecordList from "./component/recordList";
import Settings from "~src/component/settings";


const { TabPane } = Tabs;

class App extends Component {

    render() {

        return (
            <div>
                <Card size="default" title="Translate Recorder"  style={{ width: 300 }}>
                    <Tabs defaultActiveKey="1">
                        <TabPane tab="Main" key="1">
                            <RecordList />
                        </TabPane>
                        <TabPane tab="Setting" key="2">
                            <Settings />
                        </TabPane>
                        <TabPane tab="About" key="3">
                            About
                        </TabPane>
                    </Tabs>
                </Card>
            </div>
        );
    }
}

export default App;
