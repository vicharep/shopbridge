import { HttpClient } from '@angular/common/http';
import { identifierName } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getItems(){
    return this.http.get<any>('http://localhost:3000/items')
  }

  postItem(data: any){
    return this.http.post<any>('http://localhost:3000/items', data)
  }

  editItem(id: number, data: any){
    return this.http.put<any>('http://localhost:3000/items/'+id, data)
  }

  deleleItem(id: number){
    return this.http.delete<any>('http://localhost:3000/items/'+id)
  }

}
