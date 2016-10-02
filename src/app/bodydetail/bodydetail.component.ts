import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { App } from '../app';
import { BodyComponent } from '../body/body.component';
import { AppSearchService } from '../appsearchservice.service';

@Component({
  selector: 'app-bodydetail',
  templateUrl: './bodydetail.component.html',
  styleUrls: ['./bodydetail.component.css']
})
export class BodyDetailComponent implements OnInit {
   app : App;

  constructor(private appSearchService: AppSearchService, private location: Location,
  private route: ActivatedRoute) {

   }

  ngOnInit() {
    this.route.params.forEach((params:Params) => {
      let name = params['name'];
      
        this.appSearchService.getData()
            .subscribe(
                data => { 
                  this.app = data.projects.find(d => d.name === name)
               },
                error => console.log("Error HTTP GET Service"), 
                () => console.log("Job Done Get !")
            );
    });
  }

  goBack() : void {
    this.location.back();
  }

}
