import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { IdeaComponent } from './idea/idea.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { IdeaStartComponent } from './idea-start/idea-start.component';
import { BusinessComponent } from './business/business.component';
import { TechnologyComponent } from './technology/technology.component';
import { IdeaScoreComponent } from './idea-score/idea-score.component';

const routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'idea', component: IdeaComponent, children: [
    { path: '', redirectTo: 'idea-start', pathMatch: 'full'},
    { path: 'idea-start', component: IdeaStartComponent },
    { path: 'business', component: BusinessComponent },
    { path: 'technology', component: TechnologyComponent },
    { path: 'idea-score', component: IdeaScoreComponent }
  ]},
  { path: '**', redirectTo: '/home'}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]

})
export class AppRoutingModule {

}
