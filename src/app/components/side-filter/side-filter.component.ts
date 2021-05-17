import { Component, OnInit } from '@angular/core';
import { BookDetail } from 'src/app/models/bookDetail';
import { Category } from 'src/app/models/category';
import { Publisher } from 'src/app/models/publisher';
import { Writer } from 'src/app/models/writer';
import { BookService } from 'src/app/services/book.service';
import { CategoryService } from 'src/app/services/category.service';
import { PublisherService } from 'src/app/services/publisher.service';
import { WriterService } from 'src/app/services/writer.service';

@Component({
  selector: 'app-side-filter',
  templateUrl: './side-filter.component.html',
  styleUrls: ['./side-filter.component.css']
})
export class SideFilterComponent implements OnInit {
  categories:Category[]
  writers:Writer[]
  publishers:Publisher[]

  writerId:number 
  publisherId:number 
  categoryId:number 

  books:BookDetail[]

  constructor(
    private categoryService:CategoryService,
    private writerService:WriterService,
    private publisherService:PublisherService,
    private bookService:BookService
  ) { }

  ngOnInit(): void {
    this.getAllCategories();
    this.getAllPublishers();
    this.getAllWriters();
  }

  getAllCategories(){
    this.categoryService.getAllCategories().subscribe(response=>{
      this.categories=response.data
    })
  }

  getAllWriters(){
    this.writerService.getAllWriters().subscribe(response=>{
      this.writers=response.data
    })
  }

  getAllPublishers(){
    this.publisherService.getAllPublishers().subscribe(response=>{
      this.publishers=response.data
    })
  }

  getFilterBtn(writerId:number,publisherId:number,categoryId:number){
    if(writerId==undefined){writerId=0}
    if(publisherId==undefined){publisherId = 0}
    if(categoryId==undefined){categoryId = 0}
    console.log(categoryId)
    console.log(publisherId)
    console.log(writerId)
    this.bookService.getBooksByFilter(publisherId,categoryId,publisherId).subscribe(response=>{
      this.books=response.data
    })
  }

  setRouterLink(writerId:number,publisherId:number,categoryId:number):string{
    if(writerId==undefined){
      writerId=0
    }
    if(publisherId==undefined){
      publisherId = 0
    }
    if(categoryId==undefined){
      categoryId = 0
    }
    return `books/filter/writer/${writerId}/publisher/${publisherId}/category/${categoryId}`
  }

}
