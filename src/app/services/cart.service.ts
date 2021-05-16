import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { BookDetail } from '../models/bookDetail';
import { CartItem } from '../models/cartItem';
import { CartItems } from '../models/cartItems';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  addToCart(book:BookDetail){
    let item = CartItems.find(c=>c.book.bookId==book.bookId)
    if(item){
      item.quantity +=1
    }else{
      let cartItem = new CartItem()
      cartItem.book = book
      cartItem.quantity = 1
      CartItems.push(cartItem)
    }
  }

  list():CartItem[]{
    return CartItems;
  }

  removeFromCart(book:BookDetail){
    let item = CartItems.find(c=>c.book.bookId==book.bookId)
    CartItems.splice(CartItems.indexOf(item),1)
  }
}
