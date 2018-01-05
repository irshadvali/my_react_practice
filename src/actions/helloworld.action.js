import { SUCCESS, REQUESTING, ERROR } from "./constants.actions";
//Constants Declaration
export const GET_HELLOWORLD_LIST_REQUEST = "GET_HELLOWORLD_LIST_REQUEST";
export const GET_HELLOWORLD_LIST_SUCCESS = "GET_HELLOWORLD_LIST_SUCCESS";
export const GET_HELLOWORLD_LIST_FAILURE = "GET_HELLOWORLD_LIST_FAILURE";

export function getHellowWorldListRequest() {
  return {
    type: GET_HELLOWORLD_LIST_REQUEST,
    status: REQUESTING
  };
}

export function getHelloWorldListSuccess(helloWorldList) {
  return {
    type: GET_HELLOWORLD_LIST_SUCCESS,
    status: SUCCESS,
    helloWorldList
  };
}

export function getHelloWorldListFailure(error) {
  return {
    type: GET_HELLOWORLD_LIST_FAILURE,
    status: ERROR,
    error
  };
}

// Actions Get HelloWorld list

export function getHelloWorldList() {
  return async (dispatch, getState, { api }) => {
    dispatch(getHellowWorldListRequest());
    try {
      const result = await api.get("dihv7");
      const resultJson = await result.json();
      dispatch(getHelloWorldListSuccess(resultJson));
      console.log("vali==="+JSON.stringify(resultJson))
    } catch (e) {
      dispatch(getHelloWorldListFailure(e.message));
    }
  };
}



