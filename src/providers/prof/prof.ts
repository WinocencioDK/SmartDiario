import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ProfProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProfProvider {

  
  constructor(public http: HttpClient) {
    console.log('Hello MovieProvider Provider');
  }

  baseURL:string = "https://api.themoviedb.org/3/movie/";

  getListMovie(){
    return this.http.get("https://api.themoviedb.org/3/movie/popular?api_key=f8ba897a0b80cfc0005f85246def4deb");
  }

  getMovieDetails(filmeid){
    return this.http.get(this.baseURL + filmeid + this.getKeyURL());
  }

  private getKeyURL():string{
    return "?api_key=f8ba897a0b80cfc0005f85246def4deb";
}

}
