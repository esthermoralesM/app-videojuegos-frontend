import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameFormComponent } from './pages/game-form/game-form.component';
import { GameListComponent } from './pages/game-list/game-list.component';
import { NavigationComponent } from './pages/navigation/navigation.component';

const routes: Routes = [
  {path: "games", component: GameListComponent},
  {path: "formulario", component: GameFormComponent},
  {path: "formularioeditar/:id", component: GameFormComponent},
  {path: "navegacion", component: NavigationComponent},
  {path: '', redirectTo: 'games', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
