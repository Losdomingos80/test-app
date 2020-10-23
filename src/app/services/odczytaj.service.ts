import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OdczytajService {

  private url = 'http://jsonplaceholder.typicode.com/posts';

  constructor(private httpClient: HttpClient) { }

  getPosts(){

    return this.httpClient.get(this.url);

  }

  create(post){

    return this.httpClient.post(this.url, JSON.stringify(post));

  }

  



}
