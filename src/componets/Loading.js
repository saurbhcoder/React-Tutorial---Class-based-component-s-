import React, { Component } from 'react'
import loading from '../loading.gif'

export default class Loading extends Component {
    render() {
        return (
            <div style={{'text-align': 'center'}}>
                <img src={loading} style={{'text-align': 'center','height': '100px','width': '100px'}} alt='loading'/>
            </div>
        )
    }
}
