import React, { Component } from 'react'
import './profile.css'
export default class profile extends Component {
    render() {
        return (
            <div className="cardProfile">
                <img src="/whitebeard.jpg" alt="profilePhoto" width="10%"  />
                <div>
                <h4>FullName:ilyes triki</h4>
                <h4>Email:trikimedilyess@gmail.com</h4>
                </div>
            </div>
        )
    }
}
