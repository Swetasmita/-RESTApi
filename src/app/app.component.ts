import { Component } from '@angular/core';
import {ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'First REST API Project';
  user: any
  constructor(private api: ApiService){
      }
  ngOnInit(){
    this.api.apiCall(). subscribe(data=> this.user = data);
    console.log("Show API Data");
  }
}
