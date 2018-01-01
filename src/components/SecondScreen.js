import React, { Component } from 'react';
import "../style/DivStyle.css"
import DivStructure from "./DivStructure"

class SecondScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
        boxheight: '150px',
        boxwidth: '50%',
        data: []
    };
}
getData() {
  this.props.getHelloWorldList();
//   https://api.myjson.com/bins/1ceu9f
    
}

componentDidMount() {
  this.getData();
 
}

  render() {
    return (
      console.log("irshad==="+JSON.stringify(this.props.helloWorldList)),
      <div  className="HelloWorld-header">
   
     <DivStructure 
      backgroundColor={"#2ecc71"}
      floatType={"left"}
      boxHeight={this.state.boxheight}
      boxWidth={this.state.boxwidth}
      colorName={"#2ecc71"}
      textColor={"#fff"}
     />
      <DivStructure 
      backgroundColor={"#8e44ad"}
      floatType={"right"}
      boxHeight={this.state.boxheight}
      boxWidth={this.state.boxwidth}
      colorName={"#8e44ad"}
      textColor={"#fff"}
     />
      <DivStructure 
      backgroundColor={"#7f8c8d"}
      floatType={"left"}
      boxHeight={this.state.boxheight}
      boxWidth={this.state.boxwidth}
      colorName={"#7f8c8d"}
      textColor={"#fff"}
     />
      <DivStructure 
      backgroundColor={"#C2185B"}
      floatType={"right"}
      boxHeight={this.state.boxheight}
      boxWidth={this.state.boxwidth}
      colorName={"#C2185B"}
      textColor={"#fff"}
     />
     <DivStructure 
      backgroundColor={"#27ae60"}
      floatType={"left"}
      boxHeight={this.state.boxheight}
      boxWidth={this.state.boxwidth}
      colorName={"#27ae60"}
      textColor={"#fff"}
     />
      <DivStructure 
      backgroundColor={"#e74c3c"}
      floatType={"right"}
      boxHeight={this.state.boxheight}
      boxWidth={this.state.boxwidth}
      colorName={"#e74c3c"}
      textColor={"#fff"}
     />
      </div>
    );
  }
}

export default SecondScreen;
