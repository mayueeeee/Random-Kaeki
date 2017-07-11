import React, { Component } from 'react';
import { Button, Checkbox, Row, Col,Alert,Layout,Icon } from 'antd';
import './App.css';

const { Header, Content, Footer } = Layout;
const data = [['ญี่ปุ่น','ก๋วยเตี๋ยวข้างร้านญี่ปุ่น','พี่เอ','ข้าวไข่เจียว','เซเว่น'],
              ['ข้าวยำไก่แซบ','ราดหน้าเคี้ยงเอ็มไพร','ตามสั่ง1','ตามสั่ง2(ร้านคุณยายมั้ง)','แม่งอร่อย','เตี๋ยวไก่บุฟเฟ่ต์','ข้าวผัด','ข้าวมันไก่','ตามสั่งข้างหน้า','เพลินจิต','ส้มตำในโรงอาหาร','ส้มตำหน้าซอย','ก๋วยเตี๋ยวไก่มะระ','ยำหน้าซอย','ก๋วยเตี๋ยวหมูน้ำตก','หอยทอดกระทะร้อน','อิ่มเอมสเต็ก'],
              ['ข้าวมันไก่','แฟมมิลี่มาร์ท'],
              ['ข้าวยำไก่แซบ','แม่งอร่อย','ก๋วยจั๊บญวณ','ก๋วยเตี๋ยวเนื้อ','โจ๊ก','ข้าวมันไก่','ก๋วยเตี๋ยวหมูน้ำตก','ยำ','อาลอง','โกอิน','หอยทอด ผัดไท','โฟกัส','ร้านญี่ปุ่น','อิ่มเอมสเต็ก','กระทะร้อน','ครัวต้นน้ำ','ร้านประจำ']]
const CheckboxGroup = Checkbox.Group;
const plainOptions = ['เกกี1', 'เกกี2', 'เกกี3','เกกี4'];
class App extends Component {
  state = {
    checkedList: plainOptions,
    indeterminate: true,
    checkAll: true,
    result: '',
    resultAlley: '',
    showResult: false

  };
  render() {
    const showResult = this.state.showResult
    let alert = null    
    if (showResult) {
      alert = <Alert className="result" message={'ร้าน'+this.state.result+' เกกี'+this.state.resultAlley} type="info" />
    } 
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
        <Row>
          <Col xs={{ span: 24, offset: 0 }} lg={{ span: 8, offset: 8 }}>
            {alert}        
          </Col>
        </Row>
        <Row>
          <br/>
          <a href="https://github.com/nutnokia/random-kaeki">
            <Icon type="github" style={{ fontSize: 26 , color: '#000' }} />
          </a>          
        </Row>
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
  random = (e) =>{
    let row,col
    row = Math.floor((Math.random() * 4))
    col = Math.floor((Math.random() * data[row].length))
    // console.log('row'+row+'lenght'+data[row].length)
    // alert(data[row][col])
    this.setState({
      result: data[row][col],
      resultAlley: row+1,
      showResult: true
    })
  }
}

export default App;
