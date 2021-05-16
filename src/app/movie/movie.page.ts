import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../Services/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.page.html',
  styleUrls: ['./movie.page.scss'],
})
export class MoviePage implements OnInit {
  movieData: any = [];
  constructor(private service: MoviesService) { }

  ngOnInit() {
    this.service.GetMovieData().subscribe(
    (data) => {
    this.movieData = data.Search;
    console.log(this.movieData);
    });

  }

}
