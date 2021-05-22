import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url = "https://jsonplaceholder.typicode.com/users";
  constructor(private httpClient: HttpClient) { 

  }
  apiCall(){
    return this.httpClient.get(this.url);
  }
}
