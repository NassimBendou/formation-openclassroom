import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Routes,RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PostListItemComponent } from './post-list-item/post-list-item.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostService } from './service/post.service';
import { NewPostComponent } from './new-post/new-post.component';


const appRoutes: Routes = [
  { path: 'new-post', component: NewPostComponent },
  { path: 'posts', component: PostListComponent },
  { path: '', component: PostListComponent }
  ];

@NgModule({
  declarations: [
    AppComponent,
    PostListItemComponent,
    PostListComponent,
    NewPostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
