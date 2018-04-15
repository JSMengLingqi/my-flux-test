import React, {Component} from 'react'

class TodoList extends Component {
    render() {
        return (
            <div>
                <input type="text" ref="ipt" />
                {/* 传递参数时使用箭头函数传递 */}
                <button onClick={()=>this.props.addTodoItem(this.refs.ipt.value)}>add todo</button>
                <ul>
                    {
                        this.props.list.map(function(item, index){
                            return <li key={index}>{item}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default TodoList;