import { Component, OnInit, ViewChild } from '@angular/core';
import { LoadingService } from '../loading.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pallone',
  templateUrl: './pallone.component.html',
  styleUrls: ['./pallone.component.css']
})
export class PalloneComponent implements OnInit {

  results: string[];
  @ViewChild('searchInput') oElement;
  appendUrl = '?rss_url=https%3A%2F%2Fpallone.house.gov%2Frss.xml'

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
        console.log('pallone results', data);
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
