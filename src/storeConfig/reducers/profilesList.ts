import { Reducer } from 'redux';

export interface ProfilesListsState {
  list: Array<{
    name: string;
    avatar: string;
    id: string;
  }>;
}

const initalStalte: ProfilesListsState = { list: [] };
// eslint-disable-next-line default-param-last
const profilesLists: Reducer = (state = initalStalte, action) => {
  switch (action.type) {
    case 'GET_PROFILE_LIST_OK':
      return { ...state, list: action.payload };
    default:
      return state;
  }
};

export default profilesLists;
