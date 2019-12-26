import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { giphyApi } from './../api-constants';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GiphyService {

  constructor(private http: HttpClient) { }

  get(searchTerm) {
    const apiLink = giphyApi + searchTerm + "sport automobile";

    

    return this.http.get(apiLink, {headers: {'Content-Type': 'application/json',  'Access-Control-Allow-Origin': '*' } }).pipe(map((response: any) => {
      

      if(response.data.length > 0) {
        console.log(response.data[0]);
        return response.data[0].images.downsized_medium.url;
      }
      else {
        return 'https://media.giphy.com/media/MSU9sITGoHWMGGVn9n/giphy.gif' // 404 giphy
      }
    }));
  }
}
