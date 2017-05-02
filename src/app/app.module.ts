import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { StartViewComponentComponent } from './start-view-component/start-view-component.component';
import { ForecastComponentComponent } from './forecast-component/forecast-component.component';
import { ForecastDataService } from './forecast-service.service';

const routes: Routes = [
  {
    'path': '',
    component: StartViewComponentComponent
  },
  {
    'path': 'forecast',
    component: ForecastComponentComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    StartViewComponentComponent,
    ForecastComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ForecastDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
