import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoadingService } from '../loading.service';

@Component({
  selector: 'app-politics',
  templateUrl: './politics.component.html',
  styleUrls: ['./politics.component.css']
})
export class PoliticsComponent implements OnInit {

  results: string[];
  @ViewChild('searchInput') oElement;

  constructor(private load: LoadingService, private http: HttpClient) { }

  ngOnInit() {

    this.load.show();

    // Make the HTTP request:
    this.http.get('https://pay.reddit.com/r/politics/.json')
      .subscribe(
      // Successful responses call the first callback.
      data => {
        console.log('/r/politics results', data['data'].children);
        this.results = data['data'].children;
        this.load.hide();
      },
      // Errors will call this callback instead:
      err => {
        console.error('Something went wrong!');
        this.load.hide();
      });
    // focus on search input
    this.oElement.nativeElement.focus();
  }
  
  openURL = function (url) {
    var domain = "https://pay.reddit.com";
    window.open(domain + url);
  }

}
