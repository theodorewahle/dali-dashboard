export const GET_MEMBERS_SUCCESS = "GET_MEMBERS_SUCCESS";
export const GET_MEMBERS_FAIL = "GET_MEMBERS_FAIL";
export const GET_MEMBERS = "GET_MEMBERS";
export const FILTER_MEMBERS_SUCCESS = "FILTER_MEMBERS_SUCCESS";
export const SELECT_TERM_SUCCESS = "SELECT_TERM_SUCCESS";

export const getMembersSuccess = ({ members }) => ({
  type: GET_MEMBERS_SUCCESS,
  payload: { members }
});

export const getMembersFail = e => ({
  type: GET_MEMBERS_FAIL,
  error: e
});

export const filterMembersSuccess = ({ members }) => ({
  type: FILTER_MEMBERS_SUCCESS,
  payload: { members }
});

export const selectTermSuccess = ({ terms, members }) => ({
  type: SELECT_TERM_SUCCESS,
  payload: { terms, members }
});
