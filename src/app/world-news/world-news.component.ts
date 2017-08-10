import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoadingService } from '../loading.service';

@Component({
  selector: 'app-world-news',
  templateUrl: './world-news.component.html',
  styleUrls: ['./world-news.component.css']
})
export class WorldNewsComponent implements OnInit {

  results: string[];

  constructor(private load: LoadingService, private http: HttpClient) { }

  ngOnInit() {
    // show loading module
    this.load.show();

    // Make the HTTP request:
    this.http.get('https://pay.reddit.com/r/worldnews/.json')
      .subscribe(
      // Successful responses call the first callback.
      data => {
        console.log('/r/worldnews results', data['data'].children);
        this.results = data['data'].children;
        this.load.hide();
      },
      // Errors will call this callback instead:
      err => {
        console.error('Something went wrong!');
        this.load.hide();
      });
  }
  
  openURL = function (url) {
    var domain = "https://pay.reddit.com";
    window.open(domain + url);
  }
  
}
