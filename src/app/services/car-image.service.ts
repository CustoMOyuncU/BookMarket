import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BookImage } from '../models/bookImage';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {
  apiUrl=environment.baseUrl+"/carimages/"

  constructor(private httpClient:HttpClient) { }

  getImagesByBookId(id: number): Observable<ListResponseModel<BookImage>> {
    return this.httpClient.get<ListResponseModel<BookImage>>(
      `${this.apiUrl}getcarimagebycarid?id=${id}`
    );
  }
  getBookImageUrl(id: number): string {
    return `${this.apiUrl}getfilebyid?id=${id}`;
  }
}
