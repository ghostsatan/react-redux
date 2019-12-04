import React from 'react';
import { Affix, Button } from 'antd';
import { Menu, Icon } from 'antd';
import './Page.css';
const arr = ["张三", "李四", "王五"]
// 定义内部组件
class Welcome extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <h1>Welcome {this.props.arr}</h1>
        )
    }
}
// 定义数据

class mixCom extends React.Component {
    render() {

        return (
            <div>
                {
                    arr.map((item, index) => {
                        return <Welcome key={index} arr={item} />
                    })
                }
            </div>
        )
    };
}


export default mixCom;
