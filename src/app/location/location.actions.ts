import {Location} from './location';
import {NgRedux} from 'ng2-redux';
import {IAppState} from '../store/IAppState';
import {Inject, Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {WeatherActions} from "../weather/weather.actions";

export const GET_LOCATION_BY_ADDRESS_START = 'location/BY_ADDRESS_START';
export const GET_CURRENT_LOCATION_START = 'location/CURRENT_LOCATION_START';
export const GET_LOCATION_BY_ADDRESS_SUCCESS = 'location/BY_ADDRESS_SUCCESS';
export const GET_CURRENT_LOCATION_SUCCESS = 'location/CURRENT_LOCATION_SUCCESS';

@Injectable()
export class LocationActions {
  constructor(private ngRedux: NgRedux<IAppState>,
              private weatherActions: WeatherActions,
              @Inject('IP_API_URL') private ipApiUrl: string,
              @Inject('GEOCODE_API_URL') private geocodeApiUrl: string,
              @Inject('GOOGLE_API_KEY') private googleApiKey: string,
              private http: Http) {

  }

  getLocationByAddress(address: string) {
    this.ngRedux.dispatch({
      type: GET_LOCATION_BY_ADDRESS_START
    });

    this.http.get(`${this.geocodeApiUrl}?address=${address}&key=${this.googleApiKey}`)
      .subscribe((response: Response) => {
        const result = response.json().results[0];

        const location: Location = {
          name: result.formatted_address,
          latitude: result.geometry.location.lat,
          longitude: result.geometry.location.lng
        };

        this.ngRedux.dispatch({
          type: GET_LOCATION_BY_ADDRESS_SUCCESS,
          location
        });

        this.weatherActions.getWeather();
      });
  }

  getCurrentLocation() {
    this.ngRedux.dispatch({
      type: GET_CURRENT_LOCATION_START
    });

    return this.http.get(this.ipApiUrl)
      .subscribe((response: Response) => {
        const result = response.json();

        const location: Location = {
          name: `${result.city}, ${result.country}`,
          latitude: result.lat,
          longitude: result.lon
        };

        this.ngRedux.dispatch({
          type: GET_CURRENT_LOCATION_SUCCESS,
          location
        });

        this.weatherActions.getWeather();
      });
  }
}
