import { Component, OnInit } from '@angular/core';
import {environment} from '../../environments/environment';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-detailuser',
  templateUrl: './detailuser.component.html',
  styleUrls: ['./detailuser.component.scss']
})
export class DetailuserComponent implements OnInit {
  user: any;
  sub: any;
  id: number
  constructor(private route: ActivatedRoute, private httpClient: HttpClient) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.user = this.httpClient.get<any>(environment.baseUrl + 'users/' + this.id)
        .subscribe((data: any) => this.user = data );

    });

  }

}
