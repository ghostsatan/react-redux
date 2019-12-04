import React from 'react';
import App from './App';
import Button from 'antd/es/button';
import './Page.css';

class Child extends React.Component {
    constructor (props){
        super(props);
        this.state={
			msg:"这是子组件的state变量",
			name:"son",
			age:"2121212"
		}

    }
    change =()=>{
        this.props.callback(this.state.msg,this.state.name,this.state.age);
    }

    render() {
        let mystyle = {
            width: '100%',
            height: '80px',
            backgroundColor: 'pink',
            fontSize: '24px',
            textAlign: 'center',//垂直居中
            lineHeight: '80px'//水平居中
        };
        // console.log(this, this.props);
        return (
            <div>
    <h1 style={mystyle}>{this.props.name}</h1>
        <h2>{this.props.age}</h2>
                <div className="App">
                    <Button type="primary" onClick={this.change}>点击试试</Button>
                </div>
            </div>
        );
    }
}

export default Child;
