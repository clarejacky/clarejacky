import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';

@inject(HttpClient)
export class Users {


  constructor(http) {
    http.configure(config => {
      config
        .useStandardConfiguration()
        .withBaseUrl('https://source.unsplash.com/category/');
    });

    this.http = http;
  }

  activate() {
    return this.http.fetch('nature')
      .then((response) => {
        this.url = response.url;
      });
  }
}
