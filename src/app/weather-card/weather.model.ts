export class Weather {
  high: number;
  low: number;
  day: string;

  constructor(high: number, low: number, day: string) {
    this.high = high;
    this.low = low;
    this.day = day;
  }
}
