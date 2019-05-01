import React, { Component } from "react";
import "../style/DivStyle.css";
import DivStructure from "./DivStructure";
import { ListGroup, Col } from "react-bootstrap";
import DataResult from "../utils/DataResult";
import { Link } from 'react-router-dom';


var ASAS;
class HelloWorld extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxheight: "150px",
      boxwidth: "50%",
      data: [],
      screen:"ThirdScreen"
    };
  }
  getData() {
    this.props.getHelloWorldList();
  }
  componentWillMount() {
    this.getData();

  }


  componentWillReceiveProps(nextProps) {
    if (nextProps.helloWorldList != null) {
      this.setState({
        data:nextProps.helloWorldList.colorlist
      })
    }
  }

  callColorName(text) {
    // alert(text) 
  }

  render() {
    if (!this.props.loading) {
      return (
        
        <div>
          <Col md={6}>
            <ListGroup>
              {this.state.data.map((todo, index) => (
               
                <DivStructure
                  key={index}
                  index={index}
                  backgroundColor={todo.colorcode}
                  floatType={"left"}
                  boxHeight={this.state.boxheight}
                  boxWidth={this.state.boxwidth}
                  colorName={todo.colorname}
                  textColor={"#fff"}
                  goToNextScreen={this.state.screen}
                  onClick={() => this.callColorName(todo.colorname)}
                  valuePass={"khathija"}
                />
               
              ))}
            </ListGroup>
          </Col>
        </div>
      );
    } else {
      return (
        <div>
          <p>{"Loading"}</p>
        </div>
      );
    }
  }
}

export default HelloWorld;