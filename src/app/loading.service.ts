import { Injectable } from '@angular/core';
import * as $ from 'jquery';

@Injectable()
export class LoadingService {

  constructor() { }

  show() {
    console.log('showing loading module');
    //$('.progress').show();
    $('.progress').css('visibility', 'visible');
  }

  hide() {
    console.log('hiding loading module');
    //$('.progress').hide();
    $('.progress').css('visibility', 'hidden');
  }

}
