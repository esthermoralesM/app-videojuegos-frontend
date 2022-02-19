import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router } from '@angular/router';
import { Game } from 'src/app/models/game';
import { ServiceGameService } from 'src/app/shared/service-game.service';

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.css']
})
export class GameFormComponent implements OnInit {

  public game:Game;
  public edit:boolean=false;

  constructor(private gamesService: ServiceGameService, private router:Router, private activatedRoute:ActivatedRoute) {
    this.game=new Game(null, "", "", "", null);
   }

  ngOnInit(): void {
   const params=this.activatedRoute.snapshot.params;
   console.log(params);
   if(params['id']){
    
    this.gamesService.getGame(params['id'])
    .subscribe((data:Game[])=>{
   
      this.game=data[0];
      console.log(this.game);
      this.edit=true;

  
    })
   }
  }

  public saveNewGame(){
    
     this.gamesService.postGames(this.game)
     .subscribe((data:string) =>
     {
     
       console.log(data);
       if (data != "-1")
         alert("Se ha insertado el juego con id: " + data)
       
       else
         alert("Error al insertar el juego");
 
     })

  }

  public updateGame(){
    
    let game=new Game(this.game.id, this.game.title, this.game.description, this.game.image, this.game.created_at);

    for(let propiedad in game){
      if(game[propiedad]==""){
        game[propiedad]=null
      }
  } 

  this.gamesService.putGame(game)
  .subscribe((data:string)=>{

    if(data=="1"){
      alert("Updated correctly");
      this.router.navigate(['/games'])

    }else{
      alert("No updated")
    }
  })
  }

}