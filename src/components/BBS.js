import React, {Component} from 'react'
import './bbs.css'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class BBS extends Component {
    render() {
        return (
            <div>
                <div className="liuyan_list">
                    <ul>
                        <ReactCSSTransitionGroup
                          transitionName="example"
                          transitionEnterTimeout={500}
                          transitionLeaveTimeout={300}>
                        {
                            this.props.liuyanList.map(function(item, index){
                                return <li key={index}>{item.content}<br/>{item.username}</li>
                            })
                        }
                        </ReactCSSTransitionGroup>
                    </ul>
                    <div ref="bottomMark"></div>
                </div>
                留言：<input type="text" ref="content" /><br/>
                姓名：<input type="text" ref="username" /><br/>
                {/* 传递参数时使用箭头函数传递 */}
                <button onClick={()=>{
                    this.props.addLiuyan(this.refs.content.value, this.refs.username.value)
                    setTimeout(()=>{this.refs.bottomMark.scrollIntoView()},100);
                    }}>留言</button>
            </div>
        )
    }
}

export default BBS;