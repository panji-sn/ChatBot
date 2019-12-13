import React from 'react'
import {connect} from 'react-redux'
import {sendMessage} from './store'

function ChatBot (props) {
    let { feed,sendMessage } = props
    return (
        <div>
            <h1>Hello Chat</h1>
            <ul>
    {feed.map((test, i) => <li key={i}>{test.text}</li>)}
            </ul>
            <input type='text' onKeyDown={(e) => e.keyCode===13?sendMessage(e.target.value):null}></input>
        </div>
    )
}

const mapStateToProps = state => ({
    feed:state
})

export default connect(mapStateToProps, {sendMessage})(ChatBot)