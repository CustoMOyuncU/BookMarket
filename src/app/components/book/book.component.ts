import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  filterText: string

  constructor(
    private bookService: BookService,
    private bookImageService: BookImageService,
    private activatedRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["writerId"]==undefined || params["publisherId"]==undefined || params["categoryId"]==undefined){
        this.getAllDetails();
      }else{
        this.getBookDetailsByFilter(params["writerId"],params["publisherId"],params["categoryId"])
      }
    })
  }

  getAllDetails() {
    this.bookService.getAllBookDetails().subscribe(response => {
      this.books = response.data
    })
  }

  getBookDetailsByFilter(writerId: number, publisherId: number, categoryId: number) {
    this.bookService.getBooksByFilter(writerId, publisherId, categoryId).subscribe(response => {
      this.books = response.data
    })
  }

}
