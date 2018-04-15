import AppDispatcher from '../dispatcher/AppDispatcher'

const LiuyanAction = {
    addLiuyan: function(content, username) {
        //dispatch出去的东西必须是一个对象，这个对象要包含两key值
        //固定：actionType是要做的业务，第二个key名称无所谓
        AppDispatcher.dispatch({
            actionType: "ADD_LIUYAN", //你是谁，你要做什么
            text: {
                content: content,
                username: username
            } //要往外送出的数据
        });
    }
}

export default LiuyanAction;