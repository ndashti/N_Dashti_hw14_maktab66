import '../color/color.scss';

import React, { Component } from "react";

class Color extends Component{

    render(){
        
        const myStyle={backgroundColor: this.props.title}
        console.log(myStyle)
        return(
            <div className="color-container">
                <div className="div-color" style={myStyle}></div>
                <label className='label-color'>{this.props.title}</label>
            </div>
        );
    }
}

export default Color;