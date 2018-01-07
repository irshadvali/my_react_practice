import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "../style/DivStyle.css"
import { Link } from 'react-router-dom';
class DivStructure extends Component {
  onClick = () => {
    if (this.props.onClick) {
      this.props.onClick();
    }
  };
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
        <p className="HelloWorld"
         onClick={this.props.onClick}
        style={{color:this.props.textColor}}> <Link to={'/SecondScreen'}>{this.props.colorName}</Link></p>
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
    onClick: PropTypes.func,
  };