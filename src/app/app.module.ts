import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';

import { RouterModule, Routes } from '@angular/router';
import { WorldNewsComponent } from './world-news/world-news.component';
import { PoliticsComponent } from './politics/politics.component';
import { NjNewsComponent } from './nj-news/nj-news.component';
import { EspnComponent } from './espn/espn.component';
import { TechComponent } from './tech/tech.component';
import { PalloneComponent } from './pallone/pallone.component';
import { AndroidComponent } from './android/android.component';
import { FilterPipe } from './filter.pipe';
import { NavComponent } from './nav/nav.component';
import { LoadingService } from './loading.service';

const appRoutes: Routes = [
  {
    path: '',
    component: NewsComponent
  },
  {
    path: 'worldnews',
    component: WorldNewsComponent
  },
  {
    path: 'politics',
    component: PoliticsComponent
  },
  {
    path: 'njnews',
    component: NjNewsComponent
  },
  {
    path: 'espn',
    component: EspnComponent
  },
  {
    path: 'tech',
    component: TechComponent
  },
  {
    path: 'android',
    component: AndroidComponent
  },
  {
    path: 'pallone',
    component: PalloneComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    WorldNewsComponent,
    PoliticsComponent,
    NjNewsComponent,
    EspnComponent,
    TechComponent,
    PalloneComponent,
    AndroidComponent,
    FilterPipe,
    NavComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [FilterPipe, LoadingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
