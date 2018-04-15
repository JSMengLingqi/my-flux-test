import React, { Component } from 'react';
import './App.css'
import ToDoListStore from './store/ToDoListStore';
import ToDoListAction from './action/ToDoListAction';
import ToDoLIst from './components/ToDoLIst'
import LiuyanStore from './store/LiuyanStore';
import LiuyanAction from './action/LiuyanAction';
import BBS from './components/BBS'

class App extends Component {
  constructor(){
    super();
    this.state = {
      list:ToDoListStore.getList(),
      liuyanList: LiuyanStore.getList()
    }
    //除了生命周期以外的方法，最好修正指针
    this.reRenderPage = this.reRenderPage.bind(this);
    this.addTodoItem = this.addTodoItem.bind(this);
    this.addLiuyan = this.addLiuyan.bind(this);
  }
  //即将载入dom
  componentDidMount() {
    //注册回调函数，当store中的数据改变的时候，会主动呼起这个注册的回调函数
    ToDoListStore.addChangeListener(this.reRenderPage);
    LiuyanStore.addChangeListener(this.reRenderPage);
  }
  componentWillUnmount() {
    ToDoListStore.removeChangeListener(this.reRenderPage);
    LiuyanStore.removeChangeListener(this.reRenderPage);
  }
  //拿到数据,重新绘制画面
  reRenderPage(){
    this.setState({
      list: ToDoListStore.getList(),
      liuyanList: LiuyanStore.getList()
    })
  }
  addTodoItem(data) {
    ToDoListAction.addTodo(data)
  }
  addLiuyan(content, username) {
    LiuyanAction.addLiuyan(content, username)
  }
  render() {
    return (
      <div>
        <BBS liuyanList = {this.state.liuyanList} addLiuyan = {this.addLiuyan}/>
      </div>
    )
  }
}

export default App;
