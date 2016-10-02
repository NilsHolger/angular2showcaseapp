import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { App } from '../app';
import { AppSearchService } from '../appsearchservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  apps: App[] = [];


  constructor(private appSearchService: AppSearchService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      if (params['name'] !== null || params['name'] !== undefined) {
        let tag = params['name'];
        if (tag === 'all') {
          this.getData();
        }
        else {
           this.appSearchService.getData()
            .subscribe(
                data => { 
                  this.apps = data.projects.find(d => d.tags.find(t => t === tag))
               },
                error => console.log("Error HTTP GET Service"), 
                () => console.log("Job Done Get !")
            );
        }
      }
    });


  }

  getData(): void {
    this.appSearchService.getData()
      .subscribe(
      data => { this.apps = data.projects, console.log(this.apps) },
      error => console.log("Error HTTP GET Service"),
      () => console.log("Job Done Get !")
      );
  }


  gotoDetail(app: App): void {
    let link = ['/detail', app.name];
    console.log(link);
    this.router.navigate(link);
  }

}
