import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http:HttpClient) { }
GetMovieData():Observable<any>{
return this.http.get('http://www.omdbapi.com/?apikey=ee8390dc&s=%27law%27');
}
}