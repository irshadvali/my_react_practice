import * as helloWorldAction from "../actions/helloworld.action";

const helloworld = (
  state = {
    helloWorldList: null,
    loading: false,
    error: null,
    isLoggedIn: false,
    status: ""
  },
  action
) => {
  switch (action.type) {
  //Reducers for Get WORLDLIST
  case helloWorldAction.GET_HELLOWORLD_LIST_REQUEST:
    return Object.assign({}, state, {
      loading: true,
      status: action.status
    });
  case helloWorldAction.GET_HELLOWORLD_LIST_SUCCESS:
    return Object.assign({}, state, {
        helloWorldList: action.helloWorldList,
      loading: false,
      isLoggedIn: true,
      status: action.status
    });

  case helloWorldAction.GET_HELLOWORLD_LIST_FAILURE:
    return Object.assign({}, state, {
      error: action.error,
      helloWorldList: null,
      loading: false,
      status: action.status
    });

  default:
    return state;
  }
};
export default helloworld;
