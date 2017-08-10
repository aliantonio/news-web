import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoadingService } from '../loading.service';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css'],
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
export class TechComponent implements OnInit {

  results: string[];
  @ViewChild('searchInput') oElement;
  appendUrl = '?rss_url=https%3A%2F%2Ftechcrunch.com%2Ffeed%2F';

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
        console.log('tech results', data);
        this.results = data['items'];
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

}
