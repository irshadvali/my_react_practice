import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "../style/DivStyle.css"
import { Link } from 'react-router-dom';
class DivStructure extends Component {
  constructor(props) {
    super(props);
    this.state = {
     valueFromFirstScreen:""
    };
  }
  onClick = () => {
    if (this.props.onClick) {
      this.props.onClick();
    }
  };

  componentWillMount(){
    var str = this.props.colorName;
   // alert(str.replace(/#/, ""));
    var newValue=str.replace(/#/, "")
    this.setState({
     valueFromFirstScreen:newValue
      
    })
  }
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
        style={{color:this.props.textColor}}>Click on <Link to={"/"+this.props.goToNextScreen+ "/"+this.state.valueFromFirstScreen}>{this.props.colorName}</Link></p>
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
    goToNextScreen:PropTypes.string,
    valuePass:PropTypes.string,
  };