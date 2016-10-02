import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
//import { App } from './app';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { BodyDetailComponent } from './bodydetail/bodydetail.component';
import { AppSearchService } from './appsearchservice.service';
import { routing } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    DashboardComponent,
    BodyComponent,
    BodyDetailComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [AppSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
