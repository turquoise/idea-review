import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing-module';

import { FlexLayoutModule } from '@angular/flex-layout';
import { CollapseModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { IdeaComponent } from './idea/idea.component';
import { IdeaListComponent } from './idea-list/idea-list.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { IdeaStartComponent } from './idea-start/idea-start.component';
import { BusinessComponent } from './business/business.component';
import { TechnologyComponent } from './technology/technology.component';
import { IdeaScoreComponent } from './idea-score/idea-score.component';
import { NewsComponent } from './news/news.component';
import { NewsLinksComponent } from './news-links/news-links.component';
import { ProductLinksComponent } from './product-links/product-links.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    TemplateFormComponent,
    ReactiveFormComponent,
    IdeaComponent,
    IdeaListComponent,
    AboutComponent,
    ContactComponent,
    IdeaStartComponent,
    BusinessComponent,
    TechnologyComponent,
    IdeaScoreComponent,
    NewsComponent,
    NewsLinksComponent,
    ProductLinksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpModule,
    FlexLayoutModule,
    CollapseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
