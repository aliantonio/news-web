import { Component, OnInit, Injector } from '@angular/core';
import { LoadingService } from '../loading.service';
import { Request, RequestOptions, RequestOptionsArgs, RequestMethod, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-nj-news',
  templateUrl: './nj-news.component.html',
  styleUrls: ['./nj-news.component.css']
})
export class NjNewsComponent implements OnInit {

  results: string[];
  appendUrl = '?rss_url=http%3A%2F%2Fnewjersey.news12.com%2F%3Fclienttype%3Drss';

  constructor(private load: LoadingService, private http: HttpClient) { }

  ngOnInit() {
    
    // show loading module
    this.load.show();
    
    // Make the HTTP request:
    this.http.get('http://api.rss2json.com/v1/api.json' + this.appendUrl, 
    )  
      .subscribe(
      // Successful responses call the first callback.
      data => {
        console.log('NJNews results', data);
        this.results = data['items'];
        this.load.hide();
      },
      // Errors will call this callback instead:
      err => {
        console.error('Something went wrong!');
        this.load.hide();
      });
        
  }

}
