import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from "../../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {
  }
  // GET
  async getAllCities() {
    return await this.http.get(`${environment.backEndAPiBaseUrl}/city`).toPromise().then(
      (data: Response) => {
        return data;
      },
      (error) => {
        alert('Cidade não encontrada!')
        return error;
      }
    )
  }

  async saveCity(nameCity) {
    return await this.http.post(`${environment.backEndAPiBaseUrl}/city`, {
      name: nameCity
    }).toPromise().then((data: Response) => {
      return data;
    },
      (error) => {
        return error;
      })
  }

  async deleteCity(id) {
    return await this.http.delete(`${environment.backEndAPiBaseUrl}/city/${id}`).toPromise().then((data: Response) => {
      return data;
    },
      (error) => {
        return error;
      })
  }

  // GET
  async getForecastFive(id) {
    return await this.http.get(`${environment.weatherApiBaseUrl}/forecast`, {
      params: {
        id: id,
        APPID: environment.weatherAPiKey,
        units: "metric",
        lang: "pt"
      }
    }).toPromise().then(
      (data: Response) => {
        return data;
      },
      (error) => {
        return error;
      }
    )
  }
}