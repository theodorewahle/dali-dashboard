export const GET_MEMBERS_SUCCESS = "GET_MEMBERS_SUCCESS";
export const GET_MEMBERS_FAIL = "GET_MEMBERS_FAIL";
export const GET_MEMBERS = "GET_MEMBERS";

export const getMembersSuccess = ({ members }) => ({
  type: GET_MEMBERS_SUCCESS,
  payload: { members }
});

export const getMembersFail = e => ({
  type: GET_MEMBERS_FAIL,
  error: e
});
