import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { WikipediaSearchService } from '../wikipediaservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private wikipediaSearchService: WikipediaSearchService) { }

  ngOnInit() {
  }

  private searchTermStream = new Subject<string>();

  search(term: string){
    this.searchTermStream.next(term);
  }

  items: Observable<string[]> = this.searchTermStream
              .debounceTime(300)
              .distinctUntilChanged()
              .switchMap((term:string) => this.wikipediaSearchService.search(term));

}
