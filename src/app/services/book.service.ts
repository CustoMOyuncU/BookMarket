import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Book } from '../models/book';
import { BookDetail } from '../models/bookDetail';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {
  apiUrl= environment.baseUrl+"/books/"

  constructor(private httpClient:HttpClient) { }

  getAllBooks(book:Book):Observable<ListResponseModel<Book>>{
    return this.httpClient.get<ListResponseModel<Book>>(this.apiUrl+"getall")
  }

  getAllBookDetails(bookDetail:BookDetail):Observable<ListResponseModel<BookDetail>>{
    return this.httpClient.get<ListResponseModel<BookDetail>>(this.apiUrl+"getbookdetails")
  }
  
  addBook(book:Book):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"add",book)
  }

  updateBook(book:Book):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"update",book)
  }

  deleteBook(book:Book):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"delete",book)
  }

}
