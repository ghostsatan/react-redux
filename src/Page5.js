import React from 'react';
import { Table, Divider, Tag, Modal, Button } from 'antd';


import './Page.css';


const { Column, ColumnGroup } = Table;

class Page5 extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      users: [],
      isLoaded: true,
      visible: false
    });
  };
  showModal = () => {
    this.setState({
      visible: true,
    });
  };
  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };
  componentDidMount() {
    const _this = this;    //先存一下this，以防使用箭头函数this会指向我们不希望它所指向的对象。
    this.axios.get('https://5b5e71c98e9f160014b88cc9.mockapi.io/api/v1/lists')
      .then(function (response) {
        _this.setState({
          users: response.data,
          isLoaded: true
        });
      })
      .catch(function (error) {
        console.log(error);
        _this.setState({
          isLoaded: false,
          error: error
        })
      })
  }
  render() {
    return (
      //Table组件中加入rowKey属性
      <div>
        <Table dataSource={this.state.users} rowKey={row => row.id}>
          <Column title="First Name" dataIndex="title" key="title" />
          <Column title="First Name" dataIndex="id" key="id" />
          <Column title="Last Name" dataIndex="name" key="name" />
          <Column title="Age" dataIndex="age" key="age" />
          <Column title="Address" dataIndex="sex" key="sex" />


        </Table>

        <Button type="primary" onClick={this.showModal}>
          显示遮罩层
        </Button>
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </div>

    )
  }

}

export default Page5;