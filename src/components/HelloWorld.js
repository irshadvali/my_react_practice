import React, { Component } from 'react';
import "../style/DivStyle.css"
import DivStructure from "./DivStructure"
import { ListGroup, Col } from 'react-bootstrap';
import DataResult from "../utils/DataResult"
var ASAS;
class HelloWorld extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxheight: '150px',
      boxwidth: '50%',
      data: DataResult.colorlist
    };
  }
  getData() {
    this.props.getHelloWorldList();

  }
componentWillMount(){
  this.getData();
}
 componentDidMount() {
    this.getData();
    }

  render() {
    return (
      // console.log("irshad===" + JSON.stringify(this.props.helloWorldList)),
      // alert("irshad===" + JSON.stringify(this.props.helloWorldList)),
      <Col md={6}>
            <ListGroup>
                {
                    this.state.data.map((todo, index) => 
                    <DivStructure
                    key={index}
                    index={index}
                    backgroundColor={todo.colorcode}
                    floatType={"left"}
                    boxHeight={this.state.boxheight}
                    boxWidth={this.state.boxwidth}
                    colorName={todo.colorname}
                    textColor={"#fff"}/>
                    )
                }
            </ListGroup>
        </Col>
    );
  }
}

export default HelloWorld;
