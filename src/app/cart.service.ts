import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class CartService {
  items = [];

  constructor(
    private http: HttpClient
    ) {}

  //push items into shopping cart item array defined above
  addToCart(product) {
    this.items.push(product);
  }

  //return items array
  getItems() {
    return this.items;
  }

  //empty the shopping cart by setting items back to an empty array
  clearCart() {
    this.items = [];
    return this.items;
  }

  //Uses http client get() method to retrieve shipping data from shipping.json in assets folder
  getShippingPrices(){
    return this.http.get('./assets/shipping.json');
  }
  
}
