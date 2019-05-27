import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-detailspost',
  templateUrl: './detailspost.component.html',
  styleUrls: ['./detailspost.component.scss']
})
export class DetailspostComponent implements OnInit {

  post: any;
  user: any;
  sub: any;
  id: number
  userid: number
  constructor(private route: ActivatedRoute, private httpClient: HttpClient) { }

 async ngOnInit() {

   this.sub = this.route.params.subscribe(params => {
     this.id = +params['id'];
     this.userid = +params['userid'];
     this.post =  this.httpClient.get<any>(environment.baseUrl + 'posts/' + this.id)
       .subscribe((data: any) => this.post = data
         );
     this.user = this.httpClient.get<any>(environment.baseUrl + 'users/' + this.userid)
       .subscribe((data: any) => this.user = data );

   });


  }

}
