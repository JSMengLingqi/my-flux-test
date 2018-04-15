import AppDispatcher from '../dispatcher/AppDispatcher'

const ToDoListAction = {
    addTodo: function(data) {
        //dispatch出去的东西必须是一个对象，这个对象要包含两key值
        //固定：actionType是要做的业务，第二个key名称无所谓
        AppDispatcher.dispatch({
            actionType: "ADD_TODO_ITEM", //你是谁，你要做什么
            text: data //要往外送出的数据
        });
    }
}

export default ToDoListAction;