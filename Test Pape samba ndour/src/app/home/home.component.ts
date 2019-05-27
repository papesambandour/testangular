import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {value} from '../options';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  posts: any[];

  constructor(private httpClient: HttpClient) { }

  async ngOnInit() {
    this.posts = await this.httpClient.get<any>(environment.baseUrl + 'posts',value.httpOptions).toPromise();
  }

}
