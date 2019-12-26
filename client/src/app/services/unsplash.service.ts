import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { unsplashSearchPhoto, unsplashClient_id } from '../api-constants';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UnsplashService {

  constructor(private http: HttpClient) { }

  searchPhoto(searchTerm) {
    const apiLink = unsplashSearchPhoto + searchTerm;

    

    return this.http.get(apiLink + "&client_id=" + unsplashClient_id).pipe(map((response: any) => {
      

      if(response.results.length > 0) {
        console.log("Response: " + JSON.stringify(response.results[0].urls.small));
      }
       else {
         return 'https://media.giphy.com/media/MSU9sITGoHWMGGVn9n/giphy.gif' // 404 giphy
       }
    }));
  }
}
