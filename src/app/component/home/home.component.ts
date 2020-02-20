import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { Router } from '@angular/router';
import { SearchCityPipe } from '../../pipes/search-city.pipe';
import { City } from 'src/app/models/city';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpService, private router: Router) {

  }
  async ngOnInit() {
    await this.getAllCities();
  }
  cidades = [];
  nomeCidade = "";
  searchCity ="";

  async postCity() {
   await this.http.saveCity(this.nomeCidade);
   await this.getAllCities();
  }

  async getAllCities() {
    this.cidades = []
    let result =  await this.http.getAllCities()
    for(let i = 0; i < result.length; i++) {
      let city = new City()
      city.apiId = result[i].apiCityCode;
      city.name = result[i].name;
      city.id = result[i].id;
      this.cidades.push(city);
    }
  }

  async remove(id) {
    await this.http.deleteCity(id);
    await this.getAllCities();
  }
  
  forecast(id) {
    this.router.navigateByUrl('/forecast/' + id);
  };

}
