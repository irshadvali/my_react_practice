import React, { Component } from 'react';
import "../style/DivStyle.css"
import DivStructure from "./DivStructure"
import { ListGroup, Col } from 'react-bootstrap';
var ASAS;
class HelloWorld extends Component {
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

  }

 componentDidMount() {
    this.getData();
    }

  render() {
    return (
      console.log("irshad===" + JSON.stringify(this.props.helloWorldList)),
      alert("irshad===" + JSON.stringify(this.props.helloWorldList)),
      <div></div>
      //ASAS =this.props.helloWorldList,
      // <Col md={6}>
      //   <ListGroup>
      //     {
      //       ASAS.map((aaa, index) =>
      //         <DivStructure
      //           key={index}
      //           index={index}
      //           value={aaa}
      //         />
      //       )
      //     }
      //   </ListGroup>
      // </Col>
    );
  }
}

export default HelloWorld;
