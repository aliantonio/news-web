import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoadingService } from '../loading.service';

@Component({
  selector: 'app-android',
  templateUrl: './android.component.html',
  styleUrls: ['./android.component.css']
})
export class AndroidComponent implements OnInit {

  results: string[];
  @ViewChild('searchInput') oElement;

  constructor(private load: LoadingService, private http: HttpClient) { }

  ngOnInit() {

    // show loading module
    this.load.show();

    // Make the HTTP request:
    this.http.get('https://pay.reddit.com/r/android/.json')
      .subscribe(
      // Successful responses call the first callback.
      data => {
        console.log('/r/android results', data['data'].children);
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

}
