import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ManufacturerComponent } from './components/manufacturer/manufacturer.component';
import { ModelComponent } from './components/model/model.component';
import { HomeComponent } from './components/home/home.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {LoadingBarHttpClientModule} from '@ngx-loading-bar/http-client';
// import {LoadingBarHttpModule} from '@ngx-loading-bar/http';
import {LoadingBarRouterModule} from '@ngx-loading-bar/router';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ManufacturerComponent,
    ModelComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    LoadingBarHttpClientModule,
    // LoadingBarHttpModule,
    LoadingBarRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
