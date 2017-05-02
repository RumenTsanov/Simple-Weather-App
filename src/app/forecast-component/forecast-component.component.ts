import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forecast-component',
  templateUrl: './forecast-component.component.html',
  styleUrls: ['./forecast-component.component.css']
})
export class ForecastComponentComponent implements OnInit {
private showClass: boolean = false;
private showClass1: boolean = true;

private current: any;
private location: any;
private forecast: any;
private forecastDay: [any];
  constructor() { 
  }

  ngOnInit() {
    this.current = JSON.parse(localStorage.getItem('current'));
    this.location = JSON.parse(localStorage.getItem('location'));
    this.forecast = JSON.parse(localStorage.getItem('forecast'));
    this.forecastDay = this.forecast.forecastday[0].hour;
    console.log(this.current);
    console.log(this.location);
    console.log(this.forecast);
  }

}
