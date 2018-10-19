import axios from "axios";
import { getMembersSuccess, getMembersFail, GET_MEMBERS } from "./Actions";

export const getMembers = user => async dispatch => {
  console.log("got members");
  try {
    dispatch({ type: GET_MEMBERS });
    const url = "http://mappy.dali.dartmouth.edu/members.json";
    const request = {
      method: "GET",
      url
    };
    const response = await axios(request);
    console.log(response);

    dispatch(getMembersSuccess({ members: response.data }));
  } catch (e) {
    console.log(e);
    dispatch(getMembersFail(e));
  }
};
