import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IDeliveryPartner } from '../Interfaces/DelivaryPartner';
import { Xliff } from '@angular/compiler';
import { ICart } from '../Interfaces/Cart';
import { IRestaurant } from '../Interfaces/Restaurant';

@Injectable({
  providedIn: 'root'
})
export class FoodieService {

  restaurants: IRestaurant[];
  constructor(private http: HttpClient) { }

  getRestaurants(): Observable<IRestaurant[]> {
    return this.http.get<IRestaurant[]>('https://foodiecloud.azurewebsites.net/api/foodie/getRestaurants');
  }

  login(use: string, pass: string): Observable<string> {
    let res = this.http.get<string>('https://foodiecloud.azurewebsites.net/api/foodie/UserLogin?usr=' + use + '&pass=' + pass);
    return res;
  }

  getCart(): Observable<ICart[]> {
    return this.http.get<ICart[]>('https://localhost:44328/api/Foodie/GetCart');
  }
}
