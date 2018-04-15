import {Dispatcher} from 'flux'
import ToDoListStore from '../store/ToDoListStore'
import LiuyanStore from '../store/LiuyanStore'

//实例化一下AppDispatcher
const AppDispatcher = new Dispatcher();

//通过register注册回调函数，回调函数中根据业务种类把数据传递给对应的store中。
AppDispatcher.register(function (action) {
  switch(action.actionType) {
    case 'ADD_TODO_ITEM':
        ToDoListStore.addNewItem(action.text);
        //发送通知,不要忘了
        ToDoListStore.emitChange();
        break;
    case 'REMOVE_TODO_ITEM':
        //将来在这里扩充其他功能
        break;
    case "ADD_LIUYAN":
        LiuyanStore.addNewItem(action.text);
        // 发送通知，不要忘记调用这个方法
        LiuyanStore.emitChange();
        break;
    default:
      // no op
  }
})

export default AppDispatcher;