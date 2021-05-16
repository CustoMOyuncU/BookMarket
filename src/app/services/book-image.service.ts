import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BookImage } from '../models/bookImage';
import { ListResponseModel } from '../models/listResponseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BookImageService {
  apiUrl=environment.baseUrl+"/bookimages/"

  constructor(private httpClient:HttpClient) { }

  getImagesByBookId(id: number): Observable<SingleResponseModel<BookImage>> {
    return this.httpClient.get<SingleResponseModel<BookImage>>(this.apiUrl+"getbookimagebybookid?id="+id);
  }
  getBookImageUrl(id: number): string {
    return `${this.apiUrl}getfilebybookid?id=${id}`;
  }
}
