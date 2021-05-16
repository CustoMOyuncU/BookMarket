import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ListResponseModel } from '../models/listResponseModel';
import { Publisher } from '../models/publisher';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class PublisherService {
  apiUrl=environment.baseUrl+"/publishers/"

  constructor(private httpClient:HttpClient) { }

  getAllPublishers(publisher:Publisher):Observable<ListResponseModel<Publisher>>{
    return this.httpClient.get<ListResponseModel<Publisher>>(this.apiUrl+"getall")
  }

  addPublisher(publisher:Publisher):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"add",publisher)
  }

  updatePublisher(publisher:Publisher):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"update",publisher)
  }

  deletePublisher(publisher:Publisher):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"delete",publisher)
  }
}
