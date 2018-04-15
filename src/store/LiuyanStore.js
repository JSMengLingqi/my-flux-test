import {EventEmitter} from 'events';//EventEmitter负责注册事件和触发事件
import assign from 'object-assign'; //属性拷贝

//assign(prop1, prop2, prop3),是将prop2和2上的属性和方法copy到prop1身上
const LiuyanStore = assign({}, EventEmitter.prototype, 
    {
        list:[],
        getList: function() { //取得list里面的数据
            return this.list;
        },
        addNewItem: function(data) { //添加list里面的数据
            this.list.push(data);
        },
        addChangeListener: function(callback){
            //注册回调函数
            //nodejs原生的功能，当有人触发"todoChange"的时候，自动执行第二个参数绑定的回调函数
            this.on("todoChange", callback);
        },
        emitChange: function(){
            //触发回调函数
            this.emit("todoChange");
        },
        removeChangeListener: function(callback) {
            //解除事件绑定
            this.remove("todoChange", callback);
        }        
    }
)

export default LiuyanStore;