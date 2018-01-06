import {GET_LOCATION_BY_ADDRESS_SUCCESS} from './location.actions';

export function locationReducer(state: Location = null, action) {
  switch (action.type) {
    case GET_LOCATION_BY_ADDRESS_SUCCESS:
      return action.location;

    default:
      return state;
  }
}
