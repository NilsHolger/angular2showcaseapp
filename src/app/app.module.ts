import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { BodyDetailComponent } from './bodydetail/bodydetail.component';
import { AppSearchService } from './appsearchservice.service';
import { WikipediaSearchService } from './wikipediaservice.service';
import { routing } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ImageComponent } from './image/image.component';
import { ImagePreviewComponent } from './image/image.preview.component';
import { PlayComponent } from './play/play.component';
import { TechnologyComponent } from './technology/technology.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    DashboardComponent,
    BodyComponent,
    BodyDetailComponent,
    ImageComponent,
    ImagePreviewComponent,
    PlayComponent,
    TechnologyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    routing
  ],
  providers: [AppSearchService, WikipediaSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
