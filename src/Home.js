import React from 'react';
import { Link } from 'react-router-dom';
import { Router, Route, Switch } from "react-router";
import { Rate,Button } from 'antd';
import './Page.css';

const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
class Home extends React.Component {
    constructor(props) {
        super(props);
      
        this.state = { value: 3 };
    }
    handleChange = value => {
        this.setState({ value });
    };
    render() {
        const { value } = this.state;
        return (
            <div>
                <p>This is Home!</p>
                <Link to="/Page1/Moshow" style={{ color: 'black' }}>
                    <div>点击跳转到Page1</div>
                </Link>
                <Link to="/Page2" style={{ color: 'black' }}>
                    <div>点击跳转到Page2</div>
                </Link>
                <Link to="/Page3" style={{ color: 'black' }}>
                    <div>点击跳转到Page3</div>
                </Link>
                <Link to="/Page4" style={{ color: 'black' }}>
                    <div>点击跳转到Page4</div>
                </Link>
                <Link to="/Page5" style={{ color: 'black' }}>
                    <div>点击跳转到Page5</div>
                </Link>
                <Link to="/TodoList" style={{ color: 'black' }}>
                    <h1>点击跳转到TodoList</h1>
                </Link>
                <Link to="/mixCom" style={{ color: 'black' }}>
                    <h1>点击跳转到多组件嵌套试试看</h1>
                </Link>
                <span>
                    <Rate tooltips={desc} onChange={this.handleChange} value={value} />
                    {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}
                </span>
            </div>

        );
    }
}

export default Home;
