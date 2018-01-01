import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "../style/DivStyle.css"
class DivStructure extends Component {
    render() {
      return (
        <div 
        style={
            {
            width:this.props.boxWidth,
            height:this.props.boxHeight, 
            background:this.props.backgroundColor,
            float: this.props.floatType}
            }
        >
        <p className="HelloWorld"style={{color:this.props.textColor}}>{this.props.colorName}</p>
        </div>
      );
    }
  }
  
  export default DivStructure;
  DivStructure.propTypes = {
    backgroundColor: PropTypes.string,
    floatType: PropTypes.string,
    boxHeight: PropTypes.string,
    boxWidth:PropTypes.string,
    colorName:PropTypes.string,
    textColor:PropTypes.string,
  };