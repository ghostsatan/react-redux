import React from 'react';
import App from './App';
import 'whatwg-fetch'
import Button from 'antd/es/button';
import './Page.css';

const init = {
    method: 'POST'
};
class Page1 extends React.Component {
  
    componentDidMount() {
        fetch('http://192.168.1.40:82/api/doWWW', init)
            .then(res => res.json())
            .then(json => { console.log(1111,json) })

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
        console.log(this, this.props);
        return (
            <div>
                <h1 style={mystyle}>This is Page 111111! your staff-id :{this.props.match.params.name}</h1>
                <div className="App">
                    <Button type="primary">Button</Button>
                </div>
            </div>
        );
    }
}

export default Page1;
