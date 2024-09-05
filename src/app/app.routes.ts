import { Routes } from '@angular/router';
import {HowItWorksComponent} from "./how-it-works/how-it-works.component";
import {AboutComponent} from "./about/about.component";
import {JoinComponent} from "./join/join.component";
import {PlansComponent} from "./plans/plans.component";
import {WhocanuseComponent} from "./whocanuse/whocanuse.component";

export const routes: Routes = [
  {
    path: 'how-it-works', component: HowItWorksComponent,
  },
  {
    path: 'about', component: AboutComponent,
  },
  {path: 'join', component: JoinComponent,},
  {path:'plans', component: PlansComponent},
  {path:'who', component: WhocanuseComponent}

];
