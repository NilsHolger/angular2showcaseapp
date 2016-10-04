import { Component, HostBinding } from '@angular/core';

import {default as routerAnimations} from '../route.animations';

@Component({
  selector: 'app-technologymaster',
  host: {
        '(click)': 'showModal=false'
    },
  templateUrl: './technologymaster.component.html',
  styleUrls: ['./technologymaster.component.css']
})
export class TechnologymasterComponent {

@HostBinding('@route')
    public routeAnimations = true;
  constructor() { }


}
