import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BookDetail } from 'src/app/models/bookDetail';
import { BookImage } from 'src/app/models/bookImage';
import { BookImageService } from 'src/app/services/book-image.service';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  books: BookDetail[]


  constructor(private bookService: BookService, private bookImageService: BookImageService) { }

  ngOnInit(): void {
    this.getAllDetails();
  }

  getAllDetails(){
    this.bookService.getAllBookDetails().subscribe(response=>{
      this.books = response.data
    })
  }

  
}
