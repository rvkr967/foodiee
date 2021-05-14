import { Component, OnInit } from '@angular/core';
import { FoodieService } from '../foodie.service';
import { ICart } from 'src/Interfaces/Cart';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Carts: ICart[];
  constructor(private _foodService: FoodieService) { }

  ngOnInit(): void {
    this.getCart();
  }

  getCart() {
    this._foodService.getCart().subscribe(res => { this.Carts = res });
  }
}
