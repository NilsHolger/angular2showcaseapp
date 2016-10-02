import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Observable}     from 'rxjs/Observable';
import 'rxjs/Rx';
import { App } from './app';
import { APPS } from './apps.data';

@Injectable()
export class AppSearchService {
  app: App;
  private appsUrl = '/app/db/data.js';

  constructor(private http: Http) { }

   getData(){
        return this.http.get(this.appsUrl).map((res:Response) => res.json());
    }
    

  

  getDataDetails(name:string) {
    console.log('In getDataDetails()');
    return this.getData()
            .subscribe(
                data => { 
                  data = console.log(data.projects.find(d => d.name === name)),
                  console.log('In getDataDetails()' + data)
               },
                error => console.log("Error HTTP GET Service"), 
                () => console.log("Job Done Get !")
            );

  }
//   private handleError(error: any): Promise<any> {
//   console.error('An error occurred', error); // for demo purposes only
//   return Promise.reject(error.message || error);
// }

}
