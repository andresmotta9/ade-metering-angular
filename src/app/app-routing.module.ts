import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { GraphComponent } from './components/graph/graph.component';


const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'graph', component: GraphComponent},
  {path:'', pathMatch: 'full', redirectTo: 'home'},
  {path:'**', pathMatch: 'full', redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
