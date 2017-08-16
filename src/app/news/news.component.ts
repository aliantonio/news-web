import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoadingService } from '../loading.service';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
  animations: [
    trigger('animate-in', [
      state('in', style({opacity: 1, transform: 'translateX(0)'})),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(-100%)'
        }),
        animate('0.2s ease-in')
      ]),
    ])
  ]
})
export class NewsComponent implements OnInit {

  results: string[];
  @ViewChild('searchInput') oElement;
  query: any;

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
  
  openUrl = function (url) {
    var domain = "https://pay.reddit.com";
    window.open(domain + url);
  }

}
