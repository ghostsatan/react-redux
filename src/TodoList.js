import React, { Component } from 'react';
import store from './store/index'
import axios from 'axios'
import { Input, Button, List } from 'antd'

import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM,GET_LIST } from './store/actionTypes'
import { getListAction,changeInputAction } from './store/actionCreators'

const data = [
    '早8点开晨会，分配今天的开发工作',
    '早9点和项目经理作开发需求讨论会',
    '晚5:30对今日代码进行review'
]
class TodoList extends Component {
    constructor(props) {
        super(props)
        console.log(11111, store.getState())
        this.state = store.getState();
        this.changeInputValue = this.changeInputValue.bind(this)
        this.clickBtn = this.clickBtn.bind(this)

        this.storeChange = this.storeChange.bind(this)
        store.subscribe(this.storeChange)
    }
    componentDidMount() {
        axios.post('http://192.168.1.40:82/api/doWWW').then((res) => {
            // console.log("接口数据", res.data.data.list)
            const data = res.data.data;
            // const action = {
            //     type:"getList",
            //     data
            // }
            const action = getListAction(data)
            store.dispatch(action)
        })
    }
    changeInputValue(e) {
        // const action = {
        //     type: "CHANGE_INPUT",
        //     value: e.target.value
        // }
        // store.dispatch(action)
        // console.log(action)
        const action = changeInputAction(e.target.value)
        store.dispatch(action)
    }

    storeChange() {
        this.setState(store.getState())
    }
    deleteItem(index) {
        const action = {
            type: "DELETE_ITEM",
            index
        }
        store.dispatch(action)
    }
    clickBtn() {
        const action = {
            type: "addItem"
        }
        store.dispatch(action)
    }
    render() {
        return (
            <div>
                <div>
                    <Input placeholder={this.state.inputValue} style={{ width: '250px', margin: '10px' }} onChange={this.changeInputValue} />
                    <Button type="primary" onClick={this.clickBtn}>增加</Button>
                </div>
                <div style={{ margin: '10px', width: '300px' }}>
                    <List
                        bordered
                        dataSource={this.state.list}
                        renderItem={(item, index) => (<List.Item onClick={this.deleteItem.bind(this, index)}>{item}</List.Item>)}
                    />
                </div>
            </div>
        );
    }
}
export default TodoList;
