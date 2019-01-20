import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { Content1Component } from './content1/content1.component';
import { Content2Component } from './content2/content2.component';
import {FormsModule} from '@angular/forms';
import { VotesComponent } from './votes/votes.component';
import { ExtraitPipe } from './extrait.pipe';
import { PostsComponent } from './posts/posts.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule,Routes, Router} from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CoursesComponent } from './courses/courses.component';

const routes:Routes = [
  {path: "", redirectTo: '/posts', pathMatch: 'full'},
  {path:"courses",component:CoursesComponent},
  { path:"posts", component: PostsComponent },
  { path:"**", component: PageNotFoundComponent }
]



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    Content1Component,
    Content2Component,
    VotesComponent,
    ExtraitPipe,
    PostsComponent,
    PageNotFoundComponent,
    CoursesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
