import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';
import { Router } from '@angular/router';
import { App } from '../app';
import { AppSearchService } from '../appsearchservice.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
  providers: [AppSearchService],
  animations: [
      trigger('flyInOut', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        style({transform: 'translateX(-100%)'}),
        animate(6000)
      ]),
      transition('* => void', [
        animate(6000, style({transform: 'translateX(100%)'}))
      ])
    ]),
     trigger('appState', [
      state('inactive', style({
        //backgroundColor: '#eee',
        transform: 'scale(1)'
      })),
      state('active',   style({
        backgroundColor: '#cfd8dc',
        transform: 'scale(1.4)'
      })),
      transition('inactive => active', animate('800ms ease-in')),
      transition('active => inactive', animate('800ms ease-out'))
    ]),
  ]
})
export class BodyComponent implements OnInit {

  selectedApp: App;
  apps : App[];

  state: string = 'inactive';

  // toggleState() {
  //   this.state = (this.state === 'active' ? 'inactive' : 'active');
  // }

  constructor(private appSearchService : AppSearchService, private router : Router) {

   }

  ngOnInit() {
    this.getData();
  }

  onSelect(app:App): void {
    this.selectedApp = app;
    this.state = (this.state === 'active' ? 'inactive' : 'active');
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