import { connect } from "react-redux";
import HelloWorld from "../components/HelloWorld";
import { getHelloWorldList } from "../actions/helloworld.action";

const mapStateToProps = state => {
  return {
    helloWorldList: state.helloWorldReducer.helloWorldList,
    error: state.helloWorldReducer.error,
    loading: state.helloWorldReducer.loading
  };
};

const mapDispatchToProps = dispatch => {
    return {
        getHelloWorldList: () => {
        dispatch(getHelloWorldList());
      }
    };
  };

const HelloWorldContainer = connect(mapStateToProps, mapDispatchToProps)(
    HelloWorld
);
export default HelloWorldContainer;