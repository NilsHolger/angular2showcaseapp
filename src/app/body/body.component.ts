import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { App } from '../app';
import { AppSearchService } from '../appsearchservice.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
  providers: [AppSearchService]
})
export class BodyComponent implements OnInit {

  selectedApp: App;
  apps : App[];

  constructor(private appSearchService : AppSearchService, private router : Router) {

   }

  ngOnInit() {
    this.getData();
  }

  onSelect(app:App): void {
    this.selectedApp = app;
  }

  // getData(): void {
  //   this.appSearchService.getData().then(apps => this.apps = apps);
  // }
  getData(): void {
  this.appSearchService.getData()
            .subscribe(
                data => {this.apps = data.projects },
                error => console.log("Error HTTP GET Service"), 
                () => console.log("Job Done Get !")
            );
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedApp.name]);
  }

  

}