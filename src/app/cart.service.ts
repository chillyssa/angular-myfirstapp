import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  items =[];

//push items into shopping cart item array defined above 
  addToCart(product){
    this.items.push(product);
  }

//return items array 
  getItems(){
    return this.items; 
  }

//empty the shopping cart by setting items back to an empty array 
  clearCart(){
    this.items= [];
    return this.items; 
  }

  constructor() { }

}