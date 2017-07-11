import React, { Component } from 'react';
import logo from './logo.svg';
import { Button, Checkbox, Row, Col } from 'antd';
import './App.css';

const data = [['ร้านญี่ปุ่น','ก๋วยเตี๋ยวข้างร้านญี่ปุ่น','ร้านพี่เอ'],[]]
const CheckboxGroup = Checkbox.Group;
const plainOptions = ['เกกี1', 'เกกี2', 'เกกี3','เกกี4'];
class App extends Component {
  state = {
    checkedList: plainOptions,
    indeterminate: true,
    checkAll: false,
  };
  render() {
    return (
      <div className="App">
        <h1>แดกเชี่ยไรดี</h1>
        <div className="select-checkbox">
          <Checkbox
            indeterminate={this.state.indeterminate}
            onChange={this.onCheckAllChange}
            checked={this.state.checkAll}
          >
            เลือกหมดเบยย
          </Checkbox>
        </div>
        <br />
        <CheckboxGroup options={plainOptions} value={this.state.checkedList} onChange={this.onChange} />
        <Button type="primary" size="large" className="random-btn" onClick={this.random}>สุ่มดิสัส กูหิว</Button>
        
      </div>
    );
  }
  onChange = (checkedList) => {
    this.setState({
      checkedList,
      indeterminate: !!checkedList.length && (checkedList.length < plainOptions.length),
      checkAll: checkedList.length === plainOptions.length,
    });
  }
  onCheckAllChange = (e) => {
    this.setState({
      checkedList: e.target.checked ? plainOptions : [],
      indeterminate: false,
      checkAll: e.target.checked,
    });
  }
  random(){
    
    alert("bkbbkjokb")
  }
}

export default App;
