import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../models/category';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  apiUrl=environment.baseUrl+"/categories/"

  constructor(private httpClient:HttpClient) { }

  getAllCategories(category:Category):Observable<ListResponseModel<Category>>{
    return this.httpClient.get<ListResponseModel<Category>>(this.apiUrl+"getall")
  }

  addCategory(category:Category):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"add",category)
  }

  updateCategory(category:Category):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"update",category)
  }

  deleteCategory(category:Category):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"delete",category)
  }
}
