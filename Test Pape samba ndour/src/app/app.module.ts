import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from '@angular/common/http';
import { DetailspostComponent } from './detailspost/detailspost.component';
import { DetailuserComponent } from './detailuser/detailuser.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailspostComponent,
    DetailuserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
