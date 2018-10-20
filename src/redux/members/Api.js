import axios from "axios";
import {
  getMembersSuccess,
  getMembersFail,
  filterMembersSuccess,  GET_MEMBERS } from "./Actions";

export const getMembers = () => async dispatch => {
  try {
    dispatch({ type: GET_MEMBERS });
    const url = "http://mappy.dali.dartmouth.edu/members.json";
    const request = {
      method: "GET",
      url
    };
    const response = await axios(request);
    dispatch(getMembersSuccess({ members: response.data }));
  } catch (e) {
    dispatch(getMembersFail(e));
  }
};

export const filterMembers = filter => async dispatch => {
  try {
    dispatch({ type: GET_MEMBERS });
    const url = "http://mappy.dali.dartmouth.edu/members.json";
    const request = {
      method: "GET",
      url
    };
    const response = await axios(request);
    console.log(filter)
    const filteredMembers = response.data.filter(member => {
      const name = member.name.toLowerCase()
      const term = filter.toLowerCase()
      return name.startsWith(term)
    }
    );
    dispatch(filterMembersSuccess({ members: filteredMembers }));
  } catch (e) {
    dispatch(getMembersFail(e));
  }
};
