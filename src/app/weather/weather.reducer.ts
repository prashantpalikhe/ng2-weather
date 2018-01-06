import {Weather} from './weather';
import {GET_WEATHER_SUCCESS} from './weather.actions';

export function weather(state: Weather = null, action) {
  switch (action.type) {
    case GET_WEATHER_SUCCESS:
      return action.weather;

    default:
      return state;
  }
}
