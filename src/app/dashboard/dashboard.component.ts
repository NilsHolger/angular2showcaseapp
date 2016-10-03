import { Component, OnInit, trigger, state, style, transition, animate} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { App } from '../app';
import { AppSearchService } from '../appsearchservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
    animations: [
    trigger('appState', [
      state('inactive', style({
        //backgroundColor: '#eee',
        transform: 'scale(1)'
      })),
      state('active', style({
        backgroundColor: '#cfd8dc',
        transform: 'scale(1.5)'
      })),
      transition('inactive => active', animate('1000ms ease-in')),
      transition('active => inactive', animate('1000ms ease-out'))
    ])
  ]
})
export class DashboardComponent implements OnInit {

  apps: App[] = [];
  state: string = 'inactive';

  constructor(private appSearchService: AppSearchService,
    private router: Router,
    private route: ActivatedRoute) { }

  toggleState() {
    this.state = (this.state === 'active' ? 'inactive' : 'active');
  }

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
