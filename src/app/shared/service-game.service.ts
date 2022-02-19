import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Game } from '../models/game';

@Injectable({
  providedIn: 'root'
})
export class ServiceGameService {

  private url = "http://localhost:3000/games";

  constructor(private http: HttpClient) { }


  public getGames(){
    return this.http.get(this.url)
  }


  public getGame(id:any)
  {
    let url= `http://localhost:3000/games?id=${id}`; 
    return this.http.get(url);
  }

  public postGames(newGame: Game)
  {
    return this.http.post(this.url, newGame);
  }


  public putGame(modGame: Game)
  {
    return this.http.put(this.url, modGame);
  }


  deleteGame(idGame:any)
  {
    let data ={"id": idGame}

    let param={
      headers: {"Content-type": "application/json; charset=UTF-8"},
      body : JSON.stringify(data),
      method: "DELETE"
 }

    return this.http.delete(this.url, param)
  }
}
