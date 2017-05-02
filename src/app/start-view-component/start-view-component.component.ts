import { Component, OnInit } from '@angular/core';
import { ForecastDataService } from '../forecast-service.service';
@Component({
  selector: 'app-start-view-component',
  templateUrl: './start-view-component.component.html',
  styleUrls: ['./start-view-component.component.css']
})
export class StartViewComponentComponent implements OnInit {
  city: string;
  imgUrl= './src/logo.jpg';
  constructor(private forecastData: ForecastDataService) { }

  ngOnInit() {
  }

  getCity(): void {
    let dataObj = this.forecastData.getForecast(this.city);

    dataObj.then(data => {
      localStorage.setItem('current', JSON.stringify(data.current));
      localStorage.setItem('location', JSON.stringify(data.location));
      localStorage.setItem('forecast', JSON.stringify(data.forecast));
    });
  }

}
