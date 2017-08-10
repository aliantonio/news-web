import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoadingService } from '../loading.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  results: string[];
  @ViewChild('searchInput') oElement;

  constructor(private http: HttpClient, private load: LoadingService) { }

  ngOnInit(): void {
    // show loading module
    this.load.show();

    // Make the HTTP request:
    this.http.get('https://pay.reddit.com/r/news/.json')
      .subscribe(
      // Successful responses call the first callback.
      data => {
        console.log('/r/news results', data['data'].children);
        this.results = data['data'].children;
        console.log(this.oElement.nativeElement.focus());
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
