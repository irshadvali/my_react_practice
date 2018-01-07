import React, { Component } from 'react';
import "../style/DivStyle.css"        
class ThirdScreen extends Component {
    constructor(props) {
      super(props);
      this.state = {
       boxheight: "500px",
      boxwidth: "100%",
      divBackground:""
  
      };
    }

  
    componentWillMount(){
       
        this.setState({
            divBackground: "#"+this.props.match.params.filter
        })
    }
      render() {
        return (
          <div
         
          style={
              {
              width:this.state.boxwidth,
              height:this.state.boxheight, 
              background:this.state.divBackground,
            }
              }
          >
          <p className="HelloWorld"
          style={{color:"#fff"}}> {this.state.divBackground}</p>
          </div>
        );
      }
    }
    export default ThirdScreen;