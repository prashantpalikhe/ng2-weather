import {Location} from './location';
import {NgRedux} from 'ng2-redux';
import {IAppState} from '../store/IAppState';
import {Inject, Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';

export const GET_LOCATION_BY_ADDRESS_START = 'location/BY_ADDRESS_START';
export const GET_LOCATION_BY_ADDRESS_SUCCESS = 'location/BY_ADDRESS_SUCCESS';

@Injectable()
export class LocationActions {
  constructor(private ngRedux: NgRedux<IAppState>,
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
      });
  }
}
