import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BookDetail } from 'src/app/models/bookDetail';
import { BookImage } from 'src/app/models/bookImage';
import { BookImageService } from 'src/app/services/book-image.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-book-image',
  templateUrl: './book-image.component.html',
  styleUrls: ['./book-image.component.css']
})
export class BookImageComponent implements OnInit {
  bookImageUrl: string
  @Input() book: BookDetail
  bookImage: BookImage
  @Input() dataLoaded: boolean = false

  constructor(private bookImageService: BookImageService,private cartService:CartService) { }

  ngOnInit(): void {
    this.getBookImage();
  }

  getBookImage() {
    this.bookImageService.getImagesByBookId(this.book.bookId).subscribe(response => {
      this.bookImage = response.data
      this.bookImageUrl = this.bookImageService.getBookImageUrl(this.bookImage.bookId)
    })
  }

  addToCart(book:BookDetail){
    this.cartService.addToCart(book)  
  }
}
