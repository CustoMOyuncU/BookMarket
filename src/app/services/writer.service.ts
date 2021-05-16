import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { Writer } from '../models/writer';

@Injectable({
  providedIn: 'root'
})
export class WriterService {
  apiUrl=environment.baseUrl+"/writers/"

  constructor(private httpClient:HttpClient) { }

  getAllWriters(writer:Writer):Observable<ListResponseModel<Writer>>{
    return this.httpClient.get<ListResponseModel<Writer>>(this.apiUrl+"getall")
  }

  addWriter(writer:Writer):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"add",writer)
  }

  updateWriter(writer:Writer):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"update",writer)
  }

  deleteWriter(writer:Writer):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"delete",writer)
  }
}
