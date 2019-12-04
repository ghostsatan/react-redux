import React from 'react';
import { Transfer, Switch, Popover, Button, notification } from 'antd';
import './Page.css';
import './Page4.css';


const mockData = [];
for (let i = 0; i < 20; i++) {
    mockData.push({
        key: i.toString(),
        title: `content${i + 1}`,
        description: `description of content${i + 1}`,
        disabled: i % 3 < 1,
    });
}
const content = (
    <div>
        <p>Content</p>
        <p>Content</p>
    </div>
);
const oriTargetKeys = mockData.filter(item => +item.key % 3 > 1).map(item => item.key);

const openNotificationWithIcon = type => {
    notification[type]({
        message: 'Notification Title',
        description:
            'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    });
};


class Page4 extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            targetKeys: oriTargetKeys,
            selectedKeys: [],
            disabled: false,
        });
    }
    handleChange = (nextTargetKeys, direction, moveKeys) => {
        this.setState({ targetKeys: nextTargetKeys });

        console.log('targetKeys: ', nextTargetKeys);
        console.log('direction: ', direction);
        console.log('moveKeys: ', moveKeys);
    };

    handleSelectChange = (sourceSelectedKeys, targetSelectedKeys) => {
        this.setState({ selectedKeys: [...sourceSelectedKeys, ...targetSelectedKeys] });

        console.log('sourceSelectedKeys: ', sourceSelectedKeys);
        console.log('targetSelectedKeys: ', targetSelectedKeys);
    };

    handleScroll = (direction, e) => {
        console.log('direction:', direction);
        console.log('target:', e.target);
    };

    handleDisable = disabled => {
        this.setState({ disabled });
    };
    //     let mystyle = {
    //     width: '100%',
    //     height: '80px',
    //     backgroundColor: 'burlywood',
    //     fontSize: '34px',
    //     textAlign: 'center',//垂直居中
    //     lineHeight: '80px'//水平居中

    // }
    render() {
        const { targetKeys, selectedKeys, disabled } = this.state;
        return (
            <div className="trans">
                <Transfer
                    dataSource={mockData}
                    titles={['Source', 'Target']}
                    targetKeys={targetKeys}
                    selectedKeys={selectedKeys}
                    onChange={this.handleChange}
                    onSelectChange={this.handleSelectChange}
                    onScroll={this.handleScroll}
                    render={item => item.title}
                    disabled={disabled}
                />
                <Switch
                    unCheckedChildren="disabled"
                    checkedChildren="disabled"
                    checked={disabled}
                    onChange={this.handleDisable}
                    style={{ marginTop: 16 }}
                />
                <Popover content={content} title="Title">
                    <Button type="primary" className="btn">Hover me</Button>
                </Popover>

                <Button onClick={() => openNotificationWithIcon('success')}>Success</Button>
                <Button onClick={() => openNotificationWithIcon('info')}>Info</Button>
                <Button onClick={() => openNotificationWithIcon('warning')}>Warning</Button>
                <Button onClick={() => openNotificationWithIcon('error')}>Error</Button>
            </div>
        )
    }
}

export default Page4;