import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/models/game';
import { ServiceGameService } from 'src/app/shared/service-game.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

  public games: Game[];
  public game:Game;

  constructor(private gamesService: ServiceGameService) { 
   this.game=new Game(null, "", "", "", null);
   
  }

  ngOnInit(): void {

  this.mostrarJuegos();
  }

  mostrarJuegos(){
    this.gamesService.getGames()
    .subscribe((data:Game[])=>{
      this.games=data;
      console.log(this.games);
    })
  }

  deleteGame(id:any){

    if(id!=""){
      this.gamesService.deleteGame(id)
      .subscribe((data:string)=>{

        if(data=="1"){
          alert("Game deleted");
          this.mostrarJuegos();

        }else{
          alert("Error al eliminar el juego");
        }
      })
    }

  }
}
