import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HttpService } from '../../services/http.service';
import { Forecast } from '../../models/forecast'

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {
  
  forecastArr: Forecast[] = [];
  fiveDays;
  cityName;
  constructor(private route: ActivatedRoute, private http: HttpService) { 
  }
  
  
  async ngOnInit() {
   const id = await this.route.snapshot.paramMap.get('id');
   this.fiveDays = await this.http.getForecastFive(id);
   this.cityName = this.fiveDays.city.name;
   let indexAux
   for(let i = 0;  i < this.fiveDays.list.length; i = i + 8){
    this.getDataForecas(i);
   }
  }

  async getDataForecas(index){
    let forecast = new Forecast();
    forecast.cidade = this.fiveDays.city.name;
    forecast.clima = this.fiveDays.list[index].weather[0].description;
    forecast.icon = "//openweathermap.org/img/wn/"+this.fiveDays.list[index].weather[0].icon+"@2x.png";
    forecast.data = this.fiveDays.list[index].dt_txt;
    forecast.humidade = this.fiveDays.list[index].main.humidity;
    forecast.id = this.fiveDays.city.id;
    forecast.max = this.fiveDays.list[index].main.temp_max;
    forecast.min = this.fiveDays.list[index].main.temp_min;
    forecast.chuva = this.fiveDays.list[index].main.temp_kf;
    forecast.vento = this.fiveDays.list[index].wind.speed;
    if(forecast){
      this.forecastArr.push(forecast);
    }
  }

}
