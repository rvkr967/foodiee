import { Component, OnInit } from '@angular/core';
import { IRestaurant } from '../../Interfaces/Restaurant';
import { FoodieService } from '../foodie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homenew',
  templateUrl: './homenew.component.html',
  styleUrls: ['./homenew.component.css']
})
export class HomenewComponent implements OnInit {

  restaurants: IRestaurant[];
  constructor(private foodieService: FoodieService, private router: Router) { }

  ngOnInit(): void {
    if (sessionStorage.getItem('user') == null) {
      this.router.navigate(['/sdfdvsd']);
    }
    this.getRestaurants();
  }
  getRestaurants() {
    this.foodieService.getRestaurants().subscribe(
      res => { this.restaurants = res; },
      err => { console.log(err);},
      () => {
        console.log('succes');}
        );
  }

}
