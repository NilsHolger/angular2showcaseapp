import { Injectable } from '@angular/core';
import { Http, Jsonp, URLSearchParams } from '@angular/http';

@Injectable()
export class WikipediaSearchService {

   constructor(private jsonp: Jsonp, private http : Http) {}

  search(term: string){

      let wikiUrl = 'http://en.wikipedia.org/w/api.php';
      let githubUrl = 'https://api.github.com/search/repositories?q=';

      let params = new URLSearchParams();
      params.set('search', term);
      params.set('action', 'opensearch');
      params.set('format', 'json');
      params.set('callback', 'JSONP_CALLBACK');

      return this.jsonp.get(wikiUrl, {search: params})
                      .map(response => <string[]> response.json()[1]);

       //TODO: Implement this transformation in a pipe the Angular 2 way
      // return this.http.get(githubUrl + term)
      //                 .map(response => console.log(Object.keys(response).map((key)=> response[key])));

                      
  }
}
