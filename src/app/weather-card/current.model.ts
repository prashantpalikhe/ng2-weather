export class Current {
  constructor(public temperature: number,
              public apparentTemperature: number,
              public summary: string,
              public icon: string,
              public precipProbability: number,
              public humidity: number,
              public windSpeed: number,
              public windBearing: number,
              public cloudCover: number,
              public pressure: number,
              public period: string) {
  }
}
