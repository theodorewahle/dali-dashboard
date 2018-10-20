import {
  GET_MEMBERS_SUCCESS,
  GET_MEMBERS_FAIL,
  GET_MEMBERS,
  FILTER_MEMBERS_SUCCESS,
  SELECT_TERM_SUCCESS
} from "./Actions";

const INITIAL_STATE = {
  user: null,
  members: [],
  allMembers: [],
  loading: false,
  terms: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_MEMBERS_SUCCESS:
      return {
        ...state,
        members: action.payload.members,
        allMembers: action.payload.members,
        loading: false
      };
    case FILTER_MEMBERS_SUCCESS:
      return {
        ...state,
        members: action.payload.members,
        allMembers: action.payload.members,
        loading: false
      };
    case SELECT_TERM_SUCCESS:
      return {
        ...state,
        terms: action.payload.terms,
        members: action.payload.members
      };
    case GET_MEMBERS_FAIL:
      return INITIAL_STATE;
    case GET_MEMBERS:
      return { ...state, loading: true };
    default:
      return state;
  }
};
